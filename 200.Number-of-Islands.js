/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  const traverseGraph = (row, col) => {
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      grid[row][col] === "0"
    ) {
      return;
    }

    grid[row][col] = "0";
    traverseGraph(row + 1, col);
    traverseGraph(row - 1, col);
    traverseGraph(row, col + 1);
    traverseGraph(row, col - 1);
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        count += 1;
        traverseGraph(i, j);
      }
    }
  }

  return count;
};
