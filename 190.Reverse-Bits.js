/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    // Shift result to the left by 1 to make space for the next bit
    result <<= 1;
    // Add the last bit of n to result
    result |= n & 1;
    // Shift n to the right by 1 to process the next bit
    n >>= 1;
  }
  return result >>> 0; // Ensure we return an unsigned integer
};
