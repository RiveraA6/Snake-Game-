import Snake from "./Snake";
import Point from "./Point";

/** Class representing a world. */
class WorldMode1 {
  public Snake: Snake;
  public Width: number;
  public Height: number;

  /**
   * Create a world.
   * @param snake - The type of the snake.
   */
  constructor(snake: Snake) {
    this.Snake = snake;
    this.Width = 100;
    this.Height = 100;
  }
  /**
   * makes the snake move.
   * @param steps - The number of steps the snake will take without feet somehow.
   */
  public update(steps: number): void {
    this.Snake.move(steps);
  }
  public get width(): number {
    return this.width;
  }
  public get height(): number {
    return this.height;
  }
}
export default WorldMode1;
