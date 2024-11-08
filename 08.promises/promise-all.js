//this is a method which takes an iteratable of promises and returns a single promise
//when all promises are resolved the result is in the form of array
//how it works
// - promise1 resolves to a value v1 at t1 and the
//    promise2 resolves to a value v2 at t2. Hence,
//    the Promise.all(promise1, promise2) returns a promise
//    that resolves to an array containing the results of the
//    promise1 and promise2 [v1, v2] at t2.
//If one of the input promises is rejected, the Promise.all() method
//immediately returns a promise that is rejected with an error of the
//first rejected promise also promise doesn't care about the other input
//promises whether they will be rejected or resolved

const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("the first promise has resolved");
    res(10);
  }, 1000);
});
const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("the second promise has resolved");
    res(10);
  }, 1000);
});
const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("the third promise has resolved");
    res(10);
  }, 1000);
});

Promise.all([p1, p2, p3]).then((res) => {
  console.log(`Result : ${res}`);
  const total = res.reduce((p, c) => p + c);
  console.log(`Total : ${total}`);
});
