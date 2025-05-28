/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const result = [];
  let inserted = false;

  for (let i = 0; i < intervals.length; i++) {
    const [currStart, currEnd] = intervals[i];
    const [newStart, newEnd] = newInterval;

    if (currEnd < newStart) {
      result.push(intervals[i]);
    } else if (currStart > newEnd) {
      if (!inserted) {
        result.push(newInterval);
        inserted = true;
      }
      result.push(intervals[i]);
    } else {
      newInterval[0] = Math.min(currStart, newStart);
      newInterval[1] = Math.max(currEnd, newEnd);
    }
  }

  if (!inserted) {
    result.push(newInterval);
  }

  return result;
};
