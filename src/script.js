import { getMinesList } from './core/constants/mines';

window.onload = () => {
  getMinesList();

  document.getElementById('btn-start').onclick = () => {
    document.getElementById('background-start').style.display = 'none';
    window.loadGame();
  }
};
