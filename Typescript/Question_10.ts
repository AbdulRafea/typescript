

// First Program

// Adding teo numbers

// Make two variables

let a = 6;

let b = 8;

// Adding two numbers

let add = a + b;

// print the numbers

console.log("Answer off first program is : __" + add); 






// Second program

// This program displays a greeting message with the current date

// Get the current date
let currentDate = new Date();
// Extract the year, month, and day
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
let day = currentDate.getDate();

// Create a formatted date string
let dateStr = month + "/" + day + "/" + year;

// Display a greeting message with the current date
console.log("Hello! Today is " + dateStr);
output: Answer off first program is : __14
Hello! Today is 11/8/2023
