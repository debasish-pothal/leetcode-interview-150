/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const result = [];

  let p1 = 0;

  while (p1 < nums.length) {
    const start = nums[p1];

    while (nums[p1 + 1] === nums[p1] + 1) {
      p1++;
    }

    const end = nums[p1];

    p1++;

    if (start === end) {
      result.push(`${start}`);
    } else {
      result.push(`${start}->${end}`);
    }
  }

  return result;
};
