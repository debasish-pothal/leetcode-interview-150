/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let max = 0;

  const set = new Set(nums);

  for (const num of set) {
    if (!set.has(num - 1)) {
      let current = 1;
      let temp = num;

      while (set.has(temp + 1)) {
        current++;
        temp++;
      }

      max = Math.max(max, current);
    }
  }

  return max;
};
