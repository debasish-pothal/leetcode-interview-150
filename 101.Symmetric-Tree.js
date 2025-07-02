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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }

  const isMirror = (t, r) => {
    if (!t || !r) {
      return false;
    }

    if (!t && !r) {
      return true;
    }

    if (t.val !== r.val) {
      return false;
    }

    return isMirror(t.left, r.right) && isMirror(t.right, r.left);
  };

  return isMirror(root.left, root.right);
};
