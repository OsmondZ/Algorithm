let array = [],
  front = 0,
  rear = 0;

class MyQueue {
  constructor(capacity) {
    this.array = [];
    this.array.length = capacity;
    this.rear = 0;
    this.front = 0;
  }

  enQueue = (element) => {
    if ((this.rear + 1) % this.array.length === this.front) {
      throw Error("this queue is full");
    }
    this.array[rear] = element;
    this.rear = (this.rear + 1) % this.array.length;
  };

  deQueue = () => {
    if (this.rear === this.front) {
      throw Error("this queue is empty");
    }
    let deQueueElement = this.array[this.front];
    this.front = (this.front + 1) % this.array.length;
    return deQueueElement;
  };

  output = () => {
    for (
      let i = this.front;
      i !== this.rear, (i = (i + 1) % this.array.length);

    ) {
      console.log(i);
    }
  };
}

let queue = new MyQueue(7);
queue.enQueue(2);
queue.enQueue(6);
// queue.enQueue(6);
// queue.enQueue(6);
// queue.enQueue(6);
queue.deQueue();
queue.deQueue();
queue.deQueue();
// queue.enQueue(6);
// queue.enQueue(6);
// queue.enQueue(6);
queue.output();
