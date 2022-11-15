var maxProfit = function (prices) {
  // 输入：[7,1,5,3,6,4]

  let lowestPrice = Infinity;
  let ret = 0;

  for (let i = 0; i < prices.length; i++) {
    lowestPrice = Math.min(prices[i], lowestPrice);
    ret = Math.max(ret, prices[i] - lowestPrice);
  }

  return ret;

  //   DP
  //   初始值
  //   循环
  //   递推
  //   dp = [持有股票所得最多现金值, 不持有股票最多现金值];
  //   const dp = new Array(prices.length).fill([0, 0]);
  //   dp[0] = [-prices[0], 0];
  //   for (let i = 1; i < prices.length; i++) {
  //     dp[i] = [
  //       Math.max(dp[i - 1][0], -prices[i]),
  //       Math.max(dp[i - 1], prices[i] + dp[i - 1][0]),
  //     ];
  //   }
  //   return dp[prices.length - 1][1];
};
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

function foo() {
  console.log(a, this);
}
function bar() {
  var a = 3;
  foo();
}
var a = 2;
bar();
