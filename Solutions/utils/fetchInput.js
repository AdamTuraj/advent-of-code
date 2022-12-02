const SESSION_ID = require("./getSessionId");

const fetchInput = async (day) => {
  const res = await fetch(`https://adventofcode.com/2022/day/${day}/input`, {
    headers: {
      cookie: `session=${SESSION_ID}`,
    },
  });

  const text = (await res.text()).trim();

  if (
    text ===
    "Puzzle inputs differ by user.  Please log in to get your puzzle input."
  ) {
    throw new Error("Advent of Code did not return a puzzle input");
  }

  return text;
};

module.exports = fetchInput;
