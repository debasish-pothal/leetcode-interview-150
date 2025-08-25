/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let total = 0;
  let currentMax = 0;
  let currentMin = 0;
  let globalMax = nums[0];
  let globalMin = nums[0];

  for (const num of nums) {
    total += num;

    currentMax = Math.max(currentMax + num, num);
    globalMax = Math.max(globalMax, currentMax);

    currentMin = Math.min(currentMin + num, num);
    globalMin = Math.min(globalMin, currentMin);
  }

  return globalMax > 0 ? Math.max(globalMax, total - globalMin) : globalMax;
};
