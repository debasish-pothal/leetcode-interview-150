/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (nums.length === 0) {
    return [-1, -1];
  }

  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] < target) {
      start = mid + 1;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      let leftIndex = mid;
      let rightIndex = mid;

      while (nums[leftIndex - 1] === target) {
        leftIndex -= 1;
      }

      while (nums[rightIndex + 1] === target) {
        rightIndex += 1;
      }

      return [leftIndex, rightIndex];
    }
  }

  return [-1, -1];
};
