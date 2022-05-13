// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
// let num1 = String(1500);
// let num2 = String(2000);
// let sum = num1 + num2;

// let num1 = 1500 .toString();
// let num2 = 2000 .toString();
// let sum = num1 + num2; 

let num1 = 1500;
let string1 = `My string number is ${num1}`;

console.log(string1);
console.log(typeof string1);



// Write a JavaScript program to convert a string to the number.
let num3 = parseInt("1500");
let num4 = parseInt("2000");
let sum = (num3 + num4);

console.log(sum);
console.log(typeof sum);


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

let datatype = function(thing1){
  let answer = typeof(thing1);

  console.log(thing1, "is a", answer);
}
datatype("John");
datatype(1991);
datatype("2022");
datatype(false);
datatype(null);
datatype(undefined);
datatype(datatype);

  

  
// Write a JavaScript program that adds 2 numbers together.
let num5 = 2000;
let num6 = 22;
let sum2 = (num5 + num6);

console.log(sum2);



// Write a JavaScript program that runs only when 2 things are true.



// Write a JavaScript program that runs when 1 of 2 things are true.



// Write a JavaScript program that runs when both things are not true.  

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24