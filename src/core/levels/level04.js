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
  [[E], [E], [E], [S], [E], [E], [S], [E], [E], [S], [E], [E], [E], [E], [S], [S], [E], [E], [E], [E], [E], [E], [E]],
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
  [[E], [E], [E], [S], [S], [S], [E], [E], [E], [S], [E], [M], [E], [S], [E], [E], [E], [E], [E], [E], [T], [E], [S]],
  [[E], [S], [S], [E], [E], [E], [E], [S], [S], [S], [E], [E], [E], [E], [E], [E], [S], [S], [E], [E], [E], [E], [E]],
  [[E], [S], [E], [E], [E], [M], [E], [E], [E], [E], [E], [E], [E], [E], [E], [S], [E], [E], [E], [E], [E], [E], [P]],
];

const BEAR_AVAILABLE = true;
const BEAR_SPEED = 1;
const BEAR_STEPS = [
  // { row: 19, col: 9 },
  { row: 19, col: 10, direction: 'Right' },
  { row: 19, col: 11, direction: 'Right' },
  { row: 19, col: 12, direction: 'Right' },
  { row: 19, col: 13, direction: 'Right' },
  { row: 19, col: 14, direction: 'Right' },
  { row: 18, col: 14, direction: 'Up' },
  { row: 17, col: 14, direction: 'Up' },
  { row: 17, col: 15, direction: 'Right' },
  { row: 17, col: 16, direction: 'Right' },
  { row: 16, col: 16, direction: 'Up' },
  { row: 15, col: 16, direction: 'Up' },
  { row: 15, col: 15, direction: 'Left' },
  { row: 15, col: 14, direction: 'Left' },
  { row: 15, col: 13, direction: 'Left' },
  { row: 14, col: 13, direction: 'Up' },
  { row: 13, col: 13, direction: 'Up' },
  { row: 12, col: 13, direction: 'Up' },
  { row: 11, col: 13, direction: 'Up' },
  { row: 10, col: 13, direction: 'Up' },
  { row: 9, col: 13, direction: 'Up' },
  { row: 9, col: 12, direction: 'Left' },
  { row: 9, col: 11, direction: 'Left' },
  { row: 9, col: 10, direction: 'Left' },
  { row: 9, col: 9, direction: 'Left' },
  { row: 9, col: 8, direction: 'Left' },
  { row: 9, col: 9, direction: 'Right' },
  { row: 9, col: 10, direction: 'Right' },
  { row: 9, col: 11, direction: 'Right' },
  { row: 9, col: 12, direction: 'Right' },
  { row: 9, col: 13, direction: 'Right' },
  { row: 10, col: 13, direction: 'Down' },
  { row: 11, col: 13, direction: 'Down' },
  { row: 12, col: 13, direction: 'Down' },
  { row: 13, col: 13, direction: 'Down' },
  { row: 14, col: 13, direction: 'Down' },
  { row: 15, col: 13, direction: 'Down' },
  { row: 15, col: 14, direction: 'Right' },
  { row: 15, col: 15, direction: 'Right' },
  { row: 15, col: 16, direction: 'Right' },
  { row: 16, col: 16, direction: 'Down' },
  { row: 17, col: 16, direction: 'Down' },
  { row: 17, col: 15, direction: 'Left' },
  { row: 17, col: 14, direction: 'Left' },
  { row: 18, col: 14, direction: 'Down' },
  { row: 19, col: 14, direction: 'Down' },
  { row: 19, col: 13, direction: 'Left' },
  { row: 19, col: 12, direction: 'Left' },
  { row: 19, col: 11, direction: 'Left' },
  { row: 19, col: 10, direction: 'Left' },
  { row: 19, col: 9, direction: 'Left' },
];

let MINES_NUMBER = 0;

for (let row = 0; row < LEVEL_MAP.length; row++) {
  for (let col = 0; col < LEVEL_MAP[0].length; col++) {
    if (LEVEL_MAP[row][col].includes(M)) MINES_NUMBER++;
  }
}

const LEVEL_SECONDS = (BEAR_STEPS.length + (MINES_NUMBER * 2)) * BEAR_SPEED;

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
