import Snake from "./Snake";

/** Class representing a world. */
class WorldMode1 {
  private snake: Snake;

  /**
   * Create a world.
   * @param snake - The type of the snake.
   */
  constructor(snake: Snake) {
    this.snake = snake;
  }
  /**
   * makes the snake move.
   * @param steps - The number of steps the snake will take without feet somehow.
   */
  public update(steps: number): void {
    this.snake.move(steps);
  }
  /**
   * Current x position of the snake
   */
  public get snakeX(): number {
    return this.snake.currentXPosition;
  }
  /**
   * Current y position of the snake
   */
  public get snakeY(): number {
    return this.snake.currentYPosition;
  }
}
export default WorldMode1;
