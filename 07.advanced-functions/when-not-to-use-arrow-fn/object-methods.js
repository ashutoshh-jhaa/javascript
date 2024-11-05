// Define an object 'counter' with count and methods using arrow functions
const counter = {
  count: 0,
  // Arrow function: 'this' refers to the global object, not the 'counter' object
  next: () => ++this.count,
  // Arrow function: 'this' refers to the global object, not the 'counter' object
  current: () => this.count,
};

// Output will be undefined or NaN since 'count' is not defined on the global object
console.log(counter.current()); // undefined
console.log(counter.next()); // NaN

// Define another object 'counter1' with count and methods using regular function syntax
const counter1 = {
  count: 0,
  // Regular method: 'this' refers to the 'counter1' object
  next() {
    return ++this.count;
  },
  // Regular method: 'this' refers to the 'counter1' object
  current() {
    return this.count;
  },
};

// Output will be 0 for current and 1 after next is called
console.log(counter1.current()); // 0
console.log(counter1.next()); // 1
