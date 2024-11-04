// If there's just one expression, arrow function returns it implicitly
let add = (x, y) => x + y;
console.log(add(10, 20)); // Output: 30

// However, if you use block syntax with {}, you need to specify the 'return' keyword
let add1 = (x, y) => {
  return x + y;
};
console.log(add1(10, 20)); // Output: 30

// Statements must be wrapped inside {}
let except = (msg) => {
  throw msg; // Throws an error with the provided message
};

// To directly return an object, use parentheses, as {} alone could be mistaken for a block
let setColor = (color) => ({ value: color });
console.log(setColor("blue")); // Output: { value: 'blue' }

// DIFFERENCE BETWEEN NORMAL FUNCTION AND ARROW FUNCTION:
// - In arrow functions, 'this', 'arguments', 'super', and 'new.target' are lexical,
//   meaning they refer to the variables in the enclosing (outer) scope.
// - Arrow functions cannot be used as function constructors. If you use 'new' with
//   an arrow function, you'll get an error because they lack a 'prototype' property.

function Car() {
  this.speed = 0;

  // speedUp method defined as a normal function, so 'this' here refers to the object calling it (Car instance)
  this.speedUp = function (speed) {
    this.speed = speed;

    // Normal function inside setTimeout does not have lexical 'this',
    // so 'this' here refers to the global context, not the Car instance.
    setTimeout(function () {
      console.log(this.speed); // Undefined because 'this' is global here
    }, 1000);
  };
}

let car = new Car();
car.speedUp(50); // Output: undefined (from the inner function, not Car instance)

// Fixing 'this' behavior by using an arrow function:
function Car1() {
  this.speed = 0;

  this.speedUp = function (speed) {
    this.speed = speed;

    // Using an arrow function here gives it lexical 'this',
    // so 'this' refers to the enclosing Car1 instance.
    setTimeout(() => console.log(this.speed), 1000); // 'this' refers to Car1 instance
  };
}

let car1 = new Car1();
car1.speedUp(50); // Output: 50 (lexical 'this' from arrow function refers to car1 instance)
