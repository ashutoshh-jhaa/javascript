/**
 * Objects:
 * - An object in JavaScript is a collection of key-value pairs.
 * - Keys can be a string or symbol, while values can be of any data type.
 * - Objects allow us to store and organize data in a structured manner.
 * - They represent real-world entities or concepts and enable us to model complex relationships and behaviors.
 */

// Most basic way to create an object
const user = {
  name: "Ashutosh", // Key-value pairs
  age: 100,
  city: "Surat",
};

// Accessing the data
console.log(user.name);
console.log(user["name"]); // Another method

/**
 * Adding data to the object
 */
user.country = "India";
user["continent"] = "Asia";

console.log(user);

/**
 * Deleting object keys and the object itself
 */
delete user.country;
console.log(user);

delete user["continent"];
console.log(user);

// Nested object
let person = {
  name: "ash",
  age: 99,
  address: {
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
  },
};

// Iterating through object properties
for (let key in person) {
  console.log(key, " => ", person[key]);
}

// Iterating through object keys
for (let key in person) {
  console.log(key);
}

//prints the whole array
// Getting keys of the object
console.log(Object.keys(person));

// Getting values of the object
console.log(Object.values(person));

// Getting both keys and values
console.log(Object.entries(person));

/**
 * Cloning an object using Object.assign:
 * - Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
 * - In the example below, we create a shallow copy of the 'person' object and assign it to 'new_person' using Object.assign({}, person).
 * - The first parameter {} specifies the target object, and 'person' is the source object.
 * - This creates a new object with the same key-value pairs as 'person'.
 */
const new_person = Object.assign({}, person);
console.log(new_person);

// Adding additional properties while cloning
const new_person_1 = Object.assign({}, person, { role: "Developer" });
console.log(new_person_1);
