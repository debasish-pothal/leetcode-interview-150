/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const rows = word1.length;
  const cols = word2.length;

  const result = [];

  for (let r = 0; r <= rows; r++) {
    result[r] = [];
    result[r][0] = r;
  }

  for (let c = 0; c <= cols; c++) {
    result[0][c] = c;
  }

  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {
      if (word1[r - 1] === word2[c - 1]) {
        result[r][c] = result[r - 1][c - 1];
      } else {
        result[r][c] =
          1 +
          Math.min(result[r - 1][c], result[r][c - 1], result[r - 1][c - 1]);
      }
    }
  }

  return result[rows][cols];
};
