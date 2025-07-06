// ✅ Example 1: Basic Async Function

// async function sayHello() {
//   return "Hello Anit!";
// }

// sayHello().then((msg) => {
//   console.log(msg);
// });


// ✅ Example 2: Using await

// function waitTwoSeconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("⏳ 2 seconds passed!");
//     }, 2000);
//   });
// }

// async function doSomething() {
//   console.log("⏱ Starting...");
//   const result = await waitTwoSeconds(); // waits here
//   console.log(result);
//   console.log("✅ Done!");
// }

// doSomething();


// ✅ Example 3: With try...catch for error handling

// async function fetchUser() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     let data = await response.json();
//     console.log("👤 User:", data.name);
//   } catch (error) {
//     console.log("❌ Error:", error);
//   }
// }

// fetchUser();


// 🧠 In Simple Words:
// async makes a function return a Promise.
// await pauses the code until the Promise settles (resolves or rejects).
// Together, they help write easy-to-read asynchronous code.