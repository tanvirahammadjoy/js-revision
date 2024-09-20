// 1. String Creation / Declaring
// String Literals: Creating strings using single (') or double quotes (").
// String Constructor: Using new String().

// Using double quotes ("):
let str1 = "Hello"; // String literal
let str2 = new String("Hello"); // String object

// Using single quotes ('):
let str7 = "JavaScript String";

// Using backticks (template literals) (```):
let str8 = `Template Literal String`;

// Backticks allow embedded expressions and multiline strings:
let name1 = "John";
let greeting = `Hello, ${name}!`; // "Hello, John!"
let multiLine = `This is a 
multiline string.`;

// String Immutability
// Strings in JavaScript are immutable, meaning that once a string is created, it cannot be changed. Any method that modifies a string will return a new string rather than modifying the original.

let str = "Hello";
str[0] = "J"; // Doesn't change the string
console.log(str); // "Hello"

// 2. String Properties
// length: Returns the length of a string.
let str = "JavaScript";
console.log(str.length); // 10

// 3. String Methods

// Manipulation:
// concat(): Concatenates two or more strings.
let str10 = "Hello";
let str9 = "World";
console.log(str1.concat(", ", str2)); // "Hello, World"

// charAt(): Accessing Characters: You can access individual characters using bracket notation or the charAt() method.
let str = "Hello";
console.log(str[0]); // "H"
console.log(str.charAt(1)); // "e"

// slice(): Extracts part of a string.
let str = "JavaScript is awesome!";

// Extract "JavaScript" using slice
console.log(str.slice(0, 10)); // "JavaScript"

// substring() and substr(): Substring extraction.
// Extract "Script" using substring
console.log(str.substring(4, 10)); // "Script"

// Extract "JavaScript" using substr
console.log(str.substr(0, 10)); // "JavaScript"

// replace(): Replaces the first occurrence of a substring with a new value.
let str = "JavaScript is cool!";
let newStr1 = str.replace("cool", "awesome");
console.log(newStr1); // "JavaScript is awesome!"

// replace(): For replacing all occurrences, use a regular expression with the global flag (g):
let newStr2 = str.replace(/is/g, "was");

// toUpperCase() / toLowerCase(): Changes the case of a string.
let str = "JavaScript";
console.log(str.toUpperCase()); // "JAVASCRIPT"
console.log(str.toLowerCase()); // "javascript"

// anchor(), link(), big(), small(), bold(), italics(), strike(), sub(), sup();

// These are HTML formatting methods that apply basic HTML tags to a string. However, they are largely outdated in modern web development, as CSS and proper HTML are preferred for formatting.
let str = "JavaScript";

console.log(str.bold()); // "<b>JavaScript</b>"
console.log(str.link("http://example.com")); // "<a href="http://example.com">JavaScript</a>"

// Search:
// indexOf() / lastIndexOf(): Find the index of the first or last occurrence of a substring.
// Returns -1 if not found.
let str = "JavaScript is fun";
console.log(str.indexOf("is")); // 11
console.log(str.lastIndexOf("is")); // 11

// includes(): Checks if a substring exists within the string. Returns true or false.
let str = "Hello, World!";
console.log(str.includes("World")); // true

// startsWith() / endsWith(): Checks if the string starts or ends with a specified substring.
let str = "JavaScript";
console.log(str.startsWith("Java")); // true
console.log(str.endsWith("Script")); // true

// Split and Join:
// split(): Splits a string into an array based on a separator.
// join(): Combines an array into a string (used with arrays).

let str3 = "JavaScript is fun";
console.log(str3.includes("fun")); // true

// 4. Template Literals
// Allows embedding expressions inside strings using backticks (`) and ${}.
// Supports multi-line strings.

let name = "John";
let message = `Hello, ${name}!`;

// 5. String Immutability
// Strings in JavaScript are immutable, meaning once a string is created, it cannot be changed. Operations like replace() or concat() return a new string.

// 6. String Comparisons
// Using == or === for equality checks.
// Using localeCompare() for more nuanced comparisons, like sorting strings in different locales.

// 7. Escaping Special Characters
// Using backslashes (\) to escape special characters like quotes (', ") or newline characters (\n).

let str4 = 'It\'s a "wonderful" day';

// 8. Regular Expressions with Strings
// match(): Matches a string against a regular expression.
// matchAll(): Similar to match(), but returns an iterator containing all matches, including capturing groups.
// search(): Searches for a match based on a regular expression.
// replace(): Replaces a substring or pattern (regex) with a new string. It only replaces the first occurrence by default.
// replaceAll(): Replaces all occurrences of a substring or pattern.

let text = "Hello World";
let result = text.replace(/World/, "JavaScript");

// 9. String Iteration
// Strings can be iterated using for...of or forEach() after converting the string to an array.

for (let char of "Hello") {
  console.log(char);
}

// 10. String Padding
// padStart() and padEnd() methods allow padding a string to a certain length.
let str5 = "5";
console.log(str5.padStart(4, "0")); // "0005"

// repeat(): This method repeats the given string a specified number of times.
let str = "abc";
console.log(str.repeat(3)); // "abcabcabc"

// 11. String Trimming
// trim(), trimStart(), trimEnd(): Removes whitespace from the start, end, or both sides of a string.

let str6 = "  Hello  ";
console.log(str6.trim()); // "Hello"

