//an anonymous fn is a function without a name
(function greet() {
  console.log("hello ashutosh");
});//to invoke this we need to make it iife

//settimeout also takes a function which is anonymous in nature
setTimeout(() => {
  console.log("settimeout was invoked");
}, 2000);
