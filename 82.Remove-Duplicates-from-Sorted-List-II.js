/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let current = head;
  let prev = null;

  while (current) {
    if (current.next && current.next.val === current.val) {
      const val = current.val;

      while (current && current.val === val) {
        current = current.next;
      }

      if (prev) {
        prev.next = current;
      } else {
        head = current;
      }
    } else {
      prev = current;
      current = current.next;
    }
  }

  return head;
};
