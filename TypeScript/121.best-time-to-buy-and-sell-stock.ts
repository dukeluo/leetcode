function maxProfit(prices: number[]): number {
  let i = 0;
  let j = 1;
  let result = 0;

  while (j < prices.length) {
    result = Math.max(result, prices[j] - prices[i]);

    if (prices[j] < prices[i]) {
      i = j;
    }
    j++;
  }

  return result;
}
