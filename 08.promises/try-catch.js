// Function to divide two numbers with error handling
function divide(a, b) {
  try {
    callfun(); // Assuming callfun() might throw an error
    const result = a / b;
    console.log(result);
  } catch (err) {
    console.error(err); // Log the error details
    console.log("Hi there");
  } finally {
    console.log("Hello world"); // Always runs, regardless of success or error
  }
}

divide(3, 44); // Example function call

// Function template for error handling
function divide(a, b) {
  try {
    // Main code
  } catch {
    // Fallback code in case of an error
  }
}

// Function that simulates fetching cheese and throws an error
function fetchCheese() {
  throw new Error("Failed to load the cheese");
}

// Function to make a sandwich with cheese, handling possible errors
function makeSandwich() {
  try {
    let cheese = fetchCheese(); // This will throw an error
    console.log("Cheese fetched:", cheese);
    return `Sandwich with ${cheese}`;
  } catch (error) {
    console.log(`Error: ${error.message}`); // Handle the error gracefully
    return "Could not make sandwich due to missing cheese.";
  }
}

// Example function call
console.log(makeSandwich());
