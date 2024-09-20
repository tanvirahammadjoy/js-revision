// In JavaScript, comparison operators are used to compare values and return a boolean (true or false) based on the result. These operators are essential for controlling the flow of logic in code, especially in conditions (if, while, etc.).

// Types of Comparison in JavaScript:
// Equality (==)
// Strict Equality (===)
// Inequality (!=)
// Strict Inequality (!==)
// Greater Than (>)
// Greater Than or Equal (>=)
// Less Than (<)
// Less Than or Equal (<=)
// 1. Equality (==)
// The loose equality operator (==) compares two values for equality after performing type coercion if necessary.
// Type coercion means JavaScript will convert one or both values to a common type before making the comparison.

console.log(5 == '5');   // true (the string '5' is converted to number 5)
console.log(true == 1);  // true (true is converted to number 1)
console.log(null == undefined);  // true (special case: null and undefined are considered equal)

// 2. Strict Equality (===)
// The strict equality operator (===) compares both the value and the type without type coercion.
// If the types don't match, the result is false.

console.log(5 === '5');  // false (different types: number and string)
console.log(5 === 5);    // true (both the type and value are the same)
console.log(true === 1); // false (different types: boolean and number)

// 3. Inequality (!=)
// The loose inequality operator (!=) checks if two values are not equal, performing type coercion if necessary.

console.log(5 != '5');   // false (after type coercion, 5 equals '5')
console.log(5 != 10);    // true (5 is not equal to 10)
console.log(false != 0); // false (false is coerced to 0, so they are equal)

// 4. Strict Inequality (!==)
// The strict inequality operator (!==) checks if two values are not equal in value or type without type coercion.

console.log(5 !== '5');  // true (different types: number and string)
console.log(5 !== 5);    // false (same value and type)
console.log(true !== 1); // true (different types: boolean and number)

// 5. Greater Than (>)
// The greater than operator (>) returns true if the left operand is greater than the right operand.

console.log(10 > 5);   // true (10 is greater than 5)
console.log(5 > 5);    // false (5 is not greater than 5)
console.log('b' > 'a'); // true (compares Unicode values of characters)

// 6. Greater Than or Equal (>=)
// The greater than or equal operator (>=) returns true if the left operand is greater than or equal to the right operand.

console.log(10 >= 5);  // true (10 is greater than 5)
console.log(5 >= 5);   // true (5 is equal to 5)

// 7. Less Than (<)
// The less than operator (<) returns true if the left operand is less than the right operand.

console.log(5 < 10);   // true (5 is less than 10)
console.log(5 < 5);    // false (5 is not less than 5)
console.log('a' < 'b'); // true (compares Unicode values of characters)

// 8. Less Than or Equal (<=)
// The less than or equal operator (<=) returns true if the left operand is less than or equal to the right operand.

console.log(5 <= 10);  // true (5 is less than 10)
console.log(5 <= 5);   // true (5 is equal to 5)

// Type Coercion in Comparisons
// As mentioned earlier, some operators like == and != perform type coercion, which means JavaScript tries to convert values to a common type before comparing. This can lead to unexpected results:

console.log(0 == '');   // true (empty string is converted to 0)
console.log(null == undefined);  // true (both are considered equal)
console.log(false == '0');  // true (both are converted to 0)
console.log(true == '1');  // true (both are converted to 1)

// Best Practices:
// Always use strict comparison (=== and !==) to avoid unexpected behavior due to type coercion.
// Loose equality (==) is only recommended when you specifically want type coercion to occur.
// Special Cases in Comparison:
// NaN is not equal to anything, even itself:

console.log(NaN === NaN);  // false
console.log(NaN == NaN);   // false

// Objects and Arrays are compared by reference, not by value:

let obj1 = { a: 1 };
let obj2 = { a: 1 };
console.log(obj1 == obj2);   // false (different references)
console.log(obj1 === obj2);  // false


