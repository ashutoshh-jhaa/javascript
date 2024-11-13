//Top-level await simplifies this situation by allowing you to use await directly
//in the module’s main scope. This way, you don’t need an immediately-invoked
//async function, and the code waits for the data to load
//before proceeding to export, so any importing module gets
//users fully populated right away.

const url = "https://fakestoreapi.com/products/2";

//we are using await outside of async function as the type of file is mjs so js automtically
//pauses the execution when it encounters await without the need of async  function
//and makes sure that the fetch is competly done before exporting the file
const response = await fetch(url);
const users = await response.json();

export { users };
