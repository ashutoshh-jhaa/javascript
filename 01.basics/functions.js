/** Simple function with no arguments */
function helloguys() {
  console.log("Hello Students");
}
helloguys();

/** Function with parameters */
function sum(a, b) {
  return a + b;
}
console.log(sum(5, 3)); // Returns 8

/** Function with one default parameter */
function sum1(a, b = 8) {
  return a + b;
}
console.log(sum1(5)); // Returns 13 as b defaults to 8 when not provided

/** Function with no parameters but using 'arguments' object */
function func() {
  console.log(arguments); // Prints all the arguments passed to the function
}
func(1, 2, 3, 4, 5, 6); // Logs: [1, 2, 3, 4, 5, 6]

/** Arrow functions */
var hello = () => console.log("Hello world");
hello();

//implicit return
var sum3 = (a, b) => a + b;
console.log(sum3(3, 5)); // Returns 8

//explicit return
var sum4 = (a, b) => {
  console.log("Yahoo");
  return a * b;
};
console.log(sum4(23, 5)); // Returns 115

/**
 * Arrow functions do not have access to the 'arguments' object.
 * Attempting to use 'arguments' inside an arrow function will result in a reference error.
 */

/** IIFE - Immediately Invoked Function Expression */
(function () {
  console.log("Hello Guys");
})();
/**
 * IIFE (Immediately Invoked Function Expression):
 * - An IIFE is a JavaScript function that runs as soon as it is defined.
 * - It is wrapped in parentheses to make it a function expression and immediately invoked with ().
 * - Commonly used in scenarios where you want to execute code immediately without polluting the global scope.
 * - Syntax: (function() { // code here })(); or (function() { // code here }());
 */
