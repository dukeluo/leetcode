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

function rightSideViewBFS(root: TreeNode | null): number[] {
  const view: number[] = [];
  const queue = [root];

  while (queue.length !== 0) {
    const levelLength = queue.length;
    let rightNode: TreeNode | null = null;

    for (let i = 0; i < levelLength; i++) {
      const node = queue.shift();

      if (node) {
        rightNode = node;
        queue.push(node.left);
        queue.push(node.right);
      }
    }

    if (rightNode) {
      view.push(rightNode.val);
    }
  }

  return view;
}

function rightSideViewDFS(root: TreeNode | null): number[] {
  const view = [];

  function dfs(root: TreeNode | null, level: number) {
    if (root === null) {
      return;
    }

    view[level] = root.val;
    if (root.left) {
      dfs(root.left, level + 1);
    }
    if (root.right) {
      dfs(root.right, level + 1);
    }
  }

  dfs(root, 0);

  return view;
}

const tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);

console.log(rightSideViewBFS(tree));
console.log(rightSideViewDFS(tree));
