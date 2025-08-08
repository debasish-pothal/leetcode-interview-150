/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  const oldToNew = new Map();

  const clone = (node) => {
    if (oldToNew.has(node)) {
      return oldToNew.get(node);
    }

    const copy = new Node(node.val);
    oldToNew.set(node, copy);

    for (const neighbor of node.neighbors) {
      copy.neighbors.push(clone(neighbor));
    }

    return copy;
  };

  return node ? clone(node) : null;
};
