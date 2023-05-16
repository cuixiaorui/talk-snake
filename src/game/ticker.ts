let interval;
let intervalId: NodeJS.Timer | undefined;
const tickers: (() => void)[] = [];

export function startTicker(speed: number = 1000) {
  interval = speed;
  intervalId = setInterval(() => {
    tickers.forEach((callback) => {
      callback();
    });
  }, interval);
}

export function addTicker(ticker: () => void) {
  tickers.push(ticker);
}

export function stopTicker() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = undefined;
  }
}
