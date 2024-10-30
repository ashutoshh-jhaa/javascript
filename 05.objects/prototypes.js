// In JavaScript, objects can inherit features from other objects through prototypes.
// Every object has an internal prototype, forming a "prototype chain."
// The prototype chain allows objects to access properties and methods defined on other objects up the chain.
// The chain ends when an object’s prototype is 'null'.

// *** Key Concepts ***
// - Since prototypes are also objects, they themselves have their own prototypes.
// - The prototype chain ends at 'null', which signifies the top of the inheritance hierarchy in JavaScript.
// - This hierarchy is what enables all JavaScript objects to access certain default properties and methods.

// *** Example: Adding Custom Methods via Prototypes ***

// Creating an object 'newobj' with some properties
const newobj = {
  name: "Ashutosh",
  designation: "SDE",
};

// Adding a custom method 'getProperties' to all objects by attaching it to 'Object.prototype'.
// This method will be accessible by all objects due to prototype chaining.
Object.prototype.getProperties = function () {
  console.log(this.name); // Accesses 'name' property of the current object
  console.log(this.designation); // Accesses 'designation' property of the current object
};

// Testing the custom method on 'newobj'
newobj.getProperties(); // Outputs "Ashutosh" and "SDE" because 'newobj' has these properties

// *** Custom Prototype Methods for Arrays ***

// Defining an array 'heros' with a list of superhero names
const heros = ["Iron Man", "Thor"];

// Adding a custom method 'getHeros' to 'Array.prototype' to make it available to all arrays
Array.prototype.getHeros = function () {
  console.log(this[0]); // Accesses the first element of the array
  console.log(this[1]); // Accesses the second element of the array
};

// Testing the custom 'getHeros' method on 'heros' array
heros.getHeros(); // Outputs "Iron Man" and "Thor"


// *** Prototype Chain Example: Array Access to Object Methods ***

// Testing the 'getProperties' method on an array
heros.getProperties();
// Though 'getProperties' is defined for objects, arrays can access it through the prototype chain.
// However, it may not function as intended since arrays don't have 'name' or 'designation' properties.

// *** Key Point ***
// - Arrays can access methods defined on 'Object.prototype' because arrays inherit from 'Object' in JavaScript.
