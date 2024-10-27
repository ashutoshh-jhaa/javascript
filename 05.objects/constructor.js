// Constructor function must be invoked with the 'new' keyword
// Constructor names usually start with a capital letter
function Person(firstName, lastName) {
  // Assign parameters to the instance properties
  this.firstName = firstName;
  this.lastName = lastName;

  // Method to get the full name (defined for each instance)
  this.getFullName = () => {
    console.log(`${this.firstName} ${this.lastName}`); // Outputs full name
  };
}

// Creating instances of Person using the 'new' keyword
const person1 = new Person("ashutosh", "jha");
const person2 = new Person("ash", "jha");

// Calling the getFullName method for both instances
person1.getFullName();
person2.getFullName();

// Handling case when constructor is called without 'new'
function Persona(firstName, lastName) {
  if (!new.target) {
    throw Error("Cannot be called without the new keyword");
  }

  this.firstName = firstName;
  this.lastName = lastName;
}

// Alternative solution: Automatically calls 'new' if omitted
function PersonAuto(firstName, lastName) {
  if (!new.target) {
    return new PersonAuto(firstName, lastName);
  }

  this.firstName = firstName;
  this.lastName = lastName;
}

// Create a new instance using the alternative solution
let person = PersonAuto("John", "Doe");

// Logging the first name of the created person
console.log(person.firstName);

//class keyword was introduced in es6 
class Newname{}
