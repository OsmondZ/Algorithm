/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 递归+备忘录
function helper(memo, n) {
  if (n <= 1) {
    return n;
  }
  if (memo[n]) {
    return memo[n]; // 直接返回缓存结果
  }
  memo[n] = helper(memo, n - 1) + helper(memo, n - 2);
  return memo[n];
}

var fib = function (n) {
  let memo = [];
  return helper(memo, n);

  // 递归
  //   if (n <= 1) {
  //     return n;
  //   }
  //   return fib(n - 1) + fib(n - 2);
  // 递推/动态规划
  // let dp = [0, 1];
  // for (let i = 2; i <= n; i++) {
  //   dp[i] = dp[i - 1] + dp[i - 2];
  // }
  // return dp[n];

  // 递推/动态规划 优化
  // if (n <= 1) {
  //   return n;
  // }
  // let dp1 = 0,
  //   dp2 = 1,
  //   dp3;
  // for (let i = 2; i <= n; i++) {
  //   dp3 = dp1 + dp2;
  //   dp1 = dp2;
  //   dp2 = dp3;
  // }
  // return dp3;
};
// @lc code=end
