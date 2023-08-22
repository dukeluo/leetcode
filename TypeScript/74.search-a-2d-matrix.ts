function searchMatrix(matrix: number[][], target: number): boolean {
  let low, high, mid;
  let targetRow = null;

  low = 0;
  high = matrix.length - 1;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);

    if (
      matrix[mid][0] <= target &&
      target <= matrix[mid][matrix[mid].length - 1]
    ) {
      targetRow = mid;
      break;
    } else if (matrix[mid][0] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  if (targetRow === null) return false;

  low = 0;
  high = matrix[targetRow].length - 1;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);

    if (matrix[targetRow][mid] === target) {
      return true;
    } else if (matrix[targetRow][mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return false;
}
