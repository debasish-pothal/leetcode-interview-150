/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const [start1, end1] = intervals[i];
    const [start2, end2] = result[result.length - 1];

    if (start1 <= end2) {
      result[result.length - 1][1] = Math.max(end1, end2);
    } else {
      result.push(intervals[i]);
    }
  }

  return result;
};
