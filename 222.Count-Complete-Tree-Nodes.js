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
var countNodes = function (root) {
  let count = 0;

  if (!root) {
    return count;
  }

  const dfs = (node) => {
    count++;

    if (node.left) {
      dfs(node.left);
    }

    if (node.right) {
      dfs(node.right);
    }
  };

  dfs(root);

  return count;
};
