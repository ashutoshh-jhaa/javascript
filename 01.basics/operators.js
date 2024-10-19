/**
- Arithmetic operators: `+`, `-`, `*`, `/`, `%`, `++`, `--`
- Assignment operators: `=`, `+=`, `-=`, `*=`, `/=`, `%=`
- Comparison operators: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- Logical operators: `&&`, `||`, `!`
- Unary operators: `+`, `-`, `++`, `--`, `typeof`, `!`
- Bitwise operators: `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`
- Ternary operator: `condition ? expr1 : expr2`
- String concatenation operator: `+`
- Type operators: `typeof`, `instanceof`
- Void operator: `void`
 */

/**
- Arithmetic operators: +, -, *, /, %, ++, --
*/

let a = 10;
let b = 5;
console.log(a + b); // Addition: 15
console.log(a - b); // Subtraction: 5
console.log(a * b); // Multiplication: 50
console.log(a / b); // Division: 2
console.log(a % b); // Modulus: 0
let c = 10;
console.log(++c); // Pre-increment: 11
console.log(c++); // Post-increment: 11 (but c will become 12 after this line)
console.log(--c); // Pre-decrement: 11
console.log(c--); // Post-decrement: 11 (but c will become 10 after this line)


/**
- Assignment operators: =, +=, -=, *=, /=, %=
*/

let x = 5;
x += 3; // Equivalent to: x = x + 3
console.log(x); // 8
x -= 2; // Equivalent to: x = x - 2
console.log(x); // 6
x *= 2; // Equivalent to: x = x * 2
console.log(x); // 12
x /= 4; // Equivalent to: x = x / 4
console.log(x); // 3
x %= 2; // Equivalent to: x = x % 2
console.log(x); // 1


/**
- Comparison operators: ==, ===, !=, !==, >, <, >=, <=
*/

console.log(5 == '5'); // true (loose equality, coerces types)
console.log(5 === '5'); // false (strict equality, checks type and value)
console.log(5 != '5'); // false (loose inequality, coerces types)
console.log(5 !== '5'); // true (strict inequality, checks type and value)
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 3); // false


/**
- Logical operators: &&, ||, !
*/

let isValid = true;
let isLoggedIn = false;

console.log(isValid && isLoggedIn); // false (AND)
console.log(isValid || isLoggedIn); // true (OR)
console.log(!isValid); // false (NOT)


/**
- Unary operators: +, -, ++, --, typeof, !
*/

let num = 10;
console.log(+num); // 10 (unary plus, converts to number) gives NaN if string is entered
console.log(-num); // -10 (unary minus)  gives NaN if string is entered
console.log(++num); // 11 (pre-increment)
console.log(num++); // 11 (post-increment)
console.log(--num); // 11 (pre-decrement)
console.log(num--); // 11 (post-decrement)
console.log(typeof num); // "number" (typeof operator)
console.log(!isValid); // false (logical NOT)


/**
- Bitwise operators: &, |, ^, ~, <<, >>, >>>
*/

let m = 5; // binary 0101
let n = 3; // binary 0011

console.log(m & n); // 1 (AND)
console.log(m | n); // 7 (OR)
console.log(m ^ n); // 6 (XOR)
console.log(~m); // -6 (NOT)
console.log(m << 1); // 10 (left shift by 1)
console.log(m >> 1); // 2 (right shift by 1)
console.log(m >>> 1); // 2 (zero-fill right shift by 1)


/**
- Ternary operator: condition ? expr1 : expr2
*/

let age = 20;
let status = (age >= 18) ? 'Adult' : 'Minor';
console.log(status); // "Adult"


/**
- String concatenation operator: +
*/

let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName;
console.log(fullName); // "John Doe"


/**
- Type operators: typeof, instanceof
*/

console.log(typeof fullName); // "string"
console.log(fullName instanceof String); // false (fullName is a primitive string, not a String object)


/**
- Void operator: void
*/

console.log(void 0); // undefined
