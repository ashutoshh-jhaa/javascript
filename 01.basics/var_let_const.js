/**
 * var:
 * - Used to define a variable.
 * - It has function scope but no block scope.
 * - Variables declared with var are hoisted to the top of their function scope.
 *   This means that the declaration of the variable is moved to the top of its function or
 *   global scope during the mini-compilation phase.
 *   However, the initialization of the variable remains in place, so the variable will
 *   have an initial value of undefined until it is assigned a value.
 */

// Hoisting example - will not throw an error
console.log(i); // undefined
var i = 32; // The variable declaration is hoisted to the top, but its initialization remains here.

/** 
 * let:
 * - It has block scope.
 * - Variables declared with let are also hoisted but not initialized with undefined it will throw error.
 */

// Throws ReferenceError: Cannot access 'i' before initialization
console.log(i);
let i = 32;

/** 
 * const:
 * - It has block scope.
 * - Variables declared with const are also hoisted but not initialized with undefined it will throw error.
 * - Values must be assigned during initialization and cannot be changed afterwards.
 */

// Throws ReferenceError: Cannot access 'i' before initialization
console.log(i);
const i = 32;
