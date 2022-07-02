import CONSTANTS from '../constants/constants';
import { MINES } from '../constants/mines';

const { E, D, M, B, U, I } = CONSTANTS.MAP.ENTITIES;

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
  [[E], [E], [E], [E], [M], [E], [E], [E], [E], [U], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [B], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
  [[E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E], [E]],
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

export default {
  LEVEL_NUMBER,
  NEXT_LEVEL_NUMBER,
  LEVEL_MAP,
  LEVEL_SECONDS,
  BEAR_SETTINGS,
  MINE_TYPES,
  BACKGROUND_COLOR,
};
