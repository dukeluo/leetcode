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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null) {
    return null;
  }
  if (p === null) {
    return q;
  }
  if (q === null) {
    return p;
  }

  const low = Math.min(p.val, q.val);
  const up = Math.max(p.val, q.val);

  if (root.val > up) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (root.val < low) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
}
