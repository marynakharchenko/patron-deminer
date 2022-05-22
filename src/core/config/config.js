const isHorizontal = window.innerWidth > window.innerHeight;
const size = isHorizontal ? window.innerHeight : window.innerWidth;
const left = (window.innerWidth - size) / 2;
const top = (window.innerHeight - size) / 2;

export default {
  view: {
    width: size,
    height: size,
    backgroundColor: 0x779642,
    worldWidth: size * 6,
    worldHeight: size * 6,
    isHorizontal,
    left,
    top,
  },
  game: {
    width: size * 6,
    height: size * 6,
    tileWidth: size / 5,
    tileHeight: size / 5,
    fenceSize: 5, // tiles
    drag: false,
    pinch: true,
    decelerate: true,
    wheel: true,
  },
  scenes: {
    Splash: {
      hideDelay: 0,
    },
  },
  assets: {
    root: '/',
  },
};
