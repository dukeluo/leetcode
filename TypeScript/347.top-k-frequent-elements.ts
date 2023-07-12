function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();

  nums.forEach((n) => {
    const frequency = map.get(n) ?? 0;

    map.set(n, frequency + 1);
  });

  return Array.from(map)
    .sort(([n1, f1], [n2, f2]) => f2 - f1)
    .slice(0, k)
    .map(([n, f]) => n);
}

function topKFrequent2(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  const count: number[][] = new Array(nums.length + 1).fill(0).map(() => []);
  const result: number[] = [];

  nums.forEach((n) => map.set(n, (map.get(n) ?? 0) + 1));
  map.forEach((f, n) => count[f].push(n));

  for (let i = count.length - 1; i >= 1; i--) {
    for (let j = 0; j < count[i].length; j++) {
      result.push(count[i][j]);

      if (result.length === k) return result;
    }
  }

  return result;
}
