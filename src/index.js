import './style.css';
import './script';
import Application from './core/app/Application';

document.addEventListener('DOMContentLoaded', () => {
  const app = new Application();

  window.loadGame = () => app.loadGame();
  window.hideGame = () => app.hideGame();
});
