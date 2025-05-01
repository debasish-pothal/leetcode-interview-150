/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const n = nums.length;
  k = k % n;

  const rotateArr = (start = 0, end = n - 1) => {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];

      start++;
      end--;
    }
  };

  rotateArr();
  rotateArr(0, k - 1);
  rotateArr(k);
};
