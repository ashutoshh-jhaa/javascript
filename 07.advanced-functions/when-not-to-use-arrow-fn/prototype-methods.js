function Counter() {
  this.count = 0;
}
Counter.prototype.next = () => ++this.count;
Counter.prototype.current = () => this.next;

// Explanation:
// - The `this` in arrow functions refers to the global object,
//   not the instance of `Counter` created with `new Counter()`.
// - Thus, `this.count` is `undefined` because it's not bound to the instance.

let value = new Counter();
console.log(value.next());
console.log(value.current());

// Solution:
// Using normal function with methods for correct 'this' binding
function Counter1() {
  this.count = 0;
}
Counter1.prototype.next = function () {
  return ++this.count;
};
Counter1.prototype.current = function () {
  return this.count;
};

let val = new Counter1();
console.log(val.next());
console.log(val.current());
