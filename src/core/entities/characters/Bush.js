import { AnimatedSprite } from 'pixi.js';
import CONSTANTS from '../../constants/constants';
import bushAnimations from '../../animations/bushAnimations';

import Entity from './Entity';

export default class Bush extends Entity {
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
    const animationName = `${CONSTANTS.ACTIONS.STAND}${Math.floor(Math.random() * Object.keys(bushAnimations).length)}`;

    this.anim = new AnimatedSprite(this.animations[animationName]);
    this.anim.position = position;
    // Don't loop it at initial state
    this.anim.loop = false;
    // Set with and height
    if (width) this.anim.width = width;
    if (height) this.anim.height = height;
    this.anim.zIndex = 2;
  }
}
