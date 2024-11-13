let users;

// Start an asynchronous IIFE (Immediately Invoked Function Expression) to fetch data.
// This allows us to use 'await' to fetch data inside this function.
(async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(url);
  // Parse the JSON response and assign the result to 'users'.
  // Note: This happens after a delay due to network fetch time.
  users = await response.json();
})();

// Export 'users' variable to make it available in other modules.
// IMPORTANT: When this module is imported, 'users' will initially be undefined
// because the async function above is still waiting for data.
// Other modules importing 'users' need to handle this delay.
export { users };
