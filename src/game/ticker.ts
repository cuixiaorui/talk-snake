// timer.ts
export class Ticker {
  interval: number;
  intervalId?: NodeJS.Timer;

  constructor(interval: number) {
    this.interval = interval;
  }

  start(callback: () => void) {
    this.intervalId = setInterval(callback, this.interval);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }
}

