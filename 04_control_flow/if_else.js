// JavaScript control flow refers to how the interpreter executes code, including the order in which statements and expressions are evaluated. Here are key topics related to control flow in JavaScript:

// 1. Sequential Execution:
// The default behavior where statements are executed line by line from top to bottom.

// 2. Conditional Statements:
// if: Executes a block of code if a specified condition is true.
// else if and else: Provide alternative paths if the initial condition is false.
// switch: A multi-way branch statement for evaluating an expression and executing corresponding code blocks.

// 3. Loops:
// for loop: Executes a block of code a specific number of times.
// while loop: Repeats code while a specified condition is true.
// do...while loop: Similar to while, but executes the block at least once before checking the condition.
// for...in: Iterates over the properties of an object.
// for...of: Iterates over the values of an iterable object like arrays or strings.

// 4. Error Handling:
// try...catch: Handles exceptions that may occur during the execution of code.
// finally: A block that will execute regardless of whether an error occurred.

// 5. Function Flow:
// Function calls: Execution jumps to a function, runs the code inside, and returns to the calling code after completion.
// Return values: Control flow can be altered using return statements to exit a function and optionally pass back a value.

// 6. Break and Continue:
// break: Exits a loop or switch statement early.
// continue: Skips the current iteration of a loop and proceeds with the next one.

// 7. Asynchronous Control Flow:
// Callbacks: Functions passed into another function to be executed later.
// Promises: Objects that represent the eventual completion (or failure) of an asynchronous operation.
// async/await: Syntactic sugar over promises that make asynchronous code appear synchronous.
// setTimeout and setInterval: Functions for delaying the execution of code or repeating it at intervals.

// 8. Ternary Operator:
// A shorthand conditional statement (condition ? expr1 : expr2).

// 9. Short-circuit Evaluation:
// Logical operators (&&, ||) can be used to control the flow by evaluating only what is necessary.

// Each of these plays a vital role in controlling how JavaScript code is executed, both synchronously and asynchronously.

// 1. Sequential Execution
// Sequential execution refers to the default behavior where the JavaScript engine runs statements line by line from top to bottom.

// console.log("Step 1");
// console.log("Step 2");
// console.log("Step 3");

// explanation:Here, each console.log statement is executed one after the other, sequentially.
// Output:
// Step 1
// Step 2
// Step 3

// 2. Conditional Statements
// a. if statement
// Executes a block of code only if the condition is true.

let number1 = 10;

if (number1 > 5) {
  console.log("Number is greater than 5"); // it will be execute be cause it's true
}

// Explanation:
// The condition number > 5 is true, so the code inside the if block is executed.
// Output: Number is greater than 5

// b. else if and else statements
// Provide alternative branches if the initial condition is false.

let number2 = 3;

if (number2 > 5) {
  console.log("Number is greater than 5");
} else if (number2 === 5) {
  console.log("Number is equal to 5");
} else {
  console.log("Number is less than 5");
}

// explanation:
// The first condition number > 5 is false.The second condition number === 5 is also false.Therefore, the code in the else block executes.Output: Number is less than 5

// Summary of Comparison Operators:
// Equality (==): Compares values with type coercion.
// Strict Equality (===): Compares values without type coercion.
// Not Equal (!=): Compares values for inequality with type coercion.
// Strict Not Equal (!==): Compares values for inequality without type coercion.
// Greater Than (>): Checks if the left operand is greater.
// Greater Than or Equal (>=): Checks if the left operand is greater or equal.
// Less Than (<): Checks if the left operand is lesser.
// Less Than or Equal (<=): Checks if the left operand is lesser or equal.

// Summary of Logical Operator
// Logical AND (&&): Returns the first falsy operand or the last operand if all are truthy.
// Logical OR (||): Returns the first truthy operand or the last operand if all are falsy.
// Logical NOT (!): Inverts the Boolean value.
// Logical AND Assignment (&&=): Assigns the right-hand operand if the left-hand operand is truthy.
// Logical OR Assignment (||=): Assigns the right-hand operand if the left-hand operand is falsy.
// Logical Nullish Assignment (??=): Assigns the right-hand operand if the left-hand operand is null or undefined.

// if
const isUserloggedIn = true
const temperature = 41

if ( temperature === 40 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`); // it will give error be cause of scope we can't access data from scope for out side!


const balance = 1000

if (balance > 500) console.log("test"),console.log("test2");

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");

}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

// Ternary Operator
// A shorthand for if...else.

let age = 18;
let canVote = age >= 18 ? "Eligible to vote" : "Not eligible to vote";
console.log(canVote);

// Explanation:
// The ternary operator checks the condition age >= 18, returning "Eligible to vote" if true and "Not eligible" if false.
// Output: Eligible to vote

// Short-circuit Evaluation
// Using logical operators (&& and ||) to control flow based on necessity.

let a = 5;
let b = null;

let result = a && b;
console.log(result);  // Output: null (because a is truthy but b is null, the result is falsy)

let result2 = a || b;
console.log(result2); // Output: 5 (since a is truthy, no need to check b)

// Explanation:
// With &&, if the first operand is falsy, it returns that without checking the second.
// With ||, if the first operand is truthy, it returns that without checking the second.
