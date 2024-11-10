// A module in JavaScript is a file that runs in strict mode by default. This means that
// any variables or functions declared within the module will not be added to the global scope.
// To access functions or variables from a module in another file, we must explicitly use
// `export` and `import`.
//
// - To export a function or variable, use: `export { functionName, variableName };`
// - To import them in another file, use: `import { functionName, variableName } from '../path/to/module';`
//
// This approach helps prevent global scope pollution, avoiding naming conflicts and
// reducing potential issues as your codebase grows in size and complexity.
