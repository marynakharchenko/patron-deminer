const { Container } = window.PIXI;

import patronAnimations from '../animations/patronAnimations';
import mineAnimations from '../animations/mineAnimations';
import flagAnimations from '../animations/flagAnimations';
import bushAnimations from '../animations/bushAnimations';
import Map from '../entities/maps/Map';
import Patron from '../entities/characters/Patron';
import Mine from '../entities/characters/Mine';
import Bush from '../entities/characters/Bush';
import Flag from '../entities/characters/Flag';
import Timer from '../entities/Timer';
import EndScreen from '../entities/EndScreen';

import config from '../config/config';
import viewport from '../viewport/viewport';
// Import the sounds
import Assets from '../assetsManager/AssetManager';

/**
 * Main game stage, manages scenes/levels.
 *
 * @extends {PIXI.Container}
 */
export default class Game extends Container {
  constructor() {
    super();
    // Set to use zIndex
    this.sortableChildren = true;

    this._pressedKeys = [];
    this._map = new Map();
    this._timer = new Timer();
    this._endScreen = new EndScreen();
    this._patron = null;
    this._mines = [];
    this._bushes = [];
  }

  async start() {
    this._attachKeyboardListeners();

    this._createFence();
    this._createPatron();
    this._createMines();
    this._createBushes();
    this.addChild(this._endScreen);
    this._timer.start(() => this._onEnd());

    // Start the background loop
    Assets.sounds.background.play();
  }

  _createFence() {
    const fenceWidth = this._map._map[0].length + (config.game.fenceSize * 2); // left/right
    const fenceHeight = this._map._map.length + (config.game.fenceSize * 2); // up/down

    for (let col = 0; col < fenceWidth; col++) {
      for (let row = 0; row < fenceHeight; row++) {
        if (
          col < config.game.fenceSize
            || col >= fenceWidth - config.game.fenceSize
            || row < config.game.fenceSize
            || row >= fenceHeight - config.game.fenceSize
        ) {
          const bushPositions = { row: row - config.game.fenceSize, col: col - config.game.fenceSize };
          const bushCoords = this._map.coordsFromPos(bushPositions);
          const bush = new Bush(bushAnimations);

          bushCoords.x = bushCoords.x - (config.game.tileWidth / 2);
          bushCoords.y = bushCoords.y - (config.game.tileHeight / 2);
          bush.init(bushCoords, config.game.tileWidth, config.game.tileHeight);

          bush.col = bushPositions.col;
          bush.row = bushPositions.row;

          this.addChild(bush.anim);
          this._bushes.push(bush);
        }
      }
    }
  }

  _createPatron() {
    const patronMapPos = this._map.posById(this._map.IDS.PATRON)[0];
    const patronCoords = this._map.coordsFromPos(patronMapPos);

    this._patron = new Patron(patronAnimations);

    this._patron.init(patronCoords, config.game.tileWidth, config.game.tileHeight);

    this._patron.anim.anchor.set(0.5);
    viewport.follow(this._patron.anim);

    this.addChild(this._patron.anim);
  }

  _createMines() {
    const minePositions = this._map.posById(this._map.IDS.MINE);

    minePositions.forEach((minePosition) => {
      const mineCoords = this._map.coordsFromPos(minePosition);
      const mine = new Mine(mineAnimations);

      // this._patron.anim.anchor.set(0.5);
      mineCoords.x = mineCoords.x - (config.game.tileWidth / 6);
      // mineCoords.y = mineCoords.y - (config.game.tileHeight / 6);
      mine.init(mineCoords, config.game.tileWidth / 3, config.game.tileHeight / 3);

      mine.col = minePosition.col;
      mine.row = minePosition.row;
      mine.deminedCount = 0;

      this.addChild(mine.anim);
      this._mines.push(mine);
    });
  }

  _createBushes() {
    const bushesPositions = this._map.posById(this._map.IDS.BUSH);

    bushesPositions.forEach((bushPositions) => {
      const bushCoords = this._map.coordsFromPos(bushPositions);
      const bush = new Bush(bushAnimations);

      // this._patron.anim.anchor.set(0.5);
      bushCoords.x = bushCoords.x - (config.game.tileWidth / 2);
      bushCoords.y = bushCoords.y - (config.game.tileHeight / 2);
      bush.init(bushCoords, config.game.tileWidth, config.game.tileHeight);

      bush.col = bushPositions.col;
      bush.row = bushPositions.row;

      this.addChild(bush.anim);
      this._bushes.push(bush);
    });
  }

