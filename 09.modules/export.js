// JavaScript modules can use two types of exports:
// 1. Named Export
// 2. Default Export
// Note: A module can have multiple named exports but only one default export.

// NAMED EXPORTS:
// To create a named export, list each item to export individually or as part of an export statement.
function noname() {
  console.log("ashutosh");
}
let count = 1;
const num = 4;
export { count, num, noname }; // Exporting multiple items by listing them
export function f2() {
  // Directly exporting a function
  console.log("f2");
}
export let newvar = 323; // Directly exporting a variable

// DEFAULT EXPORT:
// Only one default export is allowed per module.
// Use `export default` to specify the default export.

let message = "hi";
export default message; // Exporting a default variable

// - Note: When importing a default export, do not use {} braces. {} braces are only for named exports.
// Example import syntax:
// import message from './module.js';

// RENAMING EXPORTS:
// You can rename exports using the `as` keyword.

let alpha = "beta";
export { alpha as beta }; // Exporting `alpha` with the name `beta`

// RENAMING IMPORTS:
// You can also rename imports upon importing.
import { alias as realName } from "./module.js"; // Renaming an imported item

// RE-EXPORTING:
// A module can import values from another module and export them immediately.
// This is helpful for creating modular structures.

import { counter } from "./module.js";
export { counter }; // Re-exporting `counter`

// Shorthand for re-exporting:
export { counter } from "./module.js"; // Directly re-exporting in one line
