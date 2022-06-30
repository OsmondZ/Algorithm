/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  //跳跃的范围(默认为0如果为1则会涉及到人为干预设为0所有的情况都是由数组本身的下表对应的值来决定[0,1])
  // let cover = 0;
  // // 1.ending conditon
  // for (let i = 0; i <= cover; i++) {
  //   cover = Math.max(cover, nums[i] + i);
  //   if (cover >= nums.length - 1) {
  //     return true;
  //   }
  // }
  // return false;

  let range = 0;
  for (let i = 0; i <= range; i++) {
    range = Math.max(range, nums[i] + i);
    if (range >= nums.length - 1) {
      return true;  
    }
  }
  return false;
};
// @lc code=end
