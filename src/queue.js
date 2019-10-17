const MaxHeap = require("./max-heap.js");

class PriorityQueue {
  constructor(maxSize = 30) {
    this.maxSize = maxSize;
    this.heap = new MaxHeap();
    this.queueSize = 0;
  }

  push(data, priority) {
    if (this.queueSize === this.maxSize) {
      throw new Error("Full!");
    }
    this.heap.push(data, priority);
    this.queueSize += 1;
  }

  shift() {
    if (this.heap.isEmpty()) {
      throw new Error("Empty!");
    }
    this.queueSize -= 1;
    return this.heap.pop();
  }

  size() {
    return this.queueSize;
  }

  isEmpty() {
    return this.queueSize === 0;
  }
}

module.exports = PriorityQueue;
