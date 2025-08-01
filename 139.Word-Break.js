/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);
  const n = s.length;
  const result = new Array(n + 1).fill(false);
  result[0] = true;

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      const subStr = s.substring(j, i);

      if (result[j] && wordSet.has(subStr)) {
        result[i] = true;
        break;
      }
    }
  }

  return result[n];
};
