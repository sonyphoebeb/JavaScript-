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

📅 Date: 31-08-2025  
# Day 15 – JavaScript Basics

🔹 Date in JavaScript
let today = new Date();
console.log(today); 

📌 Prints the current date & time.

🔹 . Math in JavaScript
📍 Math Constants

Math.E → Euler’s number ≈ 2.718

Math.PI → π ≈ 3.14159

Math.SQRT2 → Square root of 2 ≈ 1.414

Math.LN10 → Natural log of 10

📍 Math Functions

    Function	Example	Output

         Math.round(x)	Math.round(4.6)	5
         Math.ceil(x)	Math.ceil(4.1)	5
         Math.floor(x)	Math.floor(4.9)	4
         Math.trunc(x)	Math.trunc(4.7)	4
         Math.sign(x)	Math.sign(-7)	-1
         Math.pow(x,y)	Math.pow(2,3)	8
         Math.sqrt(x)	Math.sqrt(16)	4
         Math.abs(x)	Math.abs(-10)	10
         Math.sin(x)	Math.sin(Math.PI/2)	1
         Math.max(...nums)	Math.max(3,7,2)	7
         Math.min(...nums)	Math.min(3,7,2)	2
         Math.random()	Math.random()	Random 0–1
         Math.log(x)	Math.log(Math.E)	1

🔹 Loops in JS

      // For loop
         for (let i=1; i<=3; i++) {
             console.log("Count: " + i);
          }

     // While loop
            let j=1;
             while (j<=3) {
                console.log("While count: " + j);
                j++;
            }

🔹 Error Handling

    try {
     let num = 10/0;
     console.log(num);
     throw new Error("Something went wrong!");
    } catch (err) {
        console.log("Caught error:", err.message);
    } finally {
        console.log("This block always runs.");
    }


✅ Summary of Today’s Practice

    -> Date handling

    -> Math Constants & Functions

    -> Loops (for, while)

    -> Error Handling (try...catch...finally)

📅 Date: 01-09-2025  
# Day 16 – JavaScript Basics

Learned JavaScript Split Function with Dropdowns 

This exercise was a practice assignment where I explored how to use JavaScript’s split() function, handle arrays, and dynamically update HTML elements using JavaScript.   


I worked with two files:

jsSplitFunction.html → my HTML structure (dropdowns, button, and output area). 

jsSplitFunction.js → my JavaScript logic (splitting strings, populating dropdowns, handling button clicks). 

 
📂 Files Overview  
1. jsSplitFunction.html  

This file contains:  
A dropdown for patients (patientDropdown)  
A dropdown for indexes (indexDropdown)  
A button to get the value  

A paragraph (indexResult) to display the output  

          <!DOCTYPE html> 
          <html> 
           <head> 
                <title>JavaScript Split Function</title> 
                 <script src="jsSplitFunction.js" defer></script> 
                    </head> 
                <body> 
              <h2>JavaScript Split Function</h2> 

                   <!-- Patient dropdown --> 
                          <select id="patientDropdown" onchange="showPatientData()"></select> 
                 <br><br> 

                        <!-- Index dropdown --> 
                   <select id="indexDropdown"></select> 
               <button id="getValueBtn" onclick="showIndexValue()" disabled>Get Value</button> 
                   <p id="indexResult"></p> 
                       </body> 
               </html> 


🔑 Things I learned here: 

    defer makes sure the JS file loads after the HTML is ready.   

    Dropdowns (<select>) and buttons (<button>) can directly call JavaScript functions with onchange or onclick.   

    disabled attribute keeps the button inactive until I enable it from JS.   

2. jsSplitFunction.js   

This file contains all my logic.   

        let patients = []; // array of patients   
        let selectedPatient = []; // array of selected patient   

// Static patients input  

         let inputPatientsData =    
         "1:2:2:3:4:4:5;2:33:3:2:4:2:2;12:3:23:1:3:1:3;32:3:2:3:1:3:1;1:33:1:3:2:42:2;32:3:11:33:11:33:11;34:1:31:1:3:1:1;12:2:2:2:2:3:2";   
 
💡 Here, I stored patient data as one long string.     

Each patient’s data is separated by (;)     
Inside each patient, values are separated by (:)     

