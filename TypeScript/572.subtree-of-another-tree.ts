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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (root === null && subRoot === null) {
    return true;
  }

  if (root === null || subRoot === null) {
    return false;
  }

  return (
    isSame(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
}

function isSame(tree1: TreeNode | null, tree2: TreeNode | null) {
  if (tree1 === null && tree2 === null) {
    return true;
  }

  if (tree1 === null || tree2 === null) {
    return false;
  }

  return (
    tree1.val === tree2.val &&
    isSame(tree1.left, tree2.left) &&
    isSame(tree1.right, tree2.right)
  );
}
