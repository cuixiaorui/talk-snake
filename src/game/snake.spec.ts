import { generateBean } from "./bean";
import {
  Snake,
  Position,
  Direction,
  createSnake,
  snakes,
  getAllSnakeBodies,
} from "./snake";
import { it, expect, describe, beforeEach } from "vitest";

describe("Snake", () => {
  it("should initialize with correct length and body", () => {
    const position: Position = { x: 4, y: 5 };
    let snake = new Snake(3, position);
    expect(snake.getLength()).toBe(3);
    expect(snake.getBody()).toEqual([
      { x: 4, y: 5 },
      { x: 3, y: 5 },
      { x: 2, y: 5 },
    ]);
  });

  describe("move", () => {
    let snake: Snake;
    beforeEach(() => {
      const position: Position = { x: 4, y: 5 };
      snake = new Snake(3, position);
    });
    it("should move up", () => {
      snake.moveUp();
      expect(snake.getBody()).toEqual([
        { x: 4, y: 4 },
        { x: 4, y: 5 },
        { x: 3, y: 5 },
      ]);
    });

    it("should move down", () => {
      snake.moveDown();
      expect(snake.getBody()).toEqual([
        { x: 4, y: 6 },
        { x: 4, y: 5 },
        { x: 3, y: 5 },
      ]);
    });

    it("should move left", () => {
      snake.moveLeft();
      expect(snake.getBody()).toEqual([
        { x: 3, y: 5 },
        { x: 4, y: 5 },
        { x: 3, y: 5 },
      ]);
    });

    it("should move right", () => {
      snake.moveRight();
      expect(snake.getBody()).toEqual([
        { x: 5, y: 5 },
        { x: 4, y: 5 },
        { x: 3, y: 5 },
      ]);
    });
  });

  describe("moveForward", () => {
    let snake: Snake;
    beforeEach(() => {
      const position: Position = { x: 4, y: 5 };
      snake = new Snake(3, position);
    });
    it("should move forward based on the current direction", () => {
      snake.moveForward();
      expect(snake.getBody()).toEqual([
        { x: 5, y: 5 },
        { x: 4, y: 5 },
        { x: 3, y: 5 },
      ]);
    });

    it("should move down when the current direction is down", () => {
      snake.setDirection(Direction.Down);
      snake.moveForward();
      expect(snake.getBody()).toEqual([
        { x: 4, y: 6 },
        { x: 4, y: 5 },
        { x: 3, y: 5 },
      ]);
    });
  });

  describe("eat bean", () => {
    it("should return true when the snake's head is on the bean", () => {
      let snake = new Snake(3, { x: 3, y: 0 });
      const bean = generateBean({ x: 3, y: 0 });
      expect(snake.isHeadOn(bean)).toBe(true);
    });

    it.only("should increase the snake's length by 1 when eating a bean", () => {
      let snake = new Snake(3, { x: 3, y: 0 });
      const bean = generateBean({ x: 3, y: 0 });
      snake.eatBean(bean);
      expect(snake.getBody()).toEqual([
        { x: 3, y: 0 },
        { x: 2, y: 0 },
        { x: 1, y: 0 },
        { x: 0, y: 0 },
      ]);
    });
  });
});

describe("SnakeManager", () => {
  it("should create and add a new snake", () => {
    const snake = createSnake(3, { x: 0, y: 0 });
    expect(snakes).toContain(snake);
  });

  it("should return all bodies of all snakes", () => {
    createSnake(3, { x: 0, y: 0 });
    createSnake(2, { x: 5, y: 5 });

    const allBodies = getAllSnakeBodies();

    expect(allBodies).toEqual([
      { x: 0, y: 0 },
      { x: -1, y: 0 },
      { x: -2, y: 0 },
      { x: 5, y: 5 },
      { x: 4, y: 5 },
    ]);
  });
});
