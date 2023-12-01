import run from "aocrunner";

const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const WIN = 6;
const DRAW = 3;
const LOSE = 0;

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput).split('\n');
  return input.map(parseGame1).reduce((a, b) => a + b, 0);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput).split('\n');
  return input.map(parseGame2).reduce((a, b) => a + b, 0);

  return;
};

const parseGame1: number = (gameInput: string) => {
  const moves = gameInput.split(' ');
  switch(moves[0]) {
    case 'A': // ROCK
      if (moves[1] == 'X') return ROCK + DRAW;
      if (moves[1] == 'Y') return PAPER + WIN;
      if (moves[1] == 'Z') return SCISSORS + LOSE;
    case 'B': // PAPER
      if (moves[1] == 'X') return ROCK + LOSE;
      if (moves[1] == 'Y') return PAPER + DRAW;
      if (moves[1] == 'Z') return SCISSORS + WIN;
    case 'C': // SCISSORS
      if (moves[1] == 'X') return ROCK + WIN;
      if (moves[1] == 'Y') return PAPER + LOSE;
      if (moves[1] == 'Z') return SCISSORS + DRAW;
  }
};

const parseGame2: number = (gameInput: string) => {
  const moves = gameInput.split(' ');
  switch(moves[0]) {
    case 'A': // ROCK
      if (moves[1] == 'X') return SCISSORS + LOSE;
      if (moves[1] == 'Y') return ROCK + DRAW;
      if (moves[1] == 'Z') return PAPER + WIN;
    case 'B': // PAPER
      if (moves[1] == 'X') return ROCK + LOSE;
      if (moves[1] == 'Y') return PAPER + DRAW;
      if (moves[1] == 'Z') return SCISSORS + WIN;
    case 'C': // SCISSORS
      if (moves[1] == 'X') return PAPER + LOSE;
      if (moves[1] == 'Y') return SCISSORS + DRAW;
      if (moves[1] == 'Z') return ROCK + WIN;
  }
};

run({
  part1: {
    tests: [
      {
        input: `A Y`,
        expected: 8,
      },
      {
        input: `B X`,
        expected: 1,
      },
      {
        input: `C Z`,
        expected: 6,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `A Y`,
        expected: 4,
      },
      {
        input: `B X`,
        expected: 1,
      },
      {
        input: `C Z`,
        expected: 7,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
