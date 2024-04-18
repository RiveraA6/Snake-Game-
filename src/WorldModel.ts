import Snake from "./Snake";
import Point from "./Point";
import WorldView from "./IWorldView";
/** Class representing a world. */
class WorldModel {
  private allSnakes: Array;
  private Width: number;
  private Height: number;
  private allViews: Array;

  /**
   * Create a world.
   * @param snake - The type of the snake.
   */
  constructor() {
    this.allSnakes = [];
    this.Width = 50;
    this.Height = 50;
    this.allViews = [];
  }
  private viewDisplay(x: WorldView): boolean {
    if (x !== null) {
      x.display(this);
    } else {
      return false;
    }
  }
  /**
   * makes the snake move.
   * @param steps - The number of steps the snake will take without feet somehow.
   */
  public update(steps: number): void {
    this.allSnakes.forEach((x) => x.move(steps));
    this.allViews.forEach((x) => this.viewDisplay(x));
  }
  /** Gets the snakes */
  public get snakes(): Array {
    return this.allSnakes;
  }

  /** Get the width of the world */
  public get width(): number {
    return this.Width;
  }
  /** Get the height of the world */
  public get height(): number {
    return this.Height;
  }
  /**
   * adds to the list of views
   */
  public addView(v: WorldView) {
    this.allViews.push(v);
  }
  /**
   * adds to the list of snakes
   */
  public addSnake(s: Snake) {
    this.allSnakes.push(s);
  }
}
export default WorldModel;
