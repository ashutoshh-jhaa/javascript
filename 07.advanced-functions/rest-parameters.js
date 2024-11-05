// Rest parameter allows you to capture an indefinite number of arguments as an array.
// It must always appear at the end of the parameter list.
// Example of incorrect use of rest parameter:

/* 
function fn(a, ...rest, b) {
  // SyntaxError: Rest parameter must be the last formal argument 
}
*/

// NOTE: Without rest parameters, you'd need to use the `arguments` object to access
//       all arguments passed to the function. However, `arguments` is not an instance
//       of Array, so it doesn't support array methods like `filter()` or `map()`.

// Rest Parameter in a Regular Function
function sumAll(...numbers) {
  // `numbers` is an actual array, so we can use array methods
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10

// Rest Parameter in an Arrow Function
const multiplyAll = (...nums) =>
  nums.reduce((product, num) => product * num, 1);

console.log(multiplyAll(1, 2, 3, 4)); // Output: 24

function printArguments() {
  console.log(arguments); // Works in regular functions (prints all passed arguments)
}

const printArgumentsArrow = (...args) => console.log(args); // Use rest parameter instead

printArguments(1, 2, 3); // Output: [Arguments] { '0': 1, '1': 2, '2': 3 }
printArgumentsArrow(1, 2, 3); // Output: [1, 2, 3]
