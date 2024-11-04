// You can return multiple values in the form of arrays or objects

// Function to return first and last name as an array
function getName() {
  let firstName = "john",
    lastName = "doe";
  return [firstName, lastName]; // Return an array with two values
}

// Destructure the returned array into variables
let [firstName, lastName] = getName();
console.log(firstName, lastName);

// Function to return a person object with name and gender
function getNames() {
  let person = {
    name: "ashutosh",
    gender: "jha",
  };
  return person;
}

// Destructure the returned object into variables
let { name, gender } = getNames();
console.log(name, gender);
