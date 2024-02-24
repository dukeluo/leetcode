function combinationSum(candidates: number[], target: number): number[][] {
  const combinations = [];

  function dfs(i, combination, total) {
    if (total === target) {
      combinations.push(combination.slice());
      return;
    }

    if (i >= candidates.length || total > target) {
      return;
    }

    combination.push(candidates[i]);
    dfs(i, combination, total + candidates[i]);

    combination.pop();
    dfs(i + 1, combination, total);
  }

  dfs(0, [], 0);

  return combinations;
}

console.log(combinationSum([2, 3, 6, 7], 7));
