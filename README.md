# JavaScript-
JavaScript Concepts

📅 Date: 25-08-2025  
# Day 10 – JavaScript Basics  

Today I started with the **fundamentals of JavaScript** and practiced how JS interacts with HTML.  
I learned how to use `document.getElementById` to manipulate HTML elements dynamically.  

# ✅ Topics Covered
1. JavaScript can change HTML content (using `innerHTML`).  
2. JavaScript can change HTML styles (like font size).  
3. JavaScript can hide HTML content (`display = none`).  
4. JavaScript can show hidden HTML content (`display = block`).  
5. Difference between using **single quotes** and **double quotes** in onclick attributes.
6. Writing JavaScript inside the `<head>` tag.  
   - Functions defined in head must run after DOM loads (e.g., on button click).  
7. Writing JavaScript inside the `<body>` tag.  
   - Functions inside body can run immediately since elements already exist.  
8. Best practice: placing JavaScript at the **end of body** for performance. 

# 💻 Practice Work
- Wrote code examples where clicking a button changes text, style, hides, or shows content.  
- Practiced using both single and double quotes in JavaScript code inside HTML.
- Created a function inside `<head>` that changes text when a button is clicked.  
- Created another function inside `<body>` that increases font size of text when a button is clicked.  

# 🚀 Summary
Learned the **basic DOM manipulations** with JavaScript:
- Changing text content.  
- Styling elements.  
- Hiding and showing HTML dynamically.
Understood the **importance of script placement**:
- `<head>` scripts → must wait for elements.  
- `<body>` scripts → safer, can directly access elements.  
- Real projects → usually place scripts at the end of body or use external `.js` files.


📅 Date: 26-08-2025
# Day 11 – JavaScript Basics (Display + Arithmetic Operators)
Today I practiced different ways to display output in JavaScript and implemented arithmetic operators using functions.

# ✅ Topics Covered
1. JavaScript Display Methods
     -> innerHTML → Change HTML content dynamically.
     -> innerText → Display plain text inside HTML elements.
     -> document.write() → Write directly to the page (but removes existing content if used after load).
     -> window.alert() → Display content in an alert popup.
     -> console.log() → Log output to the browser console.
     -> window.print() → Print the current page.

2. JavaScript Statements
     -> Simple statements like a = 5; b = 6; c = a + b;
     -> Grouping statements inside functions and executing them via button click.
     -> Undefined variables (let myName;) → results in undefined.

3. Arithmetic Operators
   -> Implemented functions to perform operations on two input numbers:
       Addition → +
       Subtraction → -
       Multiplication → *
       Division → /
       Modulus (Remainder) → %
   Each operator result is displayed dynamically inside a <p> tag.

# 📝 Practice Work
    -> Built interactive HTML pages with buttons to trigger JS functions.
    -> Connected external JavaScript file (arithmaticOperators.js) to keep code organized.
    -> Practiced taking input values, converting them using Number(), and returning results.

# 🚀 Summary
     -> Today I worked on JavaScript output methods and basic arithmetic operations.
     -> I now understand how to:
           * Show results on the page, in alerts, or in the console.
           * Perform calculations with input values using functions.
           * Keep JS code structured by using external .js files.

Tomorrow, I will continue with JavaScript Data Types and Operators in detail.  

📅 Date: 27-08-2025  
# Day 12 – JavaScript Basics
Today I practiced **JavaScript Increment/Decrement** and **HTML Events** with external JS functions.  

✅ What I Learned
How to use HTML events to make a webpage interactive.
Linking external JavaScript file (events.js) with HTML.
Handling mouse, keyboard, form, and window events.
Using DOM methods like getElementById() to dynamically update content.

📝 Events Implemented
🔘 Mouse Events
onclick → Show current date & time.
ondblclick → Show my name on double-click.
onmouseover & onmouseout → Trigger alert or change text when hovering in/out.

⌨️ Keyboard Events
onkeydown & onkeyup → Display which key was pressed/released using event.key.

📌 Form & Input Events
onchange → Detect selected option from dropdown.
onfocus & onblur → Highlight input field when active/inactive.
oninput → Show live typed text instantly.
onsubmit → Show alert on form submission and prevent page reload with return false;.

🌍 Window Events
window.onload → Executes when the page finishes loading.
window.onresize → Logs a message whenever browser window is resized.

🚀 Key Takeaways
Events connect user actions to JavaScript logic.
Inline event attributes (onclick="...") can be separated into external JS for cleaner code.
event.key captures the exact key pressed.
return false; in onsubmit stops default form submission behavior (page reload).
Window events allow responding to page load and resize actions.

👉 This project is a hands-on reference for commonly used HTML + JS events.

📅 Date: 28-08-2025  
# Day 13 – JavaScript Basics

📘 JavaScript Practice – Day Summary
Today, I practiced the following important JavaScript concepts with examples:

🔹 1. Functions
Writing simple functions for increment & decrement numbers.
Practiced comparison operator functions using if...else.
Handling user input and displaying results.

