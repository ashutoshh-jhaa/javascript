//example 1
let age = 42;
let message;

//ternary operator
age > 18 ? (message = "You can Drive") : (message = "You are not eligible");

//example 2
// if the user the authenticatd then he/she will be redirected to the url
let authenticated = true;
let nextUrl = authenticated
  ? alert("You will be redirected to the admin pannel")
  : alert("Access denied");
console.log(nextUrl);

//example 3
//can also be used to alter the the variables value based on other variables
let locked = 1;
let canChange = locked != 1 ? true : false;

//example 4
//using multiple ternary operators
let speed = 90;
let msg = speed >= 120 ? "Too Fast" : speed >= 80 ? "Fast" : "OK";
