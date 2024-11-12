/* Dynamic import in JavaScript enables importing modules on demand, rather than at the 
beginning of the script. This feature, introduced in ES2020, offers flexibility by allowing 
conditional or asynchronous loading of code.

The dynamic import syntax, `import()`, returns a Promise. This differs from standard imports, 
which are synchronous and loaded statically at the top of a file. Dynamic imports allow 
loading only when required, which can improve performance, especially in larger applications. */

// Using dynamic import to load a module only when `loadModule` is called.
async function loadModule() {
  try {
    const module = await import("./module.js"); // Importing the module dynamically
    module.someFunction(); // Accessing properties or functions from the imported module
  } catch (error) {
    console.error("Failed to load the module:", error); // Handling errors in case of load failure
  }
}

// The module will load only when `loadModule()` is called
loadModule();
