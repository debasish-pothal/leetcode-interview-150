/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const cols = new Map();
  const rows = new Map();
  const squares = new Map();

  const addToMapOfSets = (map, key, value) => {
    if (!map.has(key)) {
      map.set(key, new Set());
    }
    map.get(key).add(value);
  };

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const current = board[r][c];

      if (current === ".") {
        continue;
      }

      const sKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;

      if (
        rows.get(r)?.has(current) ||
        cols.get(c)?.has(current) ||
        squares.get(sKey)?.has(current)
      ) {
        return false;
      }

      addToMapOfSets(rows, r, current);
      addToMapOfSets(cols, c, current);
      addToMapOfSets(squares, sKey, current);
    }
  }

  return true;
};
