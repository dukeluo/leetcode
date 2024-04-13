// dp[i+1][j-1] === true && s[i] === s[j] => dp[i][j] === true
function countSubstrings(s: string): number {
  let dp: boolean[][] = [];
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    dp[i] = [];
    dp[i][i] = true;
    count = count + 1;
  }

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < s.length; j++) {
      if (j - i === 1 || dp[i + 1][j - 1]) {
        dp[i][j] = s[i] === s[j];
      }

      if (dp[i][j]) {
        count = count + 1;
      }
    }
  }

  return count;
}

console.log(countSubstrings("abc"));
console.log(countSubstrings("aaa"));
