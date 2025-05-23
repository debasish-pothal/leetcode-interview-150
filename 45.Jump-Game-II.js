/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let farIndex = 0;
  let currentIndex = 0;
  let jumps = 0;

  for (let i = 0; i < nums.length; i++) {
    farIndex = Math.max(farIndex, i + nums[i]);

    if (i === currentIndex) {
      jumps++;
      currentIndex = farIndex;
    }
  }

  return jumps;
};
