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
var sumNumbers = function (root) {
  const dfs = (node, sum) => {
    if (!node) {
      return 0;
    }

    sum = sum * 10 + node.val;

    if (!node.left && !node.right) {
      return sum;
    }

    return dfs(node.left, sum) + dfs(node.right, sum);
  };

  return dfs(root, 0);
};
