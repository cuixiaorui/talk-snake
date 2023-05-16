import { Snake, Direction } from "./snake";

export class BasePlayer {
  snake: Snake;
  name: string;

  constructor(name: string, snake: Snake) {
    this.name = name;
    this.snake = snake;
  }

  controlSnake(direction: Direction) {
    this.snake.setDirection(direction);
  }
}

export const players: BasePlayer[] = [];

export function createPlayer(name: string, snake: Snake) {
  const player = new BasePlayer(name, snake);
  players.push(player);
  return player;
}

export class Player1 extends BasePlayer {
  constructor(name: string, snake: Snake) {
    super(name, snake);
    this.initEventHandler();
  }

  private initEventHandler() {
    window.addEventListener("keydown", (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          this.controlSnake(Direction.Up);
          break;
        case "ArrowDown":
          this.controlSnake(Direction.Down);
          break;
        case "ArrowLeft":
          this.controlSnake(Direction.Left);
          break;
        case "ArrowRight":
          this.controlSnake(Direction.Right);
          break;
      }
    });
  }
}

export class Player2 extends BasePlayer {
  constructor(name: string, snake: Snake) {
    super(name, snake);
    this.initEventHandler();
  }

  private initEventHandler() {
    window.addEventListener("keydown", (e: KeyboardEvent) => {
      switch (e.key) {
        case "w":
        case "W":
          this.controlSnake(Direction.Up);
          break;
        case "s":
        case "S":
          this.controlSnake(Direction.Down);
          break;
        case "a":
        case "A":
          this.controlSnake(Direction.Left);
          break;
        case "d":
        case "D":
          this.controlSnake(Direction.Right);
          break;
      }
    });
  }
}
