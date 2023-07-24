function twoSum(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; numbers[i] + numbers[j] <= target; j++) {
      if (numbers[i] + numbers[j] === target) return [i + 1, j + 1];
    }
  }
  return [-1, -1];
}

function twoSum2(numbers: number[], target: number): number[] {
  let i = 0;
  let j = numbers.length - 1;

  while (i < j) {
    const sum = numbers[i] + numbers[j];

    if (sum === target) return [i + 1, j + 1];
    else if (sum < target) i++;
    else j--;
  }

  return [-1, -1];
}
