/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let num = 0;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (c === "V" || c === "X") {
      if (i > 0 && s[i - 1] === "I") {
        num -= 2;
      }
    }

    if (c === "L" || c === "C") {
      if (i > 0 && s[i - 1] === "X") {
        num -= 20;
      }
    }

    if (c === "D" || c === "M") {
      if (i > 0 && s[i - 1] === "C") {
        num -= 200;
      }
    }

    num += romanMap.get(c);
  }

  return num;
};
