import world from "./WorldModel";

abstract class WorldView {
  abstract display(world: world): void;
}

export default WorldView;
