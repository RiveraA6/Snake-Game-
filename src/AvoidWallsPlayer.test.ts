import Snake from "./Snake";
import world from "./WorldModel";
import SnakeController from "./SnakeController";
import AWP from "./AvoidWallsPlayer";
import Point from "./Point";

it("turns correctly", function () {
  let startPoint = new Point(0, 0);
  const worldSnake = new Snake("green", startPoint, 1);
  const world1 = new world();
  world1.addSnake(worldSnake);
  const sc = new SnakeController(worldSnake, world1);
  const player = new AWP(sc);
  world1.update(world1.width - 1);
  player.makeTurn();
  expect(worldSnake.direction).toBe("down");
});
it("turns correctly again", function () {
  let startPoint = new Point(0, 0);
  const worldSnake = new Snake("green", startPoint, 1);
  const world1 = new world();
  world1.addSnake(worldSnake);
  const sc = new SnakeController(worldSnake, world1);
  const player = new AWP(sc);
  world1.update(world1.width - 1);
  player.makeTurn();
  world1.update(world1.width - 1);
  player.makeTurn();
  expect(worldSnake.direction).toBe("left");
});
