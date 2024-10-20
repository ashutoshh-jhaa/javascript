/**
 * Arrays
 * - Arrays are ordered collections of data of the same data type.
 * - Elements in arrays are stored based on their index.
 * - Arrays can store numbers, strings, booleans, and objects.
 * - Arrays are mutable, meaning they can be modified after creation.
 */

// Method 1 to create an array
let arr = [1, 3, 4, 7];
console.log(typeof arr); // Outputs: object (as arrays are objects)

// Method 2
let arr1 = new Array();
console.log(typeof arr1); // Outputs: object
console.log(arr1); // Outputs: []

/**
 * Accessing Array Elements
 */
let array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(array[3]); // Outputs: 4
console.log(array[5]); // Outputs: 6
console.log(array[43]); // Outputs: undefined
console.log(array[-1]); // Outputs: undefined (negative indices not supported)

/**
 * Modifying Arrays
 */
array[4] = 43;
console.log(array); // Outputs: [1, 2, 3, 4, 43, 6, 7, 8]

/**
 * Inserting Elements into Arrays
 */
array.push(34); // Inserts at the end
console.log(array);
array.push(23, 35, 67); // Inserts multiple elements at the end
console.log(array);

// Unshift method - Inserts at the beginning
array.unshift(555);
console.log(array);
array.unshift(333, 434, 546); // Adds multiple elements
console.log(array);

/**
 * Removing Elements from Arrays
 */
console.log(array.pop()); // Removes and returns the last element
console.log(array); // Removes the last element from the array

console.log(array.shift()); // Removes and returns the first element
console.log(array); // Removes the first element from the array

/**
 * Concatenating Arrays
 */
let a1 = [2, 3, 4, 5];
let a2 = [7, 9, 24];
let concatenatedArray = a1.concat(a2);
console.log(concatenatedArray);

/**
 * Finding the Length of the Array
 */
console.log(array.length);

/**
 * Converting Array to Strings
 */
let chr_arr = ['a', 's', 'u', 't', 'o', 's', 'h'];
console.log(chr_arr.join()); // Separated by comma
console.log(chr_arr.join("")); // No separator
console.log(chr_arr.join("$")); // Custom separator

/**
 * Slicing Arrays
 */
let num = [2, 4, 5, 6, 7, 8, 8, 9, 0];
console.log(num.slice(3));
console.log(num.slice(2, 6));
console.log(num.slice(5, -1));
console.log(num.slice(-5, -1));

/**
 * Splicing Arrays (Modifies the Array)
 */
let removed = num.splice(2, 2);
console.log(num);
removed = num.splice(2, 9);
console.log(num);
removed = num.splice(2, 2, 22, 12, 44);
console.log(num);

/**
 * Reversing Arrays
 */
num.reverse();
console.log(num);

/**
 * Checking for Element Presence and Index
 */
console.log(num.indexOf(22)); // Returns index or -1 if not found
console.log(num.indexOf(88));

/**
 * Sorting Arrays
 */
num.sort(); // Lexicographical sorting
console.log(num);

num.sort((a, b) => a - b); // Ascending order
console.log(num);

num.sort((a, b) => b - a); // Descending order
console.log(num);
