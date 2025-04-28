/**
 * @param {number} n
 * @return {boolean}
 */
const sumDigit = (n) => {
  let sum = 0;

  while (n) {
    const rem = n % 10;
    sum += rem * rem;
    n = Math.floor(n / 10);
  }

  return sum;
};

var isHappy = function (n) {
  let slow = n;
  let fast = n;

  while (true) {
    slow = sumDigit(slow);
    fast = sumDigit(sumDigit(fast));

    if (slow === fast) {
      return slow === 1;
    }
  }
};
