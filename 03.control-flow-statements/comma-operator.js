//JavaScript uses a comma (,) to represent the comma operator. A comma operator takes
//two expressions, evaluates them from left to right, and returns the value
//of the right expression.

let x = 20;
let y = (x++, x + 1); //left to right => 21 => 21+1 = 22
console.log(x);
console.log(y);

let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let s = "";
for (let i = 0, j = 1; i < board.length; i++, j++) {
  //it is also used here
  s += board[i] + " ";
  if (j % 3 == 0) {
    console.log(s);
    s = "";
  }
}
