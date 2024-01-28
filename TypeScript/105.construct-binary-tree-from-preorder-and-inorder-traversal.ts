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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }

  return new TreeNode(
    preorder[0],
    buildTree(
      preorder.slice(1, inorder.indexOf(preorder[0]) + 1),
      inorder.slice(0, inorder.indexOf(preorder[0]))
    ),
    buildTree(
      preorder.slice(inorder.indexOf(preorder[0]) + 1),
      inorder.slice(inorder.indexOf(preorder[0]) + 1)
    )
  );
}

console.log(buildTree([3, 9, 1, 2, 20, 15, 7], [1, 9, 2, 3, 15, 20, 7]));
