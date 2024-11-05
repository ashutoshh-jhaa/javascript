// A callback is a function passed into another function as an argument for later execution

function filter(numbers, fn) {
  let results = [];
  for (const num of numbers) {
    if (fn(num)) {
      // Execute callback `fn` to filter each number
      results.push(num);
    }
  }
  return results;
}

function isOdd(num) {
  return num % 2 !== 0; // Check if the number is odd
}

function isEven(num) {
  return num % 2 === 0; // Check if the number is even
}

let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(filter(numbers, isOdd)); // [1, 3, 5, 7]
console.log(filter(numbers, isEven)); // [2, 4, 6]

// IMPORTANT: Types of Callbacks - Synchronous and Asynchronous

// - **Synchronous Callback**: Executed during the execution of the higher-order function
//   that uses the callback. `isOdd` and `isEven` are examples of synchronous callbacks
//   because they execute during the `filter` function's execution.
//
// - **Asynchronous Callback**: Executed after the execution of the higher-order function
//   that uses the callback. These callbacks are used in non-blocking operations (e.g., network requests).

function download(url) {
  setTimeout(() => {
    console.log(`Downloading ${url}`);
  }, 1000);
}

function process(picture) {
  console.log(`Processing ${picture}`);
}

let url = "http://www.someurl/pic.jpg";

// **Asynchronous Example without Callback Handling**
// - Here, `download()` uses `setTimeout` to simulate a delay (as with real download requests).
// - Due to this delay, `process()` runs before `download()` completes, leading to incorrect sequencing.
download(url);
process(url); // Executes before download completes, not ideal for sequential flow

// **Solution: Pass a Callback to Handle Sequence Correctly**
// - To ensure `process()` runs only after `download()` completes, we pass it as a callback.

function download1(url, callback) {
  setTimeout(() => {
    console.log(`Downloading ${url}`);
    callback(url); // Execute `callback` once download completes
  }, 1000);
}

download1(url, (picture) => {
  // Pass `process` as an anonymous function callback
  console.log(`Processing ${picture}`);
});

// **Error Handling with Callbacks**

function download2(url, onSuccess, onFailure) {
  setTimeout(() => {
    console.log(`Downloading the picture from ${url} ...`);
    !url ? onFailure(url) : onSuccess(url); // Handle invalid URL by triggering `onFailure`
  }, 1000);
}

download2(
  "", // Empty URL to test error case
  (url) => console.log(`Processing the picture ${url}`), // Success callback
  (url) => console.log(`The URL '${url}' is not valid`), // Failure callback
);
