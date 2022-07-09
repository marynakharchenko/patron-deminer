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
    MINE: 'mine',
  },
  MAP: {
    ENTITIES: {
      E: 'empty', // Empty
      W: 'wall', // Wall - tree or end of map
      T: 'teleport', // Teleport - puddle or lake
      D: 'dog', // Dog
      M: 'mine', // Mine
      F: 'flag', // Flag
      B: 'bush', // Bush
      U: 'bear', // Bear (Ursus)
      R: 'tire', // Tire (round)
      G: 'garden', // Garden
      C: 'car', // Car
      L: 'tower', // Tower (lookout)
      I: 'iceCream', // Ice Cream
      S: 'beach', // Beach (shore)
      H: 'trailer', // Trailer (home)
      P: 'light', // Light (phare)
      O: 'ruins', // ruins
      V: 'city', // city barriers
    },
  },
  ANIMATION_DURATION_DEFAULT: 0.038,
  LOCAL_STORAGE_KEY_MINES_LIST: 'deminer-dog:available-mines-list',
  LOCAL_STORAGE_KEY_LEVEL_NUMBER: 'deminer-dog:level-number',
  DONATE_URL: 'https://savelife.in.ua/donate/',
};
