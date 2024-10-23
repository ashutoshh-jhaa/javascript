/**
 * In JavaScript, all functions are objects.
 * Functions are instances of the `Function` type,
 * meaning they can have properties and methods.
 */

function add(x, y) {
  // `new.target` is a special property that's `undefined` when the function is called normally,
  // but it references the constructor when the function is called with the `new` keyword.
  let target = new.target; 
  return { sum: x + y, target: target };
}

console.log(add.length); // Logs the number of parameters the function expects (2 in this case)
console.log(add.prototype); // Logs the prototype object of the function (empty by default)
console.log(typeof Function); // Logs "function", indicating that `Function` itself is a function

// Calling `add` normally
let invoke = add(10, 2); 
console.log(invoke); // Logs the sum and `target` as undefined since it’s a normal call

// Calling `add` with the `new` keyword
// when called with new keyword the function gets access to all the object prototype
let invoke1 = new add(10, 2); // Here, `new.target` will reference the `add` function
console.log(invoke1); // Logs the sum and `target` as [Function: add]
