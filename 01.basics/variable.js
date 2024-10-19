/**
 * Strict rules for naming variables in JavaScript:
 * - Variables must begin with a letter (a-z, A-Z), underscore (_), or dollar sign ($).
 * - Subsequent characters can include letters, digits (0-9), underscores, or dollar signs.
 * - Variable names cannot be JavaScript keywords or reserved words (e.g., if, else, for, function).
 * - Variable names are case-sensitive (e.g., 'name' and 'Name' are different variables).
 * - Avoid using leading underscores (_) in variable names, as they are often reserved for special purposes.
 * - Variable names should not start with a dollar sign ($) unless intended for specific use cases (e.g., jQuery variables).
 * 
 * Guidelines and suggestions:
 * - Use camelCase convention for multi-word variable names (e.g., firstName, lastName).
 * - Avoid using single-letter variable names unless they represent loop counters or common conventions (e.g., i for loop counters, x, y for coordinates).
 * - Refrain from using reserved words as variable names to prevent unexpected behavior and errors in your code.
 * - Consider using meaningful prefixes or suffixes to denote variable types or contexts (e.g., userAge, isAdmin).
 * - Use comments to explain the purpose or usage of complex or non-obvious variables.
 * - Regularly review and refactor variable names to ensure clarity and consistency in your codebase.
 */

var firstName = "Ashutosh";
var lastName = "Jha";
console.log(firstName, lastName);

var userAge = 30;
var isAdmin = false;
console.log(userAge, isAdmin);

var productPrice = 49.99;
var isAvailable = true;
console.log(productPrice, isAvailable);


