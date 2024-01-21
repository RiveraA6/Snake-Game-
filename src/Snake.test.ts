import Snake from "./Snake";

const moveSnakes = (times: number) => {
  const greenSnake = new Snake("green");
  const maroonSnake = new Snake("maroon");
  let mtotalSquares = 0;
  let gtotalSquares = 0;
  let left = false;

  for (let i = 0; i < times; i++) {
    left = false;
    const numSquares1 = Math.floor(Math.random() * 100);
    const numSquares2 = Math.floor(Math.random() * 100);
    maroonSnake.move(numSquares2);
    mtotalSquares += numSquares2;
    greenSnake.move(numSquares1);
    gtotalSquares += numSquares1;
    maroonSnake.turn();
    left = true;
    if (left) {
      const numSquares3 = Math.floor(Math.random() * 100);
      const numSquares4 = Math.floor(Math.random() * 10);
      maroonSnake.move(numSquares3);
      mtotalSquares -= numSquares3;
      maroonSnake.move(numSquares4);
      mtotalSquares -= numSquares4;
      maroonSnake.turn();
    }
  }

  return { actual: maroonSnake.currentXPosition, expected: mtotalSquares };
};

describe("Snake Tests", function () {
  const tests = [0, 3, 10, 4].map((num) => moveSnakes(num));

  const testDescriptions = [
    "starts with the correct position of 0",
    "has the correct position after 3+ random moves",
    "has the correct position after 10+ random moves",
    "has the correct position after 4+ random moves with turns",
  ];

  testDescriptions.forEach((description, index) => {
    it(description, () =>
      expect(tests[index].expected).toEqual(tests[index].actual),
    );
  });
});

describe("Addition", function () {
  it("sums numbers", () => {
    expect(1 + 1).toEqual(2);
  });
});

export {};
