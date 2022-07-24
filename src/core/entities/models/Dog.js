import Entity from './Entity';
import CONSTANTS from '../../constants/constants';

export default class Dog extends Entity {
  constructor(config, animations) {
    super(config, animations);
    // this.isDemining = false;
    this.isPossibleAttack = false;
  }

  setZIndex() {
    // 10 - default multiplier
    this.anim.zIndex = (this.row * 10) + 2;
  }

  demine(callback) {
    // this.isDemining = true;
    this.anim.textures = this.animations[CONSTANTS.ACTIONS.DEMINE];
    this.anim.gotoAndPlay(0);
    setTimeout(callback, this.anim.textures.length * CONSTANTS.ANIMATION_DURATION_DEFAULT * 1000);
  }

  bite() {
    this.anim.textures = this.animations[CONSTANTS.ACTIONS.BITE];
    this.anim.loop = true;
    const animationNumber = this.animations[CONSTANTS.ACTIONS.BITE].length;

    this.anim.animationSpeed = CONSTANTS.ANIMATION_DURATION_DEFAULT * animationNumber;
    this.anim.gotoAndPlay(0);
  }
}
