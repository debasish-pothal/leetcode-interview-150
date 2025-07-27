/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // min(L, R) - height[i];

  const length = height.length;
  const maxLeft = new Array(length);
  const maxRight = new Array(length);

  maxLeft[0] = height[0];
  maxRight[length - 1] = height[length - 1];

  const minLR = new Array(length);

  for (let i = 1; i < length; i++) {
    maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
  }

  for (let i = length - 2; i >= 0; i--) {
    maxRight[i] = Math.max(maxRight[i + 1], height[i]);
  }

  for (let i = 0; i < length; i++) {
    minLR[i] = Math.min(maxLeft[i], maxRight[i]);
  }

  let water = 0;

  for (let i = 0; i < length; i++) {
    water += Math.abs(minLR[i] - height[i]);
  }

  return water;
};
