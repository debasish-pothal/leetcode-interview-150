/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [root];
  let iter = 0;

  while (queue.length) {
    let length = queue.length;
    const current = [];

    while (length--) {
      const node = queue.shift();

      current.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    if (iter % 2 !== 0) {
      current.reverse();
    }

    result.push(current);

    iter++;
  }

  return result;
};