  _attachKeyboardListeners() {
    document.addEventListener('keydown', this._onKeyDown.bind(this));
    document.addEventListener('keyup', this._onKeyUp.bind(this));
  }

  _onKeyDown(e) {
    if (this._pressedKeys.includes(e.code)) return;

    this._pressedKeys.push(e.code);
    this._patronAction();
  }

  _onKeyUp(e) {
    this._pressedKeys.splice(this._pressedKeys.indexOf(e.code), 1); // no checks ftw
  }

  _patronAction() {
    if (this._patron.moving) return;

    const directionKey = this._pressedKeys.find((k) => ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(k));

    if (directionKey) {
      const direction = directionKey.replace('Arrow', '');

      this._patronMove(direction);

      return;
    }

    if (this._pressedKeys.includes('Space')) {
      this._patronDemine();

      return;
    }

    this._patron.standStill();
  }

  async _patronMove(direction) {
    const oldPos = this._map.posById(this._map.IDS.PATRON)[0];
    const newPos = this._map.getDestination(oldPos, direction);

    if (this._map.outOfBounds(newPos) || this._map.collide(newPos)) return this._patron.standStill(direction);

    const targetPos = this._map.coordsFromPos(newPos);

    await this._patron.move(targetPos, direction);
    document.getElementById(`miniMap-${oldPos.row}-${oldPos.col}`).classList.remove(this._map.IDS.PATRON);
    document.getElementById(`miniMap-${oldPos.row}-${oldPos.col}`).classList.add(this._map.IDS.EMPTY);
    document.getElementById(`miniMap-${newPos.row}-${newPos.col}`).classList.remove(this._map.IDS.EMPTY);
    document.getElementById(`miniMap-${newPos.row}-${newPos.col}`).classList.add(this._map.IDS.PATRON);

    this._map.removeModelFromTileOnMap(oldPos, this._map.IDS.PATRON);
    this._map.addModelToTileOnMap(newPos, this._map.IDS.PATRON);

    return this._patronAction();
  }

  _patronDemine() {
    // const patronDirection = this._patron.direction;
    const patronPos = this._map.posById(this._map.IDS.PATRON)[0];
    const targetPos = this._map.posById(this._map.IDS.PATRON)[0]; // this._map.getDestination(patronPos, patronDirection);

    const hitMine = this._map.getTileStart(targetPos).includes(this._map.IDS.MINE);

    if (!hitMine) return this._patron.standStill();

    const mine = this._mines.find((s) => s.row === targetPos.row && s.col === targetPos.col);

    if (mine.deminedCount >= 1) return this._patron.standStill();

    document.getElementById('scoreBoardMinesCurrent').innerText
      = String(Number(document.getElementById('scoreBoardMinesCurrent').innerText) - 1);
    // Play the demine sound
    if (!Assets.sounds.demine.playing()) Assets.sounds.demine.play();

    this._patron.demine(() => {
      mine.deminedCount++;
      if (mine.deminedCount >= 1) {
        document.getElementById(`miniMap-${patronPos.row}-${patronPos.col}`).classList.add(this._map.IDS.MINE);

        const mineIndex = this._mines.indexOf(mine);

        this._mines.splice(mineIndex, 1);

        // patron on mine
        this._map.addModelToTileOnMap({ row: mine.row, col: mine.col }, this._map.IDS.FLAG);

        const flagCoords = this._map.coordsFromPos({ row: mine.row, col: mine.col });
        const flag = new Flag(flagAnimations);

        flagCoords.x = flagCoords.x - (config.game.tileWidth / 2);
        flagCoords.y = flagCoords.y - (config.game.tileHeight / 2);
        flag.init(flagCoords, config.game.tileWidth, config.game.tileHeight);

        flag.col = patronPos.col;
        flag.row = patronPos.row;

        this.addChild(flag.anim);

        if (this._mines.length === 0) {
          this._timer.stop();

          return this._onEnd();
        }
      }

      return this._mines;
    });

    return mine.deminedCount;
  }

  _onEnd() {
    const score = this._mines.length;
    const win = score === 0;
    // Play Win or Lose sounds

    if (win === true) {
      Assets.sounds.win.play();
    } else {
      Assets.sounds.lose.play();
    }
    // Fade out the background sound
    Assets.sounds.background.fade(1, 0, 200);
    this._endScreen.show(score, win, this._timer._levelSeconds);
  }
}
