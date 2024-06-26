import WorldView from "./IWorldView";
import world from "./WorldModel";
class WorldCanvas extends WorldView {
  private worldCanvas: HTMLCanvasElement;
  private scalingFactor: number;
  private context: CanvasRenderingContext2D;
  constructor(Sf: number) {
    super();
    this.scalingFactor = Sf;
    this.worldCanvas = document.createElement("canvas");
    this.context = this.worldCanvas.getContext("2d")!;
    document.body.appendChild(this.worldCanvas);
  }
  /*
   * Display the world's canvas and the snake location
   */
  display(world: world): void {
    this.worldCanvas.width = world.width * this.scalingFactor;
    this.worldCanvas.height = world.height * this.scalingFactor;
    this.context.fillRect(
      0,
      0,
      this.worldCanvas.width,
      this.worldCanvas.height,
    );
    this.context.fillStyle = "green";
    for (let index = 0; index < world.snakes.length; index = index + 1)
      for (
        let indexx = 0;
        indexx < world.snakes[index].part.length;
        indexx = indexx + 1
      )
        this.context.fillRect(
          world.snakes[index].part[indexx].x * this.scalingFactor,
          world.snakes[index].part[indexx].y * this.scalingFactor,
          10,
          10,
        );
  }
  /*
   * gets the height of the canvas world
   */
  get worldheight(): number {
    return this.worldCanvas.height;
  }
  /*
   * gets the width of the canvas world
   */
  get worldwidth(): number {
    return this.worldCanvas.width;
  }
}
export default WorldCanvas;
// Render the world
