function letterCombinations(digits: string): string[] {
  const map = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };
  const combinations: string[][] = [];
  const combination: string[] = [];

  function backtrace(index) {
    if (index > digits.length) {
      return;
    }
    if (index === digits.length) {
      combinations.push(combination.slice());
      return;
    }
    for (let i = 0; i < map[digits.charAt(index)].length; i++) {
      combination.push(map[digits.charAt(index)][i]);
      backtrace(index + 1);
      combination.pop();
    }
  }

  backtrace(0);

  if (!digits) {
    return [];
  }

  return combinations.map((c) => c.join(""));
}

console.log(letterCombinations("23"));
