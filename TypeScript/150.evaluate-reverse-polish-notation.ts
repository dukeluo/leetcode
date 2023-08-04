function evalRPN(tokens: string[]): number {
  const values: number[] = [];
  let l: number;
  let r: number;

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    switch (token) {
      case "+":
        r = values.pop()!;
        l = values.pop()!;
        values.push(l + r);
        break;
      case "-":
        r = values.pop()!;
        l = values.pop()!;
        values.push(l - r);
        break;
      case "*":
        r = values.pop()!;
        l = values.pop()!;
        values.push(l * r);
        break;
      case "/":
        r = values.pop()!;
        l = values.pop()!;
        values.push(Math.trunc(l / r));
        break;
      default:
        values.push(parseInt(token, 10));
    }
  }

  return values[0];
}
