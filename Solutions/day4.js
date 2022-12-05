const fetchInput = require("./utils/fetchInput");

const Puzzle1 = async () => {
  const puzzle = (await fetchInput(4)).split("\n");

  const startTime = performance.now();

  let overlaps = 0;

  puzzle.forEach((pair) => {
    const assignments = pair.split(",");

    const first = assignments[0].split("-").map(Number);
    const second = assignments[1].split("-").map(Number);

    if (
      (first[0] >= second[0] && first[1] <= second[1]) ||
      (second[0] >= first[0] && second[1] <= first[1])
    ) {
      overlaps++;
    }
  });

  const endTime = performance.now();

  console.log(
    `Puzzle 1 answer: ${overlaps} in ${Math.round(endTime - startTime)}ms`
  );
};

const inRange = (start, finish) => {
  const range = [];
  for (let i = start; i <= finish; i++) {
    range.push(i);
  }
  return range;
};

const Puzzle2 = async () => {
  const puzzle = (await fetchInput(4)).split("\n");

  const startTime = performance.now();

  let overlaps = 0;

  puzzle.forEach((pair) => {
    const assignments = pair.split(",");

    const first = assignments[0].split("-").map(Number);
    const second = assignments[1].split("-").map(Number);

    if (
      inRange(first[0], first[1]).filter((x) =>
        inRange(second[0], second[1]).includes(x)
      ).length ||
      inRange(second[0], second[1]).filter((x) =>
        inRange(first[0], first[1]).includes(x)
      ).length
    ) {
      overlaps++;
    }
  });

  const endTime = performance.now();

  console.log(
    `Puzzle 2 answer: ${overlaps} in ${Math.round(endTime - startTime)}ms`
  );
};

Puzzle1();
Puzzle2();
