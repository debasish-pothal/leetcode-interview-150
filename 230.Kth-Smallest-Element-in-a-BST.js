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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const arr = [];

  const traverse = (node) => {
    if (!node) {
      return;
    }

    traverse(node.left);
    arr.push(node.val);
    traverse(node.right);
  };

  traverse(root);

  return arr[k - 1];
};
