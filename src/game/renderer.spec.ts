import { it, expect, describe } from "vitest";
import { Map } from "./map";
import { Snake } from "./snake";
import { Renderer } from "./renderer";
import { Bean, beanManager } from "./bean";

describe("renderer", () => {
  it("should rendered map and snake", () => {
    const renderData: any = [];
    const map = new Map(5, 5);
    const snake = new Snake(3, {
      x: 3,
      y: 0,
    });
    const renderer = new Renderer(renderData, map, snake);

    expect(renderer.renderData).toEqual([
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
  });

  it("should update render data when snake's data is changed", () => {
    const renderData: any = [];
    const map = new Map(5, 5);
    const snake = new Snake(3, {
      x: 3,
      y: 0,
    });
    const renderer = new Renderer(renderData, map, snake);
    snake.moveRight();
    renderer.update();

    expect(renderer.renderData).toEqual([
      [0, 0, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
  });

  it("should correctly update render data to include the bean", () => {
    const renderData: any = [];
    const map = new Map(5, 5);
    const snake = new Snake(3, {
      x: 3,
      y: 0,
    });
    beanManager.generateBean({ x: 1, y: 1 });
    const renderer = new Renderer(renderData, map, snake);
    snake.moveRight();
    renderer.update();

    expect(renderer.renderData).toEqual([
      [0, 0, 1, 1, 1],
      [0, 2, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
  });
});
