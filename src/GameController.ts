import World from "./WorldModel";
import Player from "./Player";

class GameController {
  private world_: World;
  private player1_: Player | null;
  private player2_: Player | null;
  constructor(world: World) {
    this.world_ = world;
    this.player1_ = null;
    this.player2_ = null;
  }
  public run(): void {
    if (this.player1_ === null) {
      let lastTime = 0;
    }
  }
  public udateFrame(): void {
    let render = milliseconds => {
        console.log(milliseconds);
        requestAnimationFrame(render);
      };
      requestAnimationFrame(render);
}

export default GameController;
