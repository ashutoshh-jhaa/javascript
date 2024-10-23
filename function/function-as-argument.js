let sum = add(20, 32, 43, 2);
let name = "Ashutosh";

function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum; // Return the calculated sum
}

// Immediately Invoked Function Expression (IIFE) for greeting
(function greetNum(name, sum) {
  console.log(name, sum);
})(name, sum);
