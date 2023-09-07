function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] >= nums[left]) {
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        if (nums[left] === target) {
          return left;
        } else if (nums[left] < target) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
    } else {
      if (nums[mid] > target) {
        right = mid - 1;
      } else {
        if (nums[right] === target) {
          return right;
        } else if (nums[right] > target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
  }

  return -1;
}
