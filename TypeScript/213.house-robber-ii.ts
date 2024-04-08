function helper(nums: number[]): number {
  for (let i = 1; i < nums.length; i++) {
    nums[i] =
      i === 1
        ? Math.max(nums[1], nums[0])
        : Math.max(nums[i - 2] + nums[i], nums[i - 1]);
  }

  return nums[nums.length - 1];
}

function rob(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }

  return Math.max(
    helper(nums.slice(0, nums.length - 1)),
    helper(nums.slice(1, nums.length))
  );
}

console.log(rob([2, 3, 2]));
console.log(rob([2]));
