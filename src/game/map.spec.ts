import { Map } from "./map";
import { it, expect, describe } from "vitest";

describe("Map", () => {
  it("should initialize mapData with all zeros", () => {
    const map = new Map(5, 5);
    expect(map.mapData).toEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
  });
});
