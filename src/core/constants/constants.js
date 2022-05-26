export default {
  DIRECTIONS: {
    LEFT: 'Left',
    RIGHT: 'Right',
    UP: 'Up',
    DOWN: 'Down',
  },
  ACTIONS: {
    DISAPPEAR: 'disappear',
    STAND: 'stand',
    WALK: 'walk',
    DEMINE: 'demine',
  },
  MAP: {
    ENTITIES: {
      E: 0, // Empty
      W: 1, // Wall - tree or end of map
      T: 2, // Teleport - puddle or lake
      P: 3, // Patron
      M: 4, // Mine
      B: 5, // Bush
    },
  },
};
