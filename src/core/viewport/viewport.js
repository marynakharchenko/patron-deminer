import config from '../config/config';

const viewport = new window.PIXI.Viewport({
  screenWidth: config.view.width,
  screenHeight: config.view.height,
  worldWidth: config.view.worldWidth,
  worldHeight: config.view.worldHeight,
});

if (config.game.drag) viewport.drag();
if (config.game.pinch) viewport.pinch();
if (config.game.wheel) viewport.wheel();
if (config.game.decelerate) viewport.decelerate();

export default viewport;
