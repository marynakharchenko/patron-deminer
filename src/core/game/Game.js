const { Container } = window.PIXI;

import dogAnimations from '../animations/dogAnimations';
import bearAnimations from '../animations/bearAnimations';
import mineAnimations from '../animations/mineAnimations';
import flagAnimations from '../animations/flagAnimations';
import bushAnimations from '../animations/bushAnimations';
import beachAnimations from '../animations/beachAnimations';
import tireAnimations from '../animations/tireAnimations';
import cityAnimations from '../animations/cityAnimations';
import gardenAnimations from '../animations/gardenAnimations';
import carAnimations from '../animations/carAnimations';
import towerAnimations from '../animations/towerAnimations';
import lightAnimations from '../animations/lightAnimations';
import iceCreamAnimations from '../animations/iceCreamAnimations';
import trailerAnimations from '../animations/trailerAnimations';
import ruinsAnimations from '../animations/ruinsAnimations';
import Map from '../entities/maps/Map';
import Dog from '../entities/models/Dog';
import Bear from '../entities/models/Bear';
import Mine from '../entities/models/Mine';
import Bush from '../entities/models/Bush';
import Beach from '../entities/models/Beach';
import Tire from '../entities/models/Tire';
import Garden from '../entities/models/Garden';
import Car from '../entities/models/Car';
import Tower from '../entities/models/Tower';
import Light from '../entities/models/Light';
import IceCream from '../entities/models/IceCream';
import Trailer from '../entities/models/Trailer';
import Flag from '../entities/models/Flag';
import Ruins from '../entities/models/Ruins';
import City from '../entities/models/City';
import Timer from '../entities/Timer';

import config from '../config/config';
import viewport from '../viewport/viewport';
// Import the sounds
import Assets from '../assetsManager/AssetManager';

