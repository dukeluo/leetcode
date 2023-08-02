class MinStack {
  private mins: number[];
  private arr: number[];

  constructor() {
    this.arr = [];
    this.mins = [];
  }

  push(val: number): void {
    const min =
      this.mins.length === 0
        ? val
        : Math.min(val, this.mins[this.mins.length - 1]);

    this.arr.push(val);
    this.mins.push(min);
  }

  pop(): void {
    this.arr.pop();
    this.mins.pop();
  }

  top(): number {
    return this.arr[this.arr.length - 1];
  }

  getMin(): number {
    return this.mins[this.mins.length - 1];
  }
}
