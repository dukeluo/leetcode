function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  strs.forEach((s) => {
    const identity = new Array(26).fill(0); // it also can be the sorted string

    for (let i = 0; i < s.length; i++) {
      identity[s.charCodeAt(i) - 97] += 1;
    }

    const key = identity.join(",");
    const anagrams = map.get(key) ?? [];

    anagrams.push(s);
    map.set(key, anagrams);
  });

  return Array.from(map.values());
}