import CONSTANTS from '../constants/constants';
import getLevelSettings from '../constants/levels';

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
  }

  async start() {
    const { BEAR_SETTINGS } = getLevelSettings();

    this.BEAR_SETTINGS = JSON.parse(JSON.stringify(BEAR_SETTINGS));

    this._pressedKeys = [];
    this._map = new Map();
    this._timer = new Timer();
    this._dog = null;
    this._bear = null;
    this._mines = [];
    this._flags = [];
    this._bushes = [];
    this._beaches = [];
    this._tires = [];
    this._garden = [];
    this._cars = [];
    this._towers = [];
    this._lights = [];
    this._iceCreams = [];
    this._trailers = [];
    this._ruins = [];
    this._city = [];

    this._bearIntervalId = null;

    this._attachKeyboardListeners();

    this._createFence();
    this._createMines();
    this._createBushes();
    this._createBeaches();
    this._createTires();
    this._createGarden();
    this._createCars();
    this._createTowers();
    this._createLights();
    this._createIceCreams();
    this._createRuins();
    this._createCity();
    this._createTrailers();
    this._createDog();
    if (this.BEAR_SETTINGS.BEAR_AVAILABLE) this._createBear();
    this._timer.start(() => this._onEnd());

    // Start the background loop
    Assets.sounds.background.play();
  }

  async finish() {
    clearInterval(this._bearIntervalId);
    this._bearIntervalId = null;

    this._removeKeyboardListeners();
    this._timer.stop();

    this.removeChild(this._dog.anim);
    if (this._bear) this.removeChild(this._bear.anim);
    this._mines.forEach((mine) => {
      this.removeChild(mine.anim);
    });
    this._flags.forEach((flag) => {
      this.removeChild(flag.anim);
    });
    this._bushes.forEach((bush) => {
      this.removeChild(bush.anim);
    });
    this._beaches.forEach((bush) => {
      this.removeChild(bush.anim);
    });
    this._tires.forEach((tire) => {
      this.removeChild(tire.anim);
    });
    this._garden.forEach((garden) => {
      this.removeChild(garden.anim);
    });
    this._cars.forEach((car) => {
      this.removeChild(car.anim);
    });
    this._towers.forEach((tower) => {
      this.removeChild(tower.anim);
    });
    this._lights.forEach((tower) => {
      this.removeChild(tower.anim);
    });
    this._iceCreams.forEach((tower) => {
      this.removeChild(tower.anim);
    });
    this._trailers.forEach((tower) => {
      this.removeChild(tower.anim);
    });
    this._ruins.forEach((ruins) => {
      this.removeChild(ruins.anim);
    });
    this._city.forEach((city) => {
      this.removeChild(city.anim);
    });

    this._pressedKeys = [];
    this._map = null;
    this._timer = null;
    this._dog = null;
    this._bear = null;
    this._mines = [];
    this._flags = [];
    this._bushes = [];
    this._beaches = [];
    this._tires = [];
    this._garden = [];
    this._cars = [];
    this._towers = [];
    this._lights = [];
    this._iceCreams = [];
    this._trailers = [];
    this._ruins = [];
    this._city = [];
  }

  _createFence() {
    const fenceWidth = this._map._map[0].length + (config.game.fenceSize * 2); // left/right
    const fenceHeight = this._map._map.length + (config.game.fenceSize * 2); // up/down

    const { FENCE_ENTITY } = getLevelSettings();

    for (let col = 0; col < fenceWidth; col++) {
      for (let row = 0; row < fenceHeight; row++) {
        if (
          col < config.game.fenceSize
            || col >= fenceWidth - config.game.fenceSize
            || row < config.game.fenceSize
            || row >= fenceHeight - config.game.fenceSize
        ) {
          const fencePosition = { row: row - config.game.fenceSize, col: col - config.game.fenceSize };
          const fenceCoords = this._map.coordsFromPos(fencePosition);

          let fence = new Bush(bushAnimations);

          switch (FENCE_ENTITY) {
            case CONSTANTS.MAP.ENTITIES.B:
              fence = new Bush(bushAnimations);
              break;
            case CONSTANTS.MAP.ENTITIES.R:
              fence = new Tire(tireAnimations);
              break;
            case CONSTANTS.MAP.ENTITIES.V:
              fence = new City(cityAnimations);
              break;
            case CONSTANTS.MAP.ENTITIES.S:
              fence = new Beach(beachAnimations);
              break;
            case CONSTANTS.MAP.ENTITIES.G:
              fence = new Garden(gardenAnimations);
              break;
            default:
              fence = new Bush(bushAnimations);
              break;
          }

          fenceCoords.x = fenceCoords.x - (config.game.tileWidth / 2);
          fenceCoords.y = fenceCoords.y - (config.game.tileHeight / 2);

          fence.init(fenceCoords, config.game.tileWidth, config.game.tileHeight, true);
          fence.position = fencePosition;

          this.addChild(fence.anim);
        }
      }
    }
  }

  _createDog() {
    const dogMapPos = this._map.posById(this._map.IDS.DOG)[0];
    const dogCoords = this._map.coordsFromPos(dogMapPos);

    this._dog = new Dog(dogAnimations);

    this._dog.init(dogCoords, config.game.tileWidth, config.game.tileHeight);
    this._dog.position = dogMapPos;

    this._dog.anim.anchor.set(0.5);
    viewport.follow(this._dog.anim);

    this.addChild(this._dog.anim);
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

      if (counter >= this.BEAR_SETTINGS.BEAR_STEPS.length) counter = 0;

      const bearSteps = this.BEAR_SETTINGS.BEAR_STEPS[counter];

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
    }, this.BEAR_SETTINGS.BEAR_SPEED * 1000);
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

          const flagCoords = this._map.coordsFromPos({ row: flag.row, col: flag.col });
          const flagDown = new Flag(flagAnimations);

          flagCoords.x = flagCoords.x - (config.game.tileWidth / 2);
          flagCoords.y = flagCoords.y - (config.game.tileHeight / 2);

          flagDown.initDown(flagCoords, config.game.tileWidth, config.game.tileHeight);

          this.addChild(flagDown.anim);

          setTimeout(() => this.removeChild(flagDown.anim), 2000);
        }

        return !isCurrentFlag;
      });
    }

    return this._bear.mine();
  }

  _createMines() {
    const { MINE_TYPES } = getLevelSettings();

    const minePositions = this._map.posById(this._map.IDS.MINE);

    minePositions.forEach((minePosition) => {
      const mineCoords = this._map.coordsFromPos(minePosition);
      const mine = new Mine(mineAnimations);

      // this._dog.anim.anchor.set(0.5);
      mineCoords.x = mineCoords.x - (config.game.tileWidth / 3);
      mineCoords.y = mineCoords.y - (config.game.tileHeight / 6);

      mine.deminedCount = 0;
      mine.init(mineCoords, config.game.tileWidth / 2, config.game.tileHeight / 2, [...MINE_TYPES]);
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

      // this._dog.anim.anchor.set(0.5);
      bushCoords.x = bushCoords.x - (config.game.tileWidth / 2);
      bushCoords.y = bushCoords.y - (config.game.tileHeight / 2);

      bush.init(bushCoords, config.game.tileWidth, config.game.tileHeight);
      bush.position = bushPosition;

      this.addChild(bush.anim);
      this._bushes.push(bush);
    });
  }

  _createBeaches() {
    const beachesPositions = this._map.posById(this._map.IDS.BEACH);

    beachesPositions.forEach((beachPosition) => {
      const beachCoords = this._map.coordsFromPos(beachPosition);
      const beach = new Beach(beachAnimations);

      // this._dog.anim.anchor.set(0.5);
      beachCoords.x = beachCoords.x - (config.game.tileWidth / 2);
      beachCoords.y = beachCoords.y - (config.game.tileHeight / 2);

      beach.init(beachCoords, config.game.tileWidth, config.game.tileHeight);
      beach.position = beachPosition;

      this.addChild(beach.anim);
      this._beaches.push(beach);
    });
  }

  _createTires() {
    const tiresPositions = this._map.posById(this._map.IDS.TIRE);

    tiresPositions.forEach((tirePosition) => {
      const tireCoords = this._map.coordsFromPos(tirePosition);
      const tire = new Tire(tireAnimations);

      // this._dog.anim.anchor.set(0.5);
      tireCoords.x = tireCoords.x - (config.game.tileWidth / 2);
      tireCoords.y = tireCoords.y - (config.game.tileHeight / 2);

      tire.init(tireCoords, config.game.tileWidth, config.game.tileHeight);
      tire.position = tirePosition;

      this.addChild(tire.anim);
      this._tires.push(tire);
    });
  }

  _createCity() {
    const cityPositions = this._map.posById(this._map.IDS.CITY);

    cityPositions.forEach((cityPosition) => {
      const cityCoords = this._map.coordsFromPos(cityPosition);
      const city = new City(cityAnimations);

      // this._dog.anim.anchor.set(0.5);
      cityCoords.x = cityCoords.x - (config.game.tileWidth / 2);
      cityCoords.y = cityCoords.y - (config.game.tileHeight / 2);

      city.init(cityCoords, config.game.tileWidth, config.game.tileHeight);
      city.position = cityPosition;

      this.addChild(city.anim);
      this._city.push(city);
    });
  }

  _createGarden() {
    const gardenPositions = this._map.posById(this._map.IDS.GARDEN);

    gardenPositions.forEach((gardenPosition) => {
      const gardenCoords = this._map.coordsFromPos(gardenPosition);
      const garden = new Garden(gardenAnimations);

      // this._dog.anim.anchor.set(0.5);
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

      // this._dog.anim.anchor.set(0.5);
      carCoords.x = carCoords.x - config.game.tileWidth;
      carCoords.y = carCoords.y - (config.game.tileHeight * 1.25);

      car.init(carCoords, config.game.tileWidth * 2, config.game.tileHeight * 2);
      car.position = carPosition;

      this.addChild(car.anim);
      this._cars.push(car);
    });
  }

  _createRuins() {
    const ruinsPositions = this._map.posById(this._map.IDS.RUINS);

    ruinsPositions.forEach((ruinsPosition) => {
      const ruinsCoords = this._map.coordsFromPos(ruinsPosition);
      const ruins = new Ruins(ruinsAnimations);

      // this._dog.anim.anchor.set(0.5);
      ruinsCoords.x = ruinsCoords.x - config.game.tileWidth;
      ruinsCoords.y = ruinsCoords.y - (config.game.tileHeight * 2);

      ruins.init(ruinsCoords, config.game.tileWidth * 3.55, config.game.tileHeight * 4);
      ruins.position = ruinsPosition;

      this.addChild(ruins.anim);
      this._ruins.push(ruins);
    });
  }

  _createTowers() {
    const towersPositions = this._map.posById(this._map.IDS.TOWER);

    towersPositions.forEach((towerPosition) => {
      const towerCoords = this._map.coordsFromPos(towerPosition);
      const tower = new Tower(towerAnimations);

      // this._dog.anim.anchor.set(0.5);
      towerCoords.x = towerCoords.x - config.game.tileWidth;
      towerCoords.y = towerCoords.y - (config.game.tileHeight * 3);

      tower.init(towerCoords, config.game.tileWidth * 2, config.game.tileHeight * 4);
      tower.position = towerPosition;

      this.addChild(tower.anim);
      this._towers.push(tower);
    });
  }

  _createLights() {
    const lightsPositions = this._map.posById(this._map.IDS.LIGHT);

    lightsPositions.forEach((lightPosition) => {
      const lightCoords = this._map.coordsFromPos(lightPosition);
      const light = new Light(lightAnimations);

      // this._dog.anim.anchor.set(0.5);
      lightCoords.x = lightCoords.x - config.game.tileWidth;
      lightCoords.y = lightCoords.y - (config.game.tileHeight * 3);

      light.init(lightCoords, config.game.tileWidth * 2, config.game.tileHeight * 4);
      light.position = lightPosition;

      this.addChild(light.anim);
      this._lights.push(light);
    });
  }

  _createIceCreams() {
    const iceCreamsPositions = this._map.posById(this._map.IDS.ICE_CREAM);

    iceCreamsPositions.forEach((iceCreamPosition) => {
      const iceCreamCoords = this._map.coordsFromPos(iceCreamPosition);
      const iceCream = new IceCream(iceCreamAnimations);

      // this._dog.anim.anchor.set(0.5);
      iceCreamCoords.x = iceCreamCoords.x - config.game.tileWidth;
      iceCreamCoords.y = iceCreamCoords.y - (config.game.tileHeight * 3);

      iceCream.init(iceCreamCoords, config.game.tileWidth * 2, config.game.tileHeight * 4);
      iceCream.position = iceCreamPosition;

      this.addChild(iceCream.anim);
      this._iceCreams.push(iceCream);
    });
  }

  _createTrailers() {
    const trailersPositions = this._map.posById(this._map.IDS.TRAILER);

    trailersPositions.forEach((trailerPosition) => {
      const trailerCoords = this._map.coordsFromPos(trailerPosition);
      const trailer = new Trailer(trailerAnimations);

      // this._dog.anim.anchor.set(0.5);
      trailerCoords.x = trailerCoords.x - config.game.tileWidth;
      trailerCoords.y = trailerCoords.y - config.game.tileHeight;

      trailer.init(trailerCoords, config.game.tileWidth * 2, config.game.tileHeight * 2);
      trailer.position = trailerPosition;

      this.addChild(trailer.anim);
      this._trailers.push(trailer);
    });
  }

  _attachKeyboardListeners() {
    document.addEventListener('keydown', this._onKeyDown.bind(this));
    document.addEventListener('keyup', this._onKeyUp.bind(this));
  }

  _removeKeyboardListeners() {
    document.removeEventListener('keydown', this._onKeyDown.bind(this));
    document.removeEventListener('keyup', this._onKeyUp.bind(this));
  }

  _onKeyDown(e) {
    if (this._pressedKeys.includes(e.code)) return;

    this._pressedKeys.push(e.code);
    this._dogAction();
  }

  _onKeyUp(e) {
    this._pressedKeys.splice(this._pressedKeys.indexOf(e.code), 1); // no checks ftw
  }

  _dogAction() {
    if (this._dog.moving) return;

    const directionKey = this._pressedKeys.find((k) => ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(k));

    if (directionKey) {
      const direction = directionKey.replace('Arrow', '');

      this._dogMove(direction);

      return;
    }

    if (this._pressedKeys.includes('Space')) {
      this._dogDemine();

      return;
    }

    this._dog.standStill();
  }

  async _dogMove(direction) {
    const oldPos = this._map.posById(this._map.IDS.DOG)[0];
    const newPos = this._map.getDestination(oldPos, direction);

    if (this._map.outOfBounds(newPos) || this._map.collide(newPos) || this._map.isEnemyPosition(newPos)) {
      return this._dog.standStill(direction);
    }

    const targetPos = this._map.coordsFromPos(newPos);

    this._dog.position = newPos;
    await this._dog.move(targetPos, direction);
    document.getElementById(`miniMap-${oldPos.row}-${oldPos.col}`).classList.remove(this._map.IDS.DOG);
    document.getElementById(`miniMap-${oldPos.row}-${oldPos.col}`).classList.add(this._map.IDS.EMPTY);
    document.getElementById(`miniMap-${newPos.row}-${newPos.col}`).classList.remove(this._map.IDS.EMPTY);
    document.getElementById(`miniMap-${newPos.row}-${newPos.col}`).classList.add(this._map.IDS.DOG);

    this._map.removeModelFromTileOnMap(oldPos, this._map.IDS.DOG);
    this._map.addModelToTileOnMap(newPos, this._map.IDS.DOG);

    return this._dogAction();
  }

  _dogDemine() {
    const dogPos = this._map.posById(this._map.IDS.DOG)[0];

    const hitMine = this._map.getTileStart(dogPos).includes(this._map.IDS.MINE);

    if (!hitMine) return this._dog.standStill();

    const mine = this._mines.find((s) => s.row === dogPos.row && s.col === dogPos.col);

    if (mine.deminedCount >= 1) return this._dog.standStill();

    document.getElementById('scoreBoardMinesCurrent').innerText
      = String(Number(document.getElementById('scoreBoardMinesCurrent').innerText) - 1);
    // Play the demine sound
    if (!Assets.sounds.demine.playing()) Assets.sounds.demine.play();

    this._dog.demine(() => {
      mine.deminedCount++;
      if (mine.deminedCount >= 1) {
        document.getElementById(`miniMap-${dogPos.row}-${dogPos.col}`).classList.add(this._map.IDS.FLAG);

        // dog on mine
        this._map.addModelToTileOnMap({ row: mine.row, col: mine.col }, this._map.IDS.FLAG);

        const flagCoords = this._map.coordsFromPos({ row: mine.row, col: mine.col });
        const flag = new Flag(flagAnimations);

        flagCoords.x = flagCoords.x - (config.game.tileWidth / 2);
        flagCoords.y = flagCoords.y - (config.game.tileHeight / 2);

        flag.init(flagCoords, config.game.tileWidth, config.game.tileHeight);
        flag.position = dogPos;

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
    const { MINE_TYPES } = getLevelSettings();

    clearInterval(this._bearIntervalId);

    const score = this._flags.length;
    const win = score === this._mines.length;
    // Play Win or Lose sounds

    if (win === true) {
      const availableMinesString = window.localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY_MINES_LIST) || '';

      if (availableMinesString) {
        window.localStorage.setItem(
          CONSTANTS.LOCAL_STORAGE_KEY_MINES_LIST,
          availableMinesString.split(',').concat([...MINE_TYPES]).toString()
        );
      } else {
        window.localStorage.setItem(
          CONSTANTS.LOCAL_STORAGE_KEY_MINES_LIST,
          [...MINE_TYPES].toString()
        );
      }

      const { NEXT_LEVEL_NUMBER } = getLevelSettings();

      window.localStorage.setItem(CONSTANTS.LOCAL_STORAGE_KEY_LEVEL_NUMBER, NEXT_LEVEL_NUMBER);

      Assets.sounds.win.play();

      window.hideGame();
      document.getElementById('bg-popUp-finish').style.display = 'block';
    } else {
      Assets.sounds.lose.play();

      document.getElementById('bg-popUp-finish-fail').style.display = 'block';
      window.hideGame();
    }
    // Fade out the background sound
    Assets.sounds.background.fade(1, 0, 200);
  }
}
