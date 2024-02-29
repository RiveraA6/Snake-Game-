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
    let lastTime = 0;
    const updateFrame = (milliseconds: number) => {
      if (milliseconds - lastTime >= 250) {
        this.player1_!.makeTurn();
        this.player2_!.makeTurn();
        this.world_.update(1);
        lastTime += 250;
      }
      requestAnimationFrame(updateFrame);
    };
    requestAnimationFrame(updateFrame);
  }
  set player1(player: Player) {
    this.player1_ = player;
  }
  set player2(player: Player) {
    this.player2_ = player;
  }
}

export default GameController;
