// time O(n * logn);
// space O(n * logn);
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  debugger;
  let flag = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > flag) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return quickSort(left).concat(flag, quickSort(right));
}
let arr = [426, 366, 450];
// console.log("quickSort", quickSort(arr));

// 原地快排
// i->  <-j
// i find one bigger than e
// j find one smaller than e
// and i exchanges place with j
// finally they encounter each other
// [e, a, b, c, d, f, g];

function inPlace(arr, start, end) {
  //双指针
  let init = start;
  let flag = arr[init];
  start++;
  while (start <= end) {
    while (arr[end] > flag) {
      end--;
    }
    while (arr[start] < flag) {
      start++;
    }
    if (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  [arr[init], arr[start - 1]] = [arr[start - 1], arr[init]];
  return start;
}
//when the number of data is over 20 choose quickSort or inPlaceSort
// O(1);
function inPlaceSort(arr, start, end) {
  if (start < end) {
    let index = inPlace(arr, start, end); // 标志位的值
    inPlaceSort(arr, start, index - 1);
    inPlaceSort(arr, index, end);
  }
  return arr;
}

console.log("quickSort", inPlaceSort(arr, 0, arr.length - 1));
