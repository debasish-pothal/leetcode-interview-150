/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        triangle[i][j] = triangle[i][j] + triangle[i - 1][j];
      } else if (i === j) {
        triangle[i][j] = triangle[i][j] + triangle[i - 1][j - 1];
      } else {
        const num1 = triangle[i][j] + triangle[i - 1][j];
        const num2 = triangle[i][j] + triangle[i - 1][j - 1];

        triangle[i][j] = Math.min(num1, num2);
      }
    }
  }

  return Math.min(...triangle[triangle.length - 1]);
};
