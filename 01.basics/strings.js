/**
 * String: A sequence of characters.
 * - Strings are immutable, meaning their contents cannot be altered after creation.
 * - Immutability refers to the inability to change the content of a data structure once it's created.
 */

let name = 'Ashutosh';
let city = "Surat";
console.log(name, city);
console.log(typeof name);

/** Accessing Characters based on Index */
console.log(name[4]); // Retrieves the character at index 4
console.log(name[23]); // Undefined as the index is out of range

// Attempting to change characters in a string is not possible as strings are immutable
// name[2] = "M";
// console.log(name);

/** 
 * Strings can be used to store sensitive information like passwords,
 * as they cannot be changed once created.
 * However, be cautious in scenarios where constant updates are needed 
 * as it could pose security risks.
 */

// METHODS OF STRING
console.log(name.length); // Returns the length of the string

let first_name = "Ashutosh";
let last_name = "Jha";

let full_name = first_name.concat(last_name); // Concatenates two strings
console.log(full_name);

console.log(first_name + last_name); // Another way of concatenating strings

console.log(full_name.toUpperCase()); // Converts the string to uppercase

/** Character at a Specific Index */
console.log(name.charAt(3));

/** Slicing */
console.log(full_name);
console.log(full_name.slice(2)); // Slices the string from index 2 to the end
console.log(full_name.slice(3, 5)); // Slices the string from index 3 to 5
console.log(full_name.slice(-3)); // Slices the string from the third character from the end to the end
console.log(full_name.slice(-4, -2)); // Slices the string from the fourth character from the end to the second character from the end

/** indexOf */
console.log(name.indexOf('h')); // Returns the index of the first occurrence of 'h' in the string
console.log(name.indexOf('l')); // Returns -1 if the character is not found in the string

/** trim */
let word = " ashu ";
console.log(word.trim()); // Removes extra whitespace from the beginning and end of the string

/** Split: Returns an array of strings */
let alpha = "ashutosh ranjan jha";
console.log(alpha.split(" ")); // Splits the string into an array using spaces as separators
console.log(alpha.split("")); // Splits the string into an array of individual characters
