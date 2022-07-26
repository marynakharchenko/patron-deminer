const { AnimatedSprite } = window.PIXI;
const gsap = window.gsap;

import Entity from './Entity';
import CONSTANTS from '../../constants/constants';

export default class Bear extends Entity {
  constructor(config, animations) {
    super(config, animations);
    // this.isDemining = false;
  }

  /**
   *
   * @param {x,y} position coordinates
   * @param width width
   * @param height height
   */
  async init(position, width, height) {
    this.anim = new AnimatedSprite(
      this.animations[`${CONSTANTS.ACTIONS.STAND}${this.direction}`]
    );
    this.anim.position = position;
    // Adjust animation speed
    const animationNumber = this.animations[`${CONSTANTS.ACTIONS.WALK}${this.direction}`].length;

    this.anim.animationSpeed = CONSTANTS.ANIMATION_DURATION_DEFAULT * animationNumber;
    // Don't loop it at initial state
    this.anim.loop = false;
    // Set with and height
    if (width) this.anim.width = width;
    if (height) this.anim.height = height;
  }

  setZIndex() {
    // 10 - default multiplier, 2 index for tile
    this.anim.zIndex = (this.row * 10) + 2;
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
    this.anim.textures = this.animations[
      `${CONSTANTS.ACTIONS.WALK}${direction}`
    ];
    // Play the animation
    this.anim.gotoAndPlay(0);

    const animationNumber = this.animations[
      `${CONSTANTS.ACTIONS.WALK}${direction}`
    ].length;

    await gsap.to(this.anim, {
      duration: animationNumber * 0.05,
      x: target.x,
      y: target.y,
      ease: 'none',
    });

    this.moving = false;
  }

  mine() {
    // this.isDemining = true;
    this.anim.textures = this.animations[CONSTANTS.ACTIONS.MINE];
    this.anim.gotoAndPlay(0);
  }

  async run(target, width) {
    setInterval(async () => {
      target.x = target.x + width;
      this.move(target, CONSTANTS.DIRECTIONS.RIGHT);
    }, 100);
  }
}
