function characterReplacement(s: string, k: number): number {
  const map = new Map<string, number>();
  let left = 0;
  let right = 0;
  let result = 0;

  while (right < s.length) {
    map.set(s[right], (map.get(s[right]) ?? 0) + 1);
    while (right - left + 1 - Math.max(...map.values()) > k) {
      map.set(s[left], map.get(s[left])! - 1);
      left++;
    }
    result = Math.max(result, right - left + 1);
    right++;
  }

  return result;
}

function characterReplacement2(s: string, k: number): number {
  const map = new Map<string, number>();
  let left = 0;
  let right = 0;
  let result = 0;
  let maxf = 0;

  while (right < s.length) {
    map.set(s[right], (map.get(s[right]) ?? 0) + 1);
    maxf = Math.max(maxf, map.get(s[right])!);
    while (right - left + 1 - maxf > k) {
      map.set(s[left], map.get(s[left])! - 1);
      left++;
    }
    result = Math.max(result, right - left + 1);
    right++;
  }

  return result;
}
