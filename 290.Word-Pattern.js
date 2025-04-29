/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const splitS = s.split(" ");

  const pLength = pattern.length;
  const sLength = splitS.length;

  if (pLength !== sLength) {
    return false;
  }

  const pMap = new Map();
  const sMap = new Map();

  for (let i = 0; i < pLength; i++) {
    const c1 = pattern[i];
    const c2 = splitS[i];

    if (
      (pMap.has(c1) && pMap.get(c1) !== c2) ||
      (sMap.has(c2) && sMap.get(c2) !== c1)
    ) {
      return false;
    }

    pMap.set(c1, c2);
    sMap.set(c2, c1);
  }

  return true;
};
