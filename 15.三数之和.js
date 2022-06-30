/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  //  找到 a b c
  //   无序数组里，查找目标和大小相关 就可以看下是否可以利用排序降低复杂度
  // sort n*logn
  //   最小+最大之和，如果比目标值大，说明我们要缩小那个值，最大值左移动，否则最小值右移
  let list = [];
  nums.sort((a, b) => a - b); // n * logn;
  for (let i = 0; i < nums.length; i++) {
    // nums[i] as basis ,find other two array the sum of it =-nums[i]
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      if (right === i) {
        right--;
      } else if (nums[left] + nums[right] + nums[i] === 0) {
        //命中
        list.push([nums[left], nums[right], nums[i]]);
        //move on
        while (nums[left] === nums[left + 1]) {
          //remove same element
          left++;
        }
        left++;
        while (nums[right] === nums[right - 1]) {
          //remove same element
          right--;
        }
        right--;
      } else if (nums[left] + nums[right] + nums[i] > 0) {
        //数字变大了
        right--;
      } else {
        //数字变小了
        left++;
      }
    }
  }
  return list;
};
// @lc code=end
[-4, -1, -1, 0, 1, 2];
-1;
