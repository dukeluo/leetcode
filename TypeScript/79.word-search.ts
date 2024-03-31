function exist(board: string[][], word: string): boolean {
  const rows = board.length;
  const cols = board[0].length;
  const paths = new Set<string>();

  function backtrace(r: number, c: number, i: number) {
    if (i === word.length) {
      return true;
    }

    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      board[r][c] !== word[i] ||
      paths.has(`${r}, ${c}`)
    ) {
      return false;
    }

    paths.add(`${r}, ${c}`);
    const result =
      backtrace(r + 1, c, i + 1) ||
      backtrace(r - 1, c, i + 1) ||
      backtrace(r, c + 1, i + 1) ||
      backtrace(r, c - 1, i + 1);
    paths.delete(`${r}, ${c}`);

    return result;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (backtrace(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
}

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "SEE"
  )
);
