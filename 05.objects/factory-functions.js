// Factory functions are functions that create and return new objects.

// Factory function without optimized memory usage
function createPerson(firstName, lastName) {
  return {
    firstName,
    lastName,
    /* 
    getFullName() {
      // This function consumes memory for every object created, 
      // making it memory-inefficient.
      // To optimize, we can create a separate object with this 
      // method and reference it instead.
      return `${firstName} ${lastName}`;
    }, 
    */
  };
}

// Creating persons using the factory function
let person1 = createPerson("john", "doe");
let person2 = createPerson("ashutosh", "jha");

// Separate object with shared methods (not scalable)
var personActions = {
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// Attempt to add shared method from personActions to a person
//person1.getFullName now references to the personActions.getFullName
person1.getFullName = personActions.getFullName;

// New approach: using Object.create()
// Object.create() creates a new object with an existing object as its prototype
function createPersona(firstName, lastName) {
  // The new person object has personActions as its prototype
  let person = Object.create(personActions);
  // Assigning firstName and lastName as "own" properties of the person
  person.firstName = firstName;
  person.lastName = lastName;
  return person;
}

// Creating person objects with optimized memory and shared method access
let per1 = createPersona("joh", "clue");
let per2 = createPersona("ash", "glue");

// Now, per1 and per2 can access getFullName() from the shared personActions prototype
console.log(per1.getFullName()); // Outputs: "joh clue"
console.log(per2.getFullName()); // Outputs: "ash glue"
