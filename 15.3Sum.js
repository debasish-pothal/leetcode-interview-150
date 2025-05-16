/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    const current = nums[i];
    const target = 0 - current;

    let start = i + 1;
    let end = n - 1;

    while (start < end) {
      const sum = nums[start] + nums[end];

      if (sum < target) {
        start++;
      } else if (sum > target) {
        end--;
      } else {
        result.push([current, nums[start], nums[end]]);
        start++;
        end--;

        while (start < end && nums[start] === nums[start - 1]) {
          start++;
        }

        while (start < end && nums[end] === nums[end + 1]) {
          end--;
        }
      }
    }
  }

  return result;
};
