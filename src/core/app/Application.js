import { Application } from 'pixi.js';

import config from '../config/config';
import viewport from '../viewport/viewport';
import Game from '../game/Game';
import Assets from '../assetsManager/AssetManager';
import CONSTANTS from '../constants/constants';
import LEVELS from '../constants/levels';

const LEVEL1 = LEVELS.LEVEL1;

const { E, M } = CONSTANTS.MAP.ENTITIES;

/**
 * Game entry point. Holds the game's viewport
 * All configurations are described in src/config/config.js
 */
export default class GameApplication extends Application {
  constructor() {
    super(config.view);

    this.config = config;
    this.renderer.view.style.position = 'absolute';
    this.renderer.view.style.top = `${config.view.top}px`;
    this.renderer.view.style.left = `${config.view.left}px`;
    Assets.renderer = this.renderer;

    this.setupViewport();

    this.loadAssets().then(() => this.initGame());

    this.initMiniMapAndScoreBoard();
  }

  /**
   * Load all images and sounds
   */
  async loadAssets() {
    await Assets.load({ images: Assets.images, sounds: Assets.sounds });
  }

  /**
   * Game main entry point. Loads and prerenders assets.
   * Creates the main game container.
   *
   */
  async initGame() {
    this.game = new Game();
    this.viewport.addChild(this.game);

    this.game.start();
  }

  initMiniMapAndScoreBoard() {
    document.getElementById('miniMap').style.right = `${config.view.left}px`;
    document.getElementById('miniMap').style.top = `${config.view.top}px`;
    document.getElementById('miniMap').style.width = `${config.view.width / 4}px`;

    document.getElementById('scoreBoard').style.left = `${config.view.left}px`;
    document.getElementById('scoreBoard').style.top = `${config.view.top}px`;
    document.getElementById('scoreBoard').style.width = `${config.view.width / 4}px`;

    let miniMapString = '';
    let minesNumber = 0;

    for (let row = 0; row < LEVEL1.length; row++) {
      for (let col = 0; col < LEVEL1[0].length; col++) {
        const isMine = LEVEL1[row][col] === M;

        if (isMine) {
          minesNumber += 1;
        }

        miniMapString += `<div id='miniMap-${row}-${col}' class='miniMapTile ${isMine ? E : LEVEL1[row][col]}'></div>`;
      }
    }

    document.getElementById('miniMap').innerHTML = miniMapString;
    document.querySelectorAll('.miniMapTile').forEach((e) => {
      e.style.width = `${config.view.width / 4 / LEVEL1[0].length}px`;
      e.style.height = `${config.view.height / 4 / LEVEL1.length}px`;
    });

    document.getElementById('scoreBoardMinesCurrent').innerText = String(minesNumber);
    document.getElementById('scoreBoardMinesAll').innerText = String(minesNumber);
  }

  /**
     * Initialize the game world viewport.
     * Supports handly functions like dragging and panning on the main game stage
     *
     * @return {PIXI.Application}
     */
  setupViewport() {
    document.getElementById('game').appendChild(this.view);
    this.stage.addChild(viewport);
    this.viewport = viewport;
  }
}

