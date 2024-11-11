class Circle {
  constructor(radius) {
    this.radius = radius; // Initialize with given radius
  }

  set diameter(value) {
    this.radius = value / 2; // Update radius based on diameter
    console.log("SET diameter to", value); // Log setter action
  }

  get diameter() {
    return this.radius * 2; // Calculate diameter from radius
  }
}

let circle = new Circle(100);
console.log(circle); // Output: Circle with radius 100

// Clone the circle using Object.assign, modifying the original
let cloneCircle1 = Object.assign(circle, {
  diameter: 240, // Triggers setter, updates radius
});

// Clone without modifying the original object
let cloneCircle4 = Object.assign({}, circle);

console.log(circle); // Output: Circle with updated radius 120
console.log(cloneCircle1); // Output: Same object as 'circle'

// Clone using the spread operator (no setters triggered)
let cloneCircle2 = {
  ...circle, // Shallow copy of properties
};

console.log(cloneCircle2); // Output: New object with radius 120

// Key Points:
// - Object.assign() modifies the target object directly, triggering setters.
// - The spread operator creates a shallow copy without invoking setters or getters.
