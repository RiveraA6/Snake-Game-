import exp from "constants";
import Point from "./Point";

it("points correctly", () => {
  const p1 = new Point(1, 2);
  const p2 = new Point(3, 4);
  expect(p1.x).toEqual(1);
  expect(p1.y).toEqual(2);
  expect(p2.x).toEqual(3);
  expect(p2.y).toEqual(4);
});
