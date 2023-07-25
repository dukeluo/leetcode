function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (nums[i] === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];

      if (sum === 0) {
        result.push([nums[i], nums[l], nums[r]]);
        r -= 1;
        l += 1;
        while (nums[l] === nums[l - 1]) l++;
      } else if (sum > 0) {
        r--;
      } else {
        l++;
      }
    }
  }

  return result;
}
