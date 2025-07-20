/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  const dummy = new ListNode(0, head);

  let leftPrev = dummy;
  let current = head;

  for (let i = 0; i < left - 1; i++) {
    leftPrev = current;
    current = current.next;
  }

  let prev = null;

  for (let i = 0; i < right - left + 1; i++) {
    const temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  leftPrev.next.next = current;
  leftPrev.next = prev;

  return dummy.next;
};
