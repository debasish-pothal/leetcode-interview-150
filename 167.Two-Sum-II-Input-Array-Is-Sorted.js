/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    const sum = numbers[start] + numbers[end];

    if (sum < target) {
      start += 1;
    } else if (sum > target) {
      end -= 1;
    } else {
      return [start + 1, end + 1];
    }
  }

  return [-1, -1];
};
