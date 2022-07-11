import CONSTANTS from '../constants/constants';
import { MINES } from '../constants/mines';

const { E, D, M, L, R, C } = CONSTANTS.MAP.ENTITIES;

const LEVEL_NUMBER = '02';
const NEXT_LEVEL_NUMBER = '03';

const LEVEL_MAP = [
  [[R], [R], [E], [E], [E], [E], [E], [E], [E], [R], [E], [E], [E], [R], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [C], [E], [E], [E], [E], [E], [R], [E], [E], [E], [E], [E], [R], [R], [E], [E], [E], [E], [E], [E], [M], [E]],
  [[E], [E], [E], [E], [E], [E], [R], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [M], [E], [E], [E], [E], [R], [E], [E], [R], [E], [E], [E], [E], [E], [R], [R], [E], [R], [R], [R], [E], [E]],
  [[E], [E], [E], [R], [E], [E], [E], [E], [E], [R], [E], [E], [E], [E], [E], [R], [E], [E], [E], [R], [E], [E], [E]],
  [[E], [E], [E], [R], [E], [E], [E], [E], [E], [R], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [R], [R], [R], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [R], [R], [E], [E], [E], [R], [E], [E], [E], [E], [E], [M], [E], [E], [E], [R], [E], [R], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [R], [E], [E], [E], [E], [L], [E], [E], [E], [R], [R], [R], [R], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [R], [E], [E], [E], [E], [E], [E], [E], [E], [R], [E], [E], [M], [E], [E], [R], [R]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [R], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [R], [E], [E], [D], [R], [R], [R], [E], [E], [E], [E], [E], [R], [E], [E]],
  [[E], [R], [E], [R], [R], [R], [E], [E], [R], [R], [E], [E], [E], [E], [R], [E], [E], [E], [E], [E], [R], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [E], [R], [E], [E], [E], [M], [E], [E], [E], [R], [E], [E], [R], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [R], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [R], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [R], [E], [E], [E], [E], [E], [E], [E], [E], [E], [R], [R], [E], [E], [E], [E], [R], [R], [R], [E]],
  [[E], [E], [E], [R], [E], [E], [E], [E], [E], [E], [E], [E], [E], [R], [M], [E], [E], [E], [E], [R], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [R], [E], [R], [E], [R], [R], [R], [E], [E], [E]],
  [[E], [R], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [R], [E], [E], [M], [E], [R], [R], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [R], [E], [E], [E]],
  [[E], [R], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [R]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [R], [E], [M], [R]],
];

const BEAR_AVAILABLE = false;
const BEAR_SPEED = 1;
const BEAR_STEPS = [];

const LEVEL_SECONDS = 120;

const MINE_TYPES = [
  MINES.PTM_3.MINE_ID,
  MINES.F_1.MINE_ID,
  MINES.PMN.MINE_ID,
  MINES.ARTILLERY_SHELL.MINE_ID,
];

const BEAR_SETTINGS = {
  BEAR_AVAILABLE,
  BEAR_SPEED,
  BEAR_STEPS,
};

const BACKGROUND_COLOR = 0x1A1A1A;

const FENCE_ENTITY = R;

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
