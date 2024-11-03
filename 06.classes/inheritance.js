// Before ES6: Inheritance required multiple steps (prototypal inheritance)

function Animal(legs) {
  this.legs = legs; // Set the number of legs
}

// Set the prototype for Animal
Animal.prototype.walk = function () {
  console.log(`walking on ${this.legs} legs`); // Method to walk
};

// Define the Bird constructor
function Bird(legs) {
  Animal.call(this, legs); // Call the Animal constructor with the current context (legs)
}

// Set Bird's prototype to inherit from Animal's prototype
Bird.prototype = Object.create(Animal.prototype); // Use Object.create to link prototypes
Bird.prototype.constructor = Bird; // Maintain the constructor reference to Bird

// Define the fly method for Bird
Bird.prototype.fly = function () {
  console.log("flying"); // Method to fly
};

// Create an instance of Bird
var pigeon = new Bird(3); // Create a new Bird with 3 legs
pigeon.walk(); // Call the walk method inherited from Animal
pigeon.fly(); // Call the fly method defined in Bird

// After ES6: Introduced 'class', 'extends', and 'super' keywords

// Define the Animal class
class AnimalClass {
  constructor(legs) {
    this.legs = legs; // Set the number of legs
  }
  walk() {
    console.log("walking on " + this.legs + " legs"); // Method to walk
  }
}

// Define the Bird class extending AnimalClass
class BirdClass extends AnimalClass {
  constructor(legs, color) {
    super(legs); // Call the parent class constructor
    this.color = color; // Set the color property
  }
  fly() {
    console.log("flying"); // Method to fly
  }
}

// Create an instance of BirdClass
let greenBird = new BirdClass(2, "green"); // Create a new Bird with 2 legs and color green
greenBird.walk(); // Call the walk method inherited from AnimalClass
greenBird.fly(); // Call the fly method defined in BirdClass

// Section 2: Shadowing methods
// The child class can have methods with the same name as the parent class

class Dog extends AnimalClass {
  constructor() {
    super(4); // Call the parent class constructor with 4 legs
  }
  walk() {
    console.log("go walking"); // Override the walk method
  }
}

// Create an instance of Dog
let bingo = new Dog(); // Create a new Dog instance
bingo.walk(); // Call the overridden walk method of Dog

// Section 3: Inheriting from static methods
// Child class also inherits static properties and methods from the parent class

class StaticAnimal {
  constructor(legs) {
    this.legs = legs; // Set the number of legs
  }
  walk() {
    console.log("walking on " + this.legs + " legs"); // Method to walk
  }
  static helloWorld() {
    console.log("Hello World"); // Static method to say hello
  }
}

// Define the Bird class extending StaticAnimal
class StaticBird extends StaticAnimal {
  fly() {
    console.log("flying"); // Method to fly
  }
}

// Call the static method from the Bird class
StaticBird.helloWorld(); // Outputs: Hello World
