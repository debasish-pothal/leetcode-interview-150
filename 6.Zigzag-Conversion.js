/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }

  let result = "";
  const inc = (numRows - 1) * 2;

  for (let r = 0; r < numRows; r++) {
    for (let i = r; i < s.length; i += inc) {
      result += s[i];

      const nextIndex = i + inc - 2 * r;
      if (r > 0 && r < numRows - 1 && nextIndex < s.length) {
        result += s[nextIndex];
      }
    }
  }

  return result;
};
