function lengthOfLongestSubstring(s: string): number {
  const set = new Set<string>();
  let left = 0;
  let result = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left += 1;
    }
    set.add(s[right]);
    result = Math.max(result, right - left + 1);
  }

  return result;
}
