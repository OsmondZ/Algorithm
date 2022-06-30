// var canJump = function (nums) {
//   //跳跃的范围
//   let cover = 0;
//   for (let i = 0; i <= cover; i++) {
//     cover = Math.max(cover, i + nums[i]);
//     if (cover >= nums.length - 1) {
//       return true;
//     }
//   }
//   return false;
// };

// canJump([2, 3, 1, 1, 4]);

// function helper(memo, n) {
//   if (n <= 1) {
//     return n;
//   }
//   if (memo[n]) {
//     return memo[n]; // 直接返回缓存结果
//   }
//   memo[n] = helper(memo, n - 1) + helper(memo, n - 2);
//   return memo[n];
// }

// var fib = function (n) {
//   debugger;
//   let memo = [];
//   return helper(memo, n);
//   // if (n <= 1) {
//   //   return n;
//   // }
//   // return fib(n - 1) + fib(n - 2);
// };
// fib(3);
// var coinChange = (coins, amount) => {
//   debugger;
//   if (!amount) {
//     return 0;
//   }
//   let dp = Array(amount + 1).fill(Infinity);
//   dp[0] = 0;
//   for (let i = 0; i < coins.length; i++) {
//     for (let j = coins[i]; j <= amount; j++) {
//       // dp[j] = Infinity;
//       dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j]);
//     }
//   }
//   return dp[amount] === Infinity ? -1 : dp[amount];
//   // 边界条件
//   // 循环
//   // 递推公式
//   //  硬币循环
//   //  dn[n] n的钱数下，返回零钱的最优解
//   // 0==>n=9
//   //   (4 + 5)
//   // (8 + 1);
// };
// coinChange([1, 2, 5], 11);

// function statement(invoice, plays) {
//   let totalAmount = 0;
//   let volumeCredits = 0;
//   let result = `Statement for ${invoice.customer}\n`;
//   const format = new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//     minimumFractionDigits: 2,
//   }).format;
//   for (let perf of invoice.performances) {
//     const play = plays[perf.playID];
//     let thisAmount = 0;
//     switch (play.type) {
//       case "tragedy":
//         thisAmount = 40000;
//         if (perf.audience > 30) {
//           thisAmount += 1000 * (perf.audience - 30);
//         }
//         break;
//       case "comedy":
//         thisAmount = 30000;
//         if (perf.audience > 20) {
//           thisAmount += 10000 + 500 * (perf.audience - 20);
//         }
//         thisAmount += 300 * perf.audience;
//         break;
//       default:
//         throw new Error(`unknown type: ${play.type}`);
//     }
//     // add volume credits
//     volumeCredits += Math.max(perf.audience - 30, 0);
//     // add extra credit for every ten comedy attendees
//     if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5);
//     // print line for this order
//     result += ` ${play.name}: ${format(thisAmount / 100)} (${
//       perf.audience
//     } seats)\n`;
//     totalAmount += thisAmount;
//   }
//   result += `Amount owed is ${format(totalAmount / 100)}\n`;
//   result += `You earned ${volumeCredits} credits\n`;
//   return result;
// }

const plays = {
  hamlet: { name: "Hamlet", type: "tragedy" },
  "as-like": { name: "As You Like It", type: "comedy" },
  othello: { name: "Othello", type: "tragedy" },
};

const invoice = {
  customer: "BigCo",
  performances: [
    { playID: "hamlet", audience: 55 },
    { playID: "as-like", audience: 35 },
    { playID: "othello", audience: 40 },
  ],
};

function statement(invoice, plays) {
  return renderPlainText();
}
function createStatementData(invoice, plays) {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);
  return statementData;

 
}

console.log(statement(invoice, plays));
