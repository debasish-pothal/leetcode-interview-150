/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const n = nums.length;

  if (n <= 2) {
    return n;
  }

  let p1 = 1;
  let count = 1;

  for (let p2 = 1; p2 < n; p2++) {
    if (nums[p2] === nums[p2 - 1]) {
      count++;
    } else {
      count = 1;
    }

    if (count <= 2) {
      nums[p1] = nums[p2];
      p1++;
    }
  }

  return p1;
};
