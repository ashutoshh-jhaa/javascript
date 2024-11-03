// Function that returns a user object or null based on the ID
function returnUser(id) {
  if (id <= 0) {
    return null; // Returns null for invalid IDs
  } else {
    return {
      id: 1,
      name: "ashutos",
      gender: "male",
    };
  }
}

// Default profile used if user is null or name is missing
const defaultProfile = {
  name: "noname",
  gender: "male",
};

// Attempt to get a user with ID 0 (invalid, so returns null)
const result = returnUser(0);

// Using optional chaining (?.) to safely access `name` without errors
console.log(result?.name); // Outputs undefined because `result` is null

// Combining optional chaining (?.) with nullish coalescing (??)
// Provides `defaultProfile` if `result?.name` is null or undefined
console.log(result?.name ?? defaultProfile); // Outputs the defaultProfile object

// Stacking optional chaining operators
// The operator checks if there is a profile property inside of
// the user object, and then checks if avatar is inside of profile.
// It returns undefined if any of these properties are not present,
// preventing an error.
let user = returnUser(1);
let avatar = user?.profile?.avatar; // avatar will be undefined if user or profile is not present

// Using optional chaining with function calls
// Example of an API object with read and write methods
let file = {
  read() {
    return "file content"; // Returns the content of the file
  },
  write(content) {
    console.log(`writing ${content} to file`);
    return true;
  },
};

// If you try to invoke a method that does not exist in the object,
// you will encounter an error. To prevent this, we can use optional chaining.
let compressedData = file.compress?.(); // Returns undefined instead of throwing an error

// This is helpful when using an API where a method might not be available
// due to specific browser or device constraints.

// Example of a function with an optional callback
function getUser(id, callback) {
  let user = {
    id: id,
    username: "admin",
  };

  // Normally, we check if the callback exists before calling it
  /* if (callback) {
    callback(user);
  } */

  // With optional chaining, we can simplify this check
  callback?.(user); // Calls the callback if it exists, otherwise does nothing
}
