import SnakeController from "./SnakeController";

/**
 * The OG abstract class of player.
 */
abstract class Player {
  public sc: SnakeController;
  constructor(snake: SnakeController) {
    this.sc = snake;
  }
  abstract makeTurn(): void;
}

export default Player;
