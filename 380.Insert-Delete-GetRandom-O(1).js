class RandomizedSet {
  constructor() {
    this.arr = [];
    this.map = new Map();
  }

  insert(val) {
    if (this.map.has(val)) return false;
    this.arr.push(val);
    this.map.set(val, this.arr.length - 1);
    return true;
  }

  remove(val) {
    if (!this.map.has(val)) return false;
    const idx = this.map.get(val);
    const last = this.arr[this.arr.length - 1];
    this.arr[idx] = last;
    this.map.set(last, idx);
    this.arr.pop();
    this.map.delete(val);
    return true;
  }

  getRandom() {
    const randIdx = Math.floor(Math.random() * this.arr.length);
    return this.arr[randIdx];
  }
}
