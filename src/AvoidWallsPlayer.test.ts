import Snake from "./Snake";
import world from "./WorldModel";
import SnakeController from "./SnakeController";
import AWP from "./AvoidWallsPlayer";
import Point from "./Point";

it("turns correctly", function () {
  let startPoint = new Point(5, 5);
  const worldSnake = new Snake("green", startPoint, 1);
  const world1 = new world();
  const sc = new SnakeController(worldSnake, world1);
  const player = new AWP(sc);
  world1.update(100);
  player.makeTurn();
  expect(worldSnake.direction).toBe("down");
});
it("turns correctly again", function () {
  let startPoint = new Point(5, 5);
  const worldSnake = new Snake("green", startPoint, 1);
  const world1 = new world();
  const sc = new SnakeController(worldSnake, world1);
  const player = new AWP(sc);
  world1.update(100);
  player.makeTurn();
  world1.update(100);
  player.makeTurn();
  expect(worldSnake.direction).toBe("left");
});
