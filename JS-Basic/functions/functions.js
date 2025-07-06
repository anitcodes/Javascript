/*A function is a block of code that perform a task and can be reused.

Basic Syntax:
function functionName(parameters){
    //code blocks
    return XPathResult; //optional
}


// Example:
1.function greet(){
    console.log("Namaste, Anit");
}
greet() //Namaste, Anit -> This is function call


2.function greet(name){
    return "Hello " + name;
}
console.log(greet("Anit")); //Hello Anit

// Parameter vs Argument
name is parameter
"Anit" is the argument you pass

// Return Values
function sum(a,b){      //function definition
return a+ b;
}
let total = sum(2,3);   //function call

console.log(total) //5

*/


//Function Expression

//functions are stored in variables
//cannot be hoisted
/*
const greet = function(){
    console.log("Hello");
}
greet()
*/

//Default, Rest and Spread Parameters ->IMP

// 1.Default Parameters
//->Used to set default values for function parameters when no argument is passed

// example
/*
function greet(name = "Anit"){
    console.log("Hello " + name);
}
greet(); //Hello Anit
greet("Laxman"); //Hello Laxman
*/

// 2.Rest Parameter
// ->Used to collect multiple arguments into a single array

// Example
/*
    function sum(...numbers){
        console.log(numbers);
        let total = 0;
        for(let num of numbers){
            total += num;
        }
        return total;
    }
    console.log(sum(1,2,3,4)); //10
*/

// 3.Spread Operator(...)
//->Used to expand array or objects into individual element

// example:
//i. Spreaad in Array
/*
const numbers = [1,2,3]
const moreNumbers = [...numbers, 4,5];
console.log(moreNumbers); //[1,2,3,4,5]
*/

// ii.Spread in Function call
/*
const values = [4,5,6];
function show(a,b,c){
    console.log(a,b,c);
}
show(...values);
*/



//iii.Spread in Object
/*
let emp = {
    fname: "Mamata",
    lname: "Shrestha",
}

let updatedEmp = {
    ...emp,
    location: "Japan",
    age: 21,
    contact: 9813426531
}

console.log(emp);           //Output: { fname: 'Mamata', lname: 'Shrestha' }
console.log(updatedEmp);    
*/

/*Output:
{
  fname: 'Mamata',
  lname: 'Shrestha',
  location: 'Japan',
  age: 21,
  contact: 9813426531
}*/


















