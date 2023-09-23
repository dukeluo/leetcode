interface ListNode {
  val: number;
  next: ListNode | null;
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummy: ListNode = {
    val: -1,
    next: head,
  };
  let slow: ListNode | null | undefined = dummy;
  let fast: ListNode | null | undefined = head;

  while (n > 0) {
    fast = fast?.next;
    n--;
  }
  while (fast) {
    slow = slow?.next;
    fast = fast.next;
  }
  if (slow && slow.next) {
    slow.next = slow.next.next;
  }

  return dummy.next;
}
