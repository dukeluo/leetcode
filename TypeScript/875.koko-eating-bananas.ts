function minEatingSpeed(piles: number[], h: number): number {
  const max = Math.max(...piles);
  let low = 1;
  let high = max;
  let result = max;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    let hour = 0;

    for (let p of piles) {
      hour += Math.ceil(p / mid);
    }
    if (hour > h) {
      low = mid + 1;
    } else {
      result = mid;
      high = mid - 1;
    }
  }

  return result;
}
