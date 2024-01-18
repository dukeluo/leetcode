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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDepth = 0;

  function heightDFS(node: TreeNode | null) {
    if (node === null) {
      return -1;
    }

    const leftHeight = heightDFS(node.left);
    const rightHeight = heightDFS(node.right);

    maxDepth = Math.max(maxDepth, leftHeight + rightHeight + 2);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  heightDFS(root);

  return maxDepth;
}

const tree = new TreeNode(
  3,
  new TreeNode(9, new TreeNode(0)),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

console.log(diameterOfBinaryTree(tree));
