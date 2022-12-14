const fetchInput = require("./utils/fetchInput");

const SHAPE_VALUE = {
  X: 1,
  Y: 2,
  Z: 3,
};

const SHAPE_CONVERSION = {
  A: "X",
  B: "Y",
  C: "Z",
};

const WHAT_BEATS_WHAT = {
  A: "Y", // Rock - Paper
  B: "Z", // Paper - Scissors
  C: "X", // Scissors - Rock
};

const HOW_TO_WIN_LOSE_TIE = {
  A: {
    X: "Z",
    Y: "X",
    Z: "Y",
  },
  B: {
    X: "X",
    Y: "Y",
    Z: "Z",
  },
  C: {
    X: "Y",
    Y: "Z",
    Z: "X",
  },
};

const Puzzle1 = async () => {
  const input = await fetchInput(2);

  const startTime = performance.now();

  let score = 0;

  input.split("\n").forEach((pair) => {
    const [a, b] = pair.split(" ");

    if (SHAPE_CONVERSION[a] === b) {
      score += 3;
    } else if (b === WHAT_BEATS_WHAT[a]) {
      score += 6;
    }

    score += SHAPE_VALUE[b];
  });

  const endTime = performance.now();

  console.log(
    `Puzzle 1 answer: ${score} in ${Math.round(endTime - startTime)}ms`
  );

  return score;
};

const Puzzle2 = async () => {
  const input = await fetchInput(2);

  const startTime = performance.now();

  let score = 0;

  input.split("\n").forEach((pair) => {
    const [a, b] = pair.split(" ");

    const play = HOW_TO_WIN_LOSE_TIE[a][b];

    if (b === "Z") {
      score += 6;
    } else if (b === "Y") {
      score += 3;
    }

    score += SHAPE_VALUE[play];
  });

  const endTime = performance.now();

  console.log(
    `Puzzle 2 answer: ${score} in ${Math.round(endTime - startTime)}ms`
  );

  return score;
};

Puzzle1();
Puzzle2();
