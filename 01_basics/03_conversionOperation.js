// In JavaScript, conversion operations (or type coercion) involve transforming data from one type to another. JavaScript is a dynamically typed language, which means it can perform automatic type conversions (implicit coercion) or allow you to manually convert data types (explicit coercion). Understanding how these conversions work can help prevent errors in code and improve its readability.

// 1. Implicit Type Conversion (Coercion)
// JavaScript automatically converts data from one type to another when it is necessary for an operation. This is called type coercion, and it usually happens during operations like comparisons or arithmetic.

// a. String and Number Coercion:
// When a string is involved in an operation with numbers, JavaScript may coerce the number to a string or vice versa, depending on the operator.

// String concatenation with + converts numbers to strings:

let result1 = "5" + 10; // "510" (number 10 is coerced to string "10")
let result5 = 10 + "10"; // "10" + "10" = 1010 the 10 coerced to string
let result6 = 10 + 10 + "10"; // 2010 first wll be number 10 + 10 = 20 then 20 + 10 = 2030
let result7 = "10" + 10 + 10; // it will be string rest of the operation result "101010"

let value = 3
let negValue = -value
// console.log(negValue); // -3

// Arithmetic operations like -, *, /, and % convert strings to numbers when appropriate:

// normal
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

// different covert into number
let result2 = "5" - 1; // 4 (string "5" is coerced to number 5)
let result3 = "10" * 2; // 20

// b. Boolean Coercion:
// JavaScript converts values to true or false in certain contexts (like conditionals or logical operators). Any value in JavaScript can be coerced into a boolean.

// Truthy values: Non-zero numbers, non-empty strings, objects, arrays, etc.

// Falsy values: 0, "" (empty string), null, undefined, NaN, false.

if ("hello") {
  console.log("This will run"); // Non-empty strings are truthy
}

if (0) {
  console.log("This will not run"); // 0 is falsy
}

// Logical operations like && and || convert values to booleans to determine the result:

let a = null || "default"; // 'default' (null is falsy, so it returns the right operand)
let b = 1 && "truthy"; // 'truthy' (1 is truthy, so it returns the right operand)

// c. Equality (==) Coercion:
// The == (loose equality) operator performs type coercion before comparing values. This can sometimes lead to unexpected results.

// When different types are compared using ==, JavaScript will convert them to the same type first.

console.log(5 == "5"); // true (string "5" is coerced to number 5)
console.log(true == 1); // true (boolean true is coerced to number 1)

// Strict equality (===) does not perform coercion and checks both type and value:

console.log(5 === "5"); // false (types are different)
console.log(true === 1); // false (types are different)

// 2. Explicit Type Conversion
// Explicit conversion is when you intentionally convert data types using built-in JavaScript methods.

// a. Converting to String:
// You can convert numbers, booleans, and other types to strings using:

// String() function:

let num = 123;
let str1 = String(num); // "123"

// toString() method:

let bool = true;
let str2 = bool.toString(); // "true"

// Template literals (backticks) also convert values to strings:

let age = 25;
let str3 = `I am ${age} years old`; // "I am 25 years old"

// b. Converting to Number:
// You can convert strings and booleans to numbers using:
// Number() function:

let str = "123";
let num1 = Number(str); // 123

// If the string contains non-numeric characters, Number() will return NaN (Not-a-Number):
let result = Number("123abc"); // NaN

// parseInt() and parseFloat():

// parseInt() converts a string to an integer, and parseFloat() converts it to a floating-point number.
// parseInt() ignores non-numeric characters after the valid number, but Number() does not.

let int = parseInt("42px"); // 42 (ignores "px")
let float = parseFloat("3.14"); // 3.14

// Unary + operator: The + operator can convert strings and booleans to numbers.

let num2 = +"123"; // 123
let bool1 = +true; // 1

// c. Converting to Boolean:
// You can convert any value to a boolean using:

// Boolean() function:

let num3 = 0;
let bool2 = Boolean(num); // false (0 is falsy)

