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
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let prev = null;
  let result = Infinity;

  const traverse = (node) => {
    if (!node) {
      return;
    }

    traverse(node.left);

    if (prev !== null) {
      result = Math.min(result, node.val - prev);
    }

    prev = node.val;

    traverse(node.right);
  };

  traverse(root);

  return result;
};
