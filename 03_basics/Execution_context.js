// In JavaScript, the execution context is a crucial concept that defines the environment in which JavaScript code is executed. When code runs in JavaScript, an execution context is created to handle the evaluation and execution of the code.

// To dive into how execution contexts are created and what happens under the hood, let’s break it down in detail:

// 1. Types of Execution Contexts
// There are three types of execution contexts in JavaScript:

// * Global: Execution Context: This is the default context in which your JavaScript code starts execution. It is associated with the global object (in browsers, this is the window object), and all global variables and functions are part of this context.

// * Function: Execution Context: Each time a function is invoked, a new execution context is created for that function. This context is created afresh for each invocation, meaning function contexts can be nested within each other.

// * Eval: Execution Context: This is the context created when the eval() function is used to execute code represented as a string. This is rarely used due to security concerns and bad performance.

// 2. Components of the Execution Context
// Each execution context consists of three main components:

// * Variable Environment (VE): This contains information about variable declarations (var variables and function declarations).

// * Lexical Environment (LE): This contains information about identifiers (variables, constants) that are within the current scope and its outer scopes (for closures).

// * this Binding: This points to the object that is the context for the execution. In the global context, this refers to the global object (window in browsers). In a function context, this can refer to different objects based on how the function is called (normal function call, method call, constructor call, or using bind, call, or apply).

// 3. Execution Context Creation
// When JavaScript code is executed, the JavaScript engine creates an execution context in the following steps:

// 1. Creation Phase (Memory Allocation)
// During this phase, the execution context is created, and certain things happen under the hood:

// * Creation of the Global Object (window in browsers): The global object is created and acts as the container for global variables and functions. In non-browser environments like Node.js, this global object is global.

// * this Binding: The this keyword is initialized and bound to the appropriate object, which depends on how the context is being created (global, function, or eval).

// * Lexical Environment Creation: This environment consists of two main components:
// * Environment Record: This is the actual storage for variables, functions, and parameters declared in the context.
// * Outer Lexical Environment Reference: This points to the outer lexical environment, enabling scope chains for closures.

// * Variable Hoisting: Variables and function declarations are “hoisted,” meaning that they are registered in the memory before the code is executed. This is why you can reference variables and functions before they appear in the code, though variables will be undefined until they are assigned.

// 2. Execution Phase
// After memory is allocated and the context is set up, the JavaScript engine moves to the execution phase:

// * Code Execution: JavaScript runs the code line by line. At this point, variables that were declared earlier are assigned their values, and function invocations happen.
// * Scope Chain Resolution: If a variable or function is referenced in the code, the engine looks for it in the current execution context’s Lexical Environment. If it’s not found, it will go up the scope chain, checking outer lexical environments.
// * This Binding: When the function or global code executes, this is resolved according to the context.

// 4. Behind the Scenes: The Call Stack
// When the execution context is created, it is placed on the call stack. The call stack is a mechanism that keeps track of all the execution contexts created during the program's execution.

// When the JavaScript engine encounters global code, a Global Execution Context is created and pushed onto the call stack.

// Each time a function is invoked, a Function Execution Context is created and pushed onto the call stack.

// Once the function completes its execution, the current execution context is popped from the stack, and the engine resumes execution of the context below it.

// 5. Execution Context and the Event Loop
// JavaScript is single-threaded, meaning it can execute only one task at a time. The event loop works in conjunction with the call stack to handle asynchronous code.

// When an asynchronous task (e.g., setTimeout, promises, network requests) is encountered, the execution context for that task is placed in a separate queue called the message queue.

// Once the call stack is empty (i.e., there are no more execution contexts to execute), the event loop takes the next task from the message queue and pushes its execution context onto the call stack.

// 6. How Execution Context Manages Scope and Closures
// Each function in JavaScript has a link to the outer lexical environment, which helps create a scope chain. This is how closures are implemented.

// A closure is created when a function remembers its outer environment (the variables and functions in its parent scope) even after the parent function has finished executing.

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const increment = outer();
increment(); // 1
increment(); // 2

