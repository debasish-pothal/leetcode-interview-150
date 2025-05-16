/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0;
  let start = 0;
  let end = height.length - 1;

  while (start < end) {
    const width = Math.min(height[start], height[end]);
    const length = end - start;
    const currentArea = length * width;

    maxArea = Math.max(maxArea, currentArea);

    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }

  return maxArea;
};
