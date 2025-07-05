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
  const helper = (preStart, inStart, inEnd) => {
    if (preStart > preorder.length - 1 || inStart > inEnd) {
      return null;
    }

    const nodeVal = preorder[preStart];
    const node = new TreeNode(nodeVal);

    const index = inorder.indexOf(nodeVal, inStart);

    const leftSize = index - inStart;

    node.left = helper(preStart + 1, inStart, index - 1);
    node.right = helper(preStart + leftSize + 1, index + 1, inEnd);

    return node;
  };

  return helper(0, 0, inorder.length - 1);
};
