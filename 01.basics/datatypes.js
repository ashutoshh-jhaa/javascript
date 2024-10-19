/** PRIMITIVE DATATYPES */

// String - sequence of characters
var name = "ashutosh";
var title = "Jha";
console.log(name);

// To print the datatype of the variable
console.log(typeof name);
console.log(typeof (name)); // Also valid, but less common style

// Number
var age = 94;
var x = 2.4;
console.log(typeof age);

// BigInt
var bigNum = 234n; // Adding 'n' to the end indicates a BigInt type
console.log(typeof bigNum);
console.log(typeof NaN); // Although it stands for "not a number", its datatype is a number

// Null
console.log(typeof null); // Null is itself a datatype but the output shows it as an object due to historical reasons

// Undefined
var a;
console.log(typeof a); // When you declare a variable but don't assign a value to it

// Boolean
console.log(typeof truke);

// Symbol
var s1 = Symbol();
// Also known as a constructor
// It can become unique, thus used in keys


/** NON-PRIMITIVE DATATYPES */
// Objects - to represent real-life entities in programming
var person = {
    // Keys: Values | Keys can be a string or symbols while values can be any datatype
    name: "ashutosh",
    age: 39,
    hobby: "cricket"
};
console.log(person);

/**
 * Datatypes:
 * 1) Primitive
 * 2) Non-primitive
 * 
 * Primitive:
 * - Simple/immutable
 * - 7 types
 * 
 * Non-primitive:
 * - Complex/mutable
 * - Object
 */
