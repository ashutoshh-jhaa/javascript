var person = {
  firstName: "John",
  lastName: "Doe",
  ssn: "299-32-3234",
};
for (const key in person) {
  console.log(`${key} : ${person[key]}`);
}

//When you loop over the properties of
//an object that inherits from another object,
//the for...in statement goes up in the prototype
//chain and enumerates inherited properties.
//Consider the following example:

var decoration = {
  color: "red",
};
//creates circle object and links it's prototype to decoration
let circle = Object.create(decoration);
//for in iterates over the inherited prototype
for (const key in decoration) {
  console.log(`${key} : ${circle[key]}`);
}

// To enumerate only the object's own properties (and exclude inherited properties),
// use the hasOwnProperty() method with a for...in loop.

for (const key in circle) {
  // Check if the property is an "own" property of the circle object
  if (circle.hasOwnProperty(key)) {
    const element = circle[key];
    console.log(element); // Logs only the properties directly in 'circle'
    // Example: if "color: 'red'" is inherited, it won’t be logged here.
  }
}
