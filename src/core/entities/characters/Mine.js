import { AnimatedSprite } from 'pixi.js';

import Entity from './Entity';
import CONSTANTS from '../../constants/constants';

export default class Mine extends Entity {
  constructor(animations) {
    super(animations);
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
    this.anim.animationSpeed = 0.2;
    // Don't loop it at initial state
    this.anim.loop = false;
    // Set with and height
    if (width) this.anim.width = width;
    if (height) this.anim.height = height;
    this.anim.zIndex = -1;
  }
}
