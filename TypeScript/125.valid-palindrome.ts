function isPalindrome(s: string): boolean {
  s = s.replace(/[^a-z0-9A-Z]/g, "").toLowerCase();

  let i = 0;
  let j = s.length - 1;

  while (j >= i) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

function isPalindrome2(s: string): boolean {
  s = s.replace(/[^a-z0-9A-Z]/g, "").toLowerCase();

  return s === s.split("").reverse().join("");
}
