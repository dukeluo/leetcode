function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const frequency: number[] = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    frequency[s.charCodeAt(i) - 97] = frequency[s.charCodeAt(i) - 97] + 1;
    frequency[t.charCodeAt(i) - 97] = frequency[t.charCodeAt(i) - 97] - 1;
  }

  return frequency.findIndex((c) => c !== 0) === -1;
}

function isAnagram2(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  return s.split("").sort().join("") === t.split("").sort().join("");
}
