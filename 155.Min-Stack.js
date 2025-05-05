/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

class MinStack {
  constructor() {
    this.stack = [];
    this.min = [];
    this.index = -1;
  }

  push(val) {
    const top = this.min[this.index] ?? Infinity;

    console.log(top, val);

    this.stack.push(val);

    this.min.push(Math.min(val, top));

    this.index++;
  }

  pop() {
    this.stack.pop();
    this.min.pop();
    this.index--;
  }

  top() {
    return this.stack[this.index];
  }

  getMin() {
    return this.min[this.index];
  }
}
