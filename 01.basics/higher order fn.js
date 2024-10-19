/**
 * first order function or normal order function
 *  - function which can take primitive datatypes and object as parameter
 *  - they can also return the same
 *
 * higher order function
 *  - function which fulfulls all the requirements for first order
 *  - but they can even take another function as parameter
 *  - same for the return type
 */

//higher order function example
function operation(operatorFn, a, b) {
  return operatorFn(a, b);
}
function add(a, b) {
  return a + b;
}
let result = operation(add, 4, 6);

console.log(result);

// more variations

function getGreetMethod() {
  return function () {
    //anonynomus function
    console.log("hello kids");
  };
}

let greetFn = getGreetMethod(); //this is also function as it has reference of anonynomus fn inside the getGreetMethod?
console.log(typeof greetFn);
greetFn();
