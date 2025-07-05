//Types of loops in JS
/*
1.for loop
2.while loop
3.do...while loop
4.for...of loop
5.for...in loop
6.for...Each loop
*/

// 1.for loop
/*
syntax:
for(initialization;condition;increment/decrement){
    //code blocks here
}
*/

// example:
//Q. print the number 1 to 10 using for loop
/*
for(let i=0; i<=10; i++){
    console.log(i);
}
*/

// 2.while loop

/*
syntax:
while(condition){
    //code block
}
    */

// example:
/*
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
*/

// 3.do...while loop

// syntax:
/*
do{
    //code blocks here
}while(condition);
*/

// example
/*
let i = 1;
do{
    console.log(i);
    i++;
}while(i<=5);
*/

// 4.for...of loop

// syntax:
/*
for(let item of iterable){
    //code blocks
}
    */

// example:
/*
// i.string
for(let name of "Anit"){
    console.log(name);
}

// ii.array
const colors = ["red","black","white","green"];
for(let colorName of colors){
    console.log(colorName);
}
*/

// 5.for...in loop
// to loop through keys(property) in an object

// syntax:
/*
for(let key in object){
    //code blocks
}
*/

// example
/*
let student = {
    name: "Anit",
    age: 22,
    gender: "male"
}

for(let key in student){
    console.log(key); //name, age, gender
    console.log(student[key]); //Anit, 22, male
    console.log(key, student[key]);
}
*/

// 6.forEach() loop (Array method)
// A cleaner way to loop through arrays only

// syntax:
/*
Array.forEach((element, index) => {
    // code blocks here
});
*/

// example:
/*
const numbers = [1,2,3,4,5];
numbers.forEach((num,i) => {
    console.log(`Index of ${i}: ${num}`);
})
*/

// 7.loop control statement
// i.break
// ii.continue

// example:
/*
for(let i = 0; i<=20; i++)
{
    if(i===5) //5 is ignored
        continue;
    if(i===15) //prints upto 14 
        break;
    console.log(i);
}
*/


















