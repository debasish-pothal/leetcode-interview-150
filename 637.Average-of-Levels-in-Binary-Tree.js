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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  const result = [];

  const queue = [root];

  while (queue.length) {
    let sum = 0;
    const length = queue.length;

    for (let i = 0; i < length; i++) {
      const node = queue.shift();

      sum += node.val;

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(sum / length);
  }

  return result;
};
