import config from '../config/config';

const E = 0; // Empty
const W = 1; // Wall - tree or end of map
const T = 2; // Teleport - puddle or lake
const P = 3; // Patron
const M = 4; // Mine
const B = 5; // Bush

const LEVEL1 = [
  [B, B, B, B, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M],
  [B, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, M, B, B, B, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0, 0, B, B, B, B, M, 0, 0, M],
  [M, 0, 0, 0, 0, 0, B, 0, M, M, 0, 0, 0, M, 0, B, 0, 0, B, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, B, B, B, 0, 0, 0, 0, 0, B, B, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, B, 0, B, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, B, 0, 0, B, B, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, M, 0, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, B, 0, 0, M, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, B, B, B, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, P, 0, B, M, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, M],
  [M, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, M],
  [M, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M, M],
];

export default class Map {
  constructor() {
    this.tileWidth = config.game.tileWidth;
    this.tileHeight = config.game.tileHeight;
    this.offsetX = (config.game.width - (config.game.tileWidth * LEVEL1[0].length)) / 2;
    this.offsetY = -(config.game.height - (config.game.tileHeight * LEVEL1.length)) / 2;

    this.isoY = 0.7; // tile positions appear skewed

    this.rotation = 0;

    this.IDS = {
      EMPTY: E,
      WALL: W,
      TELEPORT: T,
      PATRON: P,
      MINE: M,
      BUSH: B,
    };

    this._mapStart = JSON.parse(JSON.stringify(LEVEL1));
    this._map = LEVEL1;
  }

  /**
     * returns the tileId on a given position
     * @returns int
     * @param {int} pos.row
     * @param {int} pos.col
     */
  getTile({ row, col }) {
    return this._map[row][col];
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
  setTileOnMap({ row, col }, id) {
    this._map[row][col] = id;
  }

  posById(id) {
    const result = [];

    for (let row = 0; row < this._map.length; row++) {
      for (let col = 0; col < this._map[row].length; col++) {
        if (this._map[row][col] === id) result.push({ row, col });
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
    return row < 0 || col < 0 || row > LEVEL1.length || col > LEVEL1[0].length;
  }

  collide({ row, col }) {
    return ![E, M].includes(this._map[row][col]);
  }
}
