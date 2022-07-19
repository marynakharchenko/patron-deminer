import CONSTANTS from '../constants/constants';
import { MINES } from '../constants/mines';

const { E, D, M, U, G, T } = CONSTANTS.MAP.ENTITIES;

const LEVEL_NUMBER = '05';
const NEXT_LEVEL_NUMBER = '05';

const LEVEL_MAP = [
  [[E], [E], [E], [E], [G], [M], [E], [T], [E], [E], [E], [E], [E], [E], [E], [G], [E], [G], [G], [G], [E], [E], [M]],
  [[E], [E], [E], [E], [G], [G], [E], [E], [E], [E], [E], [E], [E], [G], [E], [E], [E], [E], [E], [E], [E], [E], [G]],
  [[E], [E], [E], [E], [G], [E], [E], [E], [E], [E], [E], [E], [E], [G], [E], [E], [G], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [G], [G], [G], [E], [E], [E], [E], [G], [E], [E], [E], [E], [E], [E], [G], [E], [E], [E], [E], [E], [G]],
  [[G], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [M], [G], [E], [G], [E], [E], [G], [E]],
  [[G], [E], [G], [E], [E], [E], [E], [G], [E], [E], [E], [E], [E], [E], [E], [E], [G], [G], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [G], [E], [E], [G], [G], [E], [G], [E], [E], [E], [E], [E], [E], [G], [G], [E]],
  [[E], [E], [E], [G], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [M], [E], [E]],
  [[E], [E], [M], [G], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [G], [E], [E]],
  [[M], [G], [G], [G], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[G], [E], [E], [E], [E], [E], [E], [E], [G], [E], [E], [D], [E], [G], [G], [G], [G], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [G], [G], [G], [G], [G], [E], [E], [G], [G], [M], [E], [E], [E], [E], [E], [G], [G], [E], [E]],
  [[E], [E], [G], [G], [M], [E], [E], [M], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [G], [M], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [G], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [G], [E], [E], [E]],
  [[G], [G], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [G], [E], [E], [E], [G], [G], [G], [E], [E], [E], [G]],
  [[E], [E], [E], [E], [G], [E], [E], [E], [E], [E], [E], [E], [G], [E], [E], [E], [G], [E], [E], [E], [E], [E], [G]],
  [[E], [E], [E], [E], [G], [G], [E], [E], [E], [E], [G], [G], [G], [E], [G], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [G], [G], [E], [G], [E], [E], [E], [E], [E], [E], [E], [E], [E], [G], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [G], [G], [E], [E], [G], [E], [E], [E], [E], [E], [E], [G], [G], [G], [G], [E], [E], [G], [G], [G]],
  [[G], [E], [G], [M], [G], [E], [E], [E], [E], [U], [E], [E], [E], [E], [G], [E], [E], [E], [E], [E], [E], [E], [M]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [G], [E], [M], [E], [E], [G], [G], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [G], [E], [E], [E], [E], [E], [E], [E], [E], [G], [G], [E], [G], [E], [T], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [G], [E], [E], [E], [E], [E], [M], [E], [E], [G], [G], [E], [G], [E], [E], [E]],
];

