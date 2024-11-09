// Promise.any() accepts an iterable of promise objects.
// It returns a single promise that resolves to the value of the first fulfilled promise.
// If a promise is rejected, it waits until another promise resolves.
// If *all* promises are rejected, it returns an AggregateError containing all rejection reasons.

// SECTION 1: All Promises Fulfilled
const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Promise 1 fulfilled");
    resolve(1);
  }, 1000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Promise 2 fulfilled");
    resolve(2);
  }, 2000);
});

// Even though both promises fulfill, Promise.any() returns only the first fulfilled result.
Promise.any([p1, p2]).then((result) => {
  console.log("Returned promise:");
  console.log(result); // Output: 1 (from p1)
});

// SECTION 2: One Promise Rejected, One Fulfilled
const p3 = new Promise((_, reject) => {
  setTimeout(() => {
    console.log("Promise 3 rejected");
    reject(3);
  }, 3000);
});

const p4 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Promise 4 fulfilled");
    resolve(4);
  }, 4000);
});

// Since p3 is rejected, Promise.any() ignores it and returns the first fulfilled promise (p4).
Promise.any([p3, p4]).then((result) => {
  console.log("Returned promise:");
  console.log(result); // Output: 4 (from p4)
});

// SECTION 3: All Promises Rejected
const p5 = new Promise((_, reject) => {
  setTimeout(() => {
    console.log("Promise 5 rejected");
    reject(5);
  }, 5000);
});

const p6 = new Promise((_, reject) => {
  setTimeout(() => {
    console.log("Promise 6 rejected");
    reject(6);
  }, 6000);
});

// Since all promises are rejected, Promise.any() returns an AggregateError.
Promise.any([p5, p6])
  .then((result) => {
    console.log("Returned promise:");
    console.log(result);
  })
  .catch((error) => {
    console.log("Error:", error); // Outputs an AggregateError with all rejection reasons
  });
