import { Bean, beanManager } from "./bean";
import { Map } from "./map";
import { Renderer } from "./renderer";
import { Snake, Direction } from "./snake";
import { Ticker } from "./ticker";

interface GameConfig {
  width: number;
  height: number;
  snake: {
    position: { x: number; y: number };
  };
  bean: {
    position: { x: number; y: number };
  };
  speed: number;
}

let snake: Snake;
export function startGame(renderData: number[][], config: GameConfig) {
  beanManager.generateBean({
    x: config.bean.position.x,
    y: config.bean.position.y,
  });
  const map = new Map(config.width, config.height);
  snake = new Snake(3, config.snake.position);
  const renderer = new Renderer(renderData, map, snake);
  const ticker = new Ticker(config.speed);

  ticker.start(() => {
    snake.moveForward();

    const beans = beanManager.getBeans();

    beans.forEach((bean) => {
      if (snake.isHeadOn(bean)) {
        snake.eatBean(bean);
        // 重新生成一个豆子
        // TODO 这里的坐标应该是随机生成的
        beanManager.generateBean({ x: bean.x + 1, y: bean.y + 1 });
      }
    });

    renderer.update();
  });
}

export const setSnakeDirection = (direction: Direction) => {
  snake.setDirection(direction);
};
