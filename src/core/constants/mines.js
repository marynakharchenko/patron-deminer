import CONSTANTS from './constants';

const MINES = {
  MON_200: {
    MINE_ID: 'MON_200',
    MINE_PHOTO_SRC: './src/assets/images--landing/mon-200.png',
    MINE_ICON: './src/assets/images--landing/mine-1.svg',
    MINE_NAME: 'МОН–200',
    MINE_FULL_NAME:
      'Протипіхотна осколкова керована міна спрямованої дії “МОН–200”',
    WEIGHT_MINE: 'Зусилля спрацювання: 3,5 кг',
    DISTANCE_MINE: 'Радіус ураження: до 220 м.',
    DESCRIPTION_MINE:
      'Встановлюється на ґрунт чи кріпиться до предметів, маскується рослинністю. '
        + 'Вибух відбувається завдяки пульта управління чи при зачіпленні підривного датчика.',
    MINE_AVAILABLE: false,
  },
  TM_62: {
    MINE_ID: 'TM_62',
    MINE_PHOTO_SRC: './src/assets/images--landing/TM_62.png',
    MINE_ICON: './src/assets/images--landing/mine-2.svg',
    MINE_NAME: 'ТМ-62',
    MINE_FULL_NAME:
      'Фугасна протитанкова міна “ТМ-62”',
    WEIGHT_MINE: 'Зусилля спрацювання: 120 кг',
    DISTANCE_MINE: 'Радіус ураження: 25 м.',
    DESCRIPTION_MINE:
      'Частіше закопана у ґрунт та замаскована рослинністю, може бути '
        + 'розміщена на поверхні ґрунту. Поряд можуть бути встановлені міни-пастки. '
        + 'Вибух відбувається при наїзді на верхню кришку міни.',
    MINE_AVAILABLE: false,
  },
  PFM_1: {
    MINE_ID: 'PFM_1',
    MINE_PHOTO_SRC: './src/assets/images--landing/PFM_1.png',
    MINE_ICON: './src/assets/images--landing/mine-3.svg',
    MINE_NAME: 'ПФМ-1',
    MINE_FULL_NAME:
      'Протипіхотна фугасна міна натискної дії - “метелик”',
    WEIGHT_MINE: 'Зусилля спрацювання: від 5 кг',
    DISTANCE_MINE: 'Радіус ураження: 3 м.',
    DESCRIPTION_MINE:
      'Буває зеленого та коричневого кольору. Для мінування застосовують '
        + 'як наземні, так і повітряні засоби. Вибух проводиться в момент наступання ногою на датчик цілі.'
        + ' Має механізм самоліквідації. ',
    MINE_AVAILABLE: false,
  },
  MON_50: {
    MINE_ID: 'MON_50',
    MINE_PHOTO_SRC: './src/assets/images--landing/MON_50.png',
    MINE_ICON: './src/assets/images--landing/mine-4.svg',
    MINE_NAME: 'МОН-50',
    MINE_FULL_NAME:
      'Осколкова протипіхотна міна направленої дії “МОН-50”',
    WEIGHT_MINE: 'Зусилля спрацювання: від 3.5 кг',
    DISTANCE_MINE: 'Радіус ураження: 85 м.',
    DESCRIPTION_MINE:
      'Міну встановлюють на ґрунт або  кріплять до різних предметів '
        + 'або поверхонь. Маскують рослинністю. Вибух здійснюється оператором з пульта керування або'
        + ' при зачіпанні датчика (у вигляді розтяжки).',
    MINE_AVAILABLE: false,
  },
  PMN_2: {
    MINE_ID: 'PMN_2',
    MINE_PHOTO_SRC: './src/assets/images--landing/PMN_2.png',
    MINE_ICON: './src/assets/images--landing/mine-5.svg',
    MINE_NAME: 'ПМН-2',
    MINE_FULL_NAME:
      'Фугасна протипіхотна міна натискної дії “ПМН-2”',
    WEIGHT_MINE: 'Зусилля спрацювання: від 5 кг',
    DISTANCE_MINE: 'Радіус ураження: 10 м.',
    DESCRIPTION_MINE:
      'Міна може встановлюватися в ґрунт або на поверхню землі.  '
        + 'Маскують рослинністю. Має датчик у вигляді хреста.',
    MINE_AVAILABLE: false,
  },
  OZM_72: {
    MINE_ID: 'OZM_72',
    MINE_PHOTO_SRC: './src/assets/images--landing/OZM_72.png',
    MINE_ICON: './src/assets/images--landing/mine-6.svg',
    MINE_NAME: 'ОЗМ-72',
    MINE_FULL_NAME:
      'Протипіхотна вистрибуюча осколкова міна кругового ураження “ОЗМ-72” (“міна-жаба”)',
    WEIGHT_MINE: 'Зусилля спрацювання: від 3.5 кг',
    DISTANCE_MINE: 'Радіус ураження: 25 м.',
    DESCRIPTION_MINE:
      'Міна встановлюється у ґрунт. Має датчик цілі у вигляді розтяжки. '
        + 'При спрацьовуванні міни бойова частина виштовхується на висоту 0,6-0,8 м після чого відбувається вибух.',
    MINE_AVAILABLE: false,
  },
  PTM_3: {
    MINE_ID: 'PTM_3',
    MINE_PHOTO_SRC: './src/assets/images--landing/PTM_3.png',
    MINE_ICON: './src/assets/images--landing/mine-7.svg',
    MINE_NAME: 'ПТМ-3',
    MINE_FULL_NAME:
      'Кумулятивно-фугасна тротитанкова міна “ПТМ-3”',
    WEIGHT_MINE: 'Cпрацювання: зміна електромагнітнітного поля або положення',
    DISTANCE_MINE: 'Радіус ураження: від 3 м.',
    DESCRIPTION_MINE:
      'Встановлюється на ґрунт, засобами дистанційного мінування. '
        + 'Може зреагувати на метал. Заборонено використовувати засоби зв`язку поряд. '
        + 'Самоліквідовується через 8-24 год.',
    MINE_AVAILABLE: false,
  },
  POM_3: {
    MINE_ID: 'POM_3',
    MINE_PHOTO_SRC: './src/assets/images--landing/POM_3.png',
    MINE_ICON: './src/assets/images--landing/mine-8.svg',
    MINE_NAME: 'ПОМ-3',
    MINE_FULL_NAME:
      'Осколкова протипіхотна міна натяжної дії кругового ураження “ПОМ-3”',
    WEIGHT_MINE: 'Зусилля спрацювання: від 3.5 кг',
    DISTANCE_MINE: 'Радіус ураження: 8-13 м.',
    DESCRIPTION_MINE:
      'Встановлюється на ґрунт, засобами дистанційного встановлення. '
        + 'Має сейсмічний датчик цілі, який спрацьовує на вагу людини й амплітуду її кроків.',
    MINE_AVAILABLE: false,
  },
  RGD_5: {
    MINE_ID: 'RGD_5',
    MINE_PHOTO_SRC: './src/assets/images--landing/RGD_5.png',
    MINE_ICON: './src/assets/images--landing/mine-9.svg',
    MINE_NAME: 'РГД-5',
    MINE_FULL_NAME:
      'Ручна протипіхотна уламкова граната “РГД-5”',
    WEIGHT_MINE: 'Спрацювання: висмикування чеки із запала.',
    DISTANCE_MINE: 'Радіус ураження: 30 м.',
    DESCRIPTION_MINE:
      'Основне призначення - ураження особового складу супротивника '
        + 'уламками корпусу. Зустрічаються випадки встановлення гранати на розтяжку.',
    MINE_AVAILABLE: false,
  },
  F_1: {
    MINE_ID: 'F_1',
    MINE_PHOTO_SRC: './src/assets/images--landing/F_1.png',
    MINE_ICON: './src/assets/images--landing/mine-10.svg',
    MINE_NAME: 'Ф-1',
    MINE_FULL_NAME:
      'Ручна осколкова граната “Ф-1”',
    WEIGHT_MINE: 'Спрацювання: висмикування чеки із запала.',
    DISTANCE_MINE: 'Радіус ураження: 150 м.',
    DESCRIPTION_MINE:
      'Граната оборонної дії (радіус ураження перевищує радіус кидка). '
        + 'Можна виявити у місцях ведення бойових дій. Зустрічаються випадку встановлення гранати на розтяжку.',
    MINE_AVAILABLE: false,
  },
  RGO: {
    MINE_ID: 'RGO',
    MINE_PHOTO_SRC: './src/assets/images--landing/RGO.png',
    MINE_ICON: './src/assets/images--landing/mine-11.svg',
    MINE_NAME: 'РГО',
    MINE_FULL_NAME:
      'Ручна протипіхотна оборонна ударно-дистанційна граната «РГО»',
    WEIGHT_MINE: 'Спрацювання: зіткнення гранати з твердою поверхнею; '
        + 'самоліквідація через 3,2-4,2 сек після відпускання запобіжного важеля.',
    DISTANCE_MINE: 'Радіус ураження: до 100 м.',
    DESCRIPTION_MINE:
      'Можна виявити у місцях ведення бойових дій та на покинутих військових '
        + 'позиціях. Зустрічаються випадку встановлення гранати на розтяжку.',
    MINE_AVAILABLE: false,
  },
  TMK_2: {
    MINE_ID: 'TMK_2',
    MINE_PHOTO_SRC: './src/assets/images--landing/TMK_2.png',
    MINE_ICON: './src/assets/images--landing/mine-12.svg',
    MINE_NAME: 'ТМК-2',
    MINE_FULL_NAME:
      'Протитанкова кумулятивна міна “ТМК-2”',
    WEIGHT_MINE: 'Спрацювання: нахил датчика цілі на 24-36 градусів ',
    DISTANCE_MINE: 'Радіус ураження: 25 м.',
    DESCRIPTION_MINE:
      'Встановлюється вручну  шляхом закопування в ґрунт, маскується рослинністю.'
        + ' Можна виявити біля доріг у місцях ведення бойових дій та на покинутих військових позиціях.',
    MINE_AVAILABLE: false,
  },
  PTM_1: {
    MINE_ID: 'PTM_1',
    MINE_PHOTO_SRC: './src/assets/images--landing/PTM_1.png',
    MINE_ICON: './src/assets/images--landing/mine-13.svg',
    MINE_NAME: 'ПТМ-1',
    MINE_FULL_NAME:
      'Касетна протитанкова міна “ПТМ-1”',
    WEIGHT_MINE: 'Зусилля спрацювання: від 200 кг',
    DISTANCE_MINE: 'Радіус ураження: 10 м.',
    DESCRIPTION_MINE:
      'Мінування проводиться за допомогою реактивних систем залпового вогню. '
        + 'Складається із поліетиленового корпусу всередині якого знаходиться вибухова рідина. '
        + 'Самоліквідовується через 3 - 40 год.',
    MINE_AVAILABLE: false,
  },
  POMZ_2M: {
    MINE_ID: 'POMZ_2M',
    MINE_PHOTO_SRC: './src/assets/images--landing/POMZ_2M.png',
    MINE_ICON: './src/assets/images--landing/mine-14.svg',
    MINE_NAME: 'ПОМЗ-2М',
    MINE_FULL_NAME:
      'Протипіхотна міна “ПОМЗ-2М”',
    WEIGHT_MINE: 'Зусилля спрацювання: 0,5-1 кг',
    DISTANCE_MINE: 'Радіус ураження: 10 м.',
    DESCRIPTION_MINE:
      'Встановлюється вручну на вбитий у ґрунт дерев`яний кілок. '
        + 'Вибух відбувається коли людина зачепившись ногою за дротяну розтяжку, висмикне бойову чеку.',
    MINE_AVAILABLE: false,
  },
  PMN: {
    MINE_ID: 'PMN',
    MINE_PHOTO_SRC: './src/assets/images--landing/PMN.png',
    MINE_ICON: './src/assets/images--landing/mine-15.svg',
    MINE_NAME: 'ПМН',
    MINE_FULL_NAME:
      'Фугасна протипіхотна  міна натискної дії “ПМН”',
    WEIGHT_MINE: 'Зусилля спрацювання: 8-25 кг',
    DISTANCE_MINE: 'Радіус ураження: 10 м.',
    DESCRIPTION_MINE:
      'Зазвичай закопана у ґрунт, замаскована рослинністю. Вибух '
        + 'відбувається коли людина наступає ногою на кришку міни.',
    MINE_AVAILABLE: false,
  },
  N210: {
    MINE_ID: 'N210',
    MINE_PHOTO_SRC: './src/assets/images--landing/N210.png',
    MINE_ICON: './src/assets/images--landing/mine-16.svg',
    MINE_NAME: '9Н210',
    MINE_FULL_NAME:
      'Осколково-фугасний касетний бойовий елемент “9Н210”',
    WEIGHT_MINE: 'Самоліквідація: через 110 сек.(інколи можуть здетонувати не одразу)',
    DISTANCE_MINE: 'Радіус ураження: 35 м.',
    DESCRIPTION_MINE:
      'Нашпигований сотнями металевих роликів, які під час вибуху '
        + 'здатні пробити сталеву пластину товщиною 6 мм. Можуть знаходитися на поверхні ґрунту, '
        + 'у випадку не спрацювання бойового елемента.',
    MINE_AVAILABLE: false,
  },
  VOG_25: {
    MINE_ID: 'VOG_25',
    MINE_PHOTO_SRC: './src/assets/images--landing/VOG_25.png',
    MINE_ICON: './src/assets/images--landing/mine-17.svg',
    MINE_NAME: 'ВОГ-25',
    MINE_FULL_NAME:
      'Осколковий боєприпас 40 мм для підствольних гранатометів “ВОГ-25”',
    WEIGHT_MINE: 'Самоліквідація: понад 14 сек. (інколи можуть не здетонувати одразу) ',
    DISTANCE_MINE: 'Радіус ураження: 25 м.',
    DESCRIPTION_MINE:
      'Поєднує в собі гранату і метальний заряд у гільзі. У разі не спрацювання '
        + 'глибина проникнення у ґрунт може становити близько 10 см. Переважно можна виявити в місцях ведення бойових дій.',
    MINE_AVAILABLE: false,
  },
  MINOMETNA_MINA: {
    MINE_ID: 'MINOMETNA_MINA',
    MINE_PHOTO_SRC: './src/assets/images--landing/MINOMETNA_MINA.png',
    MINE_ICON: './src/assets/images--landing/mine-18.svg',
    MINE_NAME: 'Мінометна міна',
    MINE_FULL_NAME:
      'Мінометна міна 82 мм',
    WEIGHT_MINE: 'Радіус суцільного ураження: до 30 м.',
    DISTANCE_MINE: 'Розліт уламків: до 100-150 м.',
    DESCRIPTION_MINE:
      'У разі не спрацювання снаряду, глибина проникнення у ґрунт '
        + 'становить до 1 м. Має характерне оперення, що виконує роль стабілізатора.',
    MINE_AVAILABLE: false,
  },
  FAB_500: {
    MINE_ID: 'FAB_500',
    MINE_PHOTO_SRC: './src/assets/images--landing/FAB_500.png',
    MINE_ICON: './src/assets/images--landing/mine-19.svg',
    MINE_NAME: 'ФАБ-500',
    MINE_FULL_NAME:
      'Авіаційна бомба “ФАБ-500”',
    WEIGHT_MINE: 'Радіус значного ураження: до 40 м.',
    DISTANCE_MINE: 'Розліт уламків: до 1470 м.',
    DESCRIPTION_MINE:
      'Вражає цілі дією продуктів вибуху, осколками корпусу та '
        + 'повітряною ударною хвилею. Мають вибухник сповільненої дії.',
    MINE_AVAILABLE: false,
  },
  ROCKET: {
    MINE_ID: 'ROCKET',
    MINE_PHOTO_SRC: './src/assets/images--landing/ROCKET.png',
    MINE_ICON: './src/assets/images--landing/mine-20.svg',
    MINE_NAME: 'Залишки ракети',
    MINE_FULL_NAME:
      'Залишки ракети',
    WEIGHT_MINE: '',
    DISTANCE_MINE: '',
    DESCRIPTION_MINE:
      'Мають стабілізатори у вигляді відкидного оперення та реактивні двигуни. '
        + 'Наближатися та чіпати боєприпаси небезпечно.',
    MINE_AVAILABLE: false,
  },
  PG_7V: {
    MINE_ID: 'PG_7V',
    MINE_PHOTO_SRC: './src/assets/images--landing/PG_7V.png',
    MINE_ICON: './src/assets/images--landing/mine-21.svg',
    MINE_NAME: 'ПГ-7В',
    MINE_FULL_NAME:
      'Кумулятивний гранатометний снаряд “ПГ-7В” 70,5 мм',
    WEIGHT_MINE: '',
    DISTANCE_MINE: 'Радіус ураження: 10 м.',
    DESCRIPTION_MINE:
      'У разі не спрацювання боєприпасу глибина проникнення у ґрунт може становити близько 50 см. '
        + 'Забороняється зрушувати з місця через можливість спрацювання снаряду, або наявність міни-пастки поряд.',
    MINE_AVAILABLE: false,
  },
  SHELL_TANK: {
    MINE_ID: 'SHELL_TANK',
    MINE_PHOTO_SRC: './src/assets/images--landing/SHELL_TANK.png',
    MINE_ICON: './src/assets/images--landing/mine-22.svg',
    MINE_NAME: 'Танковий снаряд',
    MINE_FULL_NAME:
      'Кумулятивний танковий снаряд 125 мм',
    WEIGHT_MINE: '',
    DISTANCE_MINE: 'Радіус ураження: 15 м.',
    DESCRIPTION_MINE:
      'У разі не спрацювання боєприпасу глибина проникнення у ґрунт може становити близько 2 м. '
        + 'Можна виявити на поверхні ґрунту у місцях ведення бойових дій.',
    MINE_AVAILABLE: false,
  },
  ARTILLERY_SHELL: {
    MINE_ID: 'ARTILLERY_SHELL',
    MINE_PHOTO_SRC: './src/assets/images--landing/ARTILLERY_SHELL.png',
    MINE_ICON: './src/assets/images--landing/mine-23.svg',
    MINE_NAME: 'Aртснаряд',
    MINE_FULL_NAME:
      'Осколково-фугасний артснаряд 122 мм',
    WEIGHT_MINE: '',
    DISTANCE_MINE: 'Радіус ураження: 15 м.',
    DESCRIPTION_MINE:
      'У разі не спрацювання боєприпасу глибина проникнення у '
        + 'ґрунт може становити близько 2 м. Можна виявити на поверхні ґрунту у місцях ведення бойових дій.',
    MINE_AVAILABLE: false,
  },
  NAVAL_MINE: {
    MINE_ID: 'NAVAL_MINE',
    MINE_PHOTO_SRC: './src/assets/images--landing/NAVAL_MINE.png',
    MINE_ICON: './src/assets/images--landing/mine-24.svg',
    MINE_NAME: 'Морська міна',
    MINE_FULL_NAME:
            'Морська міна',
    WEIGHT_MINE: '',
    DISTANCE_MINE: '',
    DESCRIPTION_MINE:
            'Поділяються на якірні, донні і плаваючі. Встановлюється у воді, '
        + 'призначена для ураження підводних човнів, надводних кораблів і суден, '
        + 'а також ускладнення їх плавання. Може виноситися на берег штормом.',
    MINE_AVAILABLE: false,
  },
  MINE_SURPRISE: {
    MINE_ID: 'MINE_SURPRISE',
    MINE_PHOTO_SRC: './src/assets/images--landing/MINE_SURPRISE.png',
    MINE_ICON: './src/assets/images--landing/mine-25.svg',
    MINE_NAME: 'Міна-сюрприз',
    MINE_FULL_NAME:
      'Міна-сюрприз',
    WEIGHT_MINE: '',
    DISTANCE_MINE: '',
    DESCRIPTION_MINE:
      'Маскується під безпечний предмет, здатний привернути увагу. Це може бути: '
        + 'коштовні речі, сумка, пакет, телефон, іграшка, зброя, пляшки. Зарононено чіпати та зрушувати. ',
    MINE_AVAILABLE: false,
  },
};

