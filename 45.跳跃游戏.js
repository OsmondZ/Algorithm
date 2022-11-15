var jump = function (nums) {
  let currentIndex = 0;
  let nextIndex = 0;
  let step = 0;
  //   [1, 2, 3, 2, 5, 1];
  debugger;
  for (let i = 0; i < nums.length - 1; i++) {
    nextIndex = Math.max(nextIndex, nums[i] + i);
    if (currentIndex === i) {
      currentIndex = nextIndex;
      step++;
    }
  }
  return step;
};
jump([2, 3, 1, 1, 4]);
