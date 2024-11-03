/* Before ES6, JavaScript had no concept of classes.
 * To mimic a class, you often use the constructor/prototype
 * classes are syntactic sugar over the prototypal inheritance
 * in other words class are just special function
 */

class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
let ash = new Person("Ashutosh Jha");
console.log(typeof Person); //function
console.log(ash instanceof Person); //true
console.log(ash instanceof Object); //true

//section 2: class vs custom type
//first : class declarations are not hoisted like function declarations
//if you keep this code above the class declaration it will throw reference error
let john = new Person("John Doe");

// second : all the code inside a class automatically executes in strict mode
// third : class method are non-enumerable
// fourth : calling class constructor without new will result in error
