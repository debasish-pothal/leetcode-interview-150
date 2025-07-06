/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const helper = (start, end) => {
    if (start > end) {
      return null;
    }

    const nodeVal = postorder.pop();
    const node = new TreeNode(nodeVal);
    const index = inorder.indexOf(nodeVal);

    node.right = helper(index + 1, end);
    node.left = helper(start, index - 1);

    return node;
  };

  return helper(0, inorder.length - 1);
};
