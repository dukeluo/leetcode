function rob(nums: number[]): number {
  for (let i = 1; i < nums.length; i++) {
    nums[i] =
      i === 1
        ? Math.max(nums[1], nums[0])
        : Math.max(nums[i - 2] + nums[i], nums[i - 1]);
  }

  return nums[nums.length - 1];
}

console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([2, 1, 1, 2]));