// In this case, even though the outer() function has finished execution, the inner function still retains access to the count variable because of the closure.

// 7. Optimization: Inline Caching
// Modern JavaScript engines, like V8 (used in Chrome and Node.js), optimize the execution of code through various techniques, including inline caching.

// Inline Caching: This optimizes property access in objects by remembering the type and structure of objects at specific locations in the code. Once an object’s property is accessed a few times, the engine stores the information, so future lookups are faster.

// Summary
// Execution contexts are created in JavaScript to define the environment in which code is executed.
// They contain the lexical environment, variable environment, and this binding.
// The creation phase involves memory allocation (hoisting, this initialization), and the execution phase involves actual code execution.
// Execution contexts are managed through the call stack, and JavaScript’s single-threaded nature uses the event loop for asynchronous tasks.
// Closures work because of the lexical environment, allowing functions to remember their outer environment.
// Modern JavaScript engines optimize execution through techniques like inline caching.

// To explore the components of the execution context and its creation process in greater depth, let’s break each down further, understanding what happens internally in JavaScript.

// 2. Components of the Execution Context
// An execution context is an abstract container that holds information necessary for the execution of JavaScript code. There are three main components:

// a. Lexical Environment (LE)
// The Lexical Environment represents the physical environment in which the current code is being executed and allows JavaScript to keep track of variables and their scopes. The Lexical Environment has two parts:

// Environment Record (ER):

// This is where the actual storage of variable and function declarations happens.
// It has two types of records:
// Declarative Environment Record: Holds let, const, var declarations, and function declarations.
// Object Environment Record: Holds references to variables declared in global scope or in with statements, pointing to the global object itself.
// Outer Lexical Environment Reference:

// This reference is used for scope chaining, allowing JavaScript to resolve variables that aren’t found in the current lexical environment.
// This mechanism is what makes closures work, as functions retain a reference to their outer environment, even after the parent function has finished executing.

function outer() {
  let outerVar = "I am outside";

  function inner() {
    console.log(outerVar); // Access to the outer scope via the lexical environment
  }

  inner();
}
outer();

// In this example, inner() can access outerVar because of the outer lexical environment reference.

// b. Variable Environment (VE)
// The Variable Environment is very similar to the lexical environment but specifically tracks the variables declared in the current execution context. The key difference is that the variable environment handles var declarations while the lexical environment tracks both let and const variables as well as function declarations.

// Variable Hoisting: Variables declared with var are hoisted. They are initialized with undefined in the creation phase but are not assigned values until the code execution phase.
// let and const variables, though hoisted, remain uninitialized (they are in the temporal dead zone) and are only initialized during the execution phase.

console.log(x); // undefined (due to var hoisting)
var x = 10;

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;

// Here, x is hoisted and initialized as undefined, while y is in the temporal dead zone until it is declared.

// c. this Binding
// The this keyword refers to the object that is the context for the current execution. The value of this depends on how the function is called:

// In the global context, this refers to the global object (window in browsers).
// In a function execution context, the value of this is determined by how the function is invoked:
// For method calls, this refers to the object that called the method.
// For regular function calls, this refers to the global object (window), unless strict mode is enabled, in which case this is undefined.
// For functions called with new, this refers to the newly created object.
// Arrow functions: These functions do not have their own this. Instead, they inherit this from the surrounding (lexical) scope.

function foo() {
  console.log(this); // In non-strict mode: window/global, In strict mode: undefined
}
foo();

const obj = {
  method: function () {
    console.log(this); // Refers to obj
  },
};
obj.method();

// 3. Execution Context Creation (In-Depth)
// Whenever JavaScript code is executed, an execution context is created. The creation of an execution context involves several steps, and understanding what happens in each step helps clarify the under-the-hood mechanism of JavaScript.

// Three Phases of Execution Context Creation
// Creation Phase (Memory Allocation)

// During the creation phase, the JavaScript engine sets up the environment for the code to execute, but doesn’t yet execute the code. The following things happen:

