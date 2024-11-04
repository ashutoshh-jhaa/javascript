// A closure is a function combined with its lexical scope.
// When a function is created, it retains access to variables from its outer scope,
// even after that outer function has finished executing.

function outer() {
  var x = 42; // Variable defined in the outer function's scope
  function inner() {
    console.log(`Value of x: ${x}`); // Accessing x from the outer scope
  }
  x = 2; // Updating the value of x
  return inner; // Returning the inner function (closure)
}

// When the outer function is called, it returns the inner function,
// which retains access to x, even after outer has finished executing.
let val = outer();
val(); // Outputs: "Value of x: 2"

// Example of closures with setTimeout and var
// Each setTimeout holds a closure over i.
// Since i is a single variable with a live reference,
// by the time any of the setTimeout callbacks run, i has already been updated to 3.
function timerWithVar() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i); // Outputs: 3 (three times) because i is shared
    }, 1000);
  }
}
timerWithVar(); // Outputs: 3, 3, 3

// Example using let to demonstrate block scope
// In this case, let has block scope, so each iteration of the loop has its own i.
function timerWithLet() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i); // Outputs: 0, 1, 2 (each value correctly)
    }, 1000);
  }
}
timerWithLet(); // Outputs: 0, 1, 2

// Solution using var with a closure function
function timer() {
  for (var i = 0; i < 3; i++) {
    function logValue(i) {
      // This function creates a new scope for each call
      setTimeout(() => {
        console.log(`Value of i: ${i}`); // Outputs the correct i value
      }, 1000);
    }
    logValue(i); // Passing the current value of i to logValue
  }
}
timer(); // Outputs: Value of i: 0, Value of i: 1, Value of i: 2
