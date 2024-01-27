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

function isValidBST(root: TreeNode | null): boolean {
  function validDFS(root: TreeNode | null, left: number, right: number) {
    if (root === null) {
      return true;
    }

    if (root.val > left && root.val < right) {
      return (
        validDFS(root.left, left, root.val) &&
        validDFS(root.right, root.val, right)
      );
    }

    return false;
  }

  return validDFS(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

const tree = new TreeNode(2, new TreeNode(1), new TreeNode(3));

console.log(isValidBST(tree));
