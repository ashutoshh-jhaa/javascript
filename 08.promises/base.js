// Simulated synchronous function to get users
function getUsers() {
  return [
    { username: "abhishek", email: "abhishek@test.com" },
    { username: "ash", email: "ash@gmail.com" },
  ];
}

function findUser(username) {
  const users = getUsers();
  const user = users.find((user) => user.username === username);
  return user;
}

console.log(findUser("ash")); // Works synchronously

// In practice, getUsers() might access a database or API, which would be asynchronous

// Using a callback to handle asynchronous data retrieval
function getUsersAsync(callback) {
  setTimeout(() => {
    callback([
      { username: "abhishek", email: "abhishek@test.com" },
      { username: "ash", email: "ash@gmail.com" },
    ]);
  }, 1000);
}

function findUserAsync(username) {
  getUsersAsync((users) => {
    const user = users.find((user) => user.username === username);
    user ? console.log(user) : console.log("No user found");
  });
}

findUserAsync("abhishek"); // Asynchronously finds user
