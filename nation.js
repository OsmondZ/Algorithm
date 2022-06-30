let STYLE = 1;
let CLASS = 1 << 1;
let CHILDREN = 1 << 2;

//授权
let vnodeType = STYLE | CLASS;

//判断
console.log(!!vnodeType);
console.log(!!(STYLE & vnodeType));
console.log(!!(CLASS & vnodeType));
console.log(!!(CLASS & CHILDREN));

//删除授权
vnodeType = vnodeType ^ CLASS;
console.log(!!vnodeType);
console.log(!!(STYLE & vnodeType));
console.log(!!(CLASS & vnodeType));
console.log(!!(CLASS & CHILDREN));
