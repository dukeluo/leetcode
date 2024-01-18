class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isBalanced(root: TreeNode | null): boolean {
  function isBalancedDFS(root: TreeNode | null) {
    if (root === null) {
      return [-1, true];
    }

    const [leftHeight, isLeftBalanced] = isBalancedDFS(root.left);
    const [rightHeight, isRightBalanced] = isBalancedDFS(root.right);

    return [
      1 + Math.max(leftHeight, rightHeight),
      isLeftBalanced &&
        isRightBalanced &&
        Math.abs(leftHeight - rightHeight) <= 1,
    ];
  }

  return isBalancedDFS(root)[1];
}
