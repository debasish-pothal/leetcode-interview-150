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
  if (!inorder.length && !postorder.length) {
    return null;
  }

  const nodeVal = postorder.pop();
  const node = new TreeNode(nodeVal);
  const index = inorder.indexOf(nodeVal);

  node.right = buildTree(inorder.slice(index + 1), postorder);
  node.left = buildTree(inorder.slice(0, index), postorder);

  return node;
};
