function productExceptSelf(nums: number[]): number[] {
  const postfix = new Array(nums.length);
  const prefix = new Array(nums.length);
  const result = new Array(nums.length);

  for (let i = nums.length - 1; i >= 0; i--) {
    postfix[i] = i === nums.length - 1 ? nums[i] : nums[i] * postfix[i + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    prefix[i] = i === 0 ? nums[i] : nums[i] * prefix[i - 1];

    if (i === 0) result[i] = postfix[i + 1];
    else if (i === nums.length - 1) result[i] = prefix[i - 1];
    else result[i] = prefix[i - 1] * postfix[i + 1];
  }

  return result;
}
