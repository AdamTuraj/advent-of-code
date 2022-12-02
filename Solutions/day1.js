const fetchInput = require("./utils/fetchInput");

const getElfCalories = async () => {
  const puzzle = await fetchInput(1);

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
  const totalElfCalories = await getElfCalories();
  const answer = Math.max(...totalElfCalories);

  console.log("Puzzle 1 answer:", answer);
};

const Puzzle2 = async () => {
  const totalElfCalories = await getElfCalories();

  totalElfCalories.sort((a, b) => b - a);
  const topThreeElfCalories = totalElfCalories.slice(0, 3);

  const answer = topThreeElfCalories.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  console.log("Puzzle 2 answer: ", answer);
};

Puzzle1();
Puzzle2();
