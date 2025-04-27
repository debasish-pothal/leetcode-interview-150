/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sMap = new Map();

  for (const c of s) {
    sMap.set(c, (sMap.get(c) || 0) + 1);
  }

  for (const c of t) {
    if (sMap.has(c)) {
      sMap.set(c, sMap.get(c) - 1);

      if (sMap.get(c) === 0) {
        sMap.delete(c);
      }
    } else {
      return false;
    }
  }

  return sMap.size === 0;
};
