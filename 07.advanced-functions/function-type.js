// In JavaScript, functions are objects and are instances of the Function type.
// Functions have two important properties: 'length' and 'prototype'.

function addNum() {
  return 43 + 43;
}
console.log(addNum.length);
console.log(addNum.prototype);

// Section 2: Function methods - call, apply, and bind

// The difference between apply() and call() is that:
// - apply() accepts arguments as an array-like object
// - call() accepts arguments individually

let cat = { type: "Cat", sound: "Meow" };
let dog = { type: "Dog", sound: "Woof" };

const say = function (message) {
  console.log(message);
  console.log(this.type + " says " + this.sound);
};

// Using apply() - passes arguments as an array
say.apply(cat, ["What does a cat say?"]);

// Using call() - passes arguments individually
say.call(dog, "What does a dog say?");

// The bind() method creates a new function instance with a 'this' value bound to the specified object

let car = {
  speed: 5,
  start: function () {
    console.log(`Starting with ${this.speed} km/h`);
  },
};

let aircraft = {
  speed: 20,
  fly: function () {
    console.log("Flying");
  },
};

// The aircraft object has no start() method, but we can bind the car's start() method to aircraft using bind()
let taxiing = car.start.bind(aircraft);

/* Explanation:
 * The bind() method creates a new function where the 'this' value inside car.start()
 * is set to 'aircraft'. The new function is assigned to the 'taxiing' variable.
 */

taxiing(); // Outputs: "Starting with 20 km/h", using the 'speed' from aircraft
