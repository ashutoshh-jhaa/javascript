// Define a class using a class expression
const Person = class {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
};

// Create an instance of the Person class
const person1 = new Person("ashutosh");

// Classes in JavaScript are first-class citizens, meaning:
// - They can be passed into functions,
// - Returned from functions, and
// - Assigned to variables.

// Factory function that accepts a class and returns a new instance of that class
function factory(aClass) {
  return new aClass(); // Creates an object from the given class
}

// Using an inline class expression to create an object with a method
let greeting = factory(
  class {
    sayHi() {
      console.log("hi");
    }
  },
);
greeting.sayHi();

// Singleton pattern: A design pattern that restricts a class to a single instance
// This ensures that only one instance of the class can be created throughout the system.
// A singleton can be created by calling the constructor immediately after defining the class.
let app = new (class {
  constructor(name) {
    this.name = name;
  }
  start() {
    console.log(`starting the ${this.name}....`);
  }
})("Some App"); // Instantiating the class with "Some App" as the name

app.start(); // Calls the start method, outputs: "starting the Some App...."

// Explanation of how it works:
// The class constructor is invoked right after the class definition, creating an instance,
// which is then assigned to the 'app' variable, effectively creating a singleton object.
