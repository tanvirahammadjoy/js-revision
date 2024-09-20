// In JavaScript, data types represent the kinds of values that variables can hold. They are broadly categorized into primitive and non-primitive types. Understanding data types is essential for efficient programming because they determine how JavaScript handles, stores, and manipulates data in memory.

// # Primitive Data Types

// String: Correct! Any sequence of characters (e.g., "hello"). Type is string.
// Number: Right! Represents both integers and floating-point numbers (e.g., 12, 3.14). Type is number.
// Boolean: True/false values. Type is boolean.
// Null: Represents intentional absence of any value. Type is actually null, not an object, though older versions of JavaScript would mistakenly return object when using typeOf.
// Undefined: Refers to a variable that has been declared but not yet assigned a value. Type is undefined.
// Symbol: Correct! Unique and immutable value used as a key for object properties. Type is symbol.
// BigInt: For very large numbers, beyond what number can represent. Type is bigint.

// ## Non-Primitive (Reference) Data Types

// Object: Can hold key-value pairs, including other objects, arrays, functions, etc. Type is object.
// Function: Functions are callable objects, but typeOf a function will return "function". It is a special type of object.
// Date, Math, Regular Expressions: All these are objects in JavaScript with specific purposes (Date for dates, Math for mathematical operations, etc.).

// ## Memory in JavaScript

// Stack: Holds primitive values. Each value is stored directly in memory, and when copied or modified, a new instance is created (pass-by-value).

// Heap: Holds non-primitive values. Objects, arrays, and functions are stored in the heap, and when copied or modified, they reference the same memory location (pass-by-reference). That's why modifying a copied object or array can affect the original.

// Key Points to Remember:
// Primitive types are immutable. When you modify or reassign them, a new value is created.
// Reference types share the same memory location, so modifications to a reference will affect the original.

// 1. Primitive Data Types:

// a. Number:
// Represents both integers and floating-point numbers.
// Example: 42, 3.14
// Special number values include:
// Infinity: Represents a number greater than any finite number.
// -Infinity: Represents a number less than any finite number.
// NaN (Not-a-Number): Represents an invalid number (e.g., result of 0 / 0).

let age = 25;      // Integer
let price = 19.99; // Floating-point

// b. String:
// Represents text data enclosed in single ('), double ("), or backticks (` for template literals).
// Strings are immutable, but you can create new strings based on operations.

let name = "Alice";         // Double quotes
let greeting = 'Hello';     // Single quotes
let message = `Hi, ${name}`; // Template literal

// c. Boolean:
// Represents logical values: true or false.
// Used in conditional statements and control flows.

let isLoggedIn = true;
let isEmpty = false;

// d. Undefined:
// A variable that has been declared but has not been assigned a value is undefined.

let x;        // Declaration without initialization
console.log(x); // undefined

// e. Null:
// Represents an intentional absence of any object value. It is often used to indicate that a variable should be empty.

let emptyValue = null;

// f. Symbol:
// Introduced in ES6, symbols are unique and immutable. They are used as unique property keys in objects.

let sym3 = Symbol("description");

// g. BigInt (ES11/ES2020):
// Used to represent integers with arbitrary precision, allowing for numbers larger than the Number type can handle.

let largeNum = BigInt(1234567890123456789012345678901234567890n);

// 2. Non-Primitive Data Types (Reference Types):
// Non-primitive types are objects and are stored by reference. These types can be modified after they are created.

// a. Object:
// An object is a collection of key-value pairs. Keys are strings (or symbols), and values can be any data type.

let person1 = {
  name: "John",
  age: 30,
  isStudent: false,
};

// Objects are mutable, meaning their properties can be changed after creation.

person.age = 31; // Modify an object property

// b. Array:
// Arrays are ordered collections of values (elements), which can be of any data type, including other arrays (nested arrays).

let numbers = [1, 2, 3, 4, 5];
let mixedArray = [1, "two", true];

// c. Function:
// Functions are objects in JavaScript and can be assigned to variables, passed as arguments, and returned from other functions.

function greet() {
  return "Hello, world!";
}

