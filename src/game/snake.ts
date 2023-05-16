import { Bean, beanManager } from "./bean";
export enum Direction {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

export interface Position {
  x: number;
  y: number;
}

export class Snake {
  length: number;
  body: Position[];
  direction: Direction;

  constructor(length: number, position: Position) {
    this.length = length;
    this.direction = Direction.Right;
    this.body = this.initBody(position);
  }

  initBody(position: Position): Position[] {
    const body: Position[] = [];
    for (let i = 0; i < this.length; i++) {
      body.push({ ...position });
      position.x--;
    }
    return body;
  }

  setDirection(direction: Direction) {
    this.direction = direction;
  }

  moveUp(): void {
    const head = { ...this.body[0] };
    head.y--;
    this.body.unshift(head);
    this.body.pop();
  }

  moveDown(): void {
    const head = { ...this.body[0] };
    head.y++;
    this.body.unshift(head);
    this.body.pop();
  }

  moveLeft(): void {
    const head = { ...this.body[0] };
    head.x--;
    this.body.unshift(head);
    this.body.pop();
  }

  moveRight(): void {
    const head = { ...this.body[0] };
    head.x++;
    this.body.unshift(head);
    this.body.pop();
  }

  moveForward() {
    switch (this.direction) {
      case Direction.Up:
        this.moveUp();
        break;
      case Direction.Down:
        this.moveDown();
        break;
      case Direction.Left:
        this.moveLeft();
        break;
      case Direction.Right:
        this.moveRight();
        break;
    }
  }

  getLength(): number {
    return this.length;
  }

  getBody(): Position[] {
    return this.body;
  }

  isHeadOn(bean: Bean) {
    const head = this.body[0];
    return head.x === bean.x && head.y === bean.y;
  }

  eatBean(bean: Bean) {
    // TODO  这里的逻辑应该放到 bean 里面
    // 这样的话 后面可以方便扩展 bean 的类型
    // 这里还需要调整一下 不应该是添加到尾部 就应该改变头部
    this.length++;
    const lastIndex = this.body.length - 1;
    const tail = this.body[lastIndex];
    const preTail = this.body[lastIndex - 1];

    const deltaX = tail.x - preTail.x;
    const deltaY = tail.y - preTail.y;

    const newBodyPart = { x: tail.x + deltaX, y: tail.y + deltaY };
    this.body.push(newBodyPart);

    beanManager.removeBean(bean);
  }
}

export default Snake;
