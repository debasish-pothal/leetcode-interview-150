/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  if (!root) {
    return null;
  }

  const queue = [root];

  while (queue.length) {
    const length = queue.length;
    let prev = null;

    for (let i = 0; i < length; i++) {
      const node = queue.shift();

      if (prev) {
        prev.next = node;
      }

      prev = node;

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    if (prev) {
      prev.next = null;
    }
  }

  return root;
};
