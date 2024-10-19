/**
 * JavaScript loop structures are similar to those in C language.
 * Below are examples demonstrating different types of loops:
 */

// Example 1: Simple for loop
for (var index = 0; index < 10; index++) {
    console.log("Hello World ", index);
}

// Example 2: Using continue to skip odd numbers
for (var i = 0; i < 50; i++) {
    if (i % 2 != 0) {
        continue;
    }
    console.log(i);
}

// Example 3: Nested for loop with continue
for (var m = 0; m < 10; m++) {
    for (let n = 0; n < 10; n++) {
        if (n % 2 != 0) {
            continue;
        }
        console.log(n);
    }
}

// Example 4: Using break to exit loop
for (let k = 0; k <= 10; k++) {
    if (k === 5) {
        break;
    }
    console.log(k);
}
// - The 'break' statement immediately terminates the loop and continues execution after the loop.
// - The 'continue' statement skips the current iteration and proceeds to the next iteration within the loop.
