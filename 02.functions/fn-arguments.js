//it behaves as an array but it's not an instance of Array type
//we can easily access all the aruguments using arguments[int] operator
function addNumbers() {
  let count = 0;
  // gets all the arguments given to the function
  for (let i = 0; i < arguments.length; i++) {
    count += arguments[i];
  }
  console.log(count);
}
addNumbers(1, 2, 3, 4, 5, 6, 7, 8);
