import CONSTANTS from '../constants/constants';
import { MINES } from '../constants/mines';

const { E, D, M, B, I } = CONSTANTS.MAP.ENTITIES;

const LEVEL_NUMBER = '01';
const NEXT_LEVEL_NUMBER = '02';

const LEVEL_MAP = [
  [[E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [M], [E], [E], [E], [E], [E], [B], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [E], [B], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [E], [B], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [B], [B], [B], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [B], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [M], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [B], [E], [E], [E], [E], [I], [E], [E], [E], [B], [B], [B], [B], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [B], [E], [M], [E], [E], [E], [E], [M], [E], [B], [E], [E], [B], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [B], [B], [B], [E], [E], [E], [E], [E], [B], [B], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [B], [E], [E], [D], [B], [E], [B], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [B], [B], [B], [E], [E], [B], [B], [E], [E], [E], [E], [B], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [E], [B], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [B], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [B], [E], [E], [M], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [B], [B], [B], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [B], [E], [E], [E], [E], [B], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [B], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [M], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [B], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
];

const BEAR_AVAILABLE = false;
const BEAR_SPEED = 1;
const BEAR_STEPS = [];

const LEVEL_SECONDS = 90;

const MINE_TYPES = [
  MINES.MON_50.MINE_ID,
  MINES.RGD_5.MINE_ID,
  MINES.VOG_25.MINE_ID,
];

const BEAR_SETTINGS = {
  BEAR_AVAILABLE,
  BEAR_SPEED,
  BEAR_STEPS,
};

const BACKGROUND_COLOR = 0x729641;

const FENCE_ENTITY = B;

export default {
  LEVEL_NUMBER,
  NEXT_LEVEL_NUMBER,
  LEVEL_MAP,
  LEVEL_SECONDS,
  BEAR_SETTINGS,
  MINE_TYPES,
  BACKGROUND_COLOR,
  FENCE_ENTITY,
};
