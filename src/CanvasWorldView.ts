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
  display(world: world): void {
    this.worldCanvas.width = world.width * this.scalingFactor;
    this.worldCanvas.height = world.height * this.scalingFactor;
    this.context.fillRect(
      0,
      0,
      this.worldCanvas.width,
      this.worldCanvas.height,
    );
  }
}
export default WorldCanvas;
// Render the world
