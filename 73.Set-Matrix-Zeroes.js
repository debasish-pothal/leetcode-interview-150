/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const zeros = [];
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        zeros.push([i, j]);
      }
    }
  }

  for (let i = 0; i < zeros.length; i++) {
    const [row, col] = zeros[i];

    for (let i = 0; i < rows; i++) {
      matrix[i][col] = 0;
    }

    for (let i = 0; i < cols; i++) {
      matrix[row][i] = 0;
    }
  }
};
