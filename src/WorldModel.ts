import Snake from "./Snake";
import Point from "./Point";
import WorldView from "./IWorldView";
/** Class representing a world. */
class WorldModel {
  private Snake: Snake;
  private Width: number;
  private Height: number;
  private worldView: WorldView;
  /**
   * Create a world.
   * @param snake - The type of the snake.
   */
  constructor(snake: Snake) {
    this.Snake = snake;
    this.Width = 100;
    this.Height = 100;
    this.worldView = null;
  }
  /**
   * makes the snake move.
   * @param steps - The number of steps the snake will take without feet somehow.
   */
  public update(steps: number): void {
    this.Snake.move(steps);
    this.worldView.display(this);
  }
  /** Get the snake */
  public get snake(): Snake {
    return this.Snake;
  }

  /** Get the width of the world */
  public get width(): number {
    return this.Width;
  }
  /** Get the height of the world */
  public get height(): number {
    return this.Height;
  }
  set view(view: WorldView) {
    this.worldView = view;
  }
}
export default WorldModel;
