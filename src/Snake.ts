// import display from "./display";
import Point from "./Point";
// place your code on line 5 above the export statement below
/** Class representing a snake. */
class Snake {
  private Direction: string;
  public Color: string;
  private currentParts: Array;

  /**
   * Create a snake.
   * @param snakecolor - The color of the snake.
   */
  constructor(snakecolor: string, startPosition: Point, size: number) {
    this.currentParts.push(startPosition);
    this.Direction = "right";
    this.Color = snakecolor;
    for (let index = 1; index < size; index = index + 1)
      this.currentParts.push(
        new Point(startPosition.x - index, startPosition.y),
      );
  }

  /**
   * coordinates of the snakes position
   */
  public get position() {
    return this.currentParts[0];
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
    for (let index = this.currentParts.length - 1; index > 0; index = index - 1)
      this.currentParts[index] = new Point(
        this.currentParts[index - 1].x,
        this.currentParts[index - 1].y,
      );
    if (this.Direction === "right") {
      let oldx = this.currentParts[0].x;
      this.currentParts[0] = new Point(
        oldx + numberOfSteps,
        this.currentParts[0].y,
      );
    } else if (this.Direction === "left") {
      let oldx = this.currentParts[0].x;
      this.currentParts[0] = new Point(
        oldx - numberOfSteps,
        this.currentParts[0].y,
      );
    } else if (this.Direction === "up") {
      let oldy = this.currentParts[0].y;
      this.currentParts[0] = new Point(
        this.currentParts[0].x,
        oldy - numberOfSteps,
      );
    } else if (this.Direction === "down") {
      let oldy = this.currentParts[0].y;
      this.currentParts[0] = new Point(
        this.currentParts[0].x,
        oldy + numberOfSteps,
      );
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
  public didCollide(s: Snake): boolean {
    if (
      this.currentParts
        .slice(1)
        .every((part) => this.currentParts[0].equals(part))
    ) {
      return true;
    } else {
      return false;
    }
  }
}

export default Snake;
