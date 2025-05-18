/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let reachableIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > reachableIndex) {
      return false;
    }

    reachableIndex = Math.max(reachableIndex, i + nums[i]);
  }

  return true;
};
