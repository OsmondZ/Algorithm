/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let obj = { "(": ")", "[": "]", "{": "}" };
  for (let i = 0; i < s.length; i++) {
    const ele = s[i];
    if (ele in obj) {
      stack.push(ele);
      console.log(ele);
    } else {
      //反括号
      if (ele != obj[stack.pop()]) {
        return false;
      }
    }
  }
  return !stack.length;
};
// @lc code=end
