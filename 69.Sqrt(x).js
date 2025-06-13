/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) {
    return x;
  }

  let start = 1;
  let end = x;

  while (start <= end) {
    const mid = Math.ceil((start + end) / 2);
    const sqr = mid * mid;

    if (sqr > x) {
      end = mid - 1;
    } else if (sqr < x) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return start - 1;
};
