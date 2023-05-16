import { afterEach, it, expect, describe } from "vitest";
import { Map } from "./map";
import { createSnake, clearSnakes } from "./snake";
import { Renderer } from "./renderer";
import { generateBean } from "./bean";

describe("renderer", () => {
  afterEach(() => {
    clearSnakes();
  });
  it("should rendered map and snake", () => {
    const renderData: any = [];
    const map = new Map(5, 5);
    createSnake(3, {
      x: 3,
      y: 0,
    });
    const renderer = new Renderer(renderData, map);

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
    const snake = createSnake(3, {
      x: 3,
      y: 0,
    });
    const renderer = new Renderer(renderData, map);
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
    const snake = createSnake(3, {
      x: 3,
      y: 0,
    });
    generateBean({ x: 1, y: 1 });
    const renderer = new Renderer(renderData, map);
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
