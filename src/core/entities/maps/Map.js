import config from '../../config/config';
import CONSTANTS from '../../constants/constants';
import getLevelSettings from '../../constants/levels';

const { E, W, T, D, M, F, B, U, R, G, C, L } = CONSTANTS.MAP.ENTITIES;

export default class Map {
  constructor() {
    const { LEVEL_MAP } = getLevelSettings();

    this.levelMap = JSON.parse(JSON.stringify(LEVEL_MAP));

    this.tileWidth = config.game.tileWidth;
    this.tileHeight = config.game.tileHeight;
    this.offsetX = (config.game.width - (config.game.tileWidth * this.levelMap[0].length)) / 2;
    this.offsetY = -(config.game.height - (config.game.tileHeight * this.levelMap.length)) / 2;

    this.isoY = 0.7; // tile positions appear skewed

    this.rotation = 0;

    this.IDS = {
      EMPTY: E,
      WALL: W,
      TELEPORT: T,
      DOG: D,
      MINE: M,
      FLAG: F,
      BUSH: B,
      BEAR: U,
      TIRE: R,
      GARDEN: G,
      CAR: C,
      TOWER: L,
    };

    this._mapStart = JSON.parse(JSON.stringify(this.levelMap));
    this._map = this.levelMap;
  }

  /**
     * returns the tileId on a given position
     * @returns int
     * @param {int} pos.row
     * @param {int} pos.col
     */
  getTileStart({ row, col }) {
    return this._mapStart[row][col];
  }

  /**
     * returns the actual x and y value of a tile in the map
     * @returns {{}}
     * @param {int} row
     * @param {int} col
     */
  coordsFromPos({ row, col }) {
    // coordinates before any transformation
    const x = col * this.tileWidth;
    const y = row * this.tileHeight;

    // coordinates after rotation
    let xT = (x * Math.cos(this.rotation)) - (y * Math.sin(this.rotation));
    let yT = (y * Math.cos(this.rotation)) + (x * Math.sin(this.rotation));

    // offset into visible area
    xT += this.offsetX;
    yT += this.offsetY;

    // apply isometry
    yT *= this.isoY;

    return {
      x: xT,
      y: yT,
    };
  }

  /**
     * sets tileId to a given position in the map
     * @param {int} row
     * @param {int} col
     * @param {int} id
     */
  addModelToTileOnMap({ row, col }, id) {
    this._map[row][col].push(id);
  }

  /**
     * sets tileId to a given position in the map
     * @param {int} row
     * @param {int} col
     * @param {int} id
     */
  removeModelFromTileOnMap({ row, col }, id) {
    const index = this._map[row][col].indexOf(id);

    if (index !== -1) {
      this._map[row][col].splice(index, 1);
    }
    if (this._map[row][col].length === 0) {
      this._map[row][col].push(E);
    }
  }

  posById(id) {
    const result = [];

    for (let row = 0; row < this._map.length; row++) {
      for (let col = 0; col < this._map[row].length; col++) {
        if (this._map[row][col].includes(id)) {
          result.push({ row, col });
        }
      }
    }

    return result;
  }

  getDestination(position, direction) {
    let { row, col } = position;

    switch (direction) {
      case 'Up': row--; break;
      case 'Down': row++; break;
      case 'Left': col--; break;
      case 'Right': col++; break;
      default: break;
    }

    return { row, col };
  }

  outOfBounds({ row, col }) {
    return row < 0 || col < 0 || row > this.levelMap.length - 1 || col > this.levelMap[0].length - 1;
  }

  collide({ row, col }) {
    return (!this._map[row][col].includes(E) && !this._map[row][col].includes(M))
      || (this._map[row + 1] && this._map[row + 1][col].includes(C));
  }

  isEnemyPosition({ row, col }) {
    return this._map[row][col].includes(U);
  }
}
