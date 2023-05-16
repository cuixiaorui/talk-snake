import { Map } from "./map";
import { snakes } from "./snake";
import { Bean, beans } from "./bean";

export class Renderer {
  renderData: number[][];
  map: Map;
  bean: Bean | undefined;

  constructor(renderData: number[][], map: Map) {
    this.map = map;
    this.renderData = renderData;
    this.initRenderData();
    this.render();
  }

  initRenderData() {
    for (let i = 0; i < this.map.height; i++) {
      this.renderData[i] = [...this.map.mapData[i]];
    }
  }

  update() {
    this.clear();
    this.render();
  }

  clear() {
    for (let i = 0; i < this.map.height; i++) {
      for (let j = 0; j < this.map.width; j++) {
        this.renderData[i][j] = 0;
      }
    }
  }

  render() {
    // Render the snake
    snakes.forEach((snake) => {
      for (const position of snake.getBody()) {
        if (
          position.x >= 0 &&
          position.x < this.map.width &&
          position.y >= 0 &&
          position.y < this.map.height
        ) {
          this.renderData[position.y][position.x] = 1;
        }
      }
    });

    // Render the bean

    beans.forEach((bean) => {
      if (
        bean.x >= 0 &&
        bean.x < this.map.width &&
        bean.y >= 0 &&
        bean.y < this.map.height
      ) {
        this.renderData[bean.y][bean.x] = 2; // 2 represents a bean
      }
    });
  }
}
