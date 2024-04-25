import Snake from "./Snake";
import Point from "./Point";
import WorldView from "./IWorldView";
/** Class representing a world. */
class WorldModel {
  private allSnakes: Snake[];
  private Width: number;
  private Height: number;
  private allViews: WorldView[];

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

  /**
   * makes the snake move.
   * @param steps - The number of steps the snake will take without feet somehow.
   */
  public update(steps: number): void {
    this.allSnakes.forEach((x) => x.move(steps));
    this.allViews.forEach((x) => x.display(this));
    let allCollided: Snake[] = [];
    for (let index = 0; index < this.allSnakes.length; index = index + 1) {
      this.allSnakes.forEach((x) => {
        if (x.didCollide(this.allSnakes[index])) {
          allCollided.push(x);
        }
      });
    }
  }

  /** Gets the snakes */
  public get snakes(): Snake[] {
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
