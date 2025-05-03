/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const result = [];
  const map = new Map();

  for (const str of strs) {
    const key = str.split("").sort().join("");

    map.set(key, [...(map.get(key) || []), str]);
  }

  for (const values of map.values()) {
    result.push(values);
  }

  return result;
};
