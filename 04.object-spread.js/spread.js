/*
 * The spread operator (...) is used to unpack the elements of arrays or objects
 * into a new array or object. When cloning an object, it creates a shallow copy,
 * meaning only the top-level properties are copied by value, while nested objects
 * remain shared between the original and the clone.
 */

const circle = {
  radius: 10,
  style: {
    color: "blue",
  },
};

// Cloning 'circle' into 'clonedCircle' using the spread operator
const clonedCircle = {
  ...circle,
}; // Cloning with spread operator creates a shallow copy

/* This line replaces the entire 'style' object with a string primitive ("red").
After this, 'clonedCircle.style' is no longer an object, so it won't affect 'circle.style'. 
*/
clonedCircle.style = "red";

/* Attempting to access 'style.color' here would now cause an error,
since 'style' is no longer an object in 'clonedCircle'.
If 'style' were still an object, modifying 'style.color' would also impact 'circle.style.color'
because both would share the same reference (due to shallow copying). 
*/

console.log(clonedCircle);
console.log(circle);
