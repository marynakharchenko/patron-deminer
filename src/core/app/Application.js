const { Application } = window.PIXI;

import config from '../config/config';
import viewport from '../viewport/viewport';
import Game from '../game/Game';
import Assets from '../assetsManager/AssetManager';
import CONSTANTS from '../constants/constants';
import LEVELS from '../constants/levels';

const LEVEL_MAP = LEVELS.LEVEL_MAP;

const { E, M, U, C } = CONSTANTS.MAP.ENTITIES;

/**
 * Game entry point. Holds the game's viewport
 * All configurations are described in src/config/config.js
 */
export default class GameApplication extends Application {
  constructor() {
    super(config.view);

    this.config = config;

    Assets.renderer = this.renderer;

    this.setupViewport();

    const resize = () => {
      viewport.screenWidth = config.view.width;
      viewport.screenHeight = config.view.height;
      viewport.worldWidth = config.view.worldWidth;
      viewport.worldHeight = config.view.worldHeight;

      this.setupViewport();
    };

    let resizeTimeout;

    window.onresize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 10);
    };

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
    let miniMapString = '';
    let minesNumber = 0;

    for (let row = 0; row < LEVEL_MAP.length; row++) {
      for (let col = 0; col < LEVEL_MAP[0].length; col++) {
        const isMine = LEVEL_MAP[row][col].includes(M);
        const isBear = LEVEL_MAP[row][col].includes(U);

        if (isMine) {
          minesNumber += 1;
        }

        let className = isMine || isBear ? E : LEVEL_MAP[row][col][0];
        // car case (2 tiles)
        if (LEVEL_MAP[row + 1] && LEVEL_MAP[row + 1][col] && LEVEL_MAP[row + 1][col].includes(C)) {
          className = C;
        }

        miniMapString
          += `<div id='miniMap-${row}-${col}' class='miniMapTile ${className}'></div>`;
      }
    }

    const miniMap = document.getElementById('miniMap');

    miniMap.innerHTML = miniMapString;

    document.querySelectorAll('.miniMapTile').forEach((e) => {
      e.style.width = `${miniMap.offsetWidth / LEVEL_MAP[0].length / miniMap.offsetWidth * 100}%`;
      e.style.height = `${miniMap.offsetHeight / LEVEL_MAP.length / miniMap.offsetHeight * 100}%`;
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
    this.stage.removeChild(viewport);
    this.stage.addChild(viewport);
    this.viewport = viewport;
  }
}

