import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  
  return sortElfsByCalories(input).pop();
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  const sortedList: Array<any> = sortElfsByCalories(input);
  return sortedList.pop() + sortedList.pop() + sortedList.pop();
};

const sortElfsByCalories = (input: string) => {
  const calories = input.split("\n");
  let elfNumber = 1;

  const caloryByElf: any = {};

  calories.forEach((c) => {
    if (c == "") {
      elfNumber++;
    } else {
      if (!caloryByElf[elfNumber]) {
        caloryByElf[elfNumber] = 0;
      }

      caloryByElf[elfNumber] = caloryByElf[elfNumber] + parseInt(c);
    }
  });

return Object.values(caloryByElf).sort();
}

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
