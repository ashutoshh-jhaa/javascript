//function in js are first class citizens thus we can treat it like
//values of other types

//sum does not hold the reference to the function add
//but whatever the add function returns, also we call sum() this way as
//there's no function reference
let sum = add(20, 32, 43, 2);

//but in this case we have the reference of the add into sum not the return value thus
//we can invoke sum() as normal function as it points to same add function
let sum1 = add;

let name = "Ashutosh";
function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum; // Return the calculated sum
}
