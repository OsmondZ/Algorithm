// let s = "hello";
// console.log(11);

function leftpad(str, length, ch) {
  let len = length - str.length + 1;
  return Array(len).join(ch) + str;
}
console.log(leftpad("hello", 10, "0"));

// 二分的思路优化
function leftpad2(str, length, ch) {
  let len = length - str.length,
    total = "";
  //   while (len % 2 == 1) {
  while (len & 1) {
    total += ch;
  }
  if (len == 1) {
    return total + str;
  }
  ch += ch;
  len = len >> 1;
  //   len = parseInt(len / 2);
}
console.log(leftpad("hello", 10, "0"));
