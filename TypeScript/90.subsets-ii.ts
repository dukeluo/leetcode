function subsetsWithDup(nums: number[]): number[][] {
  const subsets = [];

  function dfs(index: number, subset: number[]) {
    if (index === nums.length) {
      subsets.push(subset.slice());
      return;
    }

    subset.push(nums[index]);
    dfs(index + 1, subset);
    subset.pop();

    while (index + 1 < nums.length && nums[index] === nums[index + 1]) {
      index += 1;
    }
    dfs(index + 1, subset);
  }

  nums.sort();
  dfs(0, []);

  return subsets;
}

console.log(subsetsWithDup([1, 2, 2]));
