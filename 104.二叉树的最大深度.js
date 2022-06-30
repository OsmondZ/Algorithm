/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  // 终止条件
  if (root == null) {
    return 0;
  }
  console.log(root.le);
  //树的最大深度=左右子树的深度最大那一个
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
// @lc code=end
// 先写出字问题的推导再写出终止条件;
