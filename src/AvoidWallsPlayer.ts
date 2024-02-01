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
      this.sc.snakeDirection == "left" &&
      this.sc.snakePosition.y < this.sc.snakeWorld.height
    ) {
      this.sc.turnSnakeLeft();
    }
    if (
      this.sc.snakePosition.y === this.sc.snakeWorld.height &&
      this.sc.snakeDirection == "down" &&
      this.sc.snakePosition.x > 0
    ) {
      this.sc.turnSnakeLeft();
    }
    if (
      this.sc.snakePosition.x === this.sc.snakeWorld.width &&
      this.sc.snakeDirection == "right" &&
      this.sc.snakePosition.y > 0
    ) {
      this.sc.turnSnakeLeft();
    }
    if (
      this.sc.snakePosition.y === 0 &&
      this.sc.snakeDirection == "up" &&
      this.sc.snakePosition.x < this.sc.snakeWorld.width
    ) {
      this.sc.turnSnakeLeft();
    }
  }
}
export default AWPlayer;
