function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  const s1Count = new Array(26).fill(0);
  const s2Count = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    s1Count[s1[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    s2Count[s2[i].charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  let matches = 0;
  for (let i = 0; i < 26; i++) {
    matches = matches + (s1Count[i] === s2Count[i] ? 1 : 0);
  }

  for (let left = 0, right = s1.length; right < s2.length; left++, right++) {
    if (matches === 26) return true;

    let ri = s2[right].charCodeAt(0) - "a".charCodeAt(0);
    let li = s2[left].charCodeAt(0) - "a".charCodeAt(0);

    s2Count[li]--;
    if (s2Count[li] === s1Count[li]) {
      matches += 1;
    } else if (s2Count[li] + 1 === s1Count[li]) {
      matches -= 1;
    }

    s2Count[ri]++;
    if (s2Count[ri] === s1Count[ri]) {
      matches += 1;
    } else if (s2Count[ri] - 1 === s1Count[ri]) {
      matches -= 1;
    }
  }

  return matches === 26;
}
