/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (points.length === 0) {
    return 0;
  }

  points.sort((p1, p2) => p1[0] - p2[0]);

  let arrows = points.length;

  let prev = points[0];

  for (let i = 1; i < points.length; i++) {
    const current = points[i];

    if (current[0] <= prev[1]) {
      arrows -= 1;

      prev = [current[0], Math.min(current[1], prev[1])];
    } else {
      prev = current;
    }
  }

  return arrows;
};
