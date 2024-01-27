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

function kthSmallest(root: TreeNode | null, k: number): number {
  let result: number = null;
  let times = 0;

  function dfs(root: TreeNode | null) {
    if (root === null) {
      return;
    }

    dfs(root.left);
    times += 1;
    if (k === times) {
      result = root.val;
    }
    dfs(root.right);
  }

  dfs(root);
  return result;
}

const tree = new TreeNode(
  3,
  new TreeNode(1, null, new TreeNode(2)),
  new TreeNode(4)
);

console.log(kthSmallest(tree, 1));
