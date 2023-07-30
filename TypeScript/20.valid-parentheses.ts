function isValid(s: string): boolean {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.pop() !== "(") return false;
    } else if (char === "]") {
      if (stack.pop() !== "[") return false;
    } else {
      if (stack.pop() !== "{") return false;
    }
  }

  return stack.length === 0;
}
