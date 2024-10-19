/** Global Scope: 
 *  - Variables defined outside a function or block become global scope variables.
 *  - They can be accessed and modified from anywhere in the script.
 */
var name = "ashutosh";
console.log(name);

function func() {
    console.log(name); // Accesses the global variable 'name'
}
func();

/** Local Scope or Function Scope Variables: 
 *  - Variables declared within a function are local scope or function scope variables.
 *  - They are accessible only within the function in which they are defined.
 *  - Attempting to access them from outside the function will result in a reference error.
 */
function func1() {
    var num = 43; // Local or function variable
    console.log(num);
}
func1();
//console.log(num); // Throws an error because 'num' is not accessible outside the function scope.

/** Block Scope:
 *  - Variables declared with 'var' have function scope, while variables declared with 'let' or 'const' have block scope.
 *  - Block scope refers to the area within curly braces '{ }' of if statements, loops, or any other code blocks.
 *  - 'var' variables are hoisted to the top of their function scope, but not to the top of the block scope.
 *  - 'let' and 'const' variables are not hoisted and are confined to the block in which they are defined.
 */
{
    var x = 34; // 'var' does not have block scope
    console.log(x);
}
console.log(x); // No error is thrown because 'var' is not block-scoped.

{
    let y = 34; // 'let' has block scope
    console.log(y);
}
//console.log(y); // Throws an error because 'let' has block scope and is not accessible outside the block.
