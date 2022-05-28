class Config {
  static get view () {
    const isHorizontal = window.innerWidth > window.innerHeight;
    const size = isHorizontal ? window.innerHeight : window.innerWidth;
    const left = (window.innerWidth - size) / 2;
    const top = (window.innerHeight - size) / 2;

    return {
      width: size,
      height: size,
      backgroundColor: 0x779642,
      worldWidth: size * 6,
      worldHeight: size * 6,
      isHorizontal,
      left,
      top,
    };
  }

  static get game () {
    const isHorizontal = window.innerWidth > window.innerHeight;
    const size = isHorizontal ? window.innerHeight : window.innerWidth;

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
