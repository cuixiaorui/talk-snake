import { addTicker, startTicker, stopTicker } from "./ticker";
import { afterEach, expect, describe, vi, it, beforeEach } from "vitest";

describe("Ticker", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    stopTicker();
  });

  it("should call the callback function every interval", () => {
    const ticker = vi.fn();
    addTicker(ticker);

    startTicker(1000);
    vi.advanceTimersByTime(3000);

    expect(ticker).toHaveBeenCalledTimes(3);
  });

  it("should stop calling the callback function after stop", () => {
    const ticker = vi.fn();
    addTicker(ticker);

    startTicker(1000);

    vi.advanceTimersByTime(3000);
    stopTicker();

    vi.advanceTimersByTime(3000);

    expect(ticker).toHaveBeenCalledTimes(3);
  });
});