// Creation of the Global Object (or Function Environment Object): If the execution context is the global context, the global object (window in browsers) is created. If the execution context is a function, the environment specific to that function is set up.

// this Binding: The this keyword is initialized based on the context:

// In the global execution context, this refers to the global object.
// In the function execution context, the value of this is determined by how the function is invoked.
// Lexical Environment and Variable Environment Setup:

// Both the Lexical Environment and Variable Environment are created, and the Environment Record is populated with variable and function declarations (though not initialized with their values yet).
// Hoisting: Variables declared using var and function declarations are hoisted. This means they are added to the environment before the code is executed, but var variables are initialized with undefined at this stage, and functions are stored as the actual function objects.
// Temporal Dead Zone (TDZ): Variables declared with let and const are also hoisted but are not initialized, and accessing them before their declaration will result in a ReferenceError.

function foo() {
  console.log(bar); // undefined (due to hoisting)
  var bar = 10;
}
foo();

// In the above code, bar is hoisted to the top of the function context during the creation phase, but its value remains undefined until the execution phase.

// Execution Phase

// Once the creation phase is done, the JavaScript engine moves to the execution phase:

// Code Execution: The JavaScript engine runs the code line by line, assigning values to the variables declared during the creation phase and executing function calls.
// Scope Chain Resolution: When a variable or function is accessed, the engine looks for it in the current Lexical Environment. If it’s not found there, the engine traverses the outer lexical environments (scope chain) to resolve the identifier.
// Closures: If a function is returned from another function or used as a callback, it retains access to the Lexical Environment where it was created, even after that environment’s code has finished executing.

function outer() {
  let outerVar = "I am outside";
  function inner() {
    console.log(outerVar); // Accessing outer lexical environment
  }
  return inner;
}
const closureFunction = outer();
closureFunction(); // 'I am outside'

// In this example, the inner() function forms a closure, retaining access to outerVar through the outer lexical environment, even after the outer() function has finished execution.

// Call Stack Interaction

// JavaScript engines use a call stack to manage execution contexts. When a function is called, a new execution context is created and pushed onto the call stack. Once the function finishes execution, its execution context is popped off the stack.

// Global Execution Context: At the start of the program, a global execution context is created and pushed onto the stack.
// Function Execution Context: Each time a function is called, a new execution context for that function is created and added to the top of the stack. If that function calls another function, another execution context is created for the new function and pushed onto the stack.
// When a function completes, its execution context is popped off, and the engine resumes execution of the previous context.

function first() {
  second();
  console.log("First function");
}

function second() {
  console.log("Second function");
}

first();

// Call stack sequence:

// global() context created, first() pushed onto the call stack.
// first() calls second(), second()'s context is created and pushed on top of first().
// second() completes, its context is popped off, and execution resumes in first().
// Once first() finishes, its context is popped off the stack.
// Key Points Recap
// Lexical Environment:

// Tracks variables and functions within the current scope.
// Enables scope chains and closure formation through outer lexical environment references.
// Variable Environment:

// Primarily manages var variables, and hoisting happens here.
// Works alongside the Lexical Environment to handle let, const, and var.
// Execution Context Creation:

// The creation phase allocates memory and sets up the environment (hoisting, this binding).
// The execution phase actually runs the code, assigning values and resolving identifiers through scope chains.
// Managed through the call stack, execution contexts are created and destroyed as functions are called and completed.

// In the global execution context, all declared variables and functions become properties of the global object. Let’s break down what happens when you declare a string, number, object, and function in the global scope.

// Global Context Overview
// Global object in a browser is the window object, and in Node.js, it’s global.
// When variables and functions are declared globally, they are automatically added as properties of this global object.

// 1. Global Variables (String, Number, Object)
// a. Primitive Types: String and Number
// When you declare a string or number in the global context, they are stored as primitive values. These are not objects, and they are immutable (i.e., their value cannot be changed). These variables are hoisted, but with initial values of undefined until the code is executed.

