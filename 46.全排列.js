/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//2 recursion formula
function backtrack(list, temp, nums) {
  if (temp.length === nums.length) {
    console.log(temp);

    return list.push([...temp]);
  }
  for (let i = 0; i < nums.length; i++) {
    // 找到一个不在temp里的数字
    if (temp.includes(nums[i])) {
      continue;
    }
    temp.push(nums[i]);
    backtrack(list, temp, nums);
    temp.pop();
  }
}
var permute = function (nums) {
  //1.ending conditon
  let list = [];
  backtrack(list, [], nums);
  return list;
};
// @lc code=end