// 12. Converting Strings
// Number(): Converts a string to a number.
// parseInt() and parseFloat(): Parse numbers from a string.
// toString(): Converts other data types to a string.

// 1. String Object vs Primitive Strings
// In JavaScript, you can create a string either as a primitive or as an object using the String constructor.
// Primitive strings are lightweight and fast, while String objects offer more flexibility but come with additional overhead.

let primitiveStr = "hello"; // Primitive string
let objectStr = new String("hello"); // String object

// While the two may seem interchangeable, typeof will reveal the difference:

console.log(typeof primitiveStr); // "string"
console.log(typeof objectStr); // "object"

// 2. String Coercion
// JavaScript will coerce non-string values into strings when necessary. This happens when you use operators like + with a string and another type, or when passing values to string methods.

let value = 100;
let coercedString = "The value is: " + value; // "The value is: 100"

// 3. String Interning
// JavaScript interns strings, meaning it stores one copy of each string value and reuses it wherever needed. This improves memory usage and comparison speed since identical strings reference the same location in memory.

let a = "interned";
let b = "interned";
console.log(a === b); // true, both refer to the same memory location

// 4. Unicode and UTF-16 Representation
// JavaScript strings are encoded as UTF-16. This means each character uses either 2 or 4 bytes, depending on whether it belongs to the Basic Multilingual Plane (BMP) or supplementary planes.
// Surrogate pairs (two UTF-16 code units) are used to represent characters outside the BMP (like emoji or some complex characters).

let emoji = "😊";
console.log(emoji.length); // 2 (due to surrogate pairs)

// charCodeAt() returns UTF-16 code units, while codePointAt() retrieves the actual Unicode code point.

console.log(emoji.charCodeAt(0)); // 55357 (first half of the surrogate pair)
console.log(emoji.codePointAt(0)); // 128522 (actual Unicode point for 😊)

// Summary of Additional String Methods:
// Manipulation: padStart(), padEnd(), repeat(), replace(), replaceAll().
// Searching: match(), matchAll(), search().
// Comparison: localeCompare().
// Character Codes: codePointAt(), charCodeAt(), fromCharCode(), fromCodePoint().
// Internationalization: toLocaleUpperCase(), toLocaleLowerCase().
// Unicode Handling: normalize(), String.raw().
// HTML Helpers: anchor(), link(), bold(), italics() (outdated).

// In JavaScript, __proto__ refers to the prototype of an object, which is a reference to another object. Every object (including strings) in JavaScript has a __proto__ property, which links it to its prototype. This prototype object contains methods and properties that are inherited by the object. This is a key feature of prototypal inheritance.

// __proto__ with Strings
// A string in JavaScript is a primitive data type, but when you call methods on a string, JavaScript automatically converts it to a String object (an object wrapper for the primitive string), allowing it to access properties and methods from its prototype chain.

let str = "Hello";
console.log(str.__proto__); // This refers to the String.prototype

// The __proto__ of a string is String.prototype, which contains various methods like toUpperCase(), slice(), charAt(), and more. This allows strings to use these methods, even though the string itself is a primitive.

// Understanding the Prototype Chain
// When you access a method on a string like str.toUpperCase(), JavaScript internally performs the following steps:

// Primitive Wrapper: The primitive string "Hello" is temporarily converted into an object using the String constructor. This allows the string to access methods.

let strObject = new String("Hello");

// Prototype Access: The __proto__ of the string object points to String.prototype, where methods like toUpperCase are defined.

// Method Resolution: JavaScript checks the __proto__ (the prototype) of the object for the method you're trying to use. If found, it calls the method.

// Temporary Object Disposal: After the method execution, the temporary object is discarded, and the string returns to being a primitive value.

let str = "Hello";

console.log(str.toUpperCase()); // "HELLO"
console.log(str.__proto__ === String.prototype); // true

// The Prototype Chain for a String
// str.__proto__ (String.prototype): This is where methods for string manipulation like toUpperCase(), split(), charAt(), and replace() are defined.
// String.prototype.__proto__ (Object.prototype): The String.prototype itself is an object, and its __proto__ points to Object.prototype. This allows string objects to inherit methods like toString(), hasOwnProperty(), etc.
// Object.prototype.__proto__: At the end of the chain, the __proto__ of Object.prototype is null, marking the end of the prototype chain.

let str = "Hello";

console.log(str.__proto__); // String.prototype
console.log(str.__proto__.__proto__); // Object.prototype
console.log(str.__proto__.__proto__.__proto__); // null

// Accessing and Modifying __proto__
// You can access and modify the __proto__ of an object, but this is generally discouraged due to performance reasons. However, you can still modify or add methods to the prototype of strings globally via String.prototype:

String.prototype.greet = function () {
  return `Hello, ${this}!`;
};

console.log("World".greet()); // "Hello, World"

// In this example, we add a new method greet to String.prototype, and now all strings will have access to this method.

// Key Points about __proto__ with Strings:
// String Primitive vs String Object: Strings are primitive values, but JavaScript wraps them in String objects when methods are called.
// Prototype Inheritance: The __proto__ of a string points to String.prototype, where all string methods are defined.
// Prototype Chain: A string's prototype chain leads to Object.prototype, allowing string objects to inherit methods from both String.prototype and Object.prototype.
// Modifying Prototypes: You can add or modify methods in String.prototype, affecting all string instances, but this practice should be used cautiously.
