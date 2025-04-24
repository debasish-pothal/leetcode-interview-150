/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  const opening = ["(", "{", "["];

  const closingToOpeningMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const c of s) {
    if (opening.includes(c)) {
      stack.push(c);
    } else {
      const top = stack[stack.length - 1];

      if (top === closingToOpeningMap[c]) {
        stack.pop();
      } else {
        stack.push(c);
      }
    }
  }

  return stack.length === 0;
};
