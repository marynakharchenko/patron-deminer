import bushAnimations from '../../animations/bushAnimations';

const { AnimatedSprite } = window.PIXI;

import Entity from './Entity';
import CONSTANTS from '../../constants/constants';

export default class Mine extends Entity {
  constructor(animations) {
    super(animations);

    this.deminedCount = 0;
  }

  /**
   *
   * @param {x,y} position coordinates
   * @param width width
   * @param height height
   * @param mine_types mine_types array
   */
  async init(position, width, height, mine_types = []) {
    const mineNumber = Math.floor(Math.random() * mine_types.length);
    console.log(mineNumber);
    this.anim = new AnimatedSprite(this.animations[`${CONSTANTS.ACTIONS.STAND}${mine_types[mineNumber]}`]);
    this.anim.position = position;
    // Adjust animation speed
    this.anim.animationSpeed = 0.2;
    // Don't loop it at initial state
    this.anim.loop = false;
    // Set with and height
    if (width) this.anim.width = width;
    if (height) this.anim.height = height;
  }
}
