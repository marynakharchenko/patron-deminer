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
};