Loading data into dropdown     

              window.onload = function () {       
              patients = inputPatientsData.split(";").map(patientsData => patientsData.split(":"));      

                let dropdown = document.getElementById("patientDropdown");     
               dropdown.innerHTML = '<option value="" disabled selected>Select Patient</option>';     

                 for (let i = 0; i < patients.length; i++) {     
        let option = document.createElement("option");      
            option.value = i;        
               option.text = "patient" + (i + 1);            
               dropdown.appendChild(option);          
               }          
                      };             


 🔍 Step by step:          

     inputPatientsData.split(";") → breaks the big string into multiple patients.               
     .map(patientsData => patientsData.split(":")) → splits each patient’s data by : into an array.              

     Example: "1:2:3;4:5:6" → [["1","2","3"], ["4","5","6"]]                

        Loop (for) adds options like patient1, patient2, etc. into the dropdown.               

        First option is always "Select Patient" (disabled + selected by default).             

        Handling patient selection              
           function showPatientData() {               
               let index = document.getElementById("patientDropdown").value;                  
                if (index === "") return;             
 
                       selectedPatient = patients[index];              
                document.getElementById("indexResult").textContent = "";                

             let indexDropdown = document.getElementById("indexDropdown");                
                               indexDropdown.innerHTML = '<option value="" disabled selected>Select Index</option>';                 

                    for (let i = 0; i < selectedPatient.length; i++) {               
                let option = document.createElement("option");              
                         option.value = i;              
                   option.text = i;                 
                   indexDropdown.appendChild(option);                    
                 }                       

                 document.getElementById("getValueBtn").disabled = true;                         

                        indexDropdown.onchange = function () {               
                  document.getElementById("getValueBtn").disabled = false;                
                 };                   
            }              
           

🔍 Step by step:              

            Get which patient was selected (index).                     

                        If nothing is selected → exit.              

                            Store that patient’s data in selectedPatient.                 

                              Reset the index dropdown and add indexes 0, 1, 2… for that patient.                         

                         Disable the button until the user actually selects an index.                      

          Showing the selected value                   
            function showIndexValue() {                                
                   let idx = document.getElementById("indexDropdown").value;                            
                 let patientIndex = document.getElementById("patientDropdown").value;                               
                  if (idx === "") {                                         
                      document.getElementById("indexResult").textContent = "Please select an index!";                                    
                       return;                  
                                             }                   
                              document.getElementById("indexResult").textContent =                             
                                               `Value at index ${idx} of patient${parseInt(patientIndex) + 1} is ${selectedPatient[idx]}`;                                 
                     }                    


🔍 Step by step:                        

    Get the index from indexDropdown.             

           Get the patient number from patientDropdown.              

           If no index is chosen, show a warning.               

                         Otherwise → display the value with a template string.                  

 
📌 Example:          

            Select patient3             

                      Select index 2               

                           Output → Value at index 2 of patient3 is 23             

🔑 Key Learnings      

          JavaScript split()          

         Learned how to split strings into arrays.            

                  Nested split for multi-level data (; for patients, : for values).        

                Arrays and Indexing          

                   Arrays start from 0 in JavaScript.         

                   Used indexing to fetch patient values.           

           DOM Manipulation                

                document.createElement() to build dropdowns.                
 
                 appendChild() to add them into HTML.                   

                 Changing inner content with .textContent and .innerHTML.              

                  Event Handling            

                   onchange → runs when dropdown changes.                

                onclick → runs when button is clicked.                   

                 Dynamically enabling/disabling buttons.                
                   
               Template Literals               
 
          Used backticks (``) with ${} placeholders for clear outputs.                

  📝 Notes to Self          
 
          Always reset dropdowns when a new selection is made.             
                           
                      Remember to handle empty selections properly (avoid showing 0 by default).               

                    Using disabled selected in <option> helps create a placeholder.                

             This exercise improved my understanding of arrays, dropdowns, and event handling in JS.              
 
👉 This was not a project, but a practice exercise where I learned how to connect HTML and JavaScript using a real example (patients and indexes).                      


📅 Date: 02-09-2025      
# Day 17 – JavaScript Basics      

# JavaScript String Methods & Weekday Practice 

This project is a practice exercise covering different JavaScript string methods and a weekday converter.

