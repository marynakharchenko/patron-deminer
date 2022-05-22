import CONSTANTS from '../constants/constants';

export default {
  [`${CONSTANTS.ACTIONS.STAND}${CONSTANTS.DIRECTIONS.LEFT}`]: [
    'mineLeft',
  ],
  [`${CONSTANTS.ACTIONS.STAND}${CONSTANTS.DIRECTIONS.RIGHT}`]: [
    'mineRight',
  ],
  [`${CONSTANTS.ACTIONS.STAND}${CONSTANTS.DIRECTIONS.UP}`]: [
    'mineUp',
  ],
  [`${CONSTANTS.ACTIONS.STAND}${CONSTANTS.DIRECTIONS.DOWN}`]: [
    'mineDown',
  ],
  [CONSTANTS.ACTIONS.DISAPPEAR]: [
    'mineDisappear1',
    'mineDisappear2',
    'mineDisappear3',
    'mineDisappear4',
    'mineDisappear5',
    'mineDisappear6',
    'mineDisappear7',
    'mineDisappear8',
    'mineDisappear9',
    'mineDisappear10',
    'mineDisappear11',
    'mineDisappear12',
    'mineDisappear13',
    'mineDisappear14',
  ],
};
