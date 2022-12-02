const fetchInput = require("./utils/fetchInput");

const getElfCalories = async (puzzle) => {
  const elfCalories = puzzle.split("\n\n");

  const totalElfCalories = elfCalories.map((elf) => {
    const calories = elf.split("\n");
    const totalCalories = calories.reduce((accumulator, value) => {
      return accumulator + +value;
    }, 0);

    return totalCalories;
  });

  return totalElfCalories;
};

const Puzzle1 = async () => {
  const puzzle = await fetchInput(1);

  const startTime = performance.now();

  const totalElfCalories = await getElfCalories(puzzle);
  const answer = Math.max(...totalElfCalories);
  const endTime = performance.now();

  console.log(
    `Puzzle 1 answer: ${answer} in ${Math.round(endTime - startTime)}ms`
  );
};

const Puzzle2 = async () => {
  const puzzle = await fetchInput(1);

  const startTime = performance.now();

  const totalElfCalories = await getElfCalories(puzzle);

  totalElfCalories.sort((a, b) => b - a);
  const topThreeElfCalories = totalElfCalories.slice(0, 3);

  const answer = topThreeElfCalories.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  const endTime = performance.now();

  console.log(
    `Puzzle 2 answer: ${answer} in ${Math.round(endTime - startTime)}ms`
  );
};

Puzzle1();
Puzzle2();
