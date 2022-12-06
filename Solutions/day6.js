const fetchInput = require("./utils/fetchInput");

const getFirstMakerChars = (puzzle, chars) => {
  let firstMarker = 0;
  puzzle.some((_, i) => {
    firstMarker++;
    const nextChars = [...puzzle.slice(i, i + chars)];

    // https://stackoverflow.com/a/7376645/17532640
    const areMultiple = new Set(nextChars).size !== nextChars.length;

    return !areMultiple;
  });

  return firstMarker + chars - 1;
};

const Puzzle1 = async () => {
  const puzzle = (await fetchInput(6)).split("");

  const startTime = performance.now();
  const answer = getFirstMakerChars(puzzle, 4);
  const endTime = performance.now();

  console.log(
    `Puzzle 1 answer: ${answer} in ${Math.round(endTime - startTime)}ms`
  );
};

const Puzzle2 = async () => {
  const puzzle = (await fetchInput(6)).split("");

  const startTime = performance.now();
  const answer = getFirstMakerChars(puzzle, 14);
  const endTime = performance.now();

  console.log(
    `Puzzle 2 answer: ${answer} in ${Math.round(endTime - startTime)}ms`
  );
};

Puzzle1();
Puzzle2();
