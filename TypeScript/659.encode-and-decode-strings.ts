function encode(strs: string[]): string {
  return strs.map((s) => `${s.length}#${s}`).join("");
}

function decode(str: string): string[] {
  const strs: string[] = [];

  for (let i = 0; i < str.length; ) {
    let j = i;

    while (str[j] !== "#") j += 1;

    const length = parseInt(str.slice(i, j), 10);

    strs.push(str.slice(j + 1, j + 1 + length));
    i = j + 1 + length;
  }

  return strs;
}

// console.log(encode(["2###", "1##", "42#", "#2#3"]));
// console.log(decode(encode(["2###", "1##", "42#", "#2#3"])));

// console.log(encode(["we", "say", ":", "yes"]));
// console.log(decode(encode(["we", "say", ":", "yes"])));
