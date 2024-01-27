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
  
  /** Get the width of the world */
  public get width(): number {
    return this.Width;
  }
  /** Get the height of the world */
  public get height(): number {
    return this.Height;
  }
}
export default WorldMode1;
