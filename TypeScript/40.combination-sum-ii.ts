function combinationSum2(candidates: number[], target: number): number[][] {
  const combinations: number[][] = [];

  function backtrace(index: number, combination: number[], target: number) {
    if (target === 0) {
      combinations.push(combination.slice());
      return;
    }

    if (target < 0) {
      return;
    }

    let prev = -1;
    for (let i = index; i < candidates.length; i++) {
      if (candidates[i] === prev) {
        continue;
      }

      combination.push(candidates[i]);
      backtrace(i + 1, combination, target - candidates[i]);
      prev = candidates[i];
      combination.pop();
    }
  }

  candidates.sort();
  backtrace(0, [], target);

  return combinations;
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
