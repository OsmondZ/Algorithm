/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  // input ending condition
  if (board.length === 0) {
    return false;
  }
  if (word.length == 0) {
    return true;
  }
  // start recycling
  let row = board.length;
  let col = board[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // 每一个字母都可以作为起点搜索
      const res = search(i, j, 0);
      if (res) {
        return res;
      }
    }
  }
  return false; //结束的时候还没有找到

  // recursion func
  function search(i, j, cur) {
    // 防止越界
    if (i >= row || i < 0) {
      return false;
    }
    // 防止越界
    if (j >= col || j < 0) {
      return false;
    }

    let letter = board[i][j];
    if (letter !== word[cur]) {
      return false;
    }
    if (cur === word.length - 1) {
      //最后一个也是匹配
      return true;
    }
    board[i][j] = null; //选择当前的字母
    //进行下一步
    const res =
      search(i + 1, j, cur + 1) ||
      search(i - 1, j, cur + 1) ||
      search(i, j + 1, cur + 1) ||
      search(i, j - 1, cur + 1);
    board[i][j] = letter; //回撤
    return res;
  }
};
// @lc code=end
