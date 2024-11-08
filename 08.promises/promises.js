// Promise has three states:
// 1. pending
// 2. fulfilled
// 3. rejected

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    success ? resolve("Operation succeeded") : reject("Operation failed");
  }, 3000);
});

// Example usage of the promise
/*
myPromise
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
*/

// To make pizza:
// Step 1: Get cheese => Step 2: Make dough => Step 3: Make pizza

function getCheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = "🧀";
      cheese ? resolve(cheese) : reject("Cannot fetch Cheese");
    }, 2000);
  });
}

function makeDough(cheese) {
  return new Promise((resolve, reject) => {
    const dough = cheese + "🫓";
    dough ? resolve(dough) : reject("Error making dough");
  });
}

function makePizza(dough) {
  return new Promise((resolve, reject) => {
    const pizza = dough + "🍕";
    pizza ? resolve(pizza) : reject("Error making pizza");
  });
}

// Chain promises to make pizza
getCheese()
  .then((cheese) => makeDough(cheese))
  .then((dough) => makePizza(dough))
  .then((pizza) => console.log(pizza))
  .catch((error) => console.log("Error:", error));
