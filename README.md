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

3. JavaScript Statements
     -> Simple statements like a = 5; b = 6; c = a + b;
   
     -> Grouping statements inside functions and executing them via button click.
   
     -> Undefined variables (let myName;) → results in undefined.

5. Arithmetic Operators

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

📘 JavaScript Practice – Logical Operators, String methods & Math Functions

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

              window.onload = function () 
            {       
              patients = inputPatientsData.split(";").map(patientsData => patientsData.split(":"));      

                let dropdown = document.getElementById("patientDropdown");     
                dropdown.innerHTML = '<option value="" disabled selected>Select Patient</option>';     

                 for (let i = 0; i < patients.length; i++) 
                 {     
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

               for (let i = 0; i < selectedPatient.length; i++) 
               {               
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
            function showIndexValue() 
            {                                
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

 
## 📌 Example:          

            Select patient3             
            Select index 2               
            Output → Value at index 2 of patient3 is 23             

## 🔑 Key Learnings      

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

##  📝 Notes to Self          
 
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


📅 Date: 06-09-2025  
# Day 21 – JavaScript Basics 

## Basic Array Methods
1.	Array length   
2.	Array toString()
3.	Array at()
4.	Array join()
5.	Array pop()
6.	Array push()
7.	Array shift()
8.	Array unshift()
9.	Array delete()
10.	Array concat()
11.	Array copyWithin()
12.	Array flat()
13.	Array slice()
14.	Array splice()
15.	Array toSpliced()


## JavaScript Sets

**Basic Set Methods

1.	new Set()  //initialization
2.	add()      //adding values
3.	clear()    //clears entire set 
4.	delete()   //deletes values
5.	entries()  //prints [keys, values] which are same
6.	forEach()  //calls a function for each element 
7.	has()      //checks T/F
8.	keys()     //returns a set iterator with all the values
9.	values()   //returns an iterator object with all the values
10.	Set Properties  
11.	size     //length of a set

**Logic Methods

1.	union()                 //adds all the elements in 2 sets and display by removing the duplicates
2.	difference()            //returns the elements which are not similar in only A set
3.	intersection()         //returns the elements which are similar in both the sets
4.	isDisjointFrom()       //returns true if this child/parent set has no elements in common with the parent/child set
5.	isSubsetOf()           //returns true if all elements in child set is also elements in the parent set
6.	isSupersetOf()         //returns true if all elements in the child set are also in parent set
7.	symmetricDifference()  //returns the elements which are not similar in both the sets

**The WeakSet Object

1.	A JavaScript WeakSet is a collection of values where the values must be objects.
2.	Garbage Collection: When the value is garbage collected, its is removed from the WeakSet.
     example: // Remove the Object from memory
                myObj = null;
            // Now myObj in mySet will be garbage collected
3.	Primitive values cannot be values in a WeakSet: The values must be objects.
4.	Tracking Objects 
5.	Not Iterable, WeakSets are not enumerable, You cannot iterate over the values with for loops, forEach(), or values().
6.	Limited Methods
    -> new WeakSet()    // Creates a new WeakSet object
  	
    -> add(object)	   // Adds an Object to a WeakSet
  	
    -> delete(object)   // Removes a WeakSet object
  	
    -> has(object)	    // Returns true if an object exists in a WeakSet
8.	WeakSet does not have:
    -> A size property
  	
    -> A spread operator (...)
  	
    -> A clear() method
  	
    -> Any logic methods (union, difference, intersection)
  	
    -> Any iteration methods (forEach, keys, values, entries)


# JavaScript Maps
   You can create a JavaScript Map by:
    -> Passing an Array to new Map()
    -> Create a Map and use Map.set()

**JavaScript Map Methods

1.	Map.get()      // get the value of a key in a map
2.	Map.set()      // add elements to a map
3.	Map.size       // returns the number of elements in a map
4.	Map.delete()   // removes a map element
5.	Map.clear()    // removes all the elements from a map
6.	Map.has()      // returns true if a key exists in a map
7.	Map.forEach()  // invokes a callback for each key/value pair in a map
8.	Map.entries()  // returns an iterator object with the [key,values] in a map
9.	Map.keys()     // returns an iterator object with the keys in a map
10.	Map.values()  // returns an iterator object with the values in a map

**Objects as Keys

   example:  // Create Objects
              const apples = {name: 'Apples'};
              const bananas = {name: 'Bananas'};
              const oranges = {name: 'Oranges'};

            // Create a Map
              const fruits = new Map();
  
           // Add new Elements to the Map
            fruits.set(apples, 500);
            fruits.set(bananas, 300);
            fruits.set(oranges, 200);

**JavaScript Map.groupBy()
  It groups elements of an object according to string values returned from a callback function.


## JavaScript RegExp

1. A Regular Expression is a sequence of characters that forms a search pattern.
   
2.    RegExp are be used for:
   
       -> Text searching
       -> Text replacing
       -> Text validation

3. Syntax :     
    /pattern/modifier flags;

4. Using String Methods:
   
   Regular expressions are often used with the string methods
   
       -> match(regex)	        // Returns an Array of results
       -> matchAll(regexp)      // Returns an Iterator of results
       -> replace(regex)        // Returns a new String
       -> replaceAll(regexp,s)	// Returns a new String
       -> search(regex)	        // Returns the index of the first match
       -> split(regexp)	        // Returns an Array of results

5. RexExp Metacharacters:
   
   Metacharacters are characters with a special meaning, they can be used to match digits, words, spaces, and more.
   
       -> \d	   // Matches Digits
       -> \D	   // Matches None Digits
       -> \w	   // Matches alphanumeric Word characters
       -> \W	   // Matches None alphanumeric Word characters
       -> \s	   // Matches Spaces
       -> \S	   // Matches None Spaces
       -> \ddd	   // Matches characters by the Octal numer ddd
       -> \xhh	   // Matches characters by the HexadecimaL number hh
       -> \uhhhh   // Matches Unicode characters by the hex number hhhh


6. JavaScript RegExp Quantifiers:
   
   Quantifiers define the numbers of characters or expressions to match.
   
       -> x+	  // Matches at least one x
       -> x*	  // Matches zero or more occurrences of x
       -> x?	  // Matches zero or one occurrences of x
       -> x{n}	  // Matches n occurences of x
       -> x{n,m}  // Matches from n to m occurences of x
       -> x{n,}	  // Matches n or more occurences of x

7. Regular Expression Assertions:
   
   Assertions matches Boundaries and Lookarounds
   
       -> ^	        String boundary	    // Matches the beginning of a string
       -> $	        String boundary	    // Matches the end of a string
       -> \b	        Word boundary	    // Matches the beginning or end of a word
       -> (?=...)	Lookahead           // Matches the subsequent string
       -> (?!...)	Lookahead	    // Matches NOT the subsequent string
       -> (?<=...)	Lookbehind	    // Matches the previous string
       -> (?<!...)	Lookbehind	    // Matches NOT the previous string

7.RegExp Character Classes:

  Character Classes are characters enclosed in square brackets []
  
       -> [a]	     // Matches the character between the brackets 
       
       -> [^a]	     // Matches all characters NOT between the brackets
       
       -> [abc]	     // Matches all characters between the brackets
       
       -> [^abc]     // Matches all characters NOT between the brackets
       
       -> [a-z]	     // Matches all characters in the range from a to z
       
       -> [^a-z]     // Matches all characters NOT in the range from a to z
       
       -> [0-9]	     // Matches all characters in the range from 0 to 9
       
       -> [^0-9]     // Matches all characters NOT in the range from 0 to 9

8. JavaScript Regex Flags:
   
   Flags are parameters that can modify how a regex pattern is used, such as making it case-insensitive or global.
   
       -> /d	// Performs substring matches (new 2022)
   
       -> /g	// Performs a global match (find all)
   
       -> /i	// Performs case-insensitive matching
   
       -> /m	// Performs multiline matching
   
       -> /s	// Allows . (dot) to match line terminators (new 2018)
   
       -> /u	// Enables Unicode support (new 2015)
   
       -> /v	// An upgrade to the /u flag for better Unicode support (new 2025)
   
       -> /y	// Performs a "sticky" search (new 2015)

9. JavaScript RegExp Objects:
    
   RegExp is a regular expression object with predefined properties and methods.

        -> Using test(): The test() method is a RegExp expression method, it searches a string for a pattern, and returns true or false, depending on the result.
    
        -> Using exec(): The exec() method is a RegExp expression method, it searches a string for a specified pattern, and returns the found text as an object, if no    match is found, it returns an empty (null) object.
    
        -> Using escape(): The RegExp.escape() method returns string where characters that belongs to the regular expression syntax are escaped, this makes it possible to treat characters like +, *, ?, ^, $, (, ), [, ], {, }, |, 
                           and \ literally, and not as part of a regular expression.

10. RegExp Methods:
    
       -> compile()	// Compiles a regular expression (Deprecated)
    
       -> constructor	// Returns the function that created the RegExp prototype
    
       -> dotAll	// Returns true if the s flag is set in the expression
    
       -> escape()	// Returns a string where characters that belongs to the regular expression syntax are escaped
    
       -> exec()	// Returns a result array for a matches in a string
    
       -> flags	        // Returns the modifiers set in the expression
    
       -> global	// Returns true if the g flag is set in the expression
    
       -> hasIndices	// Returns true if the d flag is set
    
       -> ignoreCase	// Returns true if the i flag is set
    
       -> lastIndex	// Specifies the index at which to start the next match
    
       -> multiline	// Returns true if the m modifier is set
    
       -> source	// Returns the text of the RegExp pattern
    
       -> sticky	// Returns true if the y flag is set
    
       -> test()	// Tests for a match in a string. Returns true or false
    
       -> toString()	// Returns the string value of the regular expression
    
       -> unicode	// Returns true if the u flag is set
    
       -> unicodeSets	// Returns true if the v flag is set


## JavaScript Typed Arrays

   -> Typed arrays was designed for handling raw binary data.
   
   -> Unlike standard arrays, typed arrays are array buffers of fixed length.
   
   -> Typed arrays store elements of fixed types like 8-bit integers or 32-bit numbers.

1.	Typed Array Methods
   
   Typed Arrays share many methods with Standard Arrays:

      -> Iteration: forEach(), map(), filter(), reduce(), reduceRight(), every(), some(), find(), findIndex(), findLast(), findLastIndex().
  	
      -> Searching: includes(), indexOf(), lastIndexOf().
  	
      -> Manipulation: at(), copyWithin(), fill(), reverse(), set(), slice(), sort(), subarray().
  	
      -> Conversion: join(), toLocaleString(), toString().
  	
      -> Non-mutating methods: toReversed(), toSorted(), with().

   
2.	Typed Array Methods
   
      -> at()	// Returns one indexed element from a typed array
  	
      -> byteLength	// Returns the length (in bytes) of a typed array.
  	
      -> byteOffset	// Returns the offset (in bytes) of a typed array from the start of its ArrayBuffer
  	
      -> BYTES_PER_ELEMENT	// Returns the number of bytes used to store one element in a typed array
  	
      -> copyWithin()    //Copies array elements to another position in the array
  	
      -> entries()	Returns an iterator object with the key/value pairs from the array
  	
      -> every()	Executes a function for each typed array element
  	
      -> fill()	Fill all array elements with a value
  	
      -> filter()	Returns a new array filled with elements that pass a test
  	
      -> find()	Returns the first element that satisfies a condition
  	
      -> findIndex()	Returns the index of the first element that satisfies a condition
  	
      -> findLast()	Returns the last element that satisfies a condition
  	
      -> findLastIndex()	Returns the index of the last element that satisfies a condition
  	
      -> forEach()	Executes a function for each typed array element
  	
      -> from()	Returns a typed array from any object with a length property
  	
      -> includes()	Returns true if an array includes a specified value
  	
      -> indexOf()	Returns the first index (position) of a specified value
  	
      -> join()	Returns the elements of an array as a string
  	
      -> keys()	Returns the keys of a typed array
  	
      -> lastIndexOf()	Returns the last index (position) of a specified value
  	
      -> length	Returns the lenth of the typed array
  	
      -> map()	Returns a new array from calling a function for every array element
  	
      -> name	Returns the name of the typed array
  	
      -> of()	Returns a new typed array from an existing array
  	
      -> reduce()	Reduce the values of an array to a single value
  	
      -> reduceRight()	Reduce the values of an array to a single value (right-to-left)
  	
      -> reverse()	Reverses a typed array in place
  	
      -> set()	Stores values in a typed array from another array
  	
      -> slice()	Reurns a new typed array sliced out of a typed array
  	
      -> some()	Reurns true if one element satisfies a condition
  	
      -> sort()	Sorts an array in place
  	
      -> subarray()	Returns a subarray in the same memory space
  	
      -> toLocaleString()	Returns all elements converted with their toLocaleString methods
  	
      -> toReversed()	Reverses an array in place
  	
      -> toSorted()	Sorts an array in place
  	
      -> toString()	Returns a string of all typed array elements
  	
      -> values()	Returns an iterator object with the values of an typed array
  	
      ->with()	Returns a new typed array with an updated array element


📅 Date: 08-09-2025  
# Day 23 – JavaScript Basics

## JavaScript Arrays Practice

This project demonstrates the usage of basic JavaScript Array methods with simple examples and interactive buttons.

## Methods Practiced

1. Show Array: Displays the original array of college names.

      Example:

      ["RCE", "CRR", "VIT", "SRKR", "BVIT"]


2. Array Length: Returns the number of elements in the array.

      Example:

      5


3. toString(): Converts the array into a comma-separated string.

      Example:

      RCE,CRR,VIT,SRKR,BVIT


4. at(index): Returns the element at the specified index.

      Example (index = 2):

      VIT


5. join(separator): Joins all array elements with a given separator.

      Example (separator = "*"):

      RCE*CRR*VIT*SRKR*BVIT


6. push(element): Adds a new element to the end of the array and returns the new length.

    Example (push "KMIT"):

     6


7. pop(): Removes the last element from the array and returns it.

    Example:

    BVIT

# Example Array Used

var collageNames = ["RCE", "CRR", "VIT", "SRKR", "BVIT"];
   
📅 Date: 09-09-2025  
# Day 24 – JavaScript Basics

# Array Methods Practice – Day’s Work

Practiced Methods

1. shift() – Removes the first element of the array and returns it.

2. unshift() – Adds one or more elements to the beginning of the array and returns the new length.

3. concat() – Merges two or more arrays into a new array.

4. concat(value) – Also merges arrays with additional single values.

5. copyWithin(target, start) – Copies elements within the same array to another position (overwrites existing elements).

6. flat() – Flattens nested arrays into a new array.

7. flatMap() – Maps each element, then flattens the result into a new array.

8. splice(start, deleteCount, ...items)

   Add elements at a given position.

   Remove elements at a given position.

9. toSpliced() – New ES2023 method: returns a new array with elements spliced, original array stays unchanged.

10. slice(start, end?) – Extracts a section of an array into a new array

     With one argument → removes from the start index till end.

     With two arguments → extracts between the given indexes.

# ✅ Highlights from today’s practice

  Worked on adding & removing elements (shift, unshift, splice).

  Practiced copying and flattening arrays (copyWithin, flat, flatMap).

  Explored newer methods like toSpliced.

  Understood non-mutating vs mutating methods (e.g., slice doesn’t change original, but splice does).
  

📅 Date: 10-09-2025  
# Day 25 – JavaScript Basics

# 📘 JavaScript Arrays – Search, Sort & Reverse (Practice)

Today’s practice focused on array search, sorting, and reversing methods.

I wrote JavaScript functions for each method and connected them with buttons and <p> tags in a separate HTML file for output.

# 🔍 Searching Methods

1. indexOf()

    Returns the first index of an element.

    socialMedia.indexOf("Whatsapp");


2. lastIndexOf()

    Returns the last index of an element.

    socialMedia.lastIndexOf("Facebook");


3. includes()

    Returns true/false if an element exists.

    socialMedia.includes("Snapchat");


4. find()

    Returns the first element that matches a condition.

    numbers.find(value => value > 50);


5. findIndex()

    Returns the index of the first element that matches a condition.

    numbers.findIndex(value => value > 50);


6. findLast()

    Returns the last element that matches a condition.

    numbers.findLast(value => value > 50);


7. findLastIndex()

    Returns the index of the last element that matches a condition.

    numbers.findLastIndex(value => value > 50);

# 🔃 Sorting & Reversing

1. sort()

    Sorts array alphabetically (Unicode order).

    myFamily.sort();


2. toSorted()

    Returns a sorted copy, original array unchanged.

    myFamily.toSorted();


3. reverse()

    Reverses array in place.

    myFamily.reverse();


4. toReversed()

    Returns a reversed copy, keeps original unchanged.

    myFamily.toReversed();


# Numeric Sorting

   Default sort() treats numbers as strings.

   -> numbers.sort(); // wrong for numbers
   
   -> numbers.sort((a, b) => a - b); // correct ascending order

# 📝 Key Learnings

   Difference between mutable methods (sort(), reverse()) and immutable methods (toSorted(), toReversed()).

   How to find first/last elements based on conditions using find, findIndex, findLast, and findLastIndex.

   Why sort() needs a compare function for numerical sorting.

✅ This practice improved my understanding of array searching and sorting techniques in JavaScript.

# 📅 Date: 10-09-2025  (Day 25)

# 📘 JavaScript Practice – Array Sorting, Min/Max, Shuffle & Iteration Methods

Today’s practice focused on sorting, finding min/max, shuffling arrays, and using iteration methods like forEach().

🔹 Fisher–Yates Shuffle

   The Fisher–Yates Shuffle is a reliable algorithm to shuffle an array randomly.

      // Fisher-Yates Shuffle
      
      function fisherYatesShuffle() {
             for (let i = numbers.length - 1; i > 0; i--) {
             let j = Math.floor(Math.random() * (i + 1)); // pick random index
             [numbers[i], numbers[j]] = [numbers[j], numbers[i]]; // swap
             }
           document.getElementById("fisherYatesShuffleResult").innerHTML = numbers;
      }

    // Sample array
    
    let numbers = [20, 50, 10, 305, 100, 119, 90];

    📌 Example Output:

    119,10,305,90,100,20,50

🔹 Find Minimum Value

1. Using sort()
   
       function arrayFindMin() {
           numbers.sort(function(a, b) { return a - b }); // ascending
           document.getElementById("arrayFindMin").innerHTML = numbers[0];
         }

       ✅ Example: Output → 10

2. Using Math.min() + Spread Operator
   
       function arrayFindMinMath() {
           let result = Math.min(...numbers);
           document.getElementById("arrayFindMinMath").innerHTML = result;
        }

       ✅ Example: Output → 10

🔹 Find Maximum Value

Using Math.max() + Spread Operator

    function arrayFindMax() {
         let result = Math.max(...numbers);
         document.getElementById("arrayFindMaxResult").innerHTML = result;
     }

    ✅ Example: Output → 305

🔹 Object Array Sorting

Sorting an array of objects based on a property (year).

    const courses = [
         { lang: "JavaScript", year: 1995 },
         { lang: "HTML", year: 1991 },
         { lang: "Java", year: 1995 }
     ];

    function displayCourses() {
         let result = courses.map(c => `${c.lang} ${c.year}`).join("<br>");
         document.getElementById("objectArraySort").innerHTML = result;
      }

    // Sorting by year
    courses.sort((a, b) => a.year - b.year);

    📌 Example Output:

    HTML 1991
    JavaScript 1995
    Java 1995

🔹 Array Iteration – forEach()

The forEach() method executes a function for each array element.

    let nums = [45, 4, 9, 16, 25];

    function arrayForEach() {
         let txt = "";
         nums.forEach(function(value) {
         txt += value + "<br>";
     });
     document.getElementById("forEachResult").innerHTML = txt;
    }

    📌 Example Output:

    45
    4
    9
    16
    25

✅ Summary

✔ Practiced min/max finding using sort(), Math.min(), and Math.max().

✔ Implemented Fisher–Yates shuffle for randomizing arrays.

✔ Learned to sort objects using a property.

✔ Used forEach() for iterating arrays.


# 📅 Date: 12-09-2025  (Day 26)

# 📘 Array Iteration Methods Practice

Today, I practiced different Array Iteration Methods in JavaScript with examples and outputs.

🔹 map()

Creates a new array by applying a function to each element.

    let nums = [45, 4, 9, 16, 25];
    let result = nums.map(value => value + 10);
    console.log(result); 
    
    output: [55, 14, 19, 26, 35]

🔹 flatMap()

Maps each element, then flattens the result into a new array.

    let nums = [45, 4, 9];
    let result = nums.flatMap(x => [x, x + 20]);
    console.log(result); 
    
    output: [45, 65, 4, 24, 9, 29]

🔹 filter()

Creates a new array with elements that pass a condition.

    let nums = [45, 4, 9, 16, 25];
    let result = nums.filter(value => value < 10);
    console.log(result); 
    
    output: [4, 9]

🔹 reduce()

Reduces the array to a single value by applying a function.

    let nums = [45, 4, 9];
    let result = nums.reduce((total, value) => total + value);
    console.log(result); 
    
    output: 58


With initial value:

    let result = nums.reduce((total, value) => total + value, 150);
    console.log(result); 
    
    output: 208

🔹 reduceRight()

Works like reduce, but starts from the right side.

    let chars = ['a', 'b', 'c'];
    let result = chars.reduceRight((total, value) => total + value);
    console.log(result); 
    
    output: "cba"

🔹 every()

Checks if all elements pass a condition.

    let nums = [45, 4, 9];
    console.log(nums.every(value => value > 5)); 
    
    output: false

🔹 some()

Checks if at least one element passes a condition.

    let nums = [45, 4, 9];
    console.log(nums.some(value => value > 5)); 
    
    output: true

🔹 from()

Creates an array from a string or iterable.

    let text = "SONY";
    console.log(Array.from(text)); 
    
    output: ["S", "O", "N", "Y"]

🔹 keys()

Returns an iterator with array indexes.

    let companies = ["Apple", "Samsung", "Oppo"];
    for (let key of companies.keys()) {
    console.log(key);  
    }

    output: 0, 1, 2

🔹 entries()

Returns an iterator with [index, value].

    let companies = ["Apple", "Samsung", "Oppo"];
    for (let [index, value] of companies.entries()) {
    console.log(index, value);
    }

    output: 0 Apple
            1 Samsung
            2 Oppo

🔹 with()

Creates a copy of the array with a changed value at a specific index.

    let companies = ["Apple", "Samsung", "Oppo"];
    console.log(companies.with(2, "Realme"));  

    output: ["Apple", "Samsung", "Realme"]

🔹 Spread Operator (...)

1️⃣ Merge Arrays

    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    let merged = [...arr1, ...arr2];
    console.log(merged); 
    
    output: [1, 2, 3, 4, 5, 6]

2️⃣ Combine Multiple Arrays

    const q1 = ["Mon", "Tue", "Wed"];
    const q2 = ["Thu", "Fri"];
    const q3 = ["Sat", "Sun"];
    const week = [...q1, ...q2, ...q3];
    console.log(week);

    output: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

3️⃣ Find Min/Max

    const numbers = [23, 55, 21, 87, 56];
    console.log(Math.min(...numbers));       output: 21
    console.log(Math.max(...numbers));       output: 87

✅ Today’s Focus: Practiced all array iteration methods

# 📅 Date: 15-09-2025  (Day 26)

# 📘 JavaScript Classes Practice Project (🍹 Beverage Manager)

A simple JavaScript Classes Practice Project where you can create multiple beverages like Coffee, Tea, Juice, etc., and list their ingredients dynamically.

✨ Features

🆕 Add Beverages with a name and ingredients.

🧾 Dynamic Ingredient Input – Enter ingredients separated by commas.

📋 Display Neatly – Each beverage shows its ingredients in a ul.

🎯 Beginner-Friendly – Clean and simple JavaScript using class.

📂 Project Structure

/project-folder

│── class.html   # UI with form and display section

│── class.js     # JavaScript logic with Beverage class

💻 Code Snippets

🔹 Beverage Class

         class Beverage {
            constructor(name, ingredients) {
            this.name = name;
            this.ingredients = ingredients;
           }
         }

🔹 Add Beverage Function

    function addBeverage() {
        let name = document.getElementById("beverageName").value;
        let ingredientsText = document.getElementById("beverageIngredients").value;

        if (name === "" || ingredientsText === "") {
        alert("Please enter both name and ingredients!");
       return;
     }

     let ingredients = ingredientsText.split(",");
     let bev = new Beverage(name, ingredients);
     beverages.push(bev);
     showBeverages();
    }

🔹 Display Beverages

    function showBeverages() {
          let output = "";
          beverages.forEach(b => {
          output += `<h3>${b.name}</h3><ul>`;
          b.ingredients.forEach(ing => {
          output += `<li>${ing}</li>`;
      });
      output += "</ul>";
     });
     document.getElementById("beverageList").innerHTML = output;
    }

🚀 How to Run

  Copy the project files (class.html & class.js) into a folder.

  Open class.html in your browser.

  Type a Beverage Name and Ingredients (comma-separated).

  Click Add Beverage ➝ It will appear in the list below.

📝 Example Usage

Input:

    Beverage Name: Coffee
    Ingredients: Milk, Coffee Powder, Sugar

Output:

    Coffee
    • Milk
    • Coffee Powder
    • Sugar


<h2> 📅 Date: 16-09-2025  (Day 30) </h2> 

# 📘 JavaScript Classes – Inheritance & Static Methods Practice

This repo contains hands-on JavaScript class examples practicing Inheritance and Static methods with simple UI (HTML + JS).

<h2>🌱 Inheritance Example – Trees & Plants</h2> 

📄 inheritance.html

    <!DOCTYPE html>
    <html>
    <head>
    <title>Inheritance Practice</title>
    <script src="inheritance.js" defer></script>
    </head>
    <body>
    <h1>🌱 Inheritance Practice – Trees & Plants</h1>

     <button onclick="showTree()">🌳 Show Tree</button>
     <p id="treeResult"></p>

     <button onclick="showPlant()">🌼 Show Plant</button>
     <p id="plantResult"></p>
    </body>
    </html>

📄 inheritance.js

    // Parent class
    class Tree {
    constructor(name, height) {
    this.name = name;
    this.height = height;
     }

    details() {
    return `${this.name} tree is ${this.height} feet tall.`;
    }
    }

    // Child class
     class Plant extends Tree {
      constructor(name, height, type) {
      super(name, height);  // reuse Tree constructor
      this.type = type;
     }

      details() {
      return `${super.details()} 🌿 It is a ${this.type} plant.`;
     }
    }

    // UI functions
     function showTree() {
     let mango = new Tree("Mango", 25);
     document.getElementById("treeResult").innerHTML = mango.details();
    }

    function showPlant() {
    let rose = new Plant("Rose", 2, "Flowering");
     document.getElementById("plantResult").innerHTML = rose.details();
    }

✅ Demonstrates:

-> class inheritance with extends

-> super() call for reusing parent constructor
  
-> Specialized child class with extra property

<h2>⚡ Static Methods Example – Math Utility </h2>

📄 static.html

    <!DOCTYPE html>
    <html>
    <head>
    <title>Static Methods Practice</title>
    <script src="static.js" defer></script>
    </head>
    <body>
    <h1>⚡ Static Methods Practice</h1>

    <label>Enter First Number:</label>
    <input type="number" id="num1"><br><br>

    <label>Enter Second Number:</label>
    <input type="number" id="num2"><br><br>

    <button onclick="useAdd()">➕ Add</button>
    <p id="addResult"></p>

    <button onclick="useMultiply()">✖ Multiply</button>
    <p id="multiplyResult"></p>

    <button onclick="useSubtract()">➖ Subtract</button>
    <p id="subtractResult"></p>

    <button onclick="useDivide()">➗ Divide</button>
    <p id="divideResult"></p>

    <button onclick="showPI()">🔵 Show PI</button>
    <p id="piResult"></p>
    </body>
    </html>

📄 static.js

    class MathUtil {
    static PI = 3.14159;

    static add(a, b) {
    return a + b;
    }

    static multiply(a, b) {
    return a * b;
    }

    static subtract(a, b) {
    return a - b;
    }

    static divide(a, b) {
    if (b === 0) return "⚠ Cannot divide by zero!";
    return a / b;
    }
    }

    // helper
     function getInputs() {
      let a = parseFloat(document.getElementById("num1").value);
      let b = parseFloat(document.getElementById("num2").value);
      return { a, b };
    }

    // UI button functions
    function useAdd() {
    let { a, b } = getInputs();
    document.getElementById("addResult").innerHTML = "Result: " + MathUtil.add(a, b);
    }
    function useMultiply() {
     let { a, b } = getInputs();
     document.getElementById("multiplyResult").innerHTML = "Result: " + MathUtil.multiply(a, b);
    }
    function useSubtract() {
    let { a, b } = getInputs();
    document.getElementById("subtractResult").innerHTML = "Result: " + MathUtil.subtract(a, b);
    }
    function useDivide() {
    let { a, b } = getInputs();
    document.getElementById("divideResult").innerHTML = "Result: " + MathUtil.divide(a, b);
    }
    function showPI() {
    document.getElementById("piResult").innerHTML = "Value of PI: " + MathUtil.PI;
    }

✅ Demonstrates:

-> static keyword (methods & properties used without object creation)

-> Dynamic inputs from user

-> Reusable utility class

<h2> 📚 Topics Practiced </h2>

-> JavaScript Classes

-> Inheritance (Tree → Plant)

-> Static properties & methods

-> DOM + JS integration with buttons & input


<h2> 📅 Date: 17-09-2025  (Day 31) </h2> 

# 🔄 Loops Practice – HTML, CSS & JavaScript

This project contains simple loop practice examples implemented using HTML, CSS, and JavaScript.

<h2>📌 Topics Covered</h2> 

1. for loop

2. while loop

3. do...while loop

4. for...in loop

5. for...of loop
   
6. Map

<h2>📝 Examples</h2>

1️⃣ For Loop

Repeats a block of code a fixed number of times.

    function forLoop() {
        let result = "";
        for (let i = 1; i <= 5; i++) {
           result += "Iteration: " + i + "<br>";
       }
       document.getElementById("forLoopResult").innerHTML = result;
    }

2️⃣ While Loop

Executes a block while the condition is true.

     function whileLoop() {
        let i = 1;
        let result = "";
        while (i <= 5) {
          result += "Step: " + i + "<br>";
          i++;
      }
      document.getElementById("whileLoopResult").innerHTML = result;
    }

3️⃣ Do...While Loop

Runs the code at least once, then repeats while the condition is true.

    function doWhileLoop() {
         let i = 1;
         let result = "";
         do {
              result += "Count: " + i + "<br>";
              i++;
         } while (i <= 5);
         document.getElementById("doWhileLoopResult").innerHTML = result;
     }

4️⃣ For...In Loop

Iterates over the keys of an object.

    function forInLoop() {
       let person = { name: "Alex", age: 25, country: "India" };
       let result = "";
       for (let key in person) {
       result += key + ": " + person[key] + "<br>";
     }
    document.getElementById("forInLoopResult").innerHTML = result;
    }

5️⃣ For...Of Loop

Iterates over the values of an iterable (like arrays or strings).

    function forOfLoop() {
       let colors = ["Red", "Green", "Blue"];
       let result = "";
       for (let color of colors) {
         result += color + "<br>";
      }
      document.getElementById("forOfLoopResult").innerHTML = result;
    }

6️⃣ Map Method

Creates a new array by applying a function to each element of an existing array.

    function mapMethod() {
        let numbers = [1, 2, 3, 4, 5];
        let doubled = numbers.map(num => num * 2);
        document.getElementById("mapResult").innerHTML = doubled.join(", ");
     }

<h2>🎨 HTML & CSS</h2>

HTML → Buttons to trigger each loop function and placeholders < p > to display results.

CSS → Basic styling to keep layout clean and results readable.

<h2>🚀 How to Run</h2>

Open the index.html file in your browser.

Click on the buttons for each loop type.

Results will be displayed below the buttons.


<h2> 📅 Date: 18-09-2025  (Day 32) </h2> 

# 🔁 JavaScript Loops Practice (Extended with CSS)

This project demonstrates different kinds of JavaScript loops, including nested loops, loop control (break & continue), array/object iterations, DOM manipulations with loops, and loop comparisons.

The output is styled with CSS so that each section has its own distinct color for clarity. 🎨

📂 Files

loopsExtended.html → HTML structure with buttons & result containers

loopsExtended.js → JavaScript functions demonstrating loop examples

loopsExtended.css → Styling for buttons, layout, and result blocks

<h2>🧑‍💻 Practiced Loops</h2>

1️⃣ Nested Loops

    function nestedLoops() {
       let result = "";
       for (let i = 1; i <= 3; i++) {
       for (let j = 1; j <= 3; j++) {
        result += `i=${i}, j=${j}<br>`;
      }
    }
    document.getElementById("nestedLoopsResult").innerHTML = result;
  }

✅ Demonstrates loops inside loops.

2️⃣ Break & Continue

    function breakContinue() {
     let result = "";
     for (let i = 1; i <= 10; i++) {
     if (i === 5) continue; // skip 5
     if (i === 8) break;    // stop loop at 8
     result += `Number: ${i}<br>`;
    }
    document.getElementById("breakContinueResult").innerHTML = result;
    }

✅ Shows how to skip or stop iterations.

3️⃣ Array Loop with Condition

    function arrayCondition() {
     let nums = [5, 12, 8, 20, 7];
     let result = "";
     for (let n of nums) {
     if (n > 10) {
      result += `${n} is greater than 10<br>`;
    }
    }
    document.getElementById("arrayConditionResult").innerHTML = result;
    }

✅ Filtering array values using loops.

4️⃣ Loop Through Object

    function objectLoop() {
     let person = { name: "Sony", age: 23, country: "India" };
     let result = "";
     for (let key in person) {
     result += `${key}: ${person[key]}<br>`;
    }
    document.getElementById("objectLoopResult").innerHTML = result;
    }

✅ Iterating over object keys.

5️⃣ DOM Manipulation with Loops

    function domLoop() {
    let fruits = ["🍎 Apple", "🍌 Banana", "🍊 Orange"];
    let output = "";
    for (let fruit of fruits) {
    output += `<li>${fruit}</li>`;
     }
    document.getElementById("domLoopResult").innerHTML = output;
    }

✅ Creates dynamic list items with loop.

6️⃣ Compare Loops

    function compareLoops() {
      let nums = [1, 2, 3, 4];
      let result = "For Loop:<br>";
      for (let i = 0; i < nums.length; i++) result += nums[i] + " ";

     result += "<br><br>For..of:<br>";
     for (let n of nums) result += n + " ";

     result += "<br><br>ForEach:<br>";
     nums.forEach(n => result += n + " ");

    document.getElementById("compareLoopsResult").innerHTML = result;
    }

✅ Comparison of for, for..of, and forEach.

<h2>🎨 Styling with CSS</h2>

Each result block has its own unique background color and border for better readability.

Example:

     #nestedLoopsResult {
     background: #e6f7ff;   /* Light Blue */
     border-left: 4px solid #0077cc;
    }

<h2>🚀 How to Run</h2>

-> Clone the repository

-> Open loopsExtended.html in a browser

-> Click the buttons to see results

