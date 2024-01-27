// import display from "./display";
import Point from "./Point";
// place your code on line 5 above the export statement below
/** Class representing a snake. */
class Snake {
  private Direction: string;
  public Color: string;
  private Position: Point;

  /**
   * Create a snake.
   * @param snakecolor - The color of the snake.
   */
  constructor(snakecolor: string) {
    this.Position = new Point(0, 0);
    this.Direction = "right";
    this.Color = snakecolor;
  }

  /**
   * coordinates of the snakes position
   */
  public get position() {
    return this.Position;
  }

  /**
   * The direction the snake is facing
   */
  public get direction(): string {
    return this.Direction;
  }

  /**
   * Slithers the snake for the given number of steps.
   * @param numberOfSteps - The number of steps to slither the snake.
   */
  public move(numberOfSteps: number): void {
    if (this.Direction === "right") {
      let oldx = this.Position.x;
      this.Position = new Point(oldx + numberOfSteps, this.Position.y);
    } else if (this.Direction === "left") {
      let oldx = this.Position.x;
      this.Position = new Point(oldx - numberOfSteps, this.Position.y);
    } else if (this.Direction === "up") {
      let oldy = this.Position.y;
      this.Position = new Point(this.Position.x, oldy - numberOfSteps);
    } else if (this.Direction === "down") {
      let oldy = this.Position.y;
      this.Position = new Point(this.Position.x, oldy + numberOfSteps);
    }
  }

  /**
   * Turns the snake
   * @deprecated may be removed
   */
  public turn(): void {
    if (this.Direction === "right") {
      this.Direction = "left";
    } else if (this.Direction === "left") {
      this.Direction = "right";
    }
  }

  /**
   * make snake turn left.
   */
  public turnLeft(): void {
    if (this.Direction === "right") {
      this.Direction = "up";
    } else if (this.Direction === "up") {
      this.Direction = "left";
    } else if (this.Direction === "left") {
      this.Direction = "down";
    } else if (this.Direction === "down") {
      this.Direction = "right";
    }
  }

  /**
   * make snake turn right.
   */
  public turnRight(): void {
    if (this.Direction === "right") {
      this.Direction = "down";
    } else if (this.Direction === "down") {
      this.Direction = "left";
    } else if (this.Direction === "left") {
      this.Direction = "up";
    } else if (this.Direction === "up") {
      this.Direction = "right";
    }
  }
}

export default Snake;
