function longestContinuousSubstring(s: string): number {
  let i = 0;
  let j = 0;
  let result = 0;

  while (j < s.length) {
    if (s.charCodeAt(j + 1) - s.charCodeAt(j) === 1) {
      j++;
      continue;
    }
    result = Math.max(result, j - i + 1);
    j++;
    i = j;
  }

  return result;
}
