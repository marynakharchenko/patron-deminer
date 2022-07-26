const { Application } = window.PIXI;

import config from '../config/config';
import viewport from '../viewport/viewport';
import Game from '../game/Game';
import Assets from '../assetsManager/AssetManager';
import CONSTANTS from '../constants/constants';
import getLevelSettings from '../constants/levels';

const { E, M, U, C, I, O } = CONSTANTS.MAP.ENTITIES;

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

    (async () => await this.loadAssets())();
  }

  /**
   * Load all images and sounds
   */
  async loadAssets() {
    await Assets.load({ images: Assets.images, sounds: Assets.sounds });
  }

  async loadGame() {
    this.initMiniMapAndScoreBoard();

    const { BACKGROUND_COLOR } = getLevelSettings();

    this.renderer.backgroundColor = BACKGROUND_COLOR || 0x729641;

    if (!this.game) {
      this.game = new Game();
      this.viewport.addChild(this.game);
      await this.game.start();
    } else {
      await this.game.finish();
      await this.game.start();
    }

    document.getElementById('game').style.display = 'block';
  }

  async hideGame() {
    document.getElementById('game').style.display = 'none';
  }

  initMiniMapAndScoreBoard() {
    const { LEVEL_MAP } = getLevelSettings();

    const levelMap = JSON.parse(JSON.stringify(LEVEL_MAP));

    let miniMapString = '';
    let minesNumber = 0;

    for (let row = 0; row < levelMap.length; row++) {
      for (let col = 0; col < levelMap[0].length; col++) {
        const isMine = levelMap[row][col].includes(M);
        const isBear = levelMap[row][col].includes(U);

        if (isMine) {
          minesNumber += 1;
        }

        let className = isMine || isBear ? E : levelMap[row][col][0];

        // car or ice cream cases (2 tiles)

        if (levelMap[row + 1] && levelMap[row + 1][col] && levelMap[row + 1][col].includes(C)) {
          className = C;
        }

        if (levelMap[row + 1] && levelMap[row + 1][col] && levelMap[row + 1][col].includes(I)) {
          className = I;
        }

        if (
          (levelMap[row - 1] && levelMap[row - 1][col] && levelMap[row - 1][col].includes(O))
          || (levelMap[row] && levelMap[row][col - 1] && levelMap[row][col - 1].includes(O))
          || (levelMap[row - 1] && levelMap[row - 1][col - 1] && levelMap[row - 1][col - 1].includes(O))
        ) {
          className = O;
        }

        miniMapString
          += `<div id='miniMap-${row}-${col}' class='miniMapTile ${className}'></div>`;
      }
    }

    const miniMap = document.getElementById('miniMap');

    miniMap.innerHTML = miniMapString;

    const offsetWidth = config.view.width / 4;
    const offsetHeight = config.view.height / 4;

    document.querySelectorAll('.miniMapTile').forEach((e) => {
      e.style.width = `${offsetWidth / levelMap[0].length / offsetWidth * 100}%`;
      e.style.height = `${offsetHeight / levelMap.length / offsetHeight * 100}%`;
    });

    const scoreBoard = document.getElementById('scoreBoard');

    scoreBoard.innerHTML = `
      <span id="scoreBoardTimer">
        <span class="timerIcon"></span>
        <span class="timer">
          <span id="scoreBoardTimerMinutes"></span
          ><span class="minutesSecondsСolon">:</span
          ><span id="scoreBoardTimerSeconds"></span>
        </span>
      </span>
      <span class="scoreMines">
        <span class="minesIcon"></span>
        <span class="mines">
          <span id="scoreBoardMinesCurrent">${minesNumber}</span
          ><span class="scoreMinesСolon"> /</span>
          <span id="scoreBoardMinesAll">${minesNumber}</span>
        </span>
      </span>
    `;
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

