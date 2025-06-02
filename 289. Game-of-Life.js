/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const rows = board.length;
  const cols = board[0].length;

  const countNeighbours = (r, c) => {
    let neighbours = 0;

    for (let i = r - 1; i <= r + 1; i++) {
      for (let j = c - 1; j <= c + 1; j++) {
        if (
          (i === r && j === c) ||
          i < 0 ||
          j < 0 ||
          i === rows ||
          j === cols
        ) {
          continue;
        }

        if ([1, 3].includes(board[i][j])) {
          neighbours++;
        }
      }
    }

    return neighbours;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const neighbours = countNeighbours(r, c);

      if (board[r][c]) {
        if ([2, 3].includes(neighbours)) {
          board[r][c] = 3;
        }
      } else {
        if (neighbours === 3) {
          board[r][c] = 2;
        }
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === 1) {
        board[r][c] = 0;
      } else if ([2, 3].includes(board[r][c])) {
        board[r][c] = 1;
      }
    }
  }
};
