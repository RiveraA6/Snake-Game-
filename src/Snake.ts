// import display from "./display";
import Point from "./Point";
// place your code on line 5 above the export statement below
/** Class representing a snake. */
class Snake {
  private currentDirection: string;
  public color: string;
  public Position: Point;
  /**
   * Create a snake.
   * @param snakecolor - The color of the snake.
   */
  constructor(snakecolor: string) {
    this.Position = new Point(0, 0);
    this.currentDirection = "right";
    this.color = snakecolor;
  }

  /**
   * Slithers the snake for the given number of steps.
   * @param numberOfSteps - The number of steps to slither the snake.
   */
  public move(numberOfSteps: number): void {
    if (this.currentDirection === "right") {
      let oldx = this.Position.X;
      this.Position = new Point(oldx + numberOfSteps, this.Position.Y);
    } else if (this.currentDirection === "left") {
      let oldx = this.Position.X;
      this.Position = new Point(oldx - numberOfSteps, this.Position.Y);
    } else if (this.currentDirection === "up") {
      let oldy = this.Position.Y;
      this.Position = new Point(this.Position.X, oldy + numberOfSteps);
    } else if (this.currentDirection === "down") {
      let oldy = this.Position.Y;
      this.Position = new Point(this.Position.X, oldy - numberOfSteps);
    }
  }

  /**
   * Turns the snake
   * @deprecated may be removed
   */
  public turn(): void {
    if (this.currentDirection === "right") {
      this.currentDirection = "left";
    } else if (this.currentDirection === "left") {
      this.currentDirection = "right";
    }
  }

  /**
   * current of position of the snake
   */
  public get currentXPosition(): number {
    return this.Position.X;
  }
  public get currentYPosition(): number {
    return this.Position.Y;
  }

  public turnLeft(): void {}

  public turnRight(): void {}
}

export default Snake;
