import getLevelSettings from '../constants/levels';

export default class Timer {
  constructor() {
    const { LEVEL_SECONDS } = getLevelSettings();

    this._levelSeconds = LEVEL_SECONDS;
    this._createText();
  }

  get minutesLeft() {
    return Math.floor(this._levelSeconds / 60);
  }

  get secondsLeft() {
    const seconds = this._levelSeconds - (this.minutesLeft * 60);

    if (seconds < 10) return `0${seconds}`;

    return seconds;
  }

  start(onCountDownEnd) {
    // Start an interval to countdown the seconds
    this.countDown = setInterval(() => {
      if (this._levelSeconds === 0) {
        onCountDownEnd();

        return this.stop();
      }

      this._levelSeconds -= 1;

      document.getElementById('scoreBoardTimerMinutes').innerText = String(this.minutesLeft);
      document.getElementById('scoreBoardTimerSeconds').innerText = String(this.secondsLeft);

      return this._levelSeconds;
    }, 1000);
  }

  stop() {
    // Clear the current interval
    clearInterval(this.countDown);
  }

  restart() {
    const { LEVEL_SECONDS } = getLevelSettings();
    // Restart the timer

    this.stop();
    this._levelSeconds = LEVEL_SECONDS;
    this.start();
  }

  _createText() {
    document.getElementById('scoreBoardTimerMinutes').innerText = String(this.minutesLeft);
    document.getElementById('scoreBoardTimerSeconds').innerText = String(this.secondsLeft);
  }
}
