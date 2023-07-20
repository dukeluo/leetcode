function isValidSudoku(board: string[][]): boolean {
  const rows = new Map<number, Set<string>>();
  const columns = new Map<number, Set<string>>();
  const boxes = new Map<string, Set<string>>();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const value = board[i][j];

      if (value === ".") continue;

      const row = i;
      const column = j;
      const box = [Math.floor(i / 3), Math.floor(j / 3)].join(",");
      const rowSet = rows.get(row) ?? new Set();
      const columnSet = columns.get(column) ?? new Set();
      const boxSet = boxes.get(box) ?? new Set();

      if (rowSet.has(value) || columnSet.has(value) || boxSet.has(value))
        return false;

      rowSet.add(value);
      rows.set(row, rowSet);
      columnSet.add(value);
      columns.set(column, columnSet);
      boxSet.add(value);
      boxes.set(box, boxSet);
    }
  }

  return true;
}
