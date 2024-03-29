import Player from "./Player";
import Snake from "./Snake";
import WorldModel from "./WorldModel";
import Point from "./Point";
import SnakeController from "./SnakeController";
class AWPlayer extends Player {
  constructor(SnakeController: SnakeController) {
    super(SnakeController);
  }

  /** Makes the snake turn to avoid collision
   *
   */
  makeTurn(): void {
    if (
      this.sc.snakePosition.x === 0 &&
      this.sc.snakeDirection === "left" &&
      this.sc.snakePosition.y < this.sc.snakeWorld.height / 2
    ) {
      this.sc.turnSnakeLeft();
    }
    if (
      this.sc.snakePosition.y === this.sc.snakeWorld.height - 1 &&
      this.sc.snakeDirection === "down" &&
      this.sc.snakePosition.x < this.sc.snakeWorld.width / 2
    ) {
      this.sc.turnSnakeLeft();
    }
    if (
      this.sc.snakePosition.x === this.sc.snakeWorld.width - 1 &&
      this.sc.snakeDirection === "right" &&
      this.sc.snakePosition.y > this.sc.snakeWorld.height / 2
    ) {
      this.sc.turnSnakeLeft();
    }
    if (
      this.sc.snakePosition.y === 0 &&
      this.sc.snakeDirection === "up" &&
      this.sc.snakePosition.x > this.sc.snakeWorld.width / 2
    ) {
      this.sc.turnSnakeLeft();
    }
    if (
      this.sc.snakePosition.y === 0 &&
      this.sc.snakeDirection === "up" &&
      this.sc.snakePosition.x < this.sc.snakeWorld.width / 2
    ) {
      this.sc.turnSnakeRight();
    }
    if (
      this.sc.snakePosition.x === this.sc.snakeWorld.width - 1 &&
      this.sc.snakeDirection === "right" &&
      this.sc.snakePosition.y < this.sc.snakeWorld.height / 2
    ) {
      this.sc.turnSnakeRight();
    }
    if (
      this.sc.snakePosition.y === this.sc.snakeWorld.height - 1 &&
      this.sc.snakeDirection === "down" &&
      this.sc.snakePosition.x > this.sc.snakeWorld.width / 2
    ) {
      this.sc.turnSnakeRight();
    }
    if (
      this.sc.snakePosition.x === 0 &&
      this.sc.snakeDirection === "left" &&
      this.sc.snakePosition.y > this.sc.snakeWorld.height / 2
    ) {
      this.sc.turnSnakeRight();
    }
  }
}
export default AWPlayer;
