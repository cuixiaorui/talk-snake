import { beans, generateRandomBean } from "./bean";
import { Map } from "./map";
import { Player1, Player2, players } from "./player";
import { Renderer } from "./renderer";
import { Position, createSnake, snakes } from "./snake";
import { startTicker, addTicker } from "./ticker";

interface GameConfig {
  width: number;
  height: number;
  snake: {
    position: { x: number; y: number };
  };
  speed: number;
}

export function startGame(renderData: number[][], config: GameConfig) {
  const map = new Map(config.width, config.height);
  joinPlayer1(config.snake.position);
  generateRandomBean(map);
  const renderer = new Renderer(renderData, map);
  startTicker(config.speed);
  addTicker(handleTicker(map, renderer));
}

function handleTicker(map: Map, renderer: Renderer) {
  return () => {
    snakes.forEach((snake) => {
      snake.moveForward();
    });

    snakes.forEach((snake) => {
      beans.forEach((bean) => {
        if (snake.isHeadOn(bean)) {
          snake.eatBean(bean);
          generateRandomBean(map);
        }
      });
    });

    renderer.update();
  };
}
export function joinPlayer1(position: Position) {
  const player1 = new Player1("player1", createSnake(3, position));
  players.push(player1);
}

export function joinPlayer2() {
  const player2 = new Player2("player2", createSnake(3, { x: 3, y: 3 }));
  players.push(player2);
}