// Double negation !!: The !! operator can also be used to convert any value to a boolean:
let str4 = "hello";
let bool3 = !!str; // true (non-empty strings are truthy)

// 3. Common Conversion Scenarios:
// a. String to Number Conversion in Arithmetic:
// When performing arithmetic operations (-, *, /), strings containing numeric values are coerced to numbers automatically, except for +, which concatenates strings.

let sum = "5" * 2; // 10 (string is coerced to number)
let concat = "5" + 2; // "52" (string concatenation)

// b. Falsy Values in Conditionals:
// Values like 0, "", null, undefined, NaN, and false are considered falsy. You may encounter implicit coercion in conditional expressions:

if (0) {
  // Won't execute, since 0 is falsy
}

if ("") {
  // Won't execute, since empty string is falsy
}

// 4. Edge Cases in Conversion:
// JavaScript has some quirky behaviors in type conversions, especially with NaN, undefined, and null values.

// a. NaN (Not-a-Number):
// NaN is the result of invalid number operations and is of type number. Any operation involving NaN will also result in NaN.

let invalid = Number("abc"); // NaN
let result4 = NaN + 5; // NaN

// b. Undefined Conversion:
// When converted to a number, undefined becomes NaN. When converted to a string, it becomes "undefined".

let num4 = Number(undefined); // NaN
let str5 = String(undefined); // "undefined"

// c. Null Conversion:
// When null is converted to a number, it becomes 0. When converted to a string, it becomes "null".

let num5 = Number(null); // 0
let str6 = String(null); // "null"

// Summary:
// JavaScript provides both implicit and explicit ways to convert between different data types. Implicit conversion happens automatically in certain operations, while explicit conversion requires the use of functions like Number(), String(), and Boolean(). Understanding how JavaScript performs these conversions helps in avoiding unexpected behavior in code.

// Increment (++) and Decrement (--) Operators
// In JavaScript, the ++ and -- operators are shorthand for increasing or decreasing a variable by 1. These operators come in two forms:

// Pre-increment / Pre-decrement: (++variable, --variable)
// Post-increment / Post-decrement: (variable++, variable--)
// Pre-Increment/Pre-Decrement
// Pre-increment (++variable): The variable is incremented first, and the updated value is returned immediately.
// Pre-decrement (--variable): The variable is decremented first, and the updated value is returned immediately.

let gameCounter1 = 100;
console.log(++gameCounter1);  // Output: 101 (Increment happens before the value is used)
console.log(--gameCounter1);  // Output: 100 (Decrement happens before the value is used)

// Post-Increment/Post-Decrement
// Post-increment (variable++): The current value of the variable is returned first, and then the variable is incremented.
// Post-decrement (variable--): The current value of the variable is returned first, and then the variable is decremented.

let gameCounter2 = 100;
console.log(gameCounter2++);  // Output: 100 (The current value is returned, increment happens afterward)
console.log(gameCounter2);    // Output: 101 (Now the value is updated to 101)
console.log(gameCounter2--);  // Output: 101 (The current value is returned, decrement happens afterward)
console.log(gameCounter2);    // Output: 100 (Now the value is updated to 100)

// Understanding with a Code Example:

let gameCounter = 100;

console.log(++gameCounter); // Pre-increment: Increments gameCounter to 101, then returns 101.
console.log(gameCounter++); // Post-increment: Returns 101, then increments gameCounter to 102.
console.log(gameCounter);   // Outputs: 102 (The updated value after the post-increment)

// Key Differences:
// Pre-increment (++gameCounter): The variable is updated before its value is used.
// Post-increment (gameCounter++): The variable's value is used first, and then it is updated.

// When to Use Each:
// Use pre-increment/decrement when you want the variable to be modified before it's used in the expression.
// Use post-increment/decrement when you want to use the current value of the variable first, and then change it afterward.
// In your original example:

let gameCounter3 = 100;
++gameCounter3;
console.log(gameCounter3);

// This is using pre-increment, so the gameCounter will be incremented to 101 before being logged. The output will be:
// 101;
