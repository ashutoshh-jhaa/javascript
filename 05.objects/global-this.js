/* SECTION: GlobalThis in ES2020 */

// ES2020 introduced the "globalThis" object, providing a standardized way to access the global object across different environments.
// Historically, JavaScript had different names for the global object depending on the environment:
// - In web browsers: "window"
// - In web workers: "self"
// - In Node.js: "global"

// Using "globalThis" allows for consistent access to the global object across all environments.

const canFetchAPI = typeof globalThis.fetch === "function"; // Check if fetch API is supported
console.log(canFetchAPI); // Logs true if the fetch API is supported
