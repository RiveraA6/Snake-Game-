import world from "./WorldModel";
import Snake from "./Snake";
import Point from "./Point";

it("moves correctly", function () {
  let startPoint = new Point(0, 0);
  const worldSnake = new Snake("green", startPoint, 5);
  const world1 = new world();
  world1.addSnake(worldSnake);
  world1.update(5);
  worldSnake.turn();
  world1.update(10);

  expect([
    world1.snakes[0].position.x,
    world1.snakes[0].position.y,
  ]).toStrictEqual([-5, 0]);
});
