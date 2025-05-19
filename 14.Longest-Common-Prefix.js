/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    const current = strs[i];

    let index = 0;

    while (index < prefix.length) {
      if (prefix[index] !== current[index]) {
        prefix = prefix.slice(0, index);
      }

      index++;
    }
  }

  return prefix;
};
