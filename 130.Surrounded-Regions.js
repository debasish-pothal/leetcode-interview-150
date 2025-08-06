/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const rows = board.length;
  const cols = board[0].length;

  const capture = (r, c) => {
    if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== "O") {
      return;
    }

    board[r][c] = "T";

    capture(r + 1, c);
    capture(r - 1, c);
    capture(r, c + 1);
    capture(r, c - 1);
  };

  // convert all border O to T
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (
        board[r][c] === "O" &&
        ([0, rows - 1].includes(r) || [0, cols - 1].includes(c))
      ) {
        capture(r, c);
      }
    }
  }

  // convert all O to X
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === "O") {
        board[r][c] = "X";
      }
    }
  }

  // convert all T to O
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === "T") {
        board[r][c] = "O";
      }
    }
  }
};
