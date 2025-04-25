var removeDuplicates = function (nums) {
  const n = nums.length;
  let p1 = 0;
  let p2 = 0;

  while (p1 < n && nums[p1] !== undefined) {
    while (nums[p1] === nums[p2]) {
      p2++;
    }

    p1++;

    nums[p1] = nums[p2];
  }

  return p1;
};
