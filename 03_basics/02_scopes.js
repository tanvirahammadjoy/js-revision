// Understanding the difference between function scope and block scope is crucial for mastering JavaScript. Both of these concepts define the visibility and lifetime of variables declared within a specific portion of code. I’ll break down each of these concepts and explain how they work, step by step, and how they interact with JavaScript’s engine.

// 1. Function Scope
// Function scope means that variables defined inside a function are accessible only within that function.
// In JavaScript, before the introduction of let and const, only functions created new scopes. This means that variables declared with var inside a function are not accessible outside that function, but they are accessible throughout the entire function (even before the line where they are declared due to hoisting).

// Example of Function Scope:
function myFunction() {
  var functionScopedVariable = "I exist inside this function";
  console.log(functionScopedVariable); // Accessible here
}

myFunction(); // I exist inside this function
// console.log(functionScopedVariable); // Error: functionScopedVariable is not defined

// Here, functionScopedVariable is scoped only within myFunction(). Outside of that function, it doesn’t exist.

// Key Points:
// Variables declared with var inside a function are function-scoped.
// They can be accessed anywhere inside the function, even before they are declared, due to hoisting.
// Function scope allows you to isolate variables and avoid conflicts with variables declared elsewhere.

// Example of var Hoisting in Function Scope:
function test() {
  console.log(a); // undefined (due to hoisting)
  var a = 10;
  console.log(a); // 10
}

test();
// var a is hoisted to the top of the function, but the initialization a = 10 happens only at the line where it’s assigned.

// 2. Block Scope
// Block scope was introduced in ES6 (ECMAScript 2015) with the let and const keywords.
// A block is any code enclosed in curly braces {}. For instance, if statements, for loops, and functions all create blocks.
// Variables declared with let and const inside a block are block-scoped, meaning they are accessible only within that block, and not outside it.
// Example of Block Scope with let and const:

if (true) {
  let blockScopedVariable = "I exist inside this block";
  console.log(blockScopedVariable); // Accessible here
}

// console.log(blockScopedVariable); // Error: blockScopedVariable is not defined

// Here, blockScopedVariable is scoped only within the if block. Trying to access it outside of the block will result in an error.

// Key Points:
// let and const are block-scoped and not hoisted like var. They exist in a "temporal dead zone" until they are initialized.
// Block scope allows better control over the scope of variables, especially in loops and conditional blocks.
// Temporal Dead Zone (TDZ)
// The Temporal Dead Zone refers to the period between the beginning of the block and the point where the variable is declared and initialized.
// In this zone, although the variable is technically declared, you cannot access or reference it until its actual declaration line is reached.
// Example of Temporal Dead Zone:

{
//   console.log(a); // Error: Cannot access 'a' before initialization
  let a = 10;
}

// Here, trying to access a before its declaration throws an error. This is the TDZ in action.
// 3. Difference Between Function Scope and Block Scope
// Scope Boundaries:
// Function Scope: Only functions create function scope. This means if you declare a variable with var inside a function, it’s only accessible within that function.

// Block Scope: Any code inside {} creates a block scope. Variables declared with let and const are accessible only within this block, including inside loops and if statements.

// Hoisting Behavior:
// Function Scope (var): Variables are hoisted to the top of the function scope, meaning they can be used before their declaration line (though their value will be undefined).

// Block Scope (let and const): Variables are hoisted to the top of the block, but cannot be used before their declaration due to the Temporal Dead Zone (TDZ).

// Example of Hoisting Difference:
function test() {
  console.log(x); // undefined (var is hoisted)
  var x = 5;

//   console.log(y); // Error: Cannot access 'y' before initialization
  let y = 10;
}
test();

// 4. Usage of Function Scope vs. Block Scope
// var (Function Scope) in Loops:

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 3 3 3 (due to function scoping)

// In this example, the value of i is not confined to each iteration of the loop because var is function-scoped. By the time the setTimeout callbacks execute, i has already become 3.
// let (Block Scope) in Loops:

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 0 1 2 (due to block scoping)

// With let, each iteration has its own i variable, because let creates a new block scope for each iteration of the loop.
// 5. Practical Use Cases
// When to Use var (Function Scope)
// var is less commonly used in modern JavaScript due to the introduction of let and const, which provide better control over variable scope.
// Use var when you’re working in an older JavaScript environment or if you want to avoid the Temporal Dead Zone and can manage hoisting.
// When to Use let and const (Block Scope)
// Use let when you need a variable whose value can change but needs to be scoped to a specific block.
// Use const when the value should remain constant within its block. const is commonly used for constants and immutable values.
// Comparison Table: Function Scope vs. Block Scope

// Feature	            var (Function Scope)	            => let and const (Block Scope)
// Scope	            Function-wide	                    => Block-wide (within {})
// Hoisting	            Yes (initializes to undefined)	    => Yes (but in the Temporal Dead Zone until initialized)
// Temporal Dead Zone	No	                                => Yes
// Re-declaration	    Allowed within the same scope	    => Not allowed within the same scope
// Loop Behavior	    Same variable across iterations     => New variable for each iteration
// Common Use	        Older JavaScript code, function-wide variables => Modern JavaScript, block-specific variables (let) or constants (const)

var c = 300

let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a); // 10
}

console.log(a); // 300
// console.log(b); // error b is not defined
console.log(c); // 300

function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username); // here have access from outer be cause of lexical environment inner one can access from out side but outer one can't access from in side until unless we return the value or function from inside.
  }
//   console.log(website); // here is can not access from inside ReferenceError: website is not defined

  two();
}

one()

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    console.log(username + website); // here it exist here access able
  }
//   console.log(website); // here the website not access able until unless we return that variable or function
}

// console.log(username); // here the user name also not access able username is not defined

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5)); // regular function can be access before initialization it's not in an variable

function addone(num) {
  return num + 1;
}

// addTwo(5); // ReferenceError: Cannot access 'addTwo' before initialization be cause its an anonymous function which hold in a variable
const addTwo = function (num) {
  return num + 2;
};
