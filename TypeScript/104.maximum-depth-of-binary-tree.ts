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

function maxDepthBFS(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  const queue = [root];
  let depth = 0;

  while (queue.length !== 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    depth += 1;
  }

  return depth;
}

function maxDepthDSF(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  const stack = [{ node: root, depth: 1 }];
  let maxDepth = 0;

  while (stack.length !== 0) {
    const { node, depth } = stack.pop();

    maxDepth = Math.max(maxDepth, depth);

    if (node.right) {
      stack.push({ node: node.right, depth: depth + 1 });
    }

    if (node.left) {
      stack.push({ node: node.left, depth: depth + 1 });
    }
  }

  return maxDepth;
}

function maxDepthRecursion(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  return (
    1 + Math.max(maxDepthRecursion(root.left), maxDepthRecursion(root.right))
  );
}

const tree = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

console.log(maxDepthBFS(tree));
console.log(maxDepthDSF(tree));
console.log(maxDepthRecursion(tree));
