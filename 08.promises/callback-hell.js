// Example without callback
/*
function getCheese() {
  setTimeout(() => {
    const cheese = "🧀";
    console.log("Here is the cheese", cheese);
    return cheese;
  }, 2000);
}
console.log(getCheese()); // undefined
*/

// Using callbacks to handle asynchronous operations
function getCheese(callback) {
  setTimeout(() => {
    const cheese = "🧀";
    callback(cheese);
  }, 2000);
}

function getDough(cheese, callback) {
  setTimeout(() => {
    const dough = cheese + "🍩";
    callback(dough);
  }, 2000);
}

function makePizza(dough, callback) {
  setTimeout(() => {
    const pizza = dough + "🍕";
    callback(pizza);
  }, 2000);
}

// Chain the callbacks to make pizza
getCheese((cheese) => {
  getDough(cheese, (dough) => {
    makePizza(dough, (pizza) => {
      console.log("Here is your pizza", pizza);
    });
  });
});