const BEAR_AVAILABLE = true;
const BEAR_SPEED = 1;
const BEAR_STEPS = [
  // { row: 19, col: 9 },
  { row: 19, col: 10, direction: 'Right' },
  { row: 19, col: 11, direction: 'Right' },
  { row: 19, col: 12, direction: 'Right' },
  { row: 19, col: 13, direction: 'Right' },
  { row: 20, col: 13, direction: 'Down' },
  { row: 21, col: 13, direction: 'Down' },
  { row: 22, col: 13, direction: 'Down' },
  { row: 22, col: 14, direction: 'Right' },
  { row: 22, col: 15, direction: 'Right' },
  { row: 21, col: 15, direction: 'Up' },
  { row: 20, col: 15, direction: 'Up' },
  { row: 20, col: 16, direction: 'Right' },
  { row: 20, col: 17, direction: 'Right' },
  { row: 20, col: 18, direction: 'Right' },
  { row: 19, col: 18, direction: 'Up' },
  { row: 19, col: 19, direction: 'Right' },
  { row: 19, col: 20, direction: 'Right' },
  { row: 19, col: 21, direction: 'Right' },
  { row: 19, col: 22, direction: 'Right' },
  { row: 20, col: 22, direction: 'Down' },
  { row: 21, col: 22, direction: 'Down' },
  { row: 21, col: 21, direction: 'Left' },
  { row: 0, col: 7, direction: 'Left' },
  { row: 0, col: 6, direction: 'Left' },
  { row: 0, col: 5, direction: 'Left' },
  { row: 0, col: 6, direction: 'Right' },
  { row: 1, col: 6, direction: 'Down' },
  { row: 2, col: 6, direction: 'Down' },
  { row: 3, col: 6, direction: 'Down' },
  { row: 4, col: 6, direction: 'Down' },
  { row: 4, col: 5, direction: 'Left' },
  { row: 4, col: 4, direction: 'Left' },
  { row: 4, col: 3, direction: 'Left' },
  { row: 4, col: 2, direction: 'Left' },
  { row: 4, col: 1, direction: 'Left' },
  { row: 5, col: 1, direction: 'Down' },
  { row: 6, col: 1, direction: 'Down' },
  { row: 6, col: 0, direction: 'Left' },
  { row: 7, col: 0, direction: 'Down' },
  { row: 8, col: 0, direction: 'Down' },
  { row: 9, col: 0, direction: 'Down' },
  { row: 8, col: 0, direction: 'Up' },
  { row: 8, col: 1, direction: 'Right' },
  { row: 8, col: 2, direction: 'Right' },
  { row: 7, col: 2, direction: 'Up' },
  { row: 6, col: 2, direction: 'Up' },
  { row: 6, col: 3, direction: 'Right' },
  { row: 6, col: 4, direction: 'Right' },
  { row: 7, col: 4, direction: 'Down' },
  { row: 8, col: 4, direction: 'Down' },
  { row: 9, col: 4, direction: 'Down' },
  { row: 10, col: 4, direction: 'Down' },
  { row: 10, col: 3, direction: 'Left' },
  { row: 10, col: 2, direction: 'Left' },
  { row: 10, col: 1, direction: 'Left' },
  { row: 11, col: 1, direction: 'Down' },
  { row: 12, col: 1, direction: 'Down' },
  { row: 13, col: 1, direction: 'Down' },
  { row: 13, col: 2, direction: 'Right' },
  { row: 13, col: 3, direction: 'Right' },
  { row: 13, col: 4, direction: 'Right' },
  { row: 12, col: 4, direction: 'Up' },
  { row: 12, col: 5, direction: 'Right' },
  { row: 12, col: 6, direction: 'Right' },
  { row: 12, col: 7, direction: 'Right' },
  { row: 12, col: 8, direction: 'Right' },
  { row: 12, col: 9, direction: 'Right' },
  { row: 13, col: 9, direction: 'Down' },
  { row: 14, col: 9, direction: 'Down' },
  { row: 15, col: 9, direction: 'Down' },
  { row: 16, col: 9, direction: 'Down' },
  { row: 17, col: 9, direction: 'Down' },
  { row: 18, col: 9, direction: 'Down' },
  { row: 19, col: 9, direction: 'Down' },
];

const LEVEL_SECONDS = 210;

const MINE_TYPES = [
  MINES.NAVAL_MINE.MINE_ID,
  MINES.PG_7V.MINE_ID,
  MINES.ROCKET.MINE_ID,
  MINES.MINOMETNA_MINA.MINE_ID,
  MINES.N210.MINE_ID,
  MINES.RGO.MINE_ID,
  MINES.TM_62.MINE_ID,
];

const BEAR_SETTINGS = {
  BEAR_AVAILABLE,
  BEAR_SPEED,
  BEAR_STEPS,
};

const BACKGROUND_COLOR = 0x595C60;

const FENCE_ENTITY = G;

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
