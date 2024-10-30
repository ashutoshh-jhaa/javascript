// Function declaration with an added property
function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 4; // Adding a custom property to the function

console.log(multiplyBy5(5)); // Outputs: 25
console.log(multiplyBy5.power); // Outputs: 4
console.log(multiplyBy5.prototype); // Outputs: {} (prototype is only relevant for constructor functions)

// Constructor function for creating user objects
function createUser(username, score) {
  this.username = username;
  this.score = score;
}

// Adding methods to the prototype so they’re shared among all instances
createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.getScore = function () {
  console.log(`Score is ${this.score}`);
};

// Creating instances with 'new', which gives them access to prototype methods
const ash = new createUser("ash", 42);
const ashutosh = new createUser("ashutosh", 49);

// Demonstrating the usage of prototype methods
ash.increment();
ash.getScore(); // Outputs: Score is 43

/*
 * Key Points:
 * - `multiplyBy5` is a regular function with a custom property, showing that functions can hold properties.
 * - `createUser` is a constructor function, used with `new` to create instances.
 * - Using `new` creates a new object context, so instances have access to `createUser`’s prototype.
 * - Prototype methods (`increment`, `getScore`) are shared across instances, saving memory.
 */
