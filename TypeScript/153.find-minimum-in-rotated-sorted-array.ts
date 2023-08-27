function findMin(nums: number[]): number {
  let low = 0;
  let high = nums.length - 1;
  let result = nums[0];

  while (low <= high) {
    if (nums[high] >= nums[low]) {
      result = Math.min(result, nums[low]);
      break;
    }

    const mid = low + Math.floor((high - low) / 2);

    result = Math.min(result, nums[mid]);
    if (nums[mid] >= nums[low]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return result;
}
