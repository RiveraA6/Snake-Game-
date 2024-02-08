import Snake from "./Snake";
import world from "./WorldModel";
import SnakeController from "./SnakeController";
import AWP from "./AvoidWallsPlayer";

it("turns correctly", function () {
  const worldSnake = new Snake("green");
  const world1 = new world(worldSnake);
  const sc = new SnakeController(worldSnake, world1);
  const player = new AWP(sc);
  world1.update(100);
  player.makeTurn();
  expect(worldSnake.direction).toBe("down");
});
it("turns correctly", function () {
  const worldSnake = new Snake("green");
  const world1 = new world(worldSnake);
  const sc = new SnakeController(worldSnake, world1);
  const player = new AWP(sc);
  world1.update(100);
  player.makeTurn();
  world1.update(100);
  player.makeTurn();
  expect(worldSnake.direction).toBe("left");
});
