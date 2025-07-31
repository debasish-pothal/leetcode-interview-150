/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const length = nums.length;

  if (length === 0) {
    return 0;
  }

  if (length === 1) {
    return nums[0];
  }

  const result = [nums[0], Math.max(nums[0], nums[1])];

  for (let i = 2; i < length; i++) {
    result[i] = Math.max(nums[i], nums[i] + result[i - 2], result[i - 1]);
  }

  return Math.max(result[length - 1], result[length - 2]);
};
