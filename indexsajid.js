// JavaScript
// JavaScript is the world's most popular programming language.

// JavaScript is the programming language of the Web.

// JavaScript is easy to learn.

// This tutorial will teach you JavaScript from basic to advanced.
// Why Study JavaScript?
// JavaScript is one of the 3 languages all web developers must learn:

//    1. HTML to define the content of web pages

//    2. CSS to specify the layout of web pages

//    3. JavaScript to program the behavior of web pages
//    This covers every version of JavaScript:

// The Original JavaScript ES1 ES2 ES3 (1997-1999)
// The First Main Revision ES5 (2009)
// The Second Revision ES6 (2015)
// The Yearly Additions (2016, 2017, 2018)

// const para = require("para");

/****  Section 1👉 we need to do it in console ****/
// alert("Welcome, to Complete JavaScript course");
// console.log('Welcome, to complete JavaScript Course');



/**** Section 2👉 Code Editor for writing JS ****/
/**** Section 3👉 values and variables in JavaScript ****/
// JavaScript Identifiers
// All JavaScript variables must be identified with unique names.

// These unique names are called identifiers.

// Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

// The general rules for constructing names for variables (unique identifiers) are:

// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter
// Names can also begin with $ and _ (but we will not use it in this tutorial)
// Names are case sensitive (y and Y are different variables)
// Reserved words (like JavaScript keywords) cannot be used as names


// var myName = 'Sajid Khan';


// var myAge = 26;

// console.log(myage);
// Naming Practice
// var _myName = "Mohd";
// var 1myName = "Sajid";
// var _1my__Name = "Khan";
// var $myName = "Sajid SoftDev";
// var myNaem% = "Sajid SoftDev";

// console.log(myNaem%);
// // **********************************************************************



// // **********************************************************************

// JavaScript Data Types
// JavaScript variables can hold numbers like 100 and text values like "John Doe".

// In programming, text values are called text strings.

// JavaScript can handle many types of data, but for now, just think of numbers and strings.

// Strings are written inside double or single quotes. Numbers are written without quotes.

// If you put a number in quotes, it will be treated as a text string.

/**** Section 4👉 Data Types in JavaScript ****/


// var myName = "Mohd Sajid";
// console.log(myName);

// var myAge = 26;
// console.log(myAge);

// var iAmSajids = false;
// console.log(iAmSajid);

// // typeof operator 
// console.log(typeof(iAmSajid));


// DataTypes Practice

// console.log( 10 + "20");
// 9 - "5"
// console.log( 9 - "5"); //bug
// "Java" + "Script"
// console.log( "Java "+ "Script");
// " " + " "
// console.log( " " + 0);
// " " + 0
// "Mohd" - "Sajid"
// true + true
// true + false
// false + true
// false - true


// console.log("Mohd" - "Sajid");





// 🙋‍👨‍🏫 Interview Question 1 🙋‍👨‍🏫
// Difference between null vs undefined? 


// var iAmUseless = null;
// console.log(iAmUseless);
// console.log(typeof(iAmUseless));
// //2nd javascript bug

// var iAmStandBy;
// console.log(iAmStandBy);
// console.log(typeof(iAmStandBy));


// 🙋‍👨‍🏫 Interview Question 2 🙋‍👨‍🏫
// What is NaN?

// NaN is a property of the global object. 
// In other words, it is a variable in global scope.
// The initial value of NaN is Not-A-Number 


// var myPhoneNumber = 9876543210;
// var myName = "Sajid technical";

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// if(isNaN(myName)){
//     console.log("plz enter valid phone no");
// }




// NaN Practice 🤯

  

// NaN === NaN;        
// Number.NaN === NaN; 
// isNaN(NaN);         
// isNaN(Number.NaN);  
// Number.isNaN(NaN);


// console.log(Number.isNaN(NaN));




// 🙋‍👨‍🏫 Interview Question 1 🙋‍👨‍🏫
// var vs let vs const 
// JavaScript Arithmetic Operators
// Arithmetic operators are used to perform arithmetic on numbers:
// Operator Description
// +  Addition
// -  Subtraction
// *  Multiplication
// ** Exponentiation (ES2016)
// /  Division
// %  Modulus (Division Remainder)
// ++ Increment
// -- Decrement
// 2️⃣Arithmetic operators
// An arithmetic operator takes numerical values 
// (either literals or variables) as their operands and 
// returns a single numerical value.

// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*6);

// console.log("Remainder Operator " + 27%4);


// JavaScript Assignment Operators
// Assignment operators assign values to JavaScript variables.
// Operator Example Same As
// =  x = y    x = y
// += x += y     x = x + y
// -= x -= y     x = x - y
// *= x *= y    x = x * y
// /= x /= y     x = x / y
// %= x %= y     x = x % y
// **=  x **= y    x = x ** y
// 1️⃣Assignment operators
// An assignment operator assigns a value to its left operand 
// based on the value of its right operand. 
// The simple assignment operator is equal (=)

// var x = 5; 
// var y = 5;

// console.log("is both the x and y are equal or not" + x == y );

// I will tell you when we will see es6
// console.log(`Is both the x and y are equal : ${x == y}`);



// Incrementing
// The increment operator (++) increments numbers.
// Decrementing
// The decrement operator (--) decrements numbers.
// Exponentiation



// 🙄Increment and Decrement operator
// Operator: x++ or ++x or x-- or --x
// If used postfix, with operator after operand (for example, x++), 
// the increment operator increments and returns the value before incrementing.

// var num = 15;
// var newNum = num-- + 5;
// console.log(num);
// console.log(newNum);


// Postfix increment operator means the expression is evaluated 
// first using the original value of the variable and then the 
// variable is incremented(increased).


// If used prefix, with operator before operand (for example, ++x), 
// the increment operator increments and returns the value after incrementing.

// var num = 15;
// var newNum = --num + 5; 
// console.log(num);
// console.log(newNum);


// Prefix increment operator means the variable is incremented first and then 
// the expression is evaluated using the new value of the variable.



// The exponentiation operator (**) raises the first operand to the power of the second operand.
// Operator Precedence
// Exponentiation
// The exponentiation operator (**) raises the first operand to the power of the second operand.

// Example
// var x = 5;
// var z = x ** 2;          // result is 25
// Operator precedence describes the order in which operations are performed in an arithmetic expression.

// Operator Precedence
// Operator precedence describes the order in which operations are performed in an arithmetic expression.

// Example
// var x = 100 + 50 * 3;



// JavaScript Comparison Operators
// Operator Description
// == equal to
// ===  equal value and equal type
// != not equal
// !==  not equal value or not equal type
// >  greater than
// <  less than
// >= greater than or equal to
// <= less than or equal to
// ?  ternary operator
// 3️⃣Comparison operators
// A comparison operator compares its operands and 
// returns a logical value based on whether the comparison is true.

// var a = 30;
// var b = 10;

// Equal (==)
// console.log(a == b);

// Not equal (!=)
// console.log(a != b);

// // Greater than (>)
// console.log(a > b);

// // Greater than or equal (>=)
// console.log(a >= b);

// // Less than (<)
// console.log(a < b);

// // Less than or equal (<=)
// console.log(a <= b);




// 4️⃣ Logical operators

// JavaScript Logical Operators

// Operator Description
// && logical and
// || logical or
// !  logical not

// 4️⃣ Logical operators
// Logical operators are typically used with Boolean (logical) values; 
// when they are, they return a Boolean value.

// var a = 30;
// var b = -20;

// Logical AND (&&)
// The logical AND (&&) operator (logical conjunction) for a set of 
// operands is true if and only if all of its operands are true.


// console.log(a > b && b > -50 && b < 0);


// Logical OR (||)
// The logical OR (||) operator (logical disjunction) for a set of 
// operands is true if and only if one or more of its operands is true.

// console.log((a < b) || (b > 0) || (b > 0));

// Logical NOT (!)
// The logical NOT (!) operator (logical complement, negation) 
// takes truth to falsity and vice versa.

// console.log(!((a>0) || (b<0)));
// console.log(!true);
  

// // **********************************************************************
 
//  🤩  Sajid SoftDev PARADISE COMPUTER INSTITUTE 🤩

// // **********************************************************************
 
// JavaScript is Case Sensitive
// All JavaScript identifiers are case sensitive. 

// The variables lastName and lastname, are two different variables:

// JavaScript does not interpret VAR or Var as the keyword var.

// JavaScript and Camel Case
// Historically, programmers have used different ways of joining multiple words into one variable name:

// Hyphens:

// first-name, last-name, master-card, inter-city.

// Hyphens are not allowed in JavaScript. They are reserved for subtractions.

// Underscore:

