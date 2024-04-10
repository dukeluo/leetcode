function longestPalindrome(s: string): string {
  let result = "";
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    let left, right;

    for (
      left = i, right = i;
      left >= 0 && right < s.length && s[left] === s[right];
      left -= 1, right += 1
    ) {
      if (right - left + 1 > maxLength) {
        result = s.slice(left, right + 1);
        maxLength = right - left + 1;
      }
    }

    for (
      left = i, right = i + 1;
      left >= 0 && right < s.length && s[left] === s[right];
      left -= 1, right += 1
    ) {
      if (right - left + 1 > maxLength) {
        result = s.slice(left, right + 1);
        maxLength = right - left + 1;
      }
    }
  }

  return result;
}

// s[i] == s[j] && dp[i+1][j-1] = true => dp[i][j] = true
function longestPalindrome2(s: string): string {
  const dp: boolean[][] = [];
  let mi = 0;
  let mj = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    dp[i] = [];
    dp[i][i] = true;
  }

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < s.length; j++) {
      // The condition j - i === 1 is used to handle the base case where the substring s[i...j] is of length 2.
      // In this case, we don't have a dp[i + 1][j - 1] to check because there are no characters between s[i] and s[j].
      // So, we directly check if s[i] is the same as s[j] to determine if the substring s[i...j] is a palindrome.
      if (j - i === 1 || dp[i + 1][j - 1]) {
        dp[i][j] = s[i] === s[j];
      }

      if (dp[i][j] && j - i + 1 > maxLength) {
        mi = i;
        mj = j;
        maxLength = j - i + 1;
      }
    }
  }

  return s.slice(mi, mj + 1);
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome2("aaabcbaba"));
console.log(longestPalindrome2("cbbd"));