## String Methods Practiced
         1. String.raw → Display raw strings without interpreting escape characters
         2. String.fromCodePoint → Convert Unicode values to characters or emojis
         3. escape / unescape → Encode and decode strings
         4. eval → Evaluate JavaScript expressions from strings
         5. Template Literals → Use backticks for string interpolation
         6. Multi-line Strings → Write strings spanning multiple lines
         7. new String() → Create string objects
         8. Variations:
                -> Nested new String usage with transformations (uppercase, lowercase)
                -> Template + Literal combinations
                -> Escape + Unescape with custom messages
                -> Eval with error handling  

# Weekday Converter
       - Input: Date from <input type="date"> 
       - Output: Weekday (SUN, MON, TUE, WED, THU, FRI, SAT)  
       - Implemented using Date.getDay() and a switch case


📅 Date: 03-09-2025      
# Day 18 – JavaScript Basics 

## Date Methods Practice

I explored JavaScript Date object and its methods: 

     1. Creation: new Date(), new Date("2025-09-03"), etc. 
     2. Get Methods: getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes(), getSeconds(), getMilliseconds(), getTimezoneOffset(). 
     3. Get UTC Methods: getUTCFullYear(), getUTCMonth(), getUTCDate(), getUTCDay(), getUTCHours(), getUTCMinutes(), getUTCSeconds(), getUTCMilliseconds(). 
     4. Formatting Methods: toDateString(), toTimeString(), toUTCString(), toISOString(), toLocaleDateString(), toLocaleTimeString(). 

This gave me practice in working with local time, UTC time, and formatting dates. 

## Math Methods (Min & Max)

I practiced working with JavaScript Math functions:  

    1. Math.max() → Finds the largest number from user input (e.g., 5,10,2 → 10).  
    2. Math.min() → Finds the smallest number from user input (e.g., 5,10,2 → 2).  

Used split(",").map(Number) to accept comma-separated input values and process them dynamically.  

## Prototype & Object.entries() Practice  
 
I created a Student constructor function and practiced:  

    1. Constructor Function → Creates Student objects with name, age, and course.  
    2. Prototype Method → Added sayHello() using Student.prototype.  
    3. Object.entries() → Displays all key–value pairs of the student object.  
    4. Add Extra Property → Demonstrates JavaScript’s flexibility by adding new properties (city) at runtime.   

📅 Date: 04-09-2025  
# Day 19 – JavaScript Basics 

## 🧮 JavaScript Math Functions Practice

This project is a practice playground for all built-in JavaScript Math methods.
Each Math function has its own button and separate function implementation in JavaScript.

## 📂 Features

-> Covers almost all Math methods & constants.
-> Each method is bound to a button for quick testing.
-> Accepts user input where required (example: Math.pow(x, y)).
-> Results are displayed dynamically in the page.

## 📘 Methods Covered

🔹 Value Methods

Math.abs(x) → Absolute value of x

Math.sign(x) → Sign of x (+, -, or 0)

Math.trunc(x) → Integer part of x

Math.round(x) → Rounds to nearest integer

Math.ceil(x) → Rounds up

Math.floor(x) → Rounds down

🔹 Trigonometry & Hyperbolic

Math.sin(x)

Math.cos(x)

Math.tan(x)

Math.asin(x)

Math.acos(x)

Math.atan(x)

Math.atan2(y, x)

Math.sinh(x)

Math.cosh(x)

Math.tanh(x)

Math.asinh(x)

Math.acosh(x)

Math.atanh(x)

🔹 Exponential & Logarithms

Math.exp(x)

Math.expm1(x)

Math.log(x)

Math.log1p(x)

Math.log10(x)

Math.log2(x)

Math.pow(x, y)

Math.sqrt(x)

Math.cbrt(x)

🔹 Random & Precision

Math.random()

Math.fround(x)

Math.clz32(x)

🔹 Constants

Math.PI

Math.E

Math.LN2

Math.LN10

Math.LOG2E

Math.LOG10E

Math.SQRT1_2

Math.SQRT2

🔹 Comparison

Math.max(...values)

Math.min(...values)

## 🚀 How to Run

Open math.html in your browser.

Enter numbers where required (e.g., for pow, atan2, max, min).

Click the buttons to see results instantly.

## 📖 Learning Goals

=> Get hands-on with JavaScript Math API.
=> Learn when to use each method.
=> Practice handling user input with numbers.






