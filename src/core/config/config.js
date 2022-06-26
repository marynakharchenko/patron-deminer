class Config {
  static get view() {
    const size = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;

    return {
      width: size,
      height: size,
      backgroundColor: 0x606060,
      worldWidth: size * 6,
      worldHeight: size * 6,
    };
  }

  static get game() {
    const size = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;

    return {
      width: size * 6,
      height: size * 6,
      tileWidth: size / 5,
      tileHeight: size / 5,
      fenceSize: 5, // tiles
      drag: false,
      pinch: true,
      decelerate: true,
      wheel: true,
    };
  }
}

export default Config;
