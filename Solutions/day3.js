const fetchInput = require("./utils/fetchInput");

const Puzzle1 = async () => {
  const puzzle = await fetchInput(3);

  const startTime = performance.now();

  let foundInBoth = 0;

  puzzle.split("\n").forEach((line) => {
    const firstHalf = line.slice(0, line.length / 2);
    const secondHalf = line.slice(line.length / 2);

    for (let i = 0; i < firstHalf.length; i++) {
      const char = firstHalf[i];

      if (secondHalf.includes(char)) {
        if (char.toUpperCase() === char) {
          foundInBoth += char.toLowerCase().charCodeAt(0) - 96 + 26;
          return;
        } else {
          foundInBoth += char.charCodeAt(0) - 96;
          return;
        }
      }
    }
  });

  const endTime = performance.now();

  console.log(
    `Puzzle 1 answer: ${foundInBoth} in ${Math.round(endTime - startTime)}ms`
  );
};

const Puzzle2 = async () => {
  const puzzle = (await fetchInput(3)).split("\n");

  const startTime = performance.now();

  let answer = 0;

  for (let i = 0; i < puzzle.length; i += 3) {
    const common = puzzle[i].split("").filter((char) => {
      return puzzle[i + 1].includes(char) && puzzle[i + 2].includes(char);
    })[0];

    if (common.toUpperCase() === common) {
      answer += common.toLowerCase().charCodeAt(0) - 96 + 26;
    } else {
      answer += common.charCodeAt(0) - 96;
    }
  }

  const endTime = performance.now();

  console.log(
    `Puzzle 2 answer: ${answer} in ${Math.round(endTime - startTime)}ms`
  );
};

Puzzle1();
Puzzle2();
