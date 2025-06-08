/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const sum = (nums) => {
    return nums.reduce((acc, curr) => acc + curr, 0);
  };

  if (sum(gas) < sum(cost)) {
    return -1;
  }

  let total = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i];

    if (total < 0) {
      total = 0;
      start = i + 1;
    }
  }

  return start;
};
