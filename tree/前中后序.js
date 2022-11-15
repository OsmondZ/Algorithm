const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D",
    },
    right: {
      val: "E",
    },
  },
  right: {
    val: "C",
    right: {
      val: "F",
    },
  },
};
let arr1 = [];
let arr2 = [];
let arr3 = [];
function preorder(root) {
  // 递归边界，root 为空
  if (!root) {
    return;
  }
  // 输出当前遍历的结点值
  console.log("当前遍历的结点值是：", root.val);
  arr1.push(root.val);
  // 递归遍历左子树
  preorder(root.left);
  // 递归遍历右子树
  preorder(root.right);
  return arr1;
}

console.log(preorder(root));

// 所有遍历函数的入参都是树的根结点对象
function inorder(root) {
  // 递归边界，root 为空
  if (!root) {
    return;
  }

  // 递归遍历左子树
  inorder(root.left);
  // 输出当前遍历的结点值
  arr2.push(root.val);
  console.log("当前遍历的结点值是：", root.val);
  // 递归遍历右子树
  inorder(root.right);

  return arr2;
}
console.log(inorder(root));
function postorder(root) {
  // 递归边界，root 为空
  if (!root) {
    return;
  }

  // 递归遍历左子树
  postorder(root.left);
  // 输出当前遍历的结点值

  // 递归遍历右子树
  postorder(root.right);
  console.log("当前遍历的结点值是：", root.val);
  arr3.push(root.val);
  return arr3;
}
console.log(postorder(root));
