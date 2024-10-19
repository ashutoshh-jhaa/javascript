// Example 1: Ternary operator for assigning a value based on a condition
var age = 20;
var status = (age >= 18) ? 'Adult' : 'Minor';
console.log(status); // "Adult" (if age is 20)

// Example 2: Using ternary operator for concise conditional statements
var x = 10;
var message = (x > 0) ? 'Positive' : 'Non-positive';
console.log(message); // "Positive" (if x is 10)

// Example 3: Using if-else statement to determine eligibility
var score = 75;
if (score >= 60) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Example 4: Using if-else to handle multiple conditions
var day = "Sunday";
if (day === "Saturday" || day === "Sunday") {
    console.log("It's a weekend!");
} else {
    console.log("It's a weekday.");
}