🔹 2. Objects
Learned 3 ways to create objects:

Object Literal
let phone = {
    brand: "Apple",
    model: "iPhone 15",
    price: 120000
};

Using new Object()
let student = new Object();
student.name = "John";
student.course = "JavaScript";
student.level = "Beginner";

Empty Object + Properties Added Later
let car = {};
car.brand = "Tesla";
car.model = "Model S";
car.price = 8000000;

Also created buttons to print object details like:
👉 “The brand name is Apple and model iPhone 15 priced at 120000”

🔹 3. Strings
Creating strings using quotes and template literals.
Practiced escape characters:
let text = "We are the so-called \"Vikings\" from the north.";
Checked string length using .length.
Learned Strings as Objects (new String()).

🔹 4. Template Literals & Interpolation
Used backticks (``) for string interpolation:
let name = "Sony";
let age = 21;
let result = `My name is ${name} and I am ${age} years old.`;

🔹 5. Comparison Operators
Practiced with separate buttons & functions:
==
===
!=
!==
>
<
>=
<=
Each operator checked with if...else and returned "true" or "false".

🔹 6. Assignment Operators
Learned logical assignment like:
let x = 1;
x &&= 10; // x becomes 10 if x is truthy

✅ Summary: Today’s practice included Functions, Objects, Strings, Escape Characters, Template Literals, Interpolation, Comparison Operators, and Assignment Operators.

📅 Date: 29-08-2025  
# Day 14 – JavaScript Basics
📘 Today’s Practice – JavaScript Numbers & Array

🔢 JavaScript Numbers
Numbers can be written with or without decimals.
Special values: Infinity, -Infinity, NaN.

Useful methods:
.toString() → converts number to string
.toFixed(n) → rounds to n decimals
.toExponential(n) → exponential notation
Number(), parseInt(), parseFloat() → conversions
✅ Examples:
let marks = 95;  
let pi = 3.14159;  
console.log(marks.toString());   // "95"  
console.log(pi.toFixed(2));      // 3.14  
console.log((100 / "abc"));      // NaN  

📚 JavaScript Arrays
Arrays hold multiple values in one variable.
Declared using [] or new Array().
Indexed (0-based).
Dynamic – can grow/shrink.

💻 Tech Stack Example:
let techStack = ["HTML", "CSS", "JavaScript", "React"];
console.log(techStack.join(" | "));     // HTML | CSS | JavaScript | React

techStack.unshift("Git");               // Add at start
techStack.pop();                        // Remove last
console.log(techStack);                 // ["Git","HTML","CSS","JavaScript"]

techStack.forEach(function(tech) {
  console.log("I am learning " + tech);
});

✅ Summary:
Practiced Numbers: conversion, formatting, and special values.
Practiced Arrays: creation, accessing, adding/removing elements, looping with forEach().


📅 Date: 30-08-2025  
# Day 14 – JavaScript Basics

📘 JavaScript Practice – Logical Operators, Strings & Math

🔹 1. Logical Operators in JavaScript

Operator	Description	Example	Output
&& (AND)	Returns true if both are true	true && false	false
|| (OR)	Returns true if one is true	true || false	true
?? (Nullish Coalescing)	Returns right-hand value if left is null or undefined	null ?? "Hello"	"Hello"
&&=	Assigns value only if left is truthy	x = 5; x &&= 10; → x=10	10
||=	Assigns value only if left is falsy	y = 0; y ||= 20; → y=20	20
??=	Assigns value only if left is null or undefined	z = null; z ??= 30;	30

🔹 2. String Methods

Method	Example	Output
.length	"JavaScript".length	10
.toUpperCase()	"hello".toUpperCase()	"HELLO"
.toLowerCase()	"HELLO".toLowerCase()	"hello"
.concat()	"JS".concat(" Rocks")	"JS Rocks"
.trim()	" spaced ".trim()	"spaced"
.replace()	"I like Java".replace("Java","JS")	"I like JS"
.padStart()	"5".padStart(3,"0")	"005"
.padEnd()	"5".padEnd(3,"0")	"500"
.includes()	"JavaScript".includes("Script")	true

🔹 3. Math Functions

Function	Example	Output
Math.round(x)	Math.round(4.6)	5
Math.floor(x)	Math.floor(4.9)	4
Math.ceil(x)	Math.ceil(4.1)	5
Math.trunc(x)	Math.trunc(4.7)	4
Math.pow(x,y)	Math.pow(2,3)	8
Math.sqrt(x)	Math.sqrt(16)	4
Math.min(...nums)	Math.min(1,5,3)	1
Math.max(...nums)	Math.max(1,5,3)	5
Math.random()	Math.random()	Random (0–1)
Math.abs(x)	Math.abs(-7)	7

✅ This covers your today’s practice:

Logical Operators (&&, ||, ??, &&=, ||=, ??=)
String Methods (common ones like concat, trim, replace, padStart, padEnd, etc.)
Math Functions (rounding, powers, roots, random, etc.)















