var coinChange = function (coins, amount) {
  let len = coins.length; //array length 一共三枚不同面值的硬币
  // 创建一个数组使得满足面值的数量，因为数组下标从0开始所以这里满足11个数字需要用到长度为12的数组
  let f = new Array(amount + 1).fill(Infinity);
  f[0] = 0; //规定第一个（下标0）为0
  //第一层遍历硬币数量
  for (let i = 0; i < len; i++) {
    // 第二层对应遍历总值的数组数量
    for (let j = coins[i]; j <= amount; j++) {
      // j是coin数组对应的值 j的值小于等于要凑出来的值
      // f[j] 是新数组默认每一项是无穷大再和
      f[j] = Math.min(f[j], f[j - coins[i]] + 1);
    }
  }
  return f[amount] === Infinity ? -1 : f[amount];
};
coinChange([1, 2, 3, 4], 9);

// 从下往上进行遍历;
