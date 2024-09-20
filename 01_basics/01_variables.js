// In JavaScript, variables are used to store and manipulate data values. They act as containers for holding information that can be referenced and used throughout your program. Understanding variables is fundamental in programming, and here’s a breakdown of the key aspects of JavaScript variables:

// 1. Declaration:
// JavaScript provides three keywords to declare variables: var, let, and const. Each has different characteristics and scopes:

// var:
// Function-scoped or globally-scoped (if declared outside a function).
// Can be re declared and reassigned.
// Hoisted, meaning the declaration is moved to the top of its scope, but the initialization stays in place.

var x = 10;

// let:
// Block-scoped (only accessible within the nearest enclosing block, such as {}).
// Cannot be re declared in the same scope but can be reassigned.
// Hoisted but not initialized (it enters the "temporal dead zone" until its declaration).

let y = 20;

// const:
// Block-scoped, like let.
// Cannot be reassigned or re declared after initialization.
// Hoisted but not initialized (also has a temporal dead zone).Useful for constants or values that should not change.

const z = 30;

// 2. Scope:
// Global Scope: Variables declared outside any function or block are available throughout the code.
// Local/Block Scope: Variables declared within a function or block are only accessible within that function or block.

let a = 100; // Global
function test() {
  let b = 50; // Local to test
}

// 3. Hoisting:
// Hoisting is JavaScript's default behavior of moving declarations to the top of their scope during the compile phase. However, only the declaration is hoisted, not the initialization.

console.log(x); // undefined
var x = 5;

// Equivalent to
var x;
console.log(x); // undefined
x = 5;

// 4. Initialization and Assignment:
// A variable can be declared without an initial value, in which case its value is undefined.

let foo;
console.log(foo); // undefined

// Assignment happens when a value is assigned to a variable.

foo = 10; // Assigned value 10 to foo

// 5. Variable Types:
// Variables can store primitive types like number, string, boolean, undefined, null, symbol, and non-primitive types like objects (including arrays and functions).

let age = 25; // Number
let name = "Alice"; // String
let isStudent = true; // Boolean
let car = { make: "Ford", model: "Fiesta" }; // Object
let numbers = [1, 2, 3]; // Array (object)

// 6. Mutable vs Immutable:
// Primitive types like numbers, strings, and booleans are immutable, meaning their values cannot be changed once assigned (though you can reassign a new value).
// Non-primitive types like objects and arrays are mutable. You can change their properties or elements without changing their reference.

const arr = [1, 2, 3];
arr.push(4); // Valid, modifies the array but keeps the reference

// 7. Dynamic Typing:
// JavaScript is dynamically typed, meaning variables do not have a fixed data type, and the type can change during execution.

let value = 10; // Initially a number
value = "ten"; // Now a string

// summary:
// JavaScript variables allow you to store and manage different types of data within your code.
// Understanding how to declare, assign, and scope variables is key to writing efficient, error-free JavaScript.
