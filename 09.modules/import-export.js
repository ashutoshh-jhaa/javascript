// JavaScript modules support two types of exports:
// 1. Named Exports
// 2. Default Export

// To use imports/exports in JavaScript, ensure each <script> tag has `type="module"` set.
// A module can have multiple named exports but only one default export.

// NAMED EXPORTS:
// Named exports let you export multiple items (like functions, variables, etc.),
// which can be imported by name in other files.

/* function noname() {
  console.log("ashutosh");
}
let count = 1;
const num = 4;

export { count, num, noname }; // Exporting multiple items at once
export function f2() {
  // Directly exporting a function
  console.log("f2");
}
export let newvar = 323; // Directly exporting a variable
*/
// DEFAULT EXPORT:
// Only one default export is allowed per module.
// Use `export default` to specify the default export of the module.

/* let message = "hi";
export default message; // This is the default export */

// Note: Default exports do not use {} braces on import.
// Example syntax for importing a default export:
// import message from './module.js';

// RENAMING EXPORTS:
// Named exports can be renamed with the `as` keyword when exporting.

/* let alpha = "beta";
export { alpha as beta }; // Renaming `alpha` to `beta` on export */

// RENAMING IMPORTS:
// You can also rename imports with the `as` keyword on import.
// import { alias as realName } from "./module.js"; // Importing `alias` as `realName`

// RE-EXPORTING:
// Modules can re-export values they import from other modules,
// making them useful for organizing and restructuring code.

/* import { counter } from "./module.js";
export { counter }; // Re-exporting `counter` */

// Shorthand for re-exporting:
// export { counter } from "./module.js"; // Re-exporting in a single line

// NAMESPACE IMPORT:
// A namespace import gathers all exports into a single module namespace object.
// This object contains all exported items, which can be accessed by their names.

// import * as name from "./module.js";
// Access individual exports as `name.myVariable`, `name.myFunction`, etc.
// Example:
// If `module.js` has exports `myVariable`, `myFunction`, and `myClass`:
// - `name.myVariable`
// - `name.myFunction`
// - `name.myClass`

// Note: For default exports within a namespace import, use `name.default`:
// For example:
// If `module.js` has a default export, use `name.default()` instead of `name.myDefault`
// - `name.default()` will call the default export function or value.
