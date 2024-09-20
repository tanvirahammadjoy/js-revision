// In JavaScript, numbers are a primitive data type used to represent numeric values, including integers and floating-point numbers. JavaScript uses the IEEE 754 double-precision floating-point format, so all numbers are represented as 64-bit floating-point values, even integers.

// JavaScript provides various built-in methods for working with numbers and mathematical operations through the Number and Math objects.

// JavaScript Numbers
// 1. Number Types in JavaScript
// Integers: Whole numbers, both positive and negative (1, 100, -50).
// Floating-point numbers (floats): Numbers with decimal points (1.23, -0.5).
// Exponential notation: Large or small numbers can be written using exponential notation (5e3 for 5000, 1e-6 for 0.000001).

let intNum = 42;          // Integer
let floatNum = 3.14;      // Floating-point number
let expNum = 5e3;         // 5000 in exponential notation

// 2. Special Numeric Values
// JavaScript has some special number-related values:

// Infinity: Represents positive infinity.
// -Infinity: Represents negative infinity.
// NaN: "Not a Number" — appears when an operation can't produce a valid number.

console.log(1 / 0);        // Infinity
console.log(-1 / 0);       // -Infinity
console.log("hello" / 2);  // NaN (invalid operation)

// 3. Number Object Methods
// JavaScript's Number object provides helpful methods to work with numbers:

// Number.isNaN(): Checks if a value is NaN.
// Number.isFinite(): Checks if a value is a finite number.
// Number.parseInt() and Number.parseFloat(): Converts strings to numbers (integers and floats, respectively).
// Number.isInteger(): Checks if a value is an integer.
// Number.MIN_VALUE: The smallest positive number in JavaScript.
// Number.MAX_VALUE: The largest representable number in JavaScript.

console.log(Number.isNaN(NaN));             // true
console.log(Number.isFinite(100));          // true
console.log(Number.parseInt('42px'));       // 42
console.log(Number.parseFloat('3.14em'));   // 3.14
console.log(Number.isInteger(4.0));         // true

// 4. BigInt
// For handling extremely large integers, JavaScript provides the BigInt type, which is used for integers larger than Number.MAX_SAFE_INTEGER.
let bigInt = 12345678901234567890n;
console.log(bigInt + 10n);  // 12345678901234567900n

// Basic Math Operations
// JavaScript provides the basic arithmetic operators for mathematical calculations:

// Addition (+)
// Subtraction (-)
// Multiplication (*)
// Division (/)
// Modulus (%): Returns the remainder of a division.
// Exponentiation (**): Raises the first operand to the power of the second operand.

console.log(10 + 5);   // 15
console.log(10 - 5);   // 5
console.log(10 * 5);   // 50
console.log(10 / 5);   // 2
console.log(10 % 3);   // 1 (remainder of 10 / 3)
console.log(2 ** 3);   // 8 (2 raised to the power of 3)

// The Math Object
// JavaScript's built-in Math object provides methods and properties to perform complex mathematical operations.

// 1. Math Constants
// Math.PI: The constant π (approximately 3.14159).
// Math.E: Euler's number (approximately 2.718).
// Math.LN2: Natural logarithm of 2 (approximately 0.693).
// Math.SQRT2: Square root of 2 (approximately 1.414).

console.log(Math.PI);   // 3.141592653589793
console.log(Math.E);    // 2.718281828459045

// 2. Common Math Methods
// 1. Rounding Methods
// Math.abs(x): Returns the absolute value of x.
// Math.round(x): Rounds x to the nearest integer.
// Math.ceil(x): Rounds x up to the next largest integer.
// Math.floor(x): Rounds x down to the next smallest integer.
// Math.trunc(x): Removes the fractional part of x.

console.log(Math.abs(-5));  // 5
console.log(Math.round(4.5));   // 5
console.log(Math.ceil(4.1));    // 5
console.log(Math.floor(4.9));   // 4
console.log(Math.trunc(4.9));   // 4

// 2. Power and Square Root
// Math.pow(base, exponent): Raises the base to the exponent.
// Math.sqrt(x): Returns the square root of x.
// Math.cbrt(x): Returns the cube root of x.

console.log(Math.pow(2, 3));    // 8 (2 raised to the power of 3)
console.log(Math.sqrt(16));     // 4 (square root of 16)
console.log(Math.cbrt(27));  // 3

// 3. Absolute Value
// Math.abs(x): Returns the absolute value of x.
console.log(Math.abs(-42));   // 42

// 4. Trigonometric Methods
// Math.sin(x): Returns the sine of x (in radians).
// Math.cos(x): Returns the cosine of x (in radians).
// Math.tan(x): Returns the tangent of x (in radians).

console.log(Math.sin(Math.PI / 2));   // 1 (sine of 90 degrees or π/2 radians)
console.log(Math.cos(0));             // 1 (cosine of 0 degrees or 0 radians)
console.log(Math.tan(Math.PI / 4));   // 1 (tangent of 45 degrees or π/4 radians)

// 5. Random Numbers
// Math.random(): Returns a random floating-point number between 0 and 1 (but not including 1).

console.log(Math.random());   // A random number between 0 and 1

// To generate a random integer in a specific range (e.g., between 1 and 10):

let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);   // A random integer between 1 and 10

// 6. Logarithmic Methods
// Math.log(x): Returns Natural logarithm (base e) of x.
// Math.log10(x): Base-10 logarithm of x.
// Math.log2(x): Base-2 logarithm of x.
// Math.exp(x): Returns e raised to the power x.

console.log(Math.log(1));      // 0 (logarithm base e of 1)
console.log(Math.log10(100));  // 2 (logarithm base 10 of 100)

// 7. Max and Min
// Math.max(x, y, ...): Returns the largest of the provided numbers.
// Math.min(x, y, ...): Returns the smallest of the provided numbers.

console.log(Math.max(1, 3, 2, 5));  // 5
console.log(Math.min(1, 3, 2, 5));  // 1

// 8. Special Values


// Number Precision and Floating-Point Issues
// JavaScript has some precision issues due to the floating-point representation of numbers. For example:

console.log(0.1 + 0.2);  // Output: 0.30000000000000004

// To fix precision issues in calculations, you can use the toFixed() or toPrecision() methods to round the result:

let num = 0.1 + 0.2;
console.log(num.toFixed(2));  // Output: "0.30"

// conclusion:
// JavaScript numbers are represented as 64-bit floating-point values.You can perform basic arithmetic, rounding, and power operations using operators or the Math object.The Math object provides several useful methods for complex mathematical calculations, including trigonometric, logarithmic, and random number generation.