var str = "Hello, world!";
var num = 42;

// What happens under the hood:

// During the creation phase of the execution context:
// str and num are hoisted and initialized as undefined.
// During the execution phase:
// str is assigned "Hello, world!".
// num is assigned 42.
// These variables are then accessible via the global object:

console.log(window.str); // "Hello, world!"
console.log(window.num); // 42

// b. Object
// Objects in JavaScript are non-primitive data types. When you declare an object in the global context, the object is stored as a reference, meaning the variable holds a reference (or memory address) to the object’s location in memory. The object itself can be modified.

var obj2 = { key: "value" };

// What happens under the hood:

// Creation phase: obj is hoisted and initialized as undefined.
// Execution phase: A reference to the object { key: 'value' } is stored in memory, and obj holds the reference.
// Just like other global variables, obj is also accessible through the global object:

console.log(window.obj); // { key: 'value' }

// 2. Global Functions
// When you declare a function in the global context, the entire function is hoisted and stored in the global environment. Functions are first-class objects in JavaScript, meaning they can be passed around, assigned to variables, or returned from other functions.

function greet() {
  console.log("Hello, world!");
}

// What happens under the hood:

// Creation phase: The entire function greet is hoisted, meaning the function is available before any code is executed.
// Execution phase: Nothing changes during the execution phase for functions since they are fully hoisted.
// Global functions can also be accessed through the global object:

window.greet(); // "Hello, world!"

// Detailed Behind-the-Scenes Behavior
// 1. Hoisting of Variables (String, Number, Object)
// When a variable is declared with var, it is hoisted to the top of its scope (global or function scope). However, during the creation phase, the value is set to undefined, and the actual assignment happens in the execution phase.

console.log(str); // undefined (due to hoisting)
var str = "Hello!";
console.log(str); // "Hello!"

// 2. Hoisting of Functions
// Functions are also hoisted, but unlike variables, the entire function (including its body) is hoisted during the creation phase. This means that you can call a function even before it’s declared in the code.

greet(); // "Hello, world!" (function is hoisted)

function greet() {
  console.log("Hello, world!");
}

// 3. Variable Reassignment and Mutation
// Primitive Types (String and Number): These are immutable, meaning when you reassign them, the old value is discarded, and a new value is stored in memory.

var str = "Hello!";
str = "Goodbye!"; // Reassigned to a new string

console.log(str); // "Goodbye!"

// object: Objects are mutable, so even though the reference to the object is stored, the object%E2%80%99s properties can be modified.

var obj3 = { key: "value" };
obj3.key = "new value"; // Mutation (no new object is created)

console.log(obj3.key); // "new value"

// 4. Global Scope Pollution
// A common issue with declaring too many variables in the global scope is global scope pollution. Since all global variables are attached to the global object (window or global), adding too many variables increases the risk of name collisions, especially when working with large applications or third-party libraries.

// Avoiding Global Variables
// To avoid polluting the global scope, it’s common to use patterns like IIFE (Immediately Invoked Function Expressions), modules, or let and const to limit the scope of variables to blocks or functions.

// Key Points Recap
// Primitive Variables (String, Number):

// Hoisted to the top of the global scope.
// Initialized with undefined during the creation phase, and then assigned their value during the execution phase.
// Objects:

// Hoisted like primitive variables, but store a reference to the object.
// Objects are mutable, so their properties can be modified after creation.
// Functions:

// Fully hoisted during the creation phase.
// Available for invocation even before their declaration in the code.

// Let’s break down your code line by line and analyze what’s happening, particularly focusing on the variable declarations, hoisting, and how the function greet behaves.

// To understand the Execution Context Creation for your code, let's break it down step by step while focusing on how the execution context for both the global scope and the function scope (greet) is created and managed.

// Code Analysis
let str1 = "Hello!";
let str2 = "Hello!";
let num = 3;

function greet(x) {
  console.log(`${str2}, world!`);
  console.log(str1);
  let total = 2 * x;
  return total;
}

