/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const result = new Array(nums.length).fill(1);

  for (let i = nums.length - 2; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        result[i] = Math.max(result[i], 1 + result[j]);
      }
    }
  }

  return Math.max(...result);
};
