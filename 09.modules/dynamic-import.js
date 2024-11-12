/* dynamic import in js allows you to import modules on demand rather than at the start of 
the script this feature was introduced with ES2020 provides the flexibility to load code 
conditionally or asynchronously. 

dynamic import uses import() function *which returns a promise* this is different from 
standard imports which are statically loaded at the top of the file and are synchronous in nature
*/

//using dynamic import to load a module only when the function loadModule is called
async function loadModule() {
  try {
    const module = await import(".module.js");
    module.someFucntion(); //access the imported module's properties
  } catch (error) {
    console.error("failed to load the module", error);
  }
}
//the module will load only when the function is called
loadModule();
