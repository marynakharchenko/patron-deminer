const { AnimatedSprite, Loader } = window.PIXI;
const gsap = window.gsap;

import CONSTANTS from '../../constants/constants';

const Resources = Loader.shared.resources;
const DIRECTIONS = [
  CONSTANTS.DIRECTIONS.UP,
  CONSTANTS.DIRECTIONS.DOWN,
  CONSTANTS.DIRECTIONS.LEFT,
  CONSTANTS.DIRECTIONS.RIGHT,
];

const ANIMATION_DURATION_DEFAULT = 0.038;

export default class Entity {
  constructor(animations) {
    this.animations = [];

    const randomIndex = Math.floor(Math.random() * DIRECTIONS.length);

    this.direction = DIRECTIONS[randomIndex];

    this.moving = false;

    this.prepareAnimations(animations);
  }

  /**
   *
   * @param {{}} animations containing all animations info
   */
  prepareAnimations(animations) {
    for (const animKey in animations) {
      const animationTextures = [];

      animations[animKey].forEach((sprite) => {
        animationTextures.push(Resources[sprite].texture);
      });
      this.animations[animKey] = animationTextures;
    }
  }

  /**
   *
   * @param {x,y} position coordinates
   * @param width width
   * @param height height
   */
  async init(position, width, height) {
    this.anim = new AnimatedSprite(this.animations[`${CONSTANTS.ACTIONS.STAND}${this.direction}`]);
    this.anim.position = position;
    // Adjust animation speed
    const animationNumber = this.animations[`${CONSTANTS.ACTIONS.WALK}${this.direction}`].length;

    this.anim.animationSpeed = ANIMATION_DURATION_DEFAULT * animationNumber;
    // Don't loop it at initial state
    this.anim.loop = false;
    // Set with and height
    if (width) this.anim.width = width;
    if (height) this.anim.height = height;
  }

  /**
   *
   * @param {String} direction 'Up', 'Down' etc.
   */
  standStill(direction = this.direction) {
    this.direction = direction;
    this.anim.textures = this.animations[`${CONSTANTS.ACTIONS.STAND}${this.direction}`];
    this.anim.gotoAndStop(0);
    this.moving = false;
  }

  /**
   *
   * @param {{x, y}} target coordinates
   * @param {String} direction 'Up', 'Down' etc.
   */
  async move(target, direction) {
    this.moving = true;

    // Adjust the new direction
    this.direction = direction;
    // Adjust the animation based on the direction
    this.anim.textures = this.animations[`${CONSTANTS.ACTIONS.WALK}${direction}`];
    // Play the animation
    this.anim.gotoAndPlay(0);

    const animationNumber = this.animations[`${CONSTANTS.ACTIONS.WALK}${direction}`].length;

    await gsap.to(this.anim, {
      duration: animationNumber * ANIMATION_DURATION_DEFAULT,
      x: target.x,
      y: target.y,
      ease: 'none',
    });

    this.moving = false;
  }
}