// first_name, last_name, master_card, inter_city.

// Upper Camel Case (Pascal Case):

// FirstName, LastName, MasterCard, InterCity.

// Lower Camel Case:

// JavaScript programmers tend to use camel case that starts with a lowercase letter:

// firstName, lastName, masterCard, interCity.

// 5️⃣ String Concatenation(operators)

// When working with JavaScript strings sometimes you need to join two or more strings together into a single string. Joining multiple strings together is known as concatenation.

// The concatenation operator

// The concatenation operator (+) concatenates two or more string values together and return another string which is the union of the two operand strings.

// The shorthand assignment operator += can also be used to concatenate strings.

// Example:

// The following web document demonstrates the use of concatenation operator (+) and shorthand assignment operator +=.

// The concatenation operator (+) concatenates two string values together, 
// returning another string that is the union of the two operand strings.


// console.log("Hello World");

// console.log("hello " +  "world");

// var myName = "Mohd";

// console.log(myName + " Sajid");
// console.log(myName + " Khan");
// console.log(myName + " Khan Sajid");





// 😳 4 Challenge Time 
// What will be the output of 3**3? 
// What will be the output, when we add a number and a string?
// Write a program to swap two numbers?
// Write a program to swap two numbers without using third variable?



// sol 1: ✔
// console.log(9**2); // 9*9
// console.log(10 ** -1); 1/10


// sol 2:  ✔
// console.log(5 + "Sajid");

// sol 3: ✔ 

// var a = 5;
// var b = 10;

// output b=5; a=10

// var c = b; //c = 10
// b = a; // b = 5;
// a = c;

// console.log("the value of a is " + a);
// console.log("the value of b is " + b);



// sol 4: ✔

// var a = 5;
// var b = 10;

// // output b=5; a=10

// a = a + b; // a = 15
// b = a - b; // b = 5; 
// a = a - b; // a = 10;

// console.log("the value of a is " + a);
// console.log("the value of b is " + b);



// 🙋‍👨‍🏫 Interview Question 4 🙋‍👨‍🏫
// What is the Difference between == vs === ?


// sol 
// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));

// console.log(num1 == num2 );

// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num2);

// console.log(num1 === num2 );

/**** Section 6👉 Control Statement - 
 JavaScript if else and else if
 Conditional statements are used to perform different actions based on different conditions.

Conditional Statements
Very often when you write code, you want to perform different actions for different decisions.

You can use conditional statements in your code to do this.

In JavaScript we have the following conditional statements:

Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed
The switch statement is described in the next chapter.

The if Statement
Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

Syntax
if (condition) {
  //  block of code to be executed if the condition is true
}
Note that if is in lowercase letters. Uppercase letters (If or IF) will generate a JavaScript error.

* 1️⃣If...Else */
// The if statement executes a statement if a specified condition is truthy. 
// If the condition is falsy, another statement can be executed.


// if raining = raincoat
// else no raincoat


// var tomr = 'sunny';

// if(tomr == 'rain'){
//   console.log('take a raincoat');
// }else{
//   console.log('No need to take a raincoat');
// }*/ 



// Example
// Make a "Good day" greeting if the hour is less than 18:00:

// if (hour < 18) {
//   greeting = "Good day";
// }
// The result of greeting will be:

// Good day


// The else Statement
// Use the else statement to specify a block of code to be executed if the condition is false.

// if (condition) {
//   //  block of code to be executed if the condition is true
// } else {
//   //  block of code to be executed if the condition is false
// }



// Example
// If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
// The result of greeting will be:

// Good day
// 🤩Challenge Time 
// write a program that works out whether if a given year is a leap year or not?
// A normal year has 365 days, leap years have 366, with an extra day in February.


// var year = 2020;
// debugger;
// if(year % 4 === 0){
//   if(year % 100 === 0){
//     if(year % 400 === 0){
//       console.log("The year " + year + " is a leap year");
//     }else{
//       console.log("The year " + year + " is not a leap year");
//     }
//   }else{
//     console.log("The year " + year + " is a leap year");
//   }
// }else{
//   console.log("The year " + year + " is not a leap year");
// }




// What is truthy and falsy values in Javascript?

// we have total 5 falsy values in javascript
// 👉 0,"",undefined,null,NaN,false** is false anyway

// if(score = 5){
//   console.log("OMG, we loss the game 😭");
// }else{
//   console.log("Yay, We won the game 😀");
// }










	
