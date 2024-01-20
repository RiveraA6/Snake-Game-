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
  public update(steps: number): void {
    this.snake.move(steps);
  }
  public get snakeX(): number {
    return this.snake.currentXPosition;
  }
  public get snakeY(): number {
    return this.snake.currentYPosition;
  }
}
export default WorldMode1;
