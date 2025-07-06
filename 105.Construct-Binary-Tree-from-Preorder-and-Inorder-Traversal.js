/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const helper = (start, end) => {
    if (start > end) {
      return null;
    }

    const nodeVal = preorder.shift();
    const node = new TreeNode(nodeVal);

    const index = inorder.indexOf(nodeVal);

    node.left = helper(start, index - 1);
    node.right = helper(index + 1, end);

    return node;
  };

  return helper(0, inorder.length - 1);
};
