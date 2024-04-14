// nums[i] < nums[i - 1] => dp[i] = max(dp[i-1], dp[i-2], dp[i-3]...) + 1
function lengthOfLIS(nums: number[]): number {
  const dp = new Array(nums.length).fill(1);

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        dp[i] = Math.max(1 + dp[j], dp[i]);
      }
    }
  }

  return Math.max(...dp);
}

console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));
