const PROJECT_URL = 'https://sniffer-dog-quest.web.app/';

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
    BITE: 'bite',
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
  TELEPORT_DURATION_DEFAULT: 0.2,
  LOCAL_STORAGE_KEY_MINES_LIST: 'sniffer-dog-quest:available-mines-list',
  LOCAL_STORAGE_KEY_LEVEL_NUMBER: 'sniffer-dog-quest:level-number',
  DONATE_URL: 'https://savelife.in.ua/donate/',
  SUPPORT_UKRAINE_URL: 'https://supportukraine.art/product/patron-the-dog-from-ukraine/',
  SHARE_FACEBOOK_URL: `https://www.facebook.com/sharer/sharer.php?u=${PROJECT_URL}`,
  SHARE_TELEGRAM_URL: `https://t.me/share/url?url=${PROJECT_URL}&text=Sniffer Dog`,
  DONATE_CLICK: 'DONATE_CLICK',
  SUPPORT_UKRAINE_CLICK: 'SUPPORT_UKRAINE_CLICK',
  FACEBOOK_CLICK: 'FACEBOOK_CLICK',
  TELEGRAM_CLICK: 'TELEGRAM_CLICK',
  COLLECTION_CLICK: 'COLLECTION_CLICK',
  ABOUT_CLICK: 'ABOUT_CLICK',
  START_GAME_CLICK: 'START_GAME_CLICK',
  FINISH_GAME_CLICK: 'FINISH_GAME_CLICK',
  NEXT_LEVEL_CLICK: 'NEXT_LEVEL_CLICK',
  FAIL_LEVEL_CLICK: 'FAIL_LEVEL_CLICK',
};
