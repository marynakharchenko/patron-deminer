import CONSTANTS from '../constants/constants';
import { MINES } from '../constants/mines';

const { E, D, M, U, P, H, S, T } = CONSTANTS.MAP.ENTITIES;

const LEVEL_NUMBER = '04';
const NEXT_LEVEL_NUMBER = '05';

const LEVEL_MAP = [
  [[E], [E], [E], [S], [E], [E], [E], [M], [S], [E], [E], [E], [E], [E], [E], [E], [E], [E], [S], [E], [E], [E], [E]],
  [[E], [E], [E], [S], [E], [E], [E], [E], [S], [E], [E], [E], [S], [E], [E], [E], [E], [E], [S], [E], [E], [P], [P]],
  [[S], [E], [T], [E], [E], [E], [E], [E], [S], [E], [E], [E], [S], [E], [E], [E], [E], [M], [S], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [E], [S], [E], [E], [S], [E], [E], [E], [S], [S], [S], [H], [E], [E], [E]],
  [[E], [E], [E], [S], [E], [E], [S], [E], [E], [S], [E], [E], [E], [E], [S], [S], [E], [E], [E], [E], [T], [E], [E]],
  [[E], [E], [E], [S], [E], [E], [E], [P], [E], [S], [E], [E], [S], [S], [E], [E], [E], [E], [S], [E], [E], [P], [E]],
  [[E], [E], [S], [S], [E], [E], [E], [S], [S], [S], [E], [E], [E], [E], [E], [E], [E], [S], [M], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [S], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [S], [E], [E], [E], [E], [E]],
  [[E], [P], [E], [M], [E], [E], [S], [E], [E], [E], [E], [E], [E], [E], [E], [S], [S], [E], [E], [E], [E], [E], [S]],
  [[E], [E], [E], [E], [E], [E], [S], [E], [E], [E], [E], [E], [E], [E], [E], [E], [S], [E], [E], [E], [E], [S], [M]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [S], [E], [E], [E], [E], [S], [E]],
  [[E], [E], [S], [S], [E], [E], [E], [E], [E], [M], [E], [D], [E], [E], [E], [E], [S], [E], [M], [E], [E], [E], [E]],
  [[E], [E], [S], [E], [E], [E], [S], [E], [S], [E], [E], [E], [E], [E], [E], [E], [S], [S], [S], [S], [S], [E], [E]],
  [[E], [M], [S], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [M], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [S], [S], [S], [S], [E], [E], [E], [S], [E], [S], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [S], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [S], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [S], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[S], [S], [S], [S], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [S], [E], [S]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [S], [S]],
  [[M], [E], [E], [E], [E], [E], [E], [E], [E], [U], [E], [E], [E], [E], [E], [S], [E], [E], [E], [E], [E], [E], [S]],
  [[E], [E], [E], [S], [S], [S], [E], [E], [E], [S], [E], [M], [E], [S], [E], [E], [E], [E], [E], [E], [E], [E], [S]],
  [[E], [S], [S], [E], [E], [E], [E], [S], [S], [S], [E], [E], [E], [E], [E], [E], [S], [S], [E], [E], [E], [E], [E]],
  [[E], [S], [E], [E], [E], [M], [E], [E], [E], [E], [E], [E], [E], [E], [E], [S], [E], [E], [E], [E], [E], [E], [P]],
];

