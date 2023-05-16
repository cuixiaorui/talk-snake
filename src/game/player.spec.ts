import { createPlayer } from "./player";
import { it, expect, describe } from "vitest";
import { Snake, Direction } from "./snake";

describe("Player", () => {
  it("should be able to control a snake", () => {
    const snake = new Snake(3, { x: 0, y: 0 });
    const player = createPlayer("cxr", snake);

    player.controlSnake(Direction.Up);
    expect(snake.direction).toBe(Direction.Up);
  });
});
