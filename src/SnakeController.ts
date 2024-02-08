import Snake from "./Snake";
import Point from "./Point";
import World from "./WorldModel";

class SnakeController {
  public slitherer: Snake;
  public snakeWorld: World;
  public SnakeDirection: string;

  /**
   * Creates a new snake controller
   * @param snake
   * @param world
   */
  constructor(snake: Snake, world: World) {
    this.slitherer = snake;
    this.snakeWorld = world;
    this.SnakeDirection = this.slitherer.direction;
  }

  /** Makes the snake turn left */
  public turnSnakeLeft(): void {
    this.slitherer.turnLeft();
  }
  /** Makes the snake turn right */
  public turnSnakeRight(): void {
    this.slitherer.turnRight();
  }
  /** Locates the snake in the world*/
  public get snakePosition(): Point {
    return this.slitherer.position;
  }
  /** Gets the direction of the snake */
  public get snakeDirection(): string {
    return this.slitherer.direction;
  }
}
export default SnakeController;
