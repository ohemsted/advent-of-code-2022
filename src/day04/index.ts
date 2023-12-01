import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput).split('\n');
  return input.map(splitPairs).map(findCompleteOverlaps).reduce((a, b) => a + b, 0);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput).split('\n');
  return input.map(splitPairs).map(findPartialOverlaps).reduce((a, b) => a + b, 0);
};

const splitPairs = (pair) => {
  return pair.split(',');
}

const findCompleteOverlaps = (pair) => {
  const first = pair[0].split('-');
  const second = pair[1].split('-');

  const firstStart = parseInt(first[0]);
  const firstEnd = parseInt(first[1]);

  const secondStart = parseInt(second[0]);
  const secondEnd = parseInt(second[1]);

  if ((firstStart >= secondStart) && (firstStart <= secondEnd) && (firstEnd <= secondEnd)) {
    return 1;
  }

  if (secondStart >= firstStart && secondStart <= firstEnd && secondEnd <= firstEnd) {
    return 1;
  }
  
  return 0;
}


const findPartialOverlaps = (pair) => {
  const first = pair[0].split('-');
  const second = pair[1].split('-');

  const firstStart = parseInt(first[0]);
  const firstEnd = parseInt(first[1]);

  const secondStart = parseInt(second[0]);
  const secondEnd = parseInt(second[1]);

  if ((firstStart >= secondStart) && (firstStart <= secondEnd)) {
    return 1;
  }

  if (secondStart >= firstStart && secondStart <= firstEnd) {
    return 1;
  }
  
  return 0;
}

run({
  part1: {
    tests: [
      {
        input: `5-7,7-9`,
        expected: 0,
      },
      {
        input: `6-6,4-6`,
        expected: 1,
      },
      {
        input: `2-4,6-8\n2-3,4-5\n5-7,7-9\n2-8,3-7\n6-6,4-6\n2-6,4-8`,
        expected: 2,
      },
      {
        input: `56-85,52-84`,
        expected: 0
      },
      {
        input: `91-91,42-90`,
        expected: 0
      },
      {
        input: `4-23,24-77`,
        expected: 0
      }
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `5-7,7-9`,
        expected: 1,
      },
      {
        input: `6-6,4-6`,
        expected: 1,
      },
      {
        input: `2-4,6-8\n2-3,4-5\n5-7,7-9\n2-8,3-7\n6-6,4-6\n2-6,4-8`,
        expected: 4,
      },
      {
        input: `56-85,52-84`,
        expected: 1
      },
      {
        input: `91-91,42-90`,
        expected: 0
      },
      {
        input: `4-23,24-77`,
        expected: 0
      }
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
