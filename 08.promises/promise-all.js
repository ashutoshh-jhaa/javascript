// Promise.all() takes an iterable of promises and returns a single promise
// When all promises are resolved, the result is in the form of an array
// For example, if promise1 resolves to value v1 at time t1, and promise2 resolves to value v2 at time t2,
// Promise.all([promise1, promise2]) returns a promise that resolves to an array of [v1, v2] at time t2.
// If one of the promises is rejected, Promise.all() immediately returns a promise that is rejected with the error
// from the first rejected promise, and the other promises (whether resolved or rejected) are ignored.

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise has resolved");
    resolve(10); // Resolves with 10 after 1 second
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second promise has resolved");
    resolve(10); // Resolves with 10 after 1 second
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The third promise has resolved");
    resolve(10); // Resolves with 10 after 1 second
  }, 1000);
});

// Use Promise.all() to wait for all promises to resolve
Promise.all([p1, p2, p3])
  .then((results) => {
    // Once all promises resolve, we receive the results in an array
    console.log(`Result: ${results}`); // Logs: Result: 10,10,10
    const total = results.reduce((sum, value) => sum + value, 0); // Calculate the sum of all results
    console.log(`Total: ${total}`); // Logs: Total: 30
  })
  .catch((error) => {
    // If any promise rejects, this block will handle the error
    console.log(`Error: ${error}`);
  });
