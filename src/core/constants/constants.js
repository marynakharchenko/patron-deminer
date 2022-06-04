export default {
  DIRECTIONS: {
    LEFT: 'Left',
    RIGHT: 'Right',
    UP: 'Up',
    DOWN: 'Down',
  },
  ACTIONS: {
    STAND: 'stand',
    WALK: 'walk',
    DEMINE: 'demine',
  },
  MAP: {
    ENTITIES: {
      E: 'empty', // Empty
      W: 'wall', // Wall - tree or end of map
      T: 'teleport', // Teleport - puddle or lake
      P: 'patron', // Patron
      M: 'mine', // Mine
      F: 'flag', // Flag
      B: 'bush', // Bush
    },
  },
  ANIMATION_DURATION_DEFAULT: 0.038,
};
