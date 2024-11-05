let username = document.getElementById("username");
let greeting = document.getElementById("greeting");

// Regular function as an event handler
// Here, 'this' refers to the 'username' element because event listeners
// automatically bind 'this' to the element that triggered the event.
username.addEventListener("keyup", function () {
  greeting.innerHTML = "hello " + this.value; // 'this' points to the username input
});

// Uncommenting the code below would illustrate the difference with an arrow function:
// Arrow function as an event handler
// In this case, 'this' does not refer to the 'username' element.
// Instead, it lexically inherits 'this' from the outer scope,
// which is usually the global object (e.g., 'window' in browsers).
/* username.addEventListener("keyup", () => {
  greeting.innerHTML = "hello " + this.value; // 'this' points to the outer scope, not the username input
}); */ // This would not work as expected because 'this' is not bound to the input element.
