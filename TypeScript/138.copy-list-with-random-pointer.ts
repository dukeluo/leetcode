class MyNode {
  val: number;
  next: MyNode | null;
  random: MyNode | null;
  constructor(val?: number, next?: MyNode, random?: MyNode) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function copyRandomList(head: MyNode | null): MyNode | null {
  const map = new Map<MyNode, MyNode>();
  const dummy = new MyNode();
  let currentOldNode = head;
  let currentNewNode = dummy;

  while (currentOldNode) {
    const newNode = new MyNode(currentOldNode.val);

    currentNewNode.next = newNode;
    map.set(currentOldNode, newNode);
    currentOldNode = currentOldNode.next;
    currentNewNode = currentNewNode.next;
  }

  currentOldNode = head;
  while (currentOldNode) {
    currentNewNode = map.get(currentOldNode)!;

    if (currentOldNode.random !== null) {
      currentNewNode.random = map.get(currentOldNode.random)!;
    }
    currentOldNode = currentOldNode.next;
  }

  return dummy.next;
}

function copyRandomList2(head: MyNode | null): MyNode | null {
  const map = new Map<MyNode | null, MyNode | null>([[null, null]]);
  let currentNode: MyNode | null = null;

  currentNode = head;
  while (currentNode) {
    map.set(currentNode, new MyNode());
    currentNode = currentNode.next;
  }

  currentNode = head;
  while (currentNode) {
    const newNode = map.get(currentNode)!;

    newNode.val = currentNode.val;
    newNode.next = map.get(currentNode.next)!;
    newNode.random = map.get(currentNode.random)!;
    currentNode = currentNode.next;
  }

  return map.get(head)!;
}
