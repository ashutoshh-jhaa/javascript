/* 
  'this' in JavaScript refers to the current object instance.
  Unlike some other programming languages, 'this' can be used in 
  global, function, and method contexts. The behavior of 'this' 
  can also change between strict and non-strict modes.
*/

/* SECTION 1: 'this' in Object Context */
const peoples = {
  firstname: "ashutosh",
  lastname: "jha",

  // Method to log the full name using 'this' to access properties
  fullname() {
    console.log(`${this.firstname} ${this.lastname}`); // Outputs: "ashutosh jha"
  },
};

// Invoke the fullname method
peoples.fullname(); // Calls the method to print the full name

/* SECTION 2: 'this' in Global Context */
// In the browser, the global object is 'window', in Node.js it's 'global'.

// Non-strict mode
function show() {
  console.log(this === window); // true
}
// Calling this function directly or via window.show() behaves the same in browsers

// Strict mode
function anotherShow() {
  "use strict";
  // In strict mode, 'this' is set to undefined
  console.log(this === undefined); // true
}

/* SECTION 3: 'this' in Methods */
// When you call a method of an object, JavaScript sets 'this' to the object that owns the method
const cars = {
  brand: "Honda",
  getBrand: function () {
    return this.brand;
  },
};

console.log(cars.getBrand()); // Outputs: "Honda"

/* SECTION 4: Important Concept of 'this' */
// If you store the method in a variable, 'this' can lose its context.
const brand = cars.getBrand; // Now 'this' is not bound to 'cars'

// This will log 'undefined' because 'this' refers to the global object
console.log(brand());

// To fix this, we use the bind function, which creates a new function
// with 'this' set to a specified value
let bike = {
  brand: "Harley Davidson",
};

// Bind 'getBrand' to 'bike'
let boundBrand = cars.getBrand.bind(bike);
console.log(boundBrand()); // Outputs: "Harley Davidson"

/* SECTION 5: 'this' in Constructors */
// When using the new keyword with a function, 'this' refers to the new object being created
function Car(brand) {
  this.brand = brand; // 'this' refers to the new Car instance
}

// Adding a method to the Car prototype
Car.prototype.getBrand = function () {
  return this.brand;
};

// Creating instances of Car
let car1 = new Car("Honda");
console.log(car1.getBrand()); // Outputs: "Honda"

// Incorrect usage of the constructor without 'new'
var bmw = Car("BMW"); // This sets 'this' to the global object
console.log(car1.getBrand()); // TypeError: Cannot read property 'brand' of undefined

// If not called with 'new', 'this' refers to the global object,
// causing bmw.brand to be undefined.
// To ensure the constructor is called with 'new', use new.target:
function CarWithCheck(brand) {
  if (!new.target) {
    throw Error("Must use the new operator to call the function");
  }
  this.brand = brand;
}

/* SECTION 6: Function Methods call() and apply() */
// The Function type has call() and apply() methods, which allow us to set the 'this' value
function getBrand(prefix) {
  console.log(prefix + this.brand);
}

let honda = {
  brand: "Honda",
};

let audi = {
  brand: "Audi",
};

// Using call to invoke getBrand with a specific 'this' value
getBrand.call(honda, "It's a "); // Outputs: "It's a Honda"
getBrand.call(audi, "It's an "); // Outputs: "It's an Audi"

/* SECTION 7: Arrow Functions */

// Arrow functions do not create their own context.
// Instead, they inherit 'this' lexically from the surrounding function.

let getGlobalThis = () => this; // Arrow function to check global context
console.log(getGlobalThis() === window); // true in non-strict mode

// Defining a constructor function for a Car object
function Car() {
  this.speed = 120; // 'speed' property on the Car instance
}

// Arrow function for the getSpeed method
Car.prototype.getSpeed = () => {
  return this.speed; // 'this' refers to the global object, not the Car instance
};

// Creating a new instance of Car
var carInstance = new Car(); // Instance of Car
console.log(carInstance.getSpeed()); // undefined, because 'this.speed' is not defined in the global object
