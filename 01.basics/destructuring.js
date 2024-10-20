/**
 * Destructuring in JavaScript:
 * - Destructuring allows you to extract data from arrays or objects and assign it to variables in a concise and readable way.
 * - It provides a convenient alternative to traditional iteration methods for accessing elements in arrays or properties in objects.
 */

// Destructuring in arrays
const nums = [1, 2, 3];
const [a, b, c] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// Additional values will be assigned as 'undefined' if no corresponding element exists
const [p, q, r, s] = [1, 2, 3];
console.log(p); // 1
console.log(q); // 2
console.log(r); // 3
console.log(s); // undefined

// Attempting to destructure more elements than available in the array will result in 'undefined' values
const [m, n] = [1, 2, 3];
console.log(m); // 1
console.log(n); // 2
console.log(o); // ReferenceError: o is not defined

// Nested arrays can also be destructured
const [x, y, z] = [1, 3, [3, 4, 5]];
console.log(x); // 1
console.log(y); // 3
console.log(z); // [3, 4, 5]

/**
 * Destructuring in objects:
 * - Object destructuring allows you to extract values from objects directly by using object property names.
 * - Variable names used for destructuring must match the keys of the object.
 */

const per = {
    name: "Ashutosh",
    age: 43,
    city: "Surat",
    address: {
        city: "Bangalore",
        state: "Karnataka"
    }
};

// Destructuring object properties into variables
const { name, age, hobby, address: { city, state } } = per;
console.log(name); // "Ashutosh"
console.log(age); // 43
console.log(hobby); // undefined (hobby is not a property of 'per' object)
console.log(city); // "Bangalore"
console.log(state); // "Karnataka"
