import CONSTANTS from './core/constants/constants';
import { getMinesList } from './core/constants/mines';
import { getLevelsPopup } from './core/constants/levelsPopup';

window.onload = () => {
  getLevelsPopup();

  document.querySelectorAll('.btn-donate').forEach((bd) => {
    bd.onclick = () => {
      window.open(CONSTANTS.DONATE_URL, '_blank');
    };
  });
  document.querySelectorAll('.btn-donate-popup').forEach((bdp) => {
    bdp.onclick = () => {
      window.open(CONSTANTS.DONATE_URL, '_blank');
    };
  });

  document.getElementById('upArrowIcon').onclick = () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowUp' }));
    document.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowUp' }));
  };
  document.getElementById('downArrowIcon').onclick = () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowDown' }));
    document.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowDown' }));
  };
  document.getElementById('leftArrowIcon').onclick = () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowLeft' }));
    document.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowLeft' }));
  };
  document.getElementById('rightArrowIcon').onclick = () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowRight' }));
    document.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowRight' }));
  };
  document.getElementById('actionIconsFlag').onclick = () => {
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Space' }));
    document.dispatchEvent(new KeyboardEvent('keyup', { code: 'Space' }));
  };

  document.getElementById('btn-start').onclick = () => {
    document.getElementById('background-start').style.display = 'none';
    document.getElementById('collection').style.display = 'none';
    document.getElementById('about-game').style.display = 'none';
    window.hideGame();
    document.getElementById('bg-popUp-start').style.display = 'block';
    document.getElementById('bg-popUp-finish').style.display = 'none';
    document.getElementById('bg-popUp-finish-fail').style.display = 'none';
  };

  document.getElementById('btn-collection').onclick = () => {
    getMinesList();

    document.getElementById('background-start').style.display = 'none';
    document.getElementById('collection').style.display = 'block';
    document.getElementById('about-game').style.display = 'none';
    window.hideGame();
    document.getElementById('bg-popUp-start').style.display = 'none';
    document.getElementById('bg-popUp-finish').style.display = 'none';
    document.getElementById('bg-popUp-finish-fail').style.display = 'none';
  };

  document.getElementById('btn-about-game').onclick = () => {
    document.getElementById('background-start').style.display = 'none';
    document.getElementById('collection').style.display = 'none';
    document.getElementById('about-game').style.display = 'block';
    window.hideGame();
    document.getElementById('bg-popUp-start').style.display = 'none';
    document.getElementById('bg-popUp-finish').style.display = 'none';
    document.getElementById('bg-popUp-finish-fail').style.display = 'none';
  };

  document.getElementById('btn-next-level').onclick = () => {
    getLevelsPopup();
    document.getElementById('background-start').style.display = 'none';
    document.getElementById('collection').style.display = 'none';
    document.getElementById('about-game').style.display = 'none';
    document.getElementById('bg-popUp-start').style.display = 'block';
    document.getElementById('bg-popUp-finish').style.display = 'none';
    document.getElementById('bg-popUp-finish-fail').style.display = 'none';
  };

  document.getElementById('bg-popUp-finish-fail').onclick = () => {
    getLevelsPopup();
    document.getElementById('background-start').style.display = 'none';
    document.getElementById('collection').style.display = 'none';
    document.getElementById('about-game').style.display = 'none';
    document.getElementById('bg-popUp-start').style.display = 'block';
    document.getElementById('bg-popUp-finish').style.display = 'none';
    document.getElementById('bg-popUp-finish-fail').style.display = 'none';
  };
};
