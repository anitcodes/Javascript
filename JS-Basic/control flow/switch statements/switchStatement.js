//Switch Statements

//switch case

// let num = 1;
// switch(num){
//     case 1:
//         console.log("Apple");
//         break;
//     case 2:
//         console.log("Banana");
//         break;
//     default:
//         console.log("Invalid Input!");
// }

// 1. 📅 Day of the Week
// Ask the user to enter a number (1–7) and display the corresponding day name (Sunday to Saturday).

// let day = Number(prompt("Enter a day"));
// switch(day){
//     case 1:
//         alert("Sunday");
//         break;
//     case 2:
//         alert("Monday");
//         break;
//     case 3:
//         alert("Tuesday");
//         break;
//     case 4:
//         alert("Wednesday");
//         break;
//     case 5:
//         alert("Thursday");
//         break;
//     case 6:
//         alert("Friday");
//         break;
//     case 7:
//         alert("Saturday");
//         break;
//     default:
//         alert("Invalid input!");
// }

// 2. 📆 Month Name Finder
// Ask the user for a number (1–12) and display the month name.

// let monthNumber = Number(prompt("Enter a month number (1-12):"));

// switch(monthNumber) {
//     case 1:
//         alert("January");
//         break;
//     case 2:
//         alert("February");
//         break;
//     case 3:
//         alert("March");
//         break;
//     case 4:
//         alert("April");
//         break;
//     case 5:
//         alert("May");
//         break;
//     case 6:
//         alert("June");
//         break;
//     case 7:
//         alert("July");
//         break;
//     case 8:
//         alert("August");
//         break;
//     case 9:
//         alert("September");
//         break;
//     case 10:
//         alert("October");
//         break;
//     case 11:
//         alert("November");
//         break;
//     case 12:
//         alert("December");
//         break;
//     default:
//         alert("Invalid month number! Please enter a number from 1 to 12.");
// }


// 3. 🔢 Simple Calculator
// Ask the user to input two numbers and an operator (+, -, *, /), then perform the operation using switch.

//Method 1

// let num1 = Number(prompt("Enter first number"));
// let operator = prompt("Enter operator(+,-,*,/");
// let num2 = Number(prompt("Enter second number"));

// let sum = num1 + num2;
// let difference = num1 - num2;
// let product = num1 * num2;
// let division = num1 / num2;

// switch(operator){
//     case '+':
//         alert(sum);
//         break;
//     case '-':
//         alert(difference);
//         break;
//     case '*':
//         alert(product);
//         break;
//     case '/':
//         alert(division);
//         break;
//     default:
//         alert("Invalid operation");
// }

// Method 2
// let num1 = Number(prompt("Enter first number: "));
// let operator = prompt("Enter operator(+,-,*,/)");
// let num2 = Number(prompt("Enter second number: "));

// switch(operator){
//     case '+':
//         alert(`Sum: ${num1 + num2}`);
//         break;
//     case '-':
//         alert(`Difference: ${num1 - num2}`);
//         break;
//     case '*':
//         alert(`Product: ${num1 * num2}`);
//         break;
//     case '/':
//         if(num2 === 0){
//             alert("Can't be divided by 0");
//         }
//         else{
//             alert(`Division: ${(num1 / num2).toFixed(2)}`);
//         }
//         break;
//     default:
//         alert("Invalid operation");
// }

// 4. 🕐 Time-Based Greeting
// Ask the user to enter the hour (0–23) and display a greeting:
// 0–11 → Good Morning
// 12–17 → Good Afternoon
// 18–23 → Good Evening
// Use switch(true) with conditions if needed.


// let hour = Number(prompt("Enter hour(0-23):"));

// switch(true){
//     case(hour>=0 && hour<=11):
//         alert("Good Morning");
//         break;
//     case(hour>=12 && hour<=17):
//         alert("Good Afternoon");
//         break;
//     case(hour>18 && hour<=23):
//         alert("Good Evening");
//         break;
//     default:
//         alert("Invalid input, please try the range from 0-21");
// }

// 5. 🎮 Game Menu
// Display a menu:

// markdown
// Copy code
// 1. Start Game
// 2. Load Game
// 3. Exit
// Ask the user to choose an option (1–3), and use switch to perform the appropriate action.

// let choice = Number(prompt(
// `🎮 Game Menu 🎮
// 1. Start Game
// 2. Load Game
// 3. Settings
// 4. Help
// 5. Exit

// Enter your choice (1-5):`
// ));

// switch (choice) {
//     case 1:
//         alert("✅ Game Started... Have fun!");
//         break;
//     case 2:
//         alert("📂 Loading saved game...");
//         break;
//     case 3:
//         let setting = prompt(
// `⚙️ Settings Menu
// a. Change Difficulty
// b. Change Theme
// c. Back to Main Menu

// Enter your choice (a/b/c):`
//         );
//         switch(setting) {
//             case 'a':
//                 alert("🛠 Difficulty set to Hard Mode!");
//                 break;
//             case 'b':
//                 alert("🎨 Theme changed to Dark Mode.");
//                 break;
//             case 'c':
//                 alert("🔙 Returning to main menu...");
//                 break;
//             default:
//                 alert("❌ Invalid settings option.");
//         }
//         break;
//     case 4:
//         alert("🆘 Help: Use 1–5 to choose from the menu. Contact support@example.com for more.");
//         break;
//     case 5:
//         alert("👋 Thanks for playing. Goodbye!");
//         break;
//     default:
//         alert("❌ Invalid choice. Please enter a number from 1 to 5.");
// }
