// Promise.race() takes an array of promises and returns a single promise.
// This returned promise settles as soon as any promise in the array settles
// (either resolves or rejects), ignoring the results of the remaining promises.

// Example: Demonstrating Promise.race with two promises resolving at different times
const promise1 = new Promise((resolve) =>
  setTimeout(() => {
    resolve("fast"); // promise1 resolves first after 200ms
  }, 200),
);

const promise2 = new Promise((resolve) =>
  setTimeout(() => {
    resolve("slow"); // promise2 resolves later after 400ms
  }, 400),
);

// Using Promise.race() - Since promise1 resolves faster, "fast" is returned
Promise.race([promise1, promise2])
  .then((result) => console.log(result)) // Output: "fast"
  .catch((error) => console.error(error));

// Practical Example: Displaying a timeout message if data takes too long to load
const fetchTimeout = new Promise((_, reject) =>
  setTimeout(() => {
    reject("Request timed out"); // reject if it takes more than 200ms
  }, 200),
);

const fetchData = new Promise((resolve) =>
  setTimeout(() => {
    resolve("Data fetched from server"); // resolve after 400ms
  }, 400),
);

// Using Promise.race() - If fetchTimeout settles first, it rejects with "Request timed out".
// Otherwise, fetchData will resolve with the fetched data message.
Promise.race([fetchTimeout, fetchData])
  .then((result) => console.log(result)) // Only executes if fetchData is faster than fetchTimeout
  .catch((error) => console.error(error)); // Outputs "Request timed out" if fetchTimeout is faster
