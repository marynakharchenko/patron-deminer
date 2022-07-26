import CONSTANTS from './constants';

import LEVEL01 from '../levels/level01';
import LEVEL02 from '../levels/level02';
import LEVEL03 from '../levels/level03';
import LEVEL04 from '../levels/level04';
import LEVEL05 from '../levels/level05';

const LEVELS = {
  LEVEL01,
  LEVEL02,
  LEVEL03,
  LEVEL04,
  LEVEL05,
};

const getLevelSettings = () => {
  const levelNumberString = window.localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY_LEVEL_NUMBER) || '01';
  const LEVEL = LEVELS[`LEVEL${levelNumberString}`];

  const LEVEL_NUMBER = LEVEL.LEVEL_NUMBER;
  const NEXT_LEVEL_NUMBER = LEVEL.NEXT_LEVEL_NUMBER;
  const LEVEL_MAP = LEVEL.LEVEL_MAP;
  const LEVEL_SECONDS = LEVEL.LEVEL_SECONDS;
  const BEAR_SETTINGS = LEVEL.BEAR_SETTINGS;
  const MINE_TYPES = LEVEL.MINE_TYPES;
  const BACKGROUND_COLOR = LEVEL.BACKGROUND_COLOR;
  const FENCE_ENTITY = LEVEL.FENCE_ENTITY;
  const IS_POSSIBLE_ATTACK = LEVEL.IS_POSSIBLE_ATTACK;

  return {
    LEVEL_NUMBER,
    NEXT_LEVEL_NUMBER,
    LEVEL_MAP,
    LEVEL_SECONDS,
    BEAR_SETTINGS,
    MINE_TYPES,
    BACKGROUND_COLOR,
    FENCE_ENTITY,
    IS_POSSIBLE_ATTACK,
  };
};

export default getLevelSettings;
