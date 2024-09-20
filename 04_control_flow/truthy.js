// In JavaScript, truthy and falsy values are terms used to describe how values are evaluated in Boolean contexts, such as conditional statements (if, while, etc.) and logical operations.

// Falsy Values
// Falsy values are values that evaluate to false in Boolean contexts. The following values are considered falsy:

// false: The Boolean value false.
// 0: The number zero.
// -0: The negative zero.
// 0n: The BigInt representation of zero.
// "" (empty string): A string with no characters.
// null: Represents the absence of a value.
// undefined: Indicates a variable has not been assigned a value.
// NaN: Represents a value that is not a number.

if (false) console.log("1 This won't run");
if (0) console.log("2 This won't run");
if ("") console.log("3 This won't run");
if (null) console.log("4 This won't run");
if (undefined) console.log("5 This won't run");
if (NaN) console.log("6 This won't run");
if (-0) console.log("7 This won't run");
if (0n) console.log("8 This won't run");

// Truthy Values
// Truthy values are all values that are not falsy. In other words, any value that is not one of the falsy values is considered truthy. Here are some examples of truthy values:

// true: The Boolean value true.
// Any non-zero number: For example, 1, -1, 3.14, Infinity, -Infinity.
// Any non-empty string: For example, "hello", "0", "false".
// Objects: Any object, including arrays and functions, is truthy.
// BigInt values: For example, 1n, 100n.

if (true) console.log("1 This will run"); // true are truthy
if (1) console.log("2 This will run"); // number are truthy except 0
if ("hello") console.log("3 This will run"); // non empty string is truthy
if ([]) console.log("4 Empty array is truthy This will run");  // Empty array is truthy
if ({}) console.log("5 Empty object is truthy This will run");  // Empty object is truthy
if (function() {}) console.log("6 Function is truthy This will run");  // Function is truthy
if (42n) console.log("7 BigInt is truthy This will run");  // BigInt is truthy any number before n

const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null or undefined

let val1;
// val1 = 5 ?? 10; result output: if first is seticfide mean left. with the value it will be assigned 5
// val1 = null ?? 10; // output if first null the seconde will be assigned
// val1 = undefined ?? 15; // if left is undefined right will be assigned
val1 = null ?? 10 ?? 20; // 10
val1 = null ?? undefined ?? 20; // 20

console.log(val1);

// Ternary Operator
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
