//用于指针指向下一个节点
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkNodeList {
  constructor() {
    //头节点来指代整个链表
    this.head = null;
    this.length = 0;
  }
  append(val) {
    let node = new Node(val);
    console.log(node);
    let p = this.head;
    console.log(p);
    if (this.head) {
      //找到链表最后一节点，把这个节点的.next属性赋值为node
      while (p.next) {
        p = p.next;
      }
      p.next = node;
    } else {
      //如果没有head节点，链表是空的 把要创建的节点，赋值给head
      this.head = node;
      console.log(this.head);
    }
    this.length++;
  }
  print() {
    let p = this.head;
    let ret = "";
    if (this.head) {
      do {
        ret += p.val += "=>";
        p = p.next;
      } while (p.next);
      ret += p.val;
      console.log(ret);
    } else {
      console.log("empty");
    }
  }
}

let linkList = new LinkNodeList();

linkList.append(1);
linkList.append(2);
linkList.append(4);
linkList.append(3);

linkList.print();
console.log(linkList.length);
let d = { x: 2 };
let c = d;
c.x = 3;
console.log("d=", d);
