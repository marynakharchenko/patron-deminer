import CONSTANTS from '../constants/constants';
import { MINES } from '../constants/mines';

const { E, D, M, U, L, R, C } = CONSTANTS.MAP.ENTITIES;

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
  [[E], [R], [E], [E], [E], [E], [E], [E], [E], [U], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [R], [E], [E], [M], [E], [R], [R], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [R], [E], [E], [E]],
  [[E], [R], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [R]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [R], [E], [M], [R]],
];

const BEAR_AVAILABLE = false;
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

export default {
  LEVEL_NUMBER,
  NEXT_LEVEL_NUMBER,
  LEVEL_MAP,
  LEVEL_SECONDS,
  BEAR_SETTINGS,
  MINE_TYPES,
  BACKGROUND_COLOR,
};
