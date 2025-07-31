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

  let rob1 = nums[0];
  let rob2 = Math.max(nums[0], nums[1]);

  for (let i = 2; i < length; i++) {
    const temp = Math.max(nums[i], nums[i] + rob1, rob2);
    rob1 = rob2;
    rob2 = temp;
  }

  return Math.max(rob1, rob2);
};
