function partition(s: string): string[][] {
  const subStrings: string[][] = [];
  const subString: string[] = [];

  function backtrace(index) {
    if (index > s.length) {
      return;
    }
    if (index === s.length) {
      subStrings.push(subString.slice());
      return;
    }

    for (let i = index; i < s.length; i++) {
      const chars = s.slice(index, i + 1);

      if (chars === chars.split("").reverse().join("")) {
        subString.push(chars);
        backtrace(i + 1);
        subString.pop();
      }
    }
  }

  backtrace(0);
  return subStrings;
}

console.log(partition("aab"));
