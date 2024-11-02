// Destructuring properties with same names as object properties
const person = {
  name: "ashutosh",
  email: "ash@gmail.com",
  gender: "male",
};
let { name, email, gender } = person; // Extracting name, email, and gender properties directly
/* 
console.log(name);
console.log(email);
console.log(gender);
*/

// Destructuring with alternate names (aliases)
const person2 = {
  name: "ashutosh",
  email: "ash@gmail.com",
  age: 32,
};
let { name: realName, email: workMail, age: onEarthTime } = person2; // Giving alternate names to properties
console.log(realName, workMail, onEarthTime); // Output: "ashutosh ash@gmail.com 32"

// Setting default values in destructuring
let person1 = {
  firstName: "ash",
  lastName: "jha",
  age: 43,
  gender: "male",
};
let {
  firstName, // Extracts as-is
  lastName: lname, // Renames lastName to lname
  middleName = "", // Defaults to empty string if middleName doesn't exist
  gendr = "CAPITALMALE", // Uses default "CAPITALMALE" if gender is missing
  currentAge: age = 23, // Renames and defaults age to 23 if currentAge not present
} = person1;
console.log(firstName, lname, middleName, age, gendr); // Output: "ash jha '' 23 'CAPITALMALE'"

// Handling null or undefined objects in destructuring
function getPerson() {
  return null;
}
// Safely destructures with a fallback empty object if getPerson() returns null
let { prop1, prop2 } = getPerson() || {}; // Doesn't throw error; outputs undefined for both props

// Destructuring nested objects
let employee = {
  id: 1033,
  name: {
    firstName: "ash",
    lastName: "jha",
  },
};
let {
  id: empid, // Renames id to empid
  name: { firstName: empFirstName, lastName: empLastName }, // Nested destructuring for first and last names
} = employee;
console.log(empid, empFirstName, empLastName); // Output: 1033 "ash" "jha"

// Destructuring function arguments
let objectReceiver = ({ name, email }) => console.log(name, email); // Logs name and email directly from passed object
objectReceiver(person); // Output: "ashutosh ash@gmail.com"
