// Array

// let faculty = ["csit", "bca", "bit"];
// console.log(faculty);
// console.log(faculty[0]);

//Array Methods

//1. faculty.push("bba"); //add item to end
// console.log(faculty)

//2. faculty.pop() //remove item from end
// console.log(faculty)

//3. faculty.unshift("bbm")//add item from start
// console.log(faculty)

//4. faculty.shift()//remove item from start
// console.log(faculty)

// 5. includes() //check if item exits
// console.log(faculty.includes("csit")) //true
// console.log(faculty.includes("bbs")) //false

// 6. indexOf() //get position of item
// console.log(faculty.indexOf("bca")) //1

// 7. slice(start, end) //copy part of array
// let arr = [1,2,3,4,5,6,7,8];
// console.log(arr.slice(1,5))

// 8. splice(start, deleteCount, item1, ...) //Add/remove items
// let arr = [1,2,3,4,5,6,7,8];
// arr.splice(2,3) //index 2 dekhi 3 ota item delete garne
// console.log(arr)

// 9. join(seperator) //turn array into string
// let text = ["Hello", "Anit"]
// text.join(" ")
// console.log(text)

// 10. reverse() // Reverse the array
// let num = [1,2,3];
// num.reverse();
// console.log(num)

// 11. sort() //Sort the array
// let arr = [3, 1, 2];
// arr.sort();
// arr.sort((a, b) => a - b); // ascending[1, 2, 3]
// arr.sort((a, b) => a + b); // descending[3, 2, 1]
// console.log(arr); 

//12. map()
// const numbers = [1,2,3,4,5]

// const square = numbers.map(num => num*2)
// console.log(square)

//13. filter()
// const num = [1,2,3,4,5,6]
// const check = num.filter(val => val === 2);
// console.log(check); // [2]



//Mastering the array methods

// array.map((item, index, array) => {
    //return the transformed value
// })
// item -> current element
// index -> position of the element
// array -> the original array

// example of map()
// const fruits = ["apple","banana","mango"];

// fruits.map((item,index,array)=>{
//     console.log("Item:",item);
//     console.log("Index:",index);
//     console.log("Array:",array);
// })

// using item
//we use item to work with the value itself

