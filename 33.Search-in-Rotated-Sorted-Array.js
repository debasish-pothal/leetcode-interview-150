/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length === 0) {
    return -1;
  }

  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // Check if the left half is sorted
    if (nums[start] <= nums[mid]) {
      if (nums[start] <= target && target < nums[mid]) {
        end = mid - 1; // Target is in the left half
      } else {
        start = mid + 1; // Target is in the right half
      }
    } else {
      // Right half is sorted
      if (nums[mid] < target && target <= nums[end]) {
        start = mid + 1; // Target is in the right half
      } else {
        end = mid - 1; // Target is in the left half
      }
    }
  }

  return -1; // Target not found
};
