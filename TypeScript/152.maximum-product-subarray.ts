function maxProduct(nums: number[]): number {
  let result = nums[0];
  let currentMax = nums[0];
  let currentMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const temp = currentMax;

    currentMax = Math.max(temp * nums[i], currentMin * nums[i], nums[i]);
    currentMin = Math.min(temp * nums[i], currentMin * nums[i], nums[i]);

    if (currentMax > result) {
      result = currentMax;
    }
  }

  return result;
}

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));