// d. Date:
// A built-in object for handling dates and times.

// e. RegExp:
// Represents regular expressions and is used for pattern matching within strings.

let pattern = /abc/;

// f. Map, Set, WeakMap, WeakSet:
// Map: Holds key-value pairs, where keys can be of any type.

// Set: Holds unique values of any type.

// WeakMap and WeakSet are similar to Map and Set but allow garbage collection of keys that are objects when there are no other references to the object.

let map = new Map();
map.set("key", "value");

let set = new Set([1, 2, 3]);

// 3. Dynamic Typing:
// JavaScript is a dynamically typed language, meaning variables can hold any type of data, and their type can change during execution.

let value = 42;   // Initially a number
value = "Hello";  // Now it's a string

// 4. Checking Data Types:
// You can check the type of a value using the typeof operator.

console.log(typeof 42);         // "number"
console.log(typeof "Hello");    // "string"
console.log(typeof null);       // "object" (but it's actually null, a historical quirk)
console.log(typeof undefined);  // "undefined"

// summary:
// JavaScript has a rich set of data types that allow developers to handle various kinds of information in their programs.
// Primitive types are immutable and stored by value, while non-primitive types (objects) are mutable and stored by reference.
// Understanding data types and how they are handled behind the scenes helps in writing more efficient and error-free code.

// When we run console.log(typeof null), it indeed returns "object". However, this is a bug in JavaScript that dates back to its early days and has been kept for backward compatibility. The null type is not actually an object, but due to this historical mistake, typeof null returns "object".

let nullType = null;
console.log(typeof null);

// Why does typeof null return "object"?
// In the original JavaScript implementation, values were stored as binary data. The type tag for objects was 0, and since null was represented internally as 0, typeof null incorrectly returned "object".

// Important distinction:
// null: Represents the absence of any value (i.e., an empty or non-existent value). It’s a primitive type, but typeof mistakenly identifies it as "object".

// undefined: Means a variable has been declared but not yet assigned a value.

let undefinedType = undefined;
console.log(typeof undefinedType);

// In practice, just remember:
// null is a primitive type.
// The typeof result is a long-standing bug that we can ignore or be aware of when debugging.

// Creating a Symbol:
// Symbols are created using the Symbol() function. we can optionally pass a description to the Symbol, but this is only for debugging purposes.

let sym1 = Symbol();
let sym2 = Symbol("description"); // Optional description
console.log(sym1 === sym2); // false, each Symbol is unique

// Using Symbols as Object Keys:
// Using Symbols as Object Keys:
// Symbols are often used as keys for object properties because they are guaranteed to be unique, which helps avoid naming collisions when working with large codebase or libraries.

const id = Symbol("id");
const person = {
  [id]: 123, // Symbol used as a key
  name: "John Doe",
};

console.log(person[id]); // 123
console.log(person.name); // "John Doe"

// Notice that even though id is a property of person, it's not directly accessible like other keys.

// Symbols and Object Iteration:
// One key advantage of using Symbols as object properties is that they are not enumerated in for...in loops or Object.keys(). This makes them useful for creating "hidden" properties.
const sym = Symbol("hiddenKey");
const obj = {
  [sym]: "Hidden Value",
  visibleKey: "Visible Value",
};

for (let key in obj) {
  console.log(key); // Only "visibleKey" is logged
}
console.log(Object.keys(obj)); // ["visibleKey"]

// However, you can still access Symbol keys using Object.getOwnPropertySymbols():

const symbols = Object.getOwnPropertySymbols(obj);
console.log(symbols);  // [Symbol(hiddenKey)]

// Global Symbols:
// Sometimes, you may want to create a Symbol that can be shared across different parts of your code. This is done using the Global Symbol Registry via Symbol.for().

let sym10 = Symbol.for('key');
let sym20 = Symbol.for('key');
console.log(sym10 === sym20);  // true, both refer to the same Symbol

// The Symbol.for() method searches the global registry to see if a symbol with the specified key already exists. If it does, it returns that symbol; if not, it creates a new one.

