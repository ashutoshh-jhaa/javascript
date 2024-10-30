/* OBJECT PROPERTIES IN JAVASCRIPT */

// JavaScript objects have two types of properties:
// 1. Data Property
// 2. Accessor Property

/* SECTION 1: Data Property */
// A data property has four key attributes:
//  - [[Configurable]]: Determines if the property can be redefined or deleted.
//  - [[Enumerable]]: Controls whether the property appears in loops like for...in.
//  - [[Writable]]: Specifies if the property’s value can be changed.
//  - [[Value]]: Holds the actual value of the property.

// By default, [[Configurable]], [[Enumerable]], and [[Writable]] are set to true for properties directly defined on an object, and [[Value]] is set to undefined.

let person = {
  firstName: "Ashutosh",
  lastName: "Jha",
  age: "none",
};

// Modifying Property Attributes Using Object.defineProperty()
// Object.defineProperty() takes three arguments:
// 1. Target object
// 2. Property name to modify
// 3. Property descriptor (configurable, enumerable, writable, value)

// Setting [[Configurable]] to false makes the property non-deletable and non-modifiable:
delete person.age;
console.log(person.age); // undefined since [[Configurable]] was true by default

// Using strict mode for error handling
("use strict");

// Adding a new property with configurable set to false
Object.defineProperty(person, "ssn", {
  configurable: false,
  value: "012-38-9119",
  //NOTE : other properties are set to false unless explicitly specified
});

delete person.ssn; // TypeError because ssn is non-configurable

// Attempt to redefine the non-configurable property throws an error
Object.defineProperty(person, "ssn", {
  configurable: true,
}); // Error: cannot redefine property

// Enumerable Attribute
for (let property in person) {
  console.log(property); // Logs properties if [[Enumerable]] is true
}

// Making "ssn" non-enumerable so it won’t show in for...in loops:
Object.defineProperty(person, "ssn", {
  enumerable: false,
});

/* SECTION 2: accessor properties */

// Accessor properties allow objects to define getter and setter functions
// Unlike data properties, accessor properties have [[Get]] and [[Set]] attributes
// that handle retrieval and assignment behavior instead of [[Value]] and [[Writable]].

// The [[Configurable]] and [[Enumerable]] attributes work the same as in data properties.
// When you access an accessor property, the [[Get]] function is called to return a value.
// When you assign a value to an accessor property, the [[Set]] function is called to handle the assignment.
// By default, [[Get]] returns `undefined` if no getter function is defined.

Object.defineProperty(person, "fullName", {
  // Getter function: returns the concatenated first and last name
  get: function () {
    return this.firstName + " " + this.lastName;
  },

  // Setter function: splits an assigned string value into first and last name
  set: function (value) {
    let parts = value.split(" ");
    if (parts.length == 2) {
      this.firstName = parts[0];
      this.lastName = parts[1];
    } else {
      throw "Invalid name format"; // Throws error if name format is not valid
    }
  },
});

// Access the accessor property `fullName`
console.log(person.fullName); // Outputs the full name as "firstName lastName"
