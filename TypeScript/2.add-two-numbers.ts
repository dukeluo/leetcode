class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummy = new ListNode();
  let n1 = l1;
  let n2 = l2;
  let n3 = dummy;
  let carry = 0;

  while (n1 || n2 || carry) {
    const v1 = n1?.val ?? 0;
    const v2 = n2?.val ?? 0;
    const sum = v1 + v2 + carry;
    const val = sum % 10;

    n3.next = new ListNode(val);
    carry = Math.floor(sum / 10);
    n1 = n1?.next ?? null;
    n2 = n2?.next ?? null;
    n3 = n3.next;
  }

  return dummy.next;
}
