/* 
  The Promise.allSettled() method accepts a list of Promises and returns a new promise that resolves after 
  all the input promises have settled, whether they are resolved or rejected. 
  The result of the promise is an array of objects, each describing the outcome (status, value or reason) of each promise.
*/

//Three Promises (Two Resolved, One Rejected)

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1); // Resolves after 1 second with value 1
  }, 1000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2); // Resolves after 2 seconds with value 2
  }, 2000);
});

const p3 = new Promise((_, reject) => {
  setTimeout(() => {
    reject(3); // Rejects after 3 seconds with reason 3
  }, 3000);
});

// Using Promise.allSettled() to handle all promises, regardless of resolution or rejection
Promise.allSettled([p1, p2, p3])
  .then((results) => {
    // Logs the array of objects describing the outcome of each promise
    console.log(results);
    /*
      Output will be:
      [
        { status: "fulfilled", value: 1 },
        { status: "fulfilled", value: 2 },
        { status: "rejected", reason: 3 }
      ]
    */
  })
  .catch((error) => {
    console.log(error); // This will not be triggered since all promises are settled (rejected or resolved)
  });
