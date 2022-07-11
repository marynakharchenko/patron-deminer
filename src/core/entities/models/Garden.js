const { AnimatedSprite } = window.PIXI;

import CONSTANTS from '../../constants/constants';
import gardenAnimations from '../../animations/gardenAnimations';

import Entity from './Entity';

export default class Garden extends Entity {
  constructor(animations) {
    super(animations);
  }

  /**
   *
   * @param {x,y} position coordinates
   * @param width width
   * @param height height
   * @param isFence isFence
   */
  async init(position, width, height, isFence) {
    let animationName = `${CONSTANTS.ACTIONS.STAND}${Math.floor(Math.random() * Object.keys(gardenAnimations).length)}`;

    if (isFence) {
      animationName = `${CONSTANTS.ACTIONS.STAND}0`;
    }

    this.anim = new AnimatedSprite(this.animations[animationName]);
    this.anim.position = position;
    // Don't loop it at initial state
    this.anim.loop = true;
    // Set with and height
    if (width) this.anim.width = width;
    if (height) this.anim.height = height;
    this.anim.animationSpeed = 0.1;
    this.anim.gotoAndPlay(0);
  }
}
