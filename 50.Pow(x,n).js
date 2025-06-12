/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  const helper = (num, pow) => {
    if (num === 0) {
      return 0;
    }

    if (pow === 0) {
      return 1;
    }

    let result = helper(num, Math.trunc(pow / 2));
    result *= result;

    return pow % 2 === 0 ? result : num * result;
  };

  const result = helper(x, Math.abs(n));

  return n < 0 ? 1 / result : result;
};