const BEAR_AVAILABLE = true;
const BEAR_SPEED = 1;
const BEAR_STEPS = [
  // { row: 19, col: 9 },
  { row: 19, col: 8, direction: 'Left' },
  { row: 19, col: 7, direction: 'Left' },
  { row: 19, col: 6, direction: 'Left' },
  { row: 19, col: 5, direction: 'Left' },
  { row: 19, col: 4, direction: 'Left' },
  { row: 19, col: 3, direction: 'Left' },
  { row: 19, col: 2, direction: 'Left' },
  { row: 19, col: 1, direction: 'Left' },
  { row: 19, col: 0, direction: 'Left' },
  { row: 18, col: 0, direction: 'Up' },
  { row: 18, col: 1, direction: 'Right' },
  { row: 18, col: 2, direction: 'Right' },
  { row: 18, col: 3, direction: 'Right' },
  { row: 18, col: 4, direction: 'Right' },
  { row: 17, col: 4, direction: 'Up' },
  { row: 16, col: 4, direction: 'Up' },
  { row: 16, col: 3, direction: 'Left' },
  { row: 16, col: 2, direction: 'Left' },
  { row: 16, col: 1, direction: 'Left' },
  { row: 16, col: 0, direction: 'Left' },
  { row: 15, col: 0, direction: 'Up' },
  { row: 14, col: 0, direction: 'Up' },
  { row: 13, col: 0, direction: 'Up' },
  { row: 13, col: 1, direction: 'Right' },
  { row: 12, col: 1, direction: 'Up' },
  { row: 11, col: 1, direction: 'Up' },
  { row: 10, col: 1, direction: 'Up' },
  { row: 9, col: 1, direction: 'Up' },
  { row: 9, col: 2, direction: 'Right' },
  { row: 9, col: 3, direction: 'Right' },
  { row: 8, col: 3, direction: 'Up' },
  { row: 7, col: 3, direction: 'Up' },
  { row: 7, col: 4, direction: 'Right' },
  { row: 6, col: 4, direction: 'Up' },
  { row: 5, col: 4, direction: 'Up' },
  { row: 4, col: 4, direction: 'Up' },
  { row: 3, col: 4, direction: 'Up' },
  { row: 2, col: 4, direction: 'Up' },
  { row: 2, col: 3, direction: 'Left' },
  { row: 2, col: 2, direction: 'Left' },
  { row: 4, col: 20, direction: 'Right' },
  { row: 5, col: 20, direction: 'Down' },
  { row: 6, col: 20, direction: 'Down' },
  { row: 6, col: 19, direction: 'Left' },
  { row: 6, col: 18, direction: 'Left' },
  { row: 7, col: 18, direction: 'Down' },
  { row: 8, col: 18, direction: 'Down' },
  { row: 9, col: 18, direction: 'Down' },
  { row: 10, col: 18, direction: 'Down' },
  { row: 11, col: 18, direction: 'Down' },
  { row: 11, col: 19, direction: 'Right' },
  { row: 11, col: 20, direction: 'Right' },
  { row: 11, col: 21, direction: 'Right' },
  { row: 12, col: 21, direction: 'Down' },
  { row: 13, col: 21, direction: 'Down' },
  { row: 13, col: 20, direction: 'Left' },
  { row: 13, col: 19, direction: 'Left' },
  { row: 13, col: 18, direction: 'Left' },
  { row: 13, col: 17, direction: 'Left' },
  { row: 13, col: 16, direction: 'Left' },
  { row: 13, col: 15, direction: 'Left' },
  { row: 13, col: 14, direction: 'Left' },
  { row: 13, col: 13, direction: 'Left' },
  { row: 13, col: 12, direction: 'Left' },
  { row: 13, col: 11, direction: 'Left' },
  { row: 14, col: 11, direction: 'Down' },
  { row: 15, col: 11, direction: 'Down' },
  { row: 16, col: 11, direction: 'Down' },
  { row: 17, col: 11, direction: 'Down' },
  { row: 18, col: 11, direction: 'Down' },
  { row: 19, col: 11, direction: 'Down' },
  { row: 20, col: 11, direction: 'Down' },
  { row: 20, col: 10, direction: 'Left' },
  { row: 19, col: 10, direction: 'Up' },
  { row: 19, col: 9, direction: 'Left' },
];

const LEVEL_SECONDS = 180;

const MINE_TYPES = [
  MINES.OZM_72.MINE_ID,
  MINES.POM_3.MINE_ID,
  MINES.MON_200.MINE_ID,
  MINES.TMK_2.MINE_ID,
  MINES.POMZ_2M.MINE_ID,
  MINES.SHELL_TANK.MINE_ID,
];

const BEAR_SETTINGS = {
  BEAR_AVAILABLE,
  BEAR_SPEED,
  BEAR_STEPS,
};

const BACKGROUND_COLOR = 0x7B814E;

const FENCE_ENTITY = S;

const IS_POSSIBLE_ATTACK = false;

export default {
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
