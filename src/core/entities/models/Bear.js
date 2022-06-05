import Entity from './Entity';
import CONSTANTS from '../../constants/constants';

export default class Bear extends Entity {
  constructor(config, animations) {
    super(config, animations);
    // this.isDemining = false;
  }

  mine() {
    // this.isDemining = true;
    this.anim.textures = this.animations[CONSTANTS.ACTIONS.MINE];
    this.anim.gotoAndPlay(0);
  }
}
