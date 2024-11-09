// Function to get a user by ID. Throws an error if the ID is invalid (non-number or non-positive).
function getUserById(id) {
  if (typeof id !== "number" || id <= 0) {
    // Synchronously throw an error if the ID is invalid
    throw new Error("Invalid Id Argument");
  }

  // Asynchronous part: returns a Promise which resolves with user data
  return new Promise((res, rej) => {
    res({
      id: id,
      userName: "admin",
    });
  });
}

// Error handling outside promises using try-catch for synchronous errors
try {
  getUserById(0)
    .then((res) => {
      console.log(res); // Will not be executed if an error is thrown in getUserById
    })
    .catch((error) => {
      // Handles errors thrown inside the Promise
      console.log("Caught by .catch() block:", error.message); // This will handle rejected promises
    });
} catch (error) {
  // Catches the error thrown synchronously by getUserById (since ID is invalid)
  console.log("Caught by try/catch:", error.message);
  // The program continues after handling the error.
}

console.log("hi there"); // This will be executed after the try-catch block, regardless of the error

// Function demonstrating promise rejection and throwing errors inside a promise
function p() {
  return new Promise((res, rej) => {
    // Uncomment to simulate a rejected promise
    // rej(3);

    // Throwing an error inside a promise. This error will be handled by .catch()
    throw new Error("New error inside promise");
  });
}

p()
  .then((res) => console.log(res)) // This will not be executed because of the error
  .catch((error) => {
    // Catches the error thrown inside the promise
    console.log("Caught error in promise:", error.message); // Outputs: "New error inside promise"
  });
