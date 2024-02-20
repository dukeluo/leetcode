function subsets(nums: number[]): number[][] {
  const subsets = [];
  const subset = [];

  function dfs(index: number) {
    if (index >= nums.length) {
      subsets.push(subset.slice());
      return;
    }

    subset.push(nums[index]);
    dfs(index + 1);

    subset.pop();
    dfs(index + 1);
  }

  dfs(0);

  return subsets;
}

console.log(subsets([1, 2, 3]));
