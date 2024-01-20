import world from "./WorldMode1";
import Snake from "./Snake";

it("moves correctly", function () {
  const worldSnake = new Snake("green");
  const world1 = new world(worldSnake);
  world1.update(5);
  world1.update(5);

  expect(world1.snakeX).toEqual(10);
  expect(world1.snakeY).toEqual(0);
});