let num = greet(num); // Execution of greet function
let str = greet(); // Execution of greet function without argument

// Execution Context Phases
// Global Execution Context (GEC) Creation
// Function Execution Context (FEC) Creation for greet

// 1. Global Execution Context (GEC) Creation
// The Global Execution Context is created when the JavaScript engine begins executing the script. It involves two main phases:

// A. Creation Phase (Memory Allocation)
// During this phase, all variables and functions are hoisted. Variables declared with let are hoisted but remain uninitialized (in the temporal dead zone) until they are assigned values.

// The JavaScript engine scans the code and allocates memory for:
// Variables (str1, str2, num)
// Function greet
// Variables:

// str1, str2, and num are hoisted but are not initialized yet (in temporal dead zone).
// Functions:

// greet is fully hoisted (the entire function declaration).

// In Memory:
// str1 → TDZ (Temporal Dead Zone)
// str2 → TDZ
// num  → TDZ
// greet → function definition

// B. Execution Phase
// In this phase, the actual code execution begins, and variables get assigned values.
// str1 = "Hello!"
// str2 = "Hello!"
// num = 3
// greet remains as the fully hoisted function.

// The Global Execution Context now looks like this:
// str1 → "Hello!"
// str2 → "Hello!"
// num  → 3
// greet → function definition

// Now, the engine moves on to the function calls.

// 2. Function Execution Context (FEC) Creation for greet
// When you call greet(num) and greet(), a new execution context is created for each call. The function execution context consists of two phases as well: the creation phase and the execution phase.

// Let's break down each function call.

// 1. Function Call: greet(num)
// Creation Phase (Memory Allocation):

// greet is called with the argument num = 3.
// During the creation phase of the function execution context:
// A new scope chain is created (to link the function scope with the outer/global scope).
// A this binding is determined (in this case, this refers to the global object).
// The parameter x is initialized with the value 3.
// Local variables are hoisted:
// total is declared but not initialized.

// In Memory:
// x → 3
// total → undefined

// 2. Execution Phase:

// The function executes line by line:
// console.log(${str2}, world!);
// This logs "Hello!, world!" to the console.
// str2 is found in the outer/global scope.
// console.log(str1);
// This logs "Hello!" to the console.
// str1 is also found in the global scope.
// let total = 2 * x;
// The total variable is assigned the value 6 (since x = 3).
// return total;
// The function returns 6.
// After the first call, num is now updated with the value 6.

// 1. Function Call: greet()
// Now, let's examine the second call: let str = greet();

// Creation Phase (Memory Allocation):

// The function is called without any argument, so x will be undefined in this case.
// During the creation phase of the function execution context:
// x is initialized to undefined.
// total is hoisted but not initialized.

// In Memory:
// x → undefined
// total → undefined

// 2. Execution Phase:

// The function executes line by line:
// console.log(${str2}, world!);
// This logs "Hello!, world!" to the console.
// str2 is found in the global scope.
// console.log(str1);
// This logs "Hello!" to the console.
// str1 is also found in the global scope.
// let total = 2 * x;
// Since x is undefined, total becomes NaN (because multiplying by undefined results in NaN).
// return total;
// The function returns NaN.
// After the second call, str is now assigned the value NaN.

// Final Execution Summary
// After the first function call (let num = greet(num);), num is updated to 6.
// After the second function call (let str = greet();), str is assigned the value NaN because x was undefined.

// Global Scope After Execution:
// str1 → "Hello!"
// str2 → "Hello!"
// num  → 6
// str  → NaN
// greet → function definition

// Key Concepts of Execution Context Creation:
// Global Execution Context:

// Variables and functions are hoisted during the creation phase.
// Variables declared with let and const are hoisted but remain uninitialized (in TDZ).
// Function Execution Context:

// When the function greet is called, a new execution context is created.
// Parameters, local variables, and the this keyword are initialized during the creation phase.
// The function’s code is executed line by line during the execution phase.

