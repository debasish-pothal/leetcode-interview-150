/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max_so_far = nums[0];
  let max_till_index = nums[0];

  for (let i = 1; i < nums.length; i++) {
    max_till_index = Math.max(nums[i], nums[i] + max_till_index);
    max_so_far = Math.max(max_so_far, max_till_index);
  }

  return max_so_far;
};
