function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let longest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i] - 1)) {
      let consecutive = 0;

      while (set.has(nums[i] + consecutive)) {
        consecutive += 1;
      }

      longest = Math.max(longest, consecutive);
    }
  }

  return longest;
}