// To understand the execution process of the code you provided, we will break down how the JavaScript engine handles this at each step, including variable declaration, memory allocation, and the creation of execution contexts.

let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(val1, val2);

// The Process Under the Hood
// The code execution involves the following steps:

// Global Execution Context (GEC) Creation
// Function Execution Context (FEC) Creation for addNum
// Happens twice: once for result1 and once for result2.
// 1. Global Execution Context (GEC) Creation
// The JavaScript engine creates the Global Execution Context when the script starts running. This involves two phases:

// A. Creation Phase (Memory Allocation)
// During the creation phase:

// Variables and functions are hoisted.

// Variables declared with let are hoisted but remain uninitialized in the temporal dead zone (TDZ).
// Functions are hoisted with their entire body.
// Memory allocation happens as follows:

// val1 is hoisted but not initialized (in TDZ).
// val2 is hoisted but not initialized (in TDZ).
// addNum is hoisted and its function body is placed in memory.
// In memory after the creation phase:

// val1 → TDZ (Temporal Dead Zone)
// val2 → TDZ
// addNum → function definition
// result1 → TDZ
// result2 → TDZ
// B. Execution Phase
// Now, the code is executed line by line, and variables are initialized.

// let val1 = 10;

// val1 is initialized to 10.
// let val2 = 5;

// val2 is initialized to 5.
// The function addNum is already hoisted and ready to be executed when called.

// The lines that call the function (addNum(val1, val2)) are next in execution, which leads to the creation of a Function Execution Context (FEC).

// At this point, the global execution context looks like this:

// val1 → 10
// val2 → 5
// addNum → function definition
// result1 → TDZ
// result2 → TDZ
// 2. Function Execution Context (FEC) Creation for addNum
// Whenever a function is invoked, a new Function Execution Context (FEC) is created for that specific call. This execution context handles the function's parameters, local variables, and the actual code execution.

// Let's walk through the function call for addNum(val1, val2).

// A. First Function Call: addNum(val1, val2) for result1
// Creation Phase (Memory Allocation):
// The parameters num1 and num2 are hoisted and initialized with the values passed to the function: num1 = 10 and num2 = 5.
// Local variables in the function are hoisted:
// total is hoisted but not initialized.
// In memory after creation phase:

// num1 → 10
// num2 → 5
// total → undefined
// Execution Phase:
// The code within the function executes line by line.
// let total = num1 + num2;
// total is initialized with the result of num1 + num2, which is 10 + 5 = 15.
// return total;
// The function returns the value 15.
// After this execution, the function completes, and the FEC is removed from memory. The returned value (15) is assigned to result1.

// At this point, the global execution context looks like this:

// val1 → 10
// val2 → 5
// addNum → function definition
// result1 → 15
// result2 → TDZ
// B. Second Function Call: addNum(val1, val2) for result2
// A new Function Execution Context is created for the second call to addNum(val1, val2) for result2.

// Creation Phase (Memory Allocation):
// The parameters num1 and num2 are initialized with the values 10 and 5, respectively.
// The local variable total is hoisted but not initialized.
// In memory after the creation phase:

// num1 → 10
// num2 → 5
// total → undefined
// Execution Phase:
// The function executes:
// let total = num1 + num2;
// total is initialized with the value 15.
// return total;
// The function returns the value 15.
// The function finishes execution, and the returned value (15) is assigned to result2.

// The global execution context now looks like this:

// val1 → 10
// val2 → 5
// addNum → function definition
// result1 → 15
// result2 → 15
// Execution Context Creation Summary
// Global Execution Context (GEC):

// This is created when the script starts.
// It contains the global variables (val1, val2, result1, result2) and the function addNum.
// Variables declared with let are hoisted but remain in the TDZ until initialized.
// Function Execution Context (FEC):

// Each time addNum is called, a new function execution context is created.
// The function execution context handles:
// Parameters: num1, num2
// Local variables: total
// The function calculates the result and returns it, after which the function execution context is destroyed.
// The values of result1 and result2 are both 15 after the two calls to addNum(val1, val2).
