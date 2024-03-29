/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let fiveNum = 0,
    tenNum = 0;
  for (let i = 0; i < bills.length; i++) {
    let bill = bills[i];
    if (bill === 5) {
      fiveNum += 1;
    } else if (bill === 10) {
      if (fiveNum > 0) {
        fiveNum -= 1;
        tenNum += 1;
      } else {
        return false;
      }
    } else {
      // 20
      if (tenNum > 0 && fiveNum > 0) {
        fiveNum -= 1;
        tenNum -= 1;
      } else if (fiveNum > 2) {
        fiveNum -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};
// @lc code=end
