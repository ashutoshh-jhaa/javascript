// Earlier, 'await' could only be used inside an 'async' function.
// Now, with top-level await in MJS files, we can use 'await' directly at the top level of the module.
// This allows the module to wait for asynchronous operations to complete before exporting its values.
// The module execution is paused until the 'await' resolves, ensuring that exported values are ready when required by other modules.
