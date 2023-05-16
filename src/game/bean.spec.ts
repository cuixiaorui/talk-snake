import { afterEach, vi, it, expect, describe } from "vitest";
import {
  beans,
  clearBeans,
  generateBean,
  generateRandomBean,
  removeBean,
} from "./bean";
import { Map } from "./map";
import { Snake, createSnake } from "./snake";

describe("Bean", () => {
  afterEach(() => {
    clearBeans();
  });
  it("should be able to generate and manage beans", () => {
    generateBean({ x: 2, y: 3 });
    expect(beans.length).toBe(1);
    expect(beans[0].x).toBe(2);
    expect(beans[0].y).toBe(3);
  });

  it("should be able to remove a specific bean", () => {
    const bean = generateBean({ x: 2, y: 3 });
    expect(beans.length).toBe(1);
    removeBean(bean);
    expect(beans.length).toBe(0);
  });

  it.only("should generate a bean at a random position not on the snake body and within map boundaries", () => {
    vi.spyOn(Math, "random").mockImplementation(() => 0.1);
    const map = new Map(5, 5);
    const snake = new Snake(2, { x: 2, y: 2 }); // 蛇占据了地图的中心位置
    createSnake(2, {
      x: 2,
      y: 2,
    });
    const bean = generateRandomBean(map);

    expect(bean.x).toBeGreaterThanOrEqual(0);
    expect(bean.x).toBeLessThan(map.width);
    expect(bean.y).toBeGreaterThanOrEqual(0);
    expect(bean.y).toBeLessThan(map.height);

    const isOnSnakeBody = snake
      .getBody()
      .some((bodyPart) => bodyPart.x === bean.x && bodyPart.y === bean.y);
    expect(isOnSnakeBody).toBe(false);

    expect(snake.body[0]).not.toEqual({ x: bean.x, y: bean.y });
    expect(snake.body[1]).not.toEqual({ x: bean.x, y: bean.y });
  });
});
