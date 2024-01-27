import world from "./WorldMode1";
import Snake from "./Snake";

it("moves correctly", function () {
  const worldSnake = new Snake("green");
  const world1 = new world(worldSnake);
  world1.update(5);
  worldSnake.turn();
  world1.update(10);

  expect([world1.Snake.position.x, world1.Snake.position.y]).toStrictEqual([
    -5, 0,
  ]);
});
