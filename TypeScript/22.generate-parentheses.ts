function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  function generate(left: number, right: number, temp: string) {
    if (left === right && left === n) return result.push(temp);
    if (left < n) generate(left + 1, right, temp + "(");
    if (right < left) generate(left, right + 1, temp + ")");
  }

  generate(0, 0, "");

  return result;
}

function generateParenthesis2(n: number): string[] {
  const result: string[] = [];
  const temp: string[] = [];

  function backtrack(left: number, right: number) {
    if (left === right && left === n) {
      return result.push(temp.join(""));
    }
    if (left < n) {
      temp.push("(");
      backtrack(left + 1, right);
      temp.pop();
    }
    if (right < left) {
      temp.push(")");
      backtrack(left, right + 1);
      temp.pop();
    }
  }

  backtrack(0, 0);

  return result;
}
