import Player from "./Player";
import SnakeController from "./SnakeController";
import inputHandler from "./IInputHandler";

class HumanPlayer extends Player {
  private inputHandler_: inputHandler;
  constructor(SnakeController: SnakeController, inputHandler: inputHandler) {
    super(SnakeController);
    this.inputHandler_ = inputHandler;
  }
  makeTurn(): void {
    if (this.inputHandler_.madeLeftMove()) {
      this.sc.turnSnakeLeft();
      this.inputHandler_.resetLeftMove();
    } else if (this.inputHandler_.madeRightMove()) {
      this.sc.turnSnakeRight();
      this.inputHandler_.resetRightMove();
    }
  }
}

export default HumanPlayer;
