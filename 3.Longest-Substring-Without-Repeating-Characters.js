/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let max = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (map.has(c)) {
      const index = map.get(c);

      if (index >= start) {
        start = index + 1;
      }
    }

    const current = i - start + 1;
    max = Math.max(max, current);

    map.set(c, i);
  }

  return max;
};
