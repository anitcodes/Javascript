// A callback function is a function passed as an argument to another function, and it is usually called (executed) later.

// ✅ Code Example 1

// This is the callback function
// function sayHello() {
//   console.log("Hello Anit!");
// }

// // This is the function that accepts a callback
// function greetUser(callback) {
//   console.log("Fetching user data...");
//   // simulate delay
//   setTimeout(() => {
//     console.log("User data loaded");
//     callback(); // call the passed function
//   }, 2000);
// }

// Call greetUser and pass sayHello as a callback
// greetUser(sayHello);


// 🧠 Another Example: Custom Calculator javascript Copy code

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function calculator(a, b, operation) {
  return operation(a, b); // callback
}

console.log(calculator(5, 3, add));      // Output: 8
console.log(calculator(5, 3, subtract)); // Output: 2
