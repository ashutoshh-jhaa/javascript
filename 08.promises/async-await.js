// Async/await is built on top of Promises, making asynchronous code easier to read.
// The 'async' keyword defines an asynchronous function, which always returns a Promise.
// The 'await' keyword pauses the function execution until the Promise settles (resolves or rejects).
// This makes async functions look like synchronous code, but they still execute asynchronously via the event loop.
// Note: 'await' can only be used inside an async function.

// Function to simulate fetching a user by ID
function getUser(id) {
  return new Promise((res, rej) => {
    if (!id) {
      rej(new Error("Invalid user ID")); // Rejects the Promise if ID is invalid
      return;
    }
    console.log(`Fetching user with ID: ${id}`);
    setTimeout(() => {
      res({
        id,
        userName: "ashutosh",
      });
    }, 2000);
  });
}

// Function to simulate fetching services for a specific user
function getServices(user) {
  return new Promise((res, rej) => {
    console.log(`Fetching services for ${user.userName}`);
    setTimeout(() => {
      res(["internet", "amazonPrime", "netflix", "jiohotstar"]);
    }, 2000);
  });
}

// Function to calculate the total cost of services
function getServicesCost(services) {
  return new Promise((res, rej) => {
    console.log("Calculating the cost of services");
    setTimeout(() => {
      res(services.length * 2000); // Assuming each service costs 2000
    }, 2000);
  });
}

// Main async function to show service cost for a given user ID
async function showServiceCost(userId) {
  try {
    // Await pauses execution until each Promise resolves
    const user = await getUser(userId);
    console.log("User:", user);

    const services = await getServices(user);
    console.log("Services:", services);

    const cost = await getServicesCost(services);
    console.log("Total Cost:", cost);
  } catch (error) {
    // Handles both synchronous errors (like invalid ID) and Promise rejections
    console.log("Error:", error.message);
  }
}

// Test async function calls with valid and invalid user IDs
async function testAsyncFunction() {
  console.log("Testing with invalid ID:");
  await showServiceCost(); // Expected to catch error due to missing ID

  console.log("\nTesting with valid ID:");
  await showServiceCost(23); // Expected to succeed
}

// Initiate tests
testAsyncFunction();
