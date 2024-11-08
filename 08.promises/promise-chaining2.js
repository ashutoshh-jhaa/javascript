// Function to create the cart
function createCart() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (!checkCart()) {
        rej("cart is empty");
      }
      res("cart created");
    }, 2000);
  });
}

// Function to handle payment
function makePayement() {
  return new Promise((res, rej) => {
    let flag = true;
    if (!flag) {
      rej("payment unsuccessful");
    }
    res("payment completed");
  });
}

// Function to handle cashback
function cashback() {
  return new Promise((res, rej) => {
    let flag = false;
    if (!flag) {
      rej("cashback was not granted");
    }
    res("cashback granted");
  });
}

// Start the cart creation process
let cart = createCart();

// Chain of promises to handle cart creation, payment, and cashback
cart
  .then(() => {
    // Proceed to make payment if cart is created successfully
    return makePayement();
  })
  .then(() => {
    // Proceed to cashback if payment is completed successfully
    return cashback();
  })
  .then((res) => {
    // Log the success message if all steps pass
    console.log(res);
  })
  .catch((error) => {
    // Catch and log the first error in the chain (either cart, payment, or cashback failure)
    console.log(error);
  });

// Function to check if the cart is valid
function checkCart() {
  return false;
}
