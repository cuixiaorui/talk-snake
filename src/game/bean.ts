import { Position, getAllSnakeBodies } from "./snake";
import { Map } from "./map";

export const beans: Bean[] = [];

export function generateBean(position: Position): Bean {
  const bean = new Bean(position.x, position.y);
  beans.push(bean);
  return bean;
}

export function generateRandomBean(map: Map) {
  let beanPosition: Position;
  while (true) {
    const randomX = Math.floor(Math.random() * map.width);
    const randomY = Math.floor(Math.random() * map.height);
    beanPosition = { x: randomX, y: randomY };

    // 检查生成的豆子是否在蛇的身体上
    const isOnSnakeBody = getAllSnakeBodies().some(
      (bodyPart) =>
        bodyPart.x === beanPosition.x && bodyPart.y === beanPosition.y
    );
    if (!isOnSnakeBody) break;
  }

  return generateBean(beanPosition);
}

export function clearBeans(): void {
  for (let i = beans.length - 1; i >= 0; i--) {
    beans.splice(i, 1);
  }
}

export function removeBean(bean: Bean): void {
  const index = beans.findIndex((b) => b.x === bean.x && b.y === bean.y);
  if (index !== -1) {
    beans.splice(index, 1);
  }
}

export class Bean {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
