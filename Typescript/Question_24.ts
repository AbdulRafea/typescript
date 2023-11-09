document.write(" <b> Tests for equality and inequality with strings: <b> ");
const string1 = "apple";
const string2 = "banana";

// @ts-ignore
document.write(string1 === string2); document.write("<br> <br>") // False
// @ts-ignore
document.write(string1 !== string2); document.write("<br> <br>")  // True

document.write("Tests using the lower case function:"); document.write("<br> <br>")


const uppercaseString = "HELLO";
const lowercaseString = "hello";

// @ts-ignore
// @ts-ignore
document.write(uppercaseString.toLowerCase() === lowercaseString); document.write("<br> <br>")  // True

document.write("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:"); document.write("<br> <br>")


const num1 = 10;
const num2 = 5;

// @ts-ignore
document.write(num1 === num2);  document.write("<br> <br>");  // False
// @ts-ignore
document.write(num1 !== num2); document.write("<br> <br>");  // True
// @ts-ignore
document.write(num1 > num2); document.write("<br> <br>");   // True
// @ts-ignore
document.write(num1 < num2); document.write("<br> <br>");  // False
// @ts-ignore
document.write(num1 >= num2); document.write("<br> <br>");  // True
// @ts-ignore
document.write(num1 <= num2); document.write("<br> <br>");  // False

document.write("Tests using \"and\" and \"or\" operators:"); document.write("<br> <br>");

const condition1 = true;
const condition2 = false;

// @ts-ignore
document.write(condition1 && condition2); document.write("<br> <br>");  // False (AND)
// @ts-ignore
document.write(condition1 || condition2); document.write("<br> <br>"); // True (OR)

document.write("Test whether an item is in an array:"); document.write("<br> <br>");

const fruits = ["apple", "banana", "cherry"];

// @ts-ignore
document.write(fruits.includes("banana"));  document.write("<br> <br>"); // True


const fruit = ["apple", "banana", "cherry"];

// @ts-ignore
document.write(!fruit.includes("orange")); // True (not in the array)


Output:
      Tests for equality and inequality with strings: false

      true

      Tests using the lower case function:

      true

      Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:

      false

      true

      true

      false  

      true

      false

      Tests using "and" and "or" operators:

      false

      true

      Test whether an item is in an array:

      true
  
true
