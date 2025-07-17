/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) {
    return head;
  }

  let length = 1;

  let node = head;

  while (node.next) {
    length += 1;
    node = node.next;
  }

  const lastNode = node;

  const rotationIndex = k % length;

  if (rotationIndex === 0) {
    return head;
  }

  let index = 1;
  node = head;

  // length - rotationIndex , where the new head will be positioned

  while (index < length - rotationIndex) {
    node = node.next;
    index += 1;
  }

  let newHead = node.next;
  node.next = null;
  lastNode.next = head;

  return newHead;
};
