// Promise represents the stages of an asynchronous operation: pending, fulfilled, or rejected

// *Creating a Promise*
// Promise constructor accepts an executor function with 'resolve' and 'reject' callbacks.
// 'resolve()' is called on success, 'reject()' on failure.
const promise = new Promise((resolve, reject) => {
  let success = false;
  success ? resolve("Success resolved") : reject("Error rejected");
});

// *then() method*
// Attaches callbacks to handle fulfilled or rejected promise states.
// Only one callback is executed based on the promise outcome.
promise.then(
  (res) => console.log(res), // onFulfill
  (err) => console.log(err), // onReject
);

// *catch() method*
// Handles only the rejection case, useful when only error handling is needed.
promise.catch((error) => console.log(error));

// *finally() method*
// Executes regardless of promise state, useful for cleanup or common final actions.
promise.finally(() => render());

// render function is called every time, independent of promise outcome.
function render() {
  console.log("Render completed.");
}
