import IInputHandler from "./IInputHandler";

class LRKeyInputHandler implements IInputHandler {
  private wasLeftArrowPushed: boolean;
  private wasRightArrowPushed: boolean;
  public constructor() {
    this.wasLeftArrowPushed = false;
    this.wasRightArrowPushed = false;
    window.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        console.log("Left arrow key pressed");
        this.wasLeftArrowPushed = true;
      } else if (event.key === "ArrowRight") {
        this.wasRightArrowPushed = true;
        console.log("Right arrow key pressed");
      }
    });
  }

  public madeLeftMove(): boolean {
    return this.wasLeftArrowPushed;
  }
  public madeRightMove(): boolean {
    return this.wasRightArrowPushed;
  }
  public resetLeftMove(): void {
    this.wasLeftArrowPushed = false;
  }
  public resetRightMove(): void {
    this.wasRightArrowPushed = false;
  }
}
export default LRKeyInputHandler;