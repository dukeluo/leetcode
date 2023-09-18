interface ListNode {
  val: number;
  next: ListNode | null;
}

function reverseList(head: ListNode | null): ListNode | null {
  if (!head?.next) return head;

  const temp = reverseList(head.next);

  head.next.next = head;
  head.next = null;

  return temp;
}

function reverseList2(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;

  while (head) {
    const next = head.next;

    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}
