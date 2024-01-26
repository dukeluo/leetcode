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

function goodNodes(root: TreeNode | null): number {
  const nodes = [];

  function dfs(root: TreeNode | null, max?: number) {
    if (root === null) {
      return;
    }

    if (root.val >= max || max === undefined) {
      nodes.push(root);
    }

    const newMax = max === undefined ? root.val : Math.max(root.val, max);

    dfs(root.left, newMax);
    dfs(root.right, newMax);
  }

  dfs(root);

  return nodes.length;
}

const tree = new TreeNode(
  3,
  new TreeNode(1, new TreeNode(3)),
  new TreeNode(4, new TreeNode(1), new TreeNode(5))
);

console.log(goodNodes(tree));
