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

// The `for...in` loop works well for objects but is not recommended for arrays.
// This is because `for...in` iterates over all enumerable properties, including those on the prototype chain.
// For example, someone may add properties to the array's prototype as follows:

Array.prototype.foo = 100;

const items = [10, 20, 30, 40];
let total = 0;

for (const index in items) {
  console.log({
    index,
    value: items[index],
  });
  total += items[index];
}
console.log(total);

// The loop also iterates over the `foo` property on the array’s prototype chain,
// causing issues in calculations or unexpected outputs.
// The `for...in` loop includes all enumerable properties, so when it reaches the prototype chain,
// it treats `foo` as if it’s part of the array, even though it’s not an actual array element.
// This leads to the problem because `index` becomes `foo` during one of the loop iterations,
// which is incorrect behavior when processing arrays.
