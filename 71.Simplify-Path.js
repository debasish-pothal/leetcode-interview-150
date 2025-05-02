/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const pathArr = path.split("/");
  const stack = [];

  for (const d of pathArr) {
    if (d === "." || d === "") {
      continue;
    } else if (d === "..") {
      stack.pop();
    } else {
      stack.push(d);
    }
  }

  return `/${stack.join("/")}`;
};
