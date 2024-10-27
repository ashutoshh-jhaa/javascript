// Functions return undefined by default if no return statement is provided.
function say(message) {
  ans = message; // Assigns message to a variable (not best practice).
  console.log(ans); // Outputs the message.
}

// console.log("ashutosh" + say("hello"));
// Output: "ashutoshundefined" because say() returns undefined.

//short example which returns function
const products = [
  //array of objects
  { name: "iphone 11", price: 24942 },
  { name: "google pixel", price: 1000 },
  { name: "samsung fodld", price: 3000 },
];

function compareByProperty(propertyName) {
  return function (a, b) {
    let x = a[propertyName];
    y = b[propertyName];

    if (x > y) return 1;
    else if (x < y) return -1;
    else return 0;
  };
}
//sort take a two agruments to short the elements
//sorts products by price
const sortedProduct = products.sort(compareByProperty("price"));
console.table(sortedProduct);

