import { Ticker } from "./ticker";
import { expect, describe, vi, it, beforeEach } from "vitest";

describe("Ticker", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it("should call the callback function every interval", () => {
    const callback = vi.fn();
    const timer = new Ticker(1000);
    timer.start(callback);

    vi.advanceTimersByTime(3000);

    expect(callback).toHaveBeenCalledTimes(3);
  });

  it("should stop calling the callback function after stop", () => {
    const callback = vi.fn();
    const timer = new Ticker(1000);
    timer.start(callback);

    vi.advanceTimersByTime(3000);
    timer.stop();
    vi.advanceTimersByTime(3000);

    expect(callback).toHaveBeenCalledTimes(3);
  });
});
