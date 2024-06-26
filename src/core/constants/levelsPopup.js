import CONSTANTS from './constants';

const LEVELS_POPUP = {
  '01': {
    LEVEL_POPUP_ID: '01',
    LEVEL_POPUP_NUMBER: 'Рівень 1',
    LEVEL_POPUP_TITLE: 'Парк',
    LEVEL_POPUP_PHOTO_SRC:
      '../src/assets/images--landing/levelPopUp/park-popUp.png',
    LEVEL_POPUP_DESCRIPTION:
      'Знайди всі небезпечні предмети, які розкидав клишоногий.',
  },
  '02': {
    LEVEL_POPUP_ID: '02',
    LEVEL_POPUP_NUMBER: 'Рівень 2',
    LEVEL_POPUP_TITLE: 'Військова позиція',
    LEVEL_POPUP_PHOTO_SRC:
      '../src/assets/images--landing/levelPopUp/military-popUp.png',
    LEVEL_POPUP_DESCRIPTION:
      'Будь уважний! Клишавий почав замасковувати небезпечні предмети.',
  },
  '03': {
    LEVEL_POPUP_ID: '03',
    LEVEL_POPUP_NUMBER: 'Рівень 3',
    LEVEL_POPUP_TITLE: 'Місто після воєнних дій',
    LEVEL_POPUP_PHOTO_SRC:
      '../src/assets/images--landing/levelPopUp/city-popUp.png',
    LEVEL_POPUP_DESCRIPTION:
      'Слідкуй за бурим окупантом - він може топтати прапорці, якими ти відзначаєш знахідки.',
  },
  '04': {
    LEVEL_POPUP_ID: '04',
    LEVEL_POPUP_NUMBER: 'Рівень 4',
    LEVEL_POPUP_TITLE: 'Ліс',
    LEVEL_POPUP_PHOTO_SRC:
      '../src/assets/images--landing/levelPopUp/beach-popUp.png',
    LEVEL_POPUP_DESCRIPTION:
      'На території з`явилися портали, вони допоможуть швидче переміщатися та відшукувати небезпечні предмети.',
  },
  '05': {
    LEVEL_POPUP_ID: '05',
    LEVEL_POPUP_NUMBER: 'Рівень 5',
    LEVEL_POPUP_TITLE: 'Промисловий об`єкт',
    LEVEL_POPUP_PHOTO_SRC:
      '../src/assets/images--landing/levelPopUp/field-popUp.png',
    LEVEL_POPUP_DESCRIPTION:
      'Прийшов час прогнати клишавого, кусай його і він утече та не буде заважати шукати небезпечні предмети.',
  },
};

const LEVEL_POPUP = `
<div class="endPopUpBg">
  <div class="finish-popUp-wrap">
    <p class="endTitle">{{LEVEL_POPUP_NUMBER}} <br />"{{LEVEL_POPUP_TITLE}}"</p>
    <img
      src="{{LEVEL_POPUP_PHOTO_SRC}}"
      class="level-popUp"
    />
    <p class="level-description">{{LEVEL_POPUP_DESCRIPTION}}</p>
    <button id="btn-start-next-level" class="btn-home btn-start-next-level"></button>
    <button id="btn-back-to-home-popup" class="btn-home btn-to-home">Головна</button>
  </div>
</div>
`;

const getLevelsPopup = () => {
  const levelNumberString
    = window.localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY_LEVEL_NUMBER)
    || '01';

  let innerHtml = LEVEL_POPUP;
  const element = document.createElement('div');

  if (LEVELS_POPUP[levelNumberString]) {
    innerHtml = innerHtml.replace(
      '{{LEVEL_POPUP_NUMBER}}',
      LEVELS_POPUP[levelNumberString].LEVEL_POPUP_NUMBER
    );
    innerHtml = innerHtml.replace(
      '{{LEVEL_POPUP_TITLE}}',
      LEVELS_POPUP[levelNumberString].LEVEL_POPUP_TITLE
    );
    innerHtml = innerHtml.replace(
      '{{LEVEL_POPUP_PHOTO_SRC}}',
      LEVELS_POPUP[levelNumberString].LEVEL_POPUP_PHOTO_SRC
    );
    innerHtml = innerHtml.replace(
      '{{LEVEL_POPUP_DESCRIPTION}}',
      LEVELS_POPUP[levelNumberString].LEVEL_POPUP_DESCRIPTION
    );
  }

  element.innerHTML = innerHtml;
  element.setAttribute('id', 'level-popup');

  const popup = document.getElementById('level-popup');

  if (popup) popup.remove();
  document.getElementById('bg-popUp-start').appendChild(element);

  const btnStartNextLevel = document.getElementById('btn-start-next-level');
  const btnBackHomePopup = document.getElementById('btn-back-to-home-popup');

  if (btnStartNextLevel) {
    btnStartNextLevel.addEventListener('click', () => {
      document.getElementById('background-start').style.display = 'none';
      document.getElementById('collection').style.display = 'none';
      document.getElementById('about-game').style.display = 'none';
      window.loadGame();
      document.getElementById('bg-popUp-start').style.display = 'none';
      document.getElementById('bg-popUp-finish').style.display = 'none';
      document.getElementById('bg-popUp-finish-fail').style.display = 'none';

      const levelNumberString = window.localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY_LEVEL_NUMBER) || '01';

      const gtag = window.gtag ? window.gtag : () => {};

      gtag('event', `${CONSTANTS.NEXT_LEVEL_CLICK}_${levelNumberString}`);
    });
  }
  if (btnBackHomePopup) {
    btnBackHomePopup.addEventListener('click', () => {
      document.getElementById('background-start').style.display = 'block';
      document.getElementById('collection').style.display = 'none';
      document.getElementById('about-game').style.display = 'none';
      window.hideGame();
      document.getElementById('bg-popUp-start').style.display = 'none';
      document.getElementById('bg-popUp-finish').style.display = 'none';
      document.getElementById('bg-popUp-finish-fail').style.display = 'none';
      document.getElementById('bg-popUp-happy-finish').style.display = 'none';
    });
  }
};

export { getLevelsPopup };
