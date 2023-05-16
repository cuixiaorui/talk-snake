import { vi, beforeEach, describe, it, expect } from "vitest";
import { startGame } from "./game";

describe("startGame", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  it("should initiate a game with given parameters and update the renderData accordingly", () => {
    const renderData: number[][] = [];
    startGame(renderData, {
      width: 5,
      height: 5,
      snake: {
        position: {
          x: 3,
          y: 0,
        },
      },
      bean:{
        position:{
          x:1,
          y:1
        }
      },
      speed: 1000,
    });

    expect(renderData).toEqual([
      [0, 1, 1, 1, 0],
      [0, 2, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);

    vi.advanceTimersByTime(1000);

    expect(renderData).toEqual([
      [0, 0, 1, 1, 1],
      [0, 2, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
  });

});
