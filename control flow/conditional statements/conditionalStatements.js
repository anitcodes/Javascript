/*
### 🔢 Conditional Statement Practice Questions (with numbering)

// 1. **Voting Eligibility**
//    Ask the user for their age.

//    * If age is 18 or more, show "Eligible to vote".
//    * Otherwise, show "Not eligible".
   
   let age = prompt("Enter your age");
   if(age>=18){
    alert("You are eligible to vote.")
}else{
    alert("You are not eligile to vote.")
}


// 2. **Odd or Even Checker**
// Take a number input.

// * If divisible by 2, show "Even".
// * Else, show "Odd".

let input = prompt("Enter a number");

if (input === null || input.trim() === "" || isNaN(Number(input))) {
    alert("Invalid input! Please enter a valid number.");
} else {
  let num = Number(input);
if (num % 2 === 0) {
    alert(`${num} is Even`);
} else {
    alert(`${num} is Odd`);
}
}
*/



// 3. **Grade Calculator**
//    Input marks from the user and display grade using:

//    * A: `90–100`
//    * B: `80–89`
//    * C: `70–79`
//    * D: `60–69`
//    * F: Below 60




/*
4. **Maximum of Two Numbers**
   Ask the user for two numbers and display the larger one.

5. **Temperature Message**
   Ask for temperature:

   * > 35: “Too Hot”
   * 20–35: “Pleasant”
   * <20: “Too Cold”

6. **Leap Year Checker**
   Input a year and check if it’s a leap year.

7. **Traffic Light Simulation**
   Ask for traffic light color (red, yellow, green).

   * Use `if...else if` or `switch` to show what to do.



// 8. **Password Checker**
//    Prompt the user to enter a password.

//    * If correct, show "Login successful".
//    * Else, show "Incorrect password".

let password = prompt("Enter your password");

if (password === null || password.trim() === "") {
    alert("Blank password, please enter your password!");
} else if (password.trim() === "heyanit") {
    alert("Login Successful 🥰");
} else {
    alert("Incorrect password");
}

9. **Simple Calculator**
   Ask the user to input two numbers and an operator (`+`, `-`, `*`, `/`).

   * Use `if` or `switch` to perform the operation.

10. **Day Message Using `switch`**
    Ask for day name (`"Monday"`, `"Tuesday"` etc).

* Use `switch` to show a custom message for each day.

---

### 🧠 Bonus Challenge Questions

11. **3-Digit Number Checker**
    Check if the given number is a **3-digit number** using conditions.

12. **Ternary Operator Practice**
    Take age input and show:

* `"Adult"` if age >= 18, else `"Minor"` — using ternary (`? :`) operator.

13. **Number Sign Checker**
    Ask for a number and check if it is **positive, negative, or zero**.

14. **Multiple of 5 and 7 Checker**

* Input a number.
* Check if it's divisible by both 5 and 7.

15. **Admission Eligibility**

* Ask for marks in Math and Science.
* If both are above 60, show "Eligible for Science course", else "Try again".
*/

let mathMarks = prompt("Enter your marks of Math");
let scienceMarks = prompt("Enter your marks of Science");

if (
  mathMarks === null || scienceMarks === null || 
  mathMarks.trim() === "" || scienceMarks.trim() === "" ||
  isNaN(mathMarks) || isNaN(scienceMarks)
) {
  alert("Please enter valid numeric marks!");
} else {
  let marksInMath = Number(mathMarks);
  let marksInScience = Number(scienceMarks);

  if (marksInMath >= 60 && marksInScience >= 60) {
    alert("You are eligible for the Science course");
  } else {
    alert("You are not eligible for the Science course");
  }
}
