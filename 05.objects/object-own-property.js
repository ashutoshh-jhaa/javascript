// As JavaScript uses prototypal inheritance, the properties
// of objects can either be "own" (directly on the object) or inherited

const person = {
  firstName: "ashutosh",
  lastName: "jha",
};

// newobj inherits properties from person
const newobj = Object.create(person, {
  job: {
    value: "js developer",
    enumerable: true, // Makes the job property enumerable
  },
});

// Adding a new property directly to newobj
newobj.name = "ash";

// Logs all properties, including inherited ones, since 'for...in' also iterates over inherited properties
for (const key in newobj) {
  console.log(`${key} : ${newobj[key]}`);
}

// ES6 method to check if a property belongs to the object itself
console.log(newobj); // Displays the newobj with its properties
console.log(person); // Displays the person object

// hasOwnProperty() checks if a property is an "own" property (not inherited)
console.log(newobj.hasOwnProperty("job")); // true (direct property of newobj)
console.log(newobj.hasOwnProperty("name")); // true (direct property of newobj)
console.log(newobj.hasOwnProperty("firstName")); // false (inherited from person)
console.log(newobj.hasOwnProperty("lastName")); // false (inherited from person)
