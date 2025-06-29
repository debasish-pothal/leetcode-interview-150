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
var maxDepth = function (root) {
  const getDepth = (node) => {
    if (!node) {
      return 0;
    }

    const leftDepth = getDepth(node.left);
    const rightDepth = getDepth(node.right);

    return Math.max(leftDepth, rightDepth) + 1;
  };

  return getDepth(root);
};
