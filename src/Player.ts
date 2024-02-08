import SnakeController from "./SnakeController";

/**
 * The OG abstract class of player.
 */
abstract class Player {
  public sc: SnakeController;
  constructor(sc: SnakeController) {
    this.sc = sc;
  }
  abstract makeTurn(): void;
}

export default Player;
