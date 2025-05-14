/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const result = [];
  const arr = s.split(" ").filter(Boolean);
  const n = arr.length;

  for (let i = n - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result.join(" ");
};
