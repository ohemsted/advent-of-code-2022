import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput).split('\n');
  return input.map(findCommonLetter).map(convertToNumber).reduce((a, b) => a + b, 0);
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput).split('\n');
  let letterCount = 0;
  while (input.length) {
    letterCount += convertToNumber(findCommonLetters(input.pop(), input.pop(), input.pop()))
  }
  return letterCount;
};

const findCommonLetter = (input: string) => {
  const firstHalf: string = input.substring(0, input.length / 2);
  const secondHalf: string = input.substring(input.length / 2, input.length);

  for (let letter in firstHalf) {
    if (secondHalf.includes(firstHalf[letter])) { return firstHalf[letter] };
  }
}

const findCommonLetters = (input1: string, input2: string, input3: string) => {
  for (let letter in input1) {
    if (input2.includes(input1[letter])) { 
      if (input3.includes(input1[letter])) {
        return input1[letter] 
      }
    };
  }
}

const convertToNumber = (character: string) => {
  const isLowerCase = (str) => str === str.toLowerCase() && str !== str.toUpperCase();
  return isLowerCase(character) ? character.charCodeAt(0) - 96 : character.charCodeAt(0) - 64 + 26; 
}
run({
  part1: {
    tests: [
      {
        input: `vJrwpWtwJgWrhcsFMMfFFhFp`,
        expected: 16,
      },
      {
        input: `jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL`,
        expected: 38,
      },
      {
        input: `PmmdzqPrVvPwwTWBwg`,
        expected: 42,
      },
      {
        input: `wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn`,
        expected: 22,
      },
      {
        input: `ttgJtRGJQctTZtZT`,
        expected: 20,
      },
      {
        input: `CrZsJsPPZsGzwwsLwLmpwMDw`,
        expected: 19,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `vJrwpWtwJgWrhcsFMMfFFhFp\njqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\nPmmdzqPrVvPwwTWBwg`,
        expected: 18,
      },
      {
        input: `wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn\nttgJtRGJQctTZtZT\nCrZsJsPPZsGzwwsLwLmpwMDw`,
        expected: 52,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
