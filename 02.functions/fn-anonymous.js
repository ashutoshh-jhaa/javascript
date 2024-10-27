// An anonymous function is a function without a name.
(function greet() {
  console.log("hello ashutosh"); // Outputs greeting
});

// setTimeout takes an anonymous function as its first argument.
setTimeout(() => {
  console.log("setTimeout was invoked"); // Outputs message after 2 seconds
}, 2000);
