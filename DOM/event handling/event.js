//Q.1 changing the h1 color to red by using event listener
// let heading = document.querySelector("h1");
// heading.addEventListener("click", function () {
//   heading.style.color = "red";
// });

//Q.2
// let btn = document.querySelector("button");
// let para = document.querySelector("p");

// btn.addEventListener("click", function () {
//   para.textContent = "Hello DOM!";
// });

//Q.3
// let red = document.querySelector("h1");
// let btn = document.querySelector("button");

// btn.addEventListener("click",function(){
//     red.style.color = "red";
// })

//Q.4
// let btn = document.querySelector("#btn");
// btn.addEventListener("click", function () {
//   alert("Button Clicked");
// });

//Q.5
// let para = document.querySelector("p");
// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   para.style.fontWeight = "bold";
// });

// Q.6
// let input = document.querySelector("#input");
// let btn = document.querySelector("button");
// let output = document.querySelector("#output");

// btn.addEventListener("click", function () {
//   output.textContent = input.value;
// });

// Q.7
// let box = document.querySelector(".box");
// box.addEventListener("mouseover", function () {
//   box.style.backgroundColor = "red";
// });
// box.addEventListener("mouseout", function () {
//   box.style.backgroundColor = "white";
// });

//Q.8
// let para = document.querySelector("p");
// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   para.style.fontSize = "32px";
// });

//Q.9
// let para = document.querySelector("p");
// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   if (para.style.display === "none") {
//     para.style.display = "block";
//     btn.textContent = "Hide";
//   } else {
//     para.style.display = "none";
//     btn.textContent = "Show";
//   }
// });

// Q.11
// let count = document.querySelector("#count");
// let btn = document.querySelector("#btn");

// let number = 0;

// btn.addEventListener("click", function(){
//     number = number + 1;
//     count.textContent = number;
// })

// Q.12
// let button = document.getElementById("btn");

// button.addEventListener("click", function () {
//   button.textContent = "Clicked!";
// });
// button.addEventListener("dblclick", function () {
//   button.textContent = "Double Clicked!!";
// });

//Q.15
// let toogle = document.getElementById("toogle");
// let body = document.querySelector("body");

// toogle.addEventListener("click", function(){
//     body.style.backgroundColor = "black";
// })

// Q.16
// let imgs = document.querySelectorAll(".container img");

// imgs.forEach(function (img) {
//   let originalSrc = img.getAttribute("src"); // store original image for each

//   img.addEventListener("mouseover", function () {
//     img.setAttribute(
//       "src",
//       "https://images.pexels.com/photos/16036169/pexels-photo-16036169.jpeg"
//     );
//   });

//   img.addEventListener("mouseout", function () {
//     img.setAttribute("src", originalSrc);
//   });
// });

//Q.17
// Select large display image
// let display = document.getElementById("display");

// // Select all thumbnails
// let thumbs = document.querySelectorAll(".thumb");

// // Loop through thumbnails and add click event
// thumbs.forEach(function (thumb) {
//   thumb.addEventListener("click", function () {
//     // Change the large display image to clicked thumbnail
//     display.src = thumb.src;
//   });
// });
