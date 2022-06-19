const { Container } = window.PIXI;

import patronAnimations from '../animations/patronAnimations';
import bearAnimations from '../animations/bearAnimations';
import mineAnimations from '../animations/mineAnimations';
import flagAnimations from '../animations/flagAnimations';
import bushAnimations from '../animations/bushAnimations';
import tireAnimations from '../animations/tireAnimations';
import gardenAnimations from '../animations/gardenAnimations';
import carAnimations from '../animations/carAnimations';
import towerAnimations from '../animations/towerAnimations';
import Map from '../entities/maps/Map';
import Patron from '../entities/models/Patron';
import Bear from '../entities/models/Bear';
import Mine from '../entities/models/Mine';
import Bush from '../entities/models/Bush';
import Tire from '../entities/models/Tire';
import Garden from '../entities/models/Garden';
import Car from '../entities/models/Car';
import Tower from '../entities/models/Tower';
import Flag from '../entities/models/Flag';
import Timer from '../entities/Timer';
import EndScreen from '../entities/EndScreen';

import config from '../config/config';
import viewport from '../viewport/viewport';
// Import the sounds
import Assets from '../assetsManager/AssetManager';

import CONSTANTS from '../constants/constants';
import LEVELS from '../constants/levels';

const MINE_TYPES = LEVELS.MINE_TYPES;
const BEAR = LEVELS.BEAR;
const NEXT_LEVEL_NUMBER = LEVELS.NEXT_LEVEL_NUMBER;

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
    this._bear = null;
    this._mines = [];
    this._flags = [];
    this._bushes = [];
    this._tires = [];
    this._garden = [];
    this._cars = [];
    this._towers = [];

    this._bearIntervalId = null;
  }

  async start() {
    this._attachKeyboardListeners();

    this._createFence();
    this._createMines();
    this._createBushes();
    this._createTires();
    this._createGarden();
    this._createCars();
    this._createTowers();
    this._createPatron();
    if (BEAR.BEAR_AVAILABLE) this._createBear();
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
          const bushPosition = { row: row - config.game.fenceSize, col: col - config.game.fenceSize };
          const bushCoords = this._map.coordsFromPos(bushPosition);
          const bush = new Bush(bushAnimations);

          bushCoords.x = bushCoords.x - (config.game.tileWidth / 2);
          bushCoords.y = bushCoords.y - (config.game.tileHeight / 2);

          bush.init(bushCoords, config.game.tileWidth, config.game.tileHeight);
          bush.position = bushPosition;

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
    this._patron.position = patronMapPos;

    this._patron.anim.anchor.set(0.5);
    viewport.follow(this._patron.anim);

    this.addChild(this._patron.anim);
  }

  _createBear() {
    const bearMapPos = this._map.posById(this._map.IDS.BEAR)[0];
    const bearCoords = this._map.coordsFromPos(bearMapPos);

    this._bear = new Bear(bearAnimations);

    bearCoords.x = bearCoords.x - (config.game.tileWidth / 2);
    bearCoords.y = bearCoords.y - config.game.tileHeight;

    this._bear.init(bearCoords, config.game.tileWidth, config.game.tileHeight * 1.5);
    this._bear.position = bearMapPos;

    this.addChild(this._bear.anim);

    this._bearMove();
  }

  _bearMove() {
    let counter = 0;

    this._bearIntervalId = setInterval(async () => {
      const oldPos = this._map.posById(this._map.IDS.BEAR)[0];

      const hitMine = this._map.getTileStart(oldPos).includes(this._map.IDS.MINE);

      if (hitMine) {
        const mine = this._mines.find((s) => s.row === oldPos.row && s.col === oldPos.col);

        if (mine.deminedCount >= 1) {
          return this._bearMine(mine, oldPos);
        }
      }

      if (counter >= BEAR.BEAR_STEPS.length) counter = 0;

      const bearSteps = BEAR.BEAR_STEPS[counter];

      const newPos = { row: bearSteps.row, col: bearSteps.col };

      const targetPos = this._map.coordsFromPos(newPos);

      targetPos.x = targetPos.x - (config.game.tileWidth / 2);
      targetPos.y = targetPos.y - config.game.tileHeight;

      this._bear.position = newPos;
      await this._bear.move(targetPos, bearSteps.direction);

      this._map.removeModelFromTileOnMap(oldPos, this._map.IDS.BEAR);
      this._map.addModelToTileOnMap(newPos, this._map.IDS.BEAR);
      counter++;

      return counter;
    }, BEAR.BEAR_SPEED * 1000);
  }

  _bearMine(mine, bearPos) {
    mine.deminedCount--;
    if (mine.deminedCount < 1) {
      document.getElementById('scoreBoardMinesCurrent').innerText
        = String(Number(document.getElementById('scoreBoardMinesCurrent').innerText) + 1);

      document.getElementById(`miniMap-${bearPos.row}-${bearPos.col}`).classList.remove(this._map.IDS.FLAG);

      // bear on mine
      this._map.removeModelFromTileOnMap({ row: mine.row, col: mine.col }, this._map.IDS.FLAG);

      this._flags = this._flags.filter((flag) => {
        const isCurrentFlag = flag.row === mine.row && flag.col === mine.col;

        if (isCurrentFlag) {
          this.removeChild(flag.anim);
        }

        return !isCurrentFlag;
      });
    }

    return this._bear.mine();
  }

  _createMines() {
    const minePositions = this._map.posById(this._map.IDS.MINE);

    minePositions.forEach((minePosition) => {
      const mineCoords = this._map.coordsFromPos(minePosition);
      const mine = new Mine(mineAnimations);

      // this._patron.anim.anchor.set(0.5);
      mineCoords.x = mineCoords.x - (config.game.tileWidth / 6);
      // mineCoords.y = mineCoords.y - (config.game.tileHeight / 6);

      mine.deminedCount = 0;
      mine.init(mineCoords, config.game.tileWidth / 3, config.game.tileHeight / 3, MINE_TYPES);
      mine.position = minePosition;

      this.addChild(mine.anim);
      this._mines.push(mine);
    });
  }

  _createBushes() {
    const bushesPositions = this._map.posById(this._map.IDS.BUSH);

    bushesPositions.forEach((bushPosition) => {
      const bushCoords = this._map.coordsFromPos(bushPosition);
      const bush = new Bush(bushAnimations);

      // this._patron.anim.anchor.set(0.5);
      bushCoords.x = bushCoords.x - (config.game.tileWidth / 2);
      bushCoords.y = bushCoords.y - (config.game.tileHeight / 2);

      bush.init(bushCoords, config.game.tileWidth, config.game.tileHeight);
      bush.position = bushPosition;

      this.addChild(bush.anim);
      this._bushes.push(bush);
    });
  }

  _createTires() {
    const tiresPositions = this._map.posById(this._map.IDS.TIRE);

    tiresPositions.forEach((tirePosition) => {
      const tireCoords = this._map.coordsFromPos(tirePosition);
      const tire = new Tire(tireAnimations);

      // this._patron.anim.anchor.set(0.5);
      tireCoords.x = tireCoords.x - (config.game.tileWidth / 2);
      tireCoords.y = tireCoords.y - (config.game.tileHeight / 2);

      tire.init(tireCoords, config.game.tileWidth, config.game.tileHeight);
      tire.position = tirePosition;

      this.addChild(tire.anim);
      this._tires.push(tire);
    });
  }

  _createGarden() {
    const gardenPositions = this._map.posById(this._map.IDS.GARDEN);

    gardenPositions.forEach((gardenPosition) => {
      const gardenCoords = this._map.coordsFromPos(gardenPosition);
      const garden = new Garden(gardenAnimations);

      // this._patron.anim.anchor.set(0.5);
      gardenCoords.x = gardenCoords.x - (config.game.tileWidth / 2);
      gardenCoords.y = gardenCoords.y - (config.game.tileHeight / 2);

      garden.init(gardenCoords, config.game.tileWidth, config.game.tileHeight);
      garden.position = gardenPosition;

      this.addChild(garden.anim);
      this._garden.push(garden);
    });
  }

  _createCars() {
    const carsPositions = this._map.posById(this._map.IDS.CAR);

    carsPositions.forEach((carPosition) => {
      const carCoords = this._map.coordsFromPos(carPosition);
      const car = new Car(carAnimations);

      // this._patron.anim.anchor.set(0.5);
      carCoords.x = carCoords.x - config.game.tileWidth;
      carCoords.y = carCoords.y - (config.game.tileHeight * 1.25);

      car.init(carCoords, config.game.tileWidth * 2, config.game.tileHeight * 2);
      car.position = carPosition;

      this.addChild(car.anim);
      this._cars.push(car);
    });
  }

  _createTowers() {
    const towersPositions = this._map.posById(this._map.IDS.TOWER);

    towersPositions.forEach((towerPosition) => {
      const towerCoords = this._map.coordsFromPos(towerPosition);
      const tower = new Tower(towerAnimations);

      // this._patron.anim.anchor.set(0.5);
      towerCoords.x = towerCoords.x - config.game.tileWidth;
      towerCoords.y = towerCoords.y - (config.game.tileHeight * 3);

      tower.init(towerCoords, config.game.tileWidth * 2, config.game.tileHeight * 4);
      tower.position = towerPosition;

      this.addChild(tower.anim);
      this._towers.push(tower);
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

    if (this._map.outOfBounds(newPos) || this._map.collide(newPos) || this._map.isEnemyPosition(newPos)) {
      return this._patron.standStill(direction);
    }

    const targetPos = this._map.coordsFromPos(newPos);

    this._patron.position = newPos;
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
    const patronPos = this._map.posById(this._map.IDS.PATRON)[0];

    const hitMine = this._map.getTileStart(patronPos).includes(this._map.IDS.MINE);

    if (!hitMine) return this._patron.standStill();

    const mine = this._mines.find((s) => s.row === patronPos.row && s.col === patronPos.col);

    if (mine.deminedCount >= 1) return this._patron.standStill();

    document.getElementById('scoreBoardMinesCurrent').innerText
      = String(Number(document.getElementById('scoreBoardMinesCurrent').innerText) - 1);
    // Play the demine sound
    if (!Assets.sounds.demine.playing()) Assets.sounds.demine.play();

    this._patron.demine(() => {
      mine.deminedCount++;
      if (mine.deminedCount >= 1) {
        document.getElementById(`miniMap-${patronPos.row}-${patronPos.col}`).classList.add(this._map.IDS.FLAG);

        // patron on mine
        this._map.addModelToTileOnMap({ row: mine.row, col: mine.col }, this._map.IDS.FLAG);

        const flagCoords = this._map.coordsFromPos({ row: mine.row, col: mine.col });
        const flag = new Flag(flagAnimations);

        flagCoords.x = flagCoords.x - (config.game.tileWidth / 2);
        flagCoords.y = flagCoords.y - (config.game.tileHeight / 2);

        flag.init(flagCoords, config.game.tileWidth, config.game.tileHeight);
        flag.position = patronPos;

        this.addChild(flag.anim);
        this._flags.push(flag);

        if (this._mines.length === this._flags.length) {
          this._timer.stop();

          return this._onEnd();
        }
      }

      return this._flags;
    });

    return mine.deminedCount;
  }

  _onEnd() {
    clearInterval(this._bearIntervalId);

    const score = this._flags.length;
    const win = score === this._mines.length;
    // Play Win or Lose sounds

    if (win === true) {
      const availableMinesString = window.localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY_MINES_LIST) || '';

      if (availableMinesString) {
        window.localStorage.setItem(
          CONSTANTS.LOCAL_STORAGE_KEY_MINES_LIST,
          availableMinesString.split(',').concat(...MINE_TYPES).toString()
        );
      } else {
        window.localStorage.setItem(
          CONSTANTS.LOCAL_STORAGE_KEY_MINES_LIST,
          MINE_TYPES.toString()
        );
      }

      window.localStorage.setItem(CONSTANTS.LOCAL_STORAGE_KEY_LEVEL_NUMBER, NEXT_LEVEL_NUMBER);

      Assets.sounds.win.play();
    } else {
      Assets.sounds.lose.play();
    }
    // Fade out the background sound
    Assets.sounds.background.fade(1, 0, 200);
    this._endScreen.show(score, win, this._timer._levelSeconds);
  }
}
