import world from "./WorldModel";
import Snake from "./Snake";

it("moves correctly", function () {
  const worldSnake = new Snake("green");
  const world1 = new world(worldSnake);
  world1.update(5);
  worldSnake.turn();
  world1.update(10);

  expect([world1.snake.position.x, world1.snake.position.y]).toStrictEqual([
    -5, 0,
  ]);
});
