interface ListNode {
  val: number;
  next: ListNode | null;
}

function reorderList(head: ListNode | null): void {
  let slow: ListNode | null | undefined = head;
  let fast: ListNode | null | undefined = head?.next;
  let midpoint: ListNode | null | undefined = null;

  // get midpoint
  while (fast && fast.next) {
    slow = slow?.next;
    fast = fast.next.next;
  }
  if (!slow?.next) return;
  midpoint = slow.next;
  slow.next = null;

  // reverse
  let reversed: ListNode | null = null;
  while (midpoint) {
    let next = midpoint.next;

    midpoint.next = reversed;
    reversed = midpoint;
    midpoint = next;
  }

  // merge
  let n1 = head;
  let n2 = reversed;
  while (n1 && n2) {
    let next1 = n1.next;
    let next2 = n2.next;

    n1.next = n2;
    n2.next = next1;

    n1 = next1;
    n2 = next2;
  }
}
