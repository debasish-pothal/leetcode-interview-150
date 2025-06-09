/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let num = 0;
  let xCopy = x;

  while (xCopy) {
    const rem = xCopy % 10;
    num = 10 * num + rem;
    xCopy = Math.trunc(xCopy / 10);
  }

  return num === x;
};
