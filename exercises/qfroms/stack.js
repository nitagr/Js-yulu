class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }
  size(){
    return this.data.length;
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Stack;