const availableMinesString = window.localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY) || '';

availableMinesString.split(',').forEach((mineId) => {
  if (MINES[mineId]) MINES[mineId].MINE_AVAILABLE = true;
});

const MINES_POPUP = `
<div class="popUpMineWrap">
    <div class="overlay"></div>
    <div class="mine-pop-up-wrap">
        <button id="close-mine-popup" class="close-pop-up"></button>
        <div class="pop-up-content">
            <img src="{{MINE_PHOTO_SRC}}" alt="{{MINE_NAME}}">
            <p class="mine-full-name">{{MINE_FULL_NAME}}</p>
            <p class="weight-mine">{{WEIGHT_MINE}}</p>
            <p class="distance-mine">{{DISTANCE_MINE}}</p>
            <p class="description-mine">{{DESCRIPTION_MINE}}</p>
        </div>
    </div>
</div>
`;

const getMinePopup = (mineName) => {
  let innerHtml = MINES_POPUP;
  const element = document.createElement('div');

  if (MINES[mineName]) {
    innerHtml = innerHtml.replace('{{MINE_PHOTO_SRC}}', MINES[mineName].MINE_PHOTO_SRC);
    innerHtml = innerHtml.replace('{{MINE_NAME}}', MINES[mineName].MINE_NAME);
    innerHtml = innerHtml.replace('{{MINE_FULL_NAME}}', MINES[mineName].MINE_FULL_NAME);
    innerHtml = innerHtml.replace('{{WEIGHT_MINE}}', MINES[mineName].WEIGHT_MINE);
    innerHtml = innerHtml.replace('{{DISTANCE_MINE}}', MINES[mineName].DISTANCE_MINE);
    innerHtml = innerHtml.replace('{{DESCRIPTION_MINE}}', MINES[mineName].DESCRIPTION_MINE);
  }

  element.innerHTML = innerHtml;
  element.setAttribute('id', 'mine-popup');

  const popup = document.getElementById('mine-popup');

  if (popup) popup.remove();
  document.querySelector('.collections').appendChild(element);

  const popupClose = document.getElementById('close-mine-popup');

  if (popupClose) popupClose.addEventListener('click', () => element.remove());
};

const MINES_LIST = `
<div class="mine-item">
    <img src="{{MINE_ICON}}" alt="{{MINE_ID}}" class="mine {{MINE_AVAILABLE}}">
    <div class="name-title-wrap">
        <p class="mine-name mine-name--disable">{{MINE_NAME}}</p>
        <div class="info-icon"></div>
    </div>
</div>
`;

const getMinesList = () => {
  document.getElementById('mines-list').innerHTML = '';

  Object.keys(MINES).forEach((key) => {
    let innerHTML = MINES_LIST;
    const element = document.createElement('div');

    innerHTML = innerHTML.replace('{{MINE_ID}}', MINES[key].MINE_ID);
    innerHTML = innerHTML.replace('{{MINE_NAME}}', MINES[key].MINE_NAME);
    innerHTML = innerHTML.replace('{{MINE_ICON}}', MINES[key].MINE_ICON);
    innerHTML = innerHTML.replace('{{MINE_AVAILABLE}}', MINES[key].MINE_AVAILABLE ? '' : 'mine--disable');
    element.innerHTML = innerHTML;
    element.addEventListener('click', () => getMinePopup(key));
    document.getElementById('mines-list').appendChild(element);
  });
};

export { getMinesList, MINES };
