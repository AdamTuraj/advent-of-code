const fetchInput = require("./utils/fetchInput");

const organizeBoxes = (puzzle) => {
  const boxes = {};
  let movesStartingIndex = 0;

  puzzle.forEach((line, i) => {
    const boxLine = line.replace(/\[|\] /g, "").replace(/    /g, " ");

    if (boxLine.includes("move")) {
      if (movesStartingIndex === 0) {
        movesStartingIndex = i;
      }
    } else {
      boxLine.split("").forEach((char, j) => {
        if (char !== " " && char.match(/[A-Z]/)) {
          if (boxes[j]) {
            boxes[j].push(char);
          } else {
            boxes[j] = [char];
          }
        }
      });
    }
  });

  return { boxes, movesStartingIndex };
};

const Puzzle1 = async () => {
  const puzzle = (await fetchInput(5)).split("\n");

  const startTime = performance.now();

  const { boxes, movesStartingIndex } = organizeBoxes(puzzle);

  puzzle.slice(movesStartingIndex).forEach((line) => {
    const [_, a, _a, b, _b, c] = line.trim().split(" ");

    for (let i = 1; i <= a; i++) {
      const box = boxes[b - 1].shift();
      boxes[c - 1].unshift(box);
    }
  });

  const firstBoxes = Object.values(boxes)
    .map((box) => box[0])
    .join("");

  const endTime = performance.now();

  console.log(
    `Puzzle 1 answer: ${firstBoxes} in ${Math.round(endTime - startTime)}ms`
  );
};

const Puzzle2 = async () => {
  const puzzle = (await fetchInput(5)).split("\n");

  const startTime = performance.now();

  const { boxes, movesStartingIndex } = organizeBoxes(puzzle);

  puzzle.slice(movesStartingIndex).forEach((line) => {
    const [_, a, _a, b, _b, c] = line.trim().split(" ");

    let boxesToMove = [];
    for (let i = 1; i <= a; i++) {
      boxesToMove.push(boxes[b - 1].shift());
    }

    boxes[c - 1].unshift(...boxesToMove);
  });

  const firstBoxes = Object.values(boxes)
    .map((box) => box[0])
    .join("");

  const endTime = performance.now();

  console.log(
    `Puzzle 2 answer: ${firstBoxes} in ${Math.round(endTime - startTime)}ms`
  );
};

Puzzle1();
Puzzle2();
