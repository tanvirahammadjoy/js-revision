// In JavaScript, an Array is a special type of object used to store multiple values in a single variable. Arrays can hold values of any data type, including numbers, strings, objects, and even other arrays (which creates a multi-dimensional array). Arrays are zero-indexed, meaning the first element is accessed using index 0.

// Key Features:
// Dynamic Length: Arrays in JavaScript can dynamically resize, meaning you can add or remove elements without specifying the initial size.
// Indexed: Each element in an array is accessed via a numerical index, starting from 0.
// Heterogeneous: Arrays can store different types of values (numbers, strings, booleans, etc.).

// Here are key JavaScript array topics to explore:

// 1. Array Creation and Initialization:
// Using array literals ([]) and the Array constructor.
// Sparse arrays and pre-defined lengths.

// 2. Accessing and Modifying Elements:
// Index-based access and modification.
// Array destructuring.

// 3. Array Methods:
// * Mutating Methods:
// push(), pop(), shift(), unshift()
// splice(), sort(), reverse()

// * Non-Mutating Methods:
// concat(), slice(), map(), filter(), reduce(), forEach(), every(), some(), find(), findIndex()
// indexOf(), lastIndexOf(), includes()

// 4. Iterating Over Arrays:
// Loops: for, for...of, forEach(), map(), reduce().

// 5. Array-Like Objects:
// Converting array-like objects (e.g., arguments, NodeList) using Array.from() or spread syntax (...).

// 6. Multidimensional Arrays:
// Creating and manipulating arrays of arrays.

// 7. Array Spread Operator:
// Using ... to clone arrays or merge arrays.

// 8. Array Destructuring:
// Extracting values from arrays into variables.

// 9. Array Length:
// Modifying the length property and how it affects array behavior.

// 10. Array Buffers and Typed Arrays:
// For handling binary data (useful in low-level operations or Web APIs).

// Each of these topics is crucial for mastering arrays and their full range of functionalities in JavaScript.

// You can create an array using two main methods:

// 1. Array literal:
let arr1 = [1, 2, 3, "hello", true];

// 2. Using the Array constructor:
let arr2 = new Array(1, 2, 3, "hello", true);

// Common Array Methods:
// push(): Adds an element to the end of the array.
// pop(): Removes the last element from the array.
// shift(): Removes the first element from the array.
// unshift(): Adds an element to the beginning of the array.
// forEach(): Executes a function on each array element.
// map(): Creates a new array with the result of calling a function on every element.
// filter(): Creates a new array with all elements that pass a test.
// reduce(): Reduces the array to a single value by executing a function on each element.

let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]); // Output: Apple
fruits.push("Grape"); // Adds Grape at the end
console.log(fruits); // Output: ["Apple", "Banana", "Orange", "Grape"]
fruits.pop(); // delete the "Grape"
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Orange' ]

fruits.shift();
console.log(fruits); // Output: [ 'Banana', 'Orange' ]
fruits.unshift("hello first");
console.log(fruits); // Output: [ 'hello first', 'Banana', 'Orange' ]

console.log(fruits.includes("hello world")); // false
console.log(fruits.includes("hello first")); // true

let newArr = fruits.join(", ");
console.log(newArr); // hello first, Banana, Orange
console.log(typeof newArr); // string

console.log(fruits); // [ 'hello first', 'Banana', 'Orange' ] the original array will not be effect by join() method its give an new copy

// slice, splice
let newArray = ["slice", "hello", "hi", "how", "are", "you", 1, 2, 3, 4, 5, "splice"]
console.log("original A ", newArray);

const my1 = newArray.slice(1, 3); // it will live the third rang only pick 2 value [1, 2]
console.log(" slice will just two value will note effect original array B" , my1); // output : [ 'hello', 'hi' ]

console.log(newArray); // array will not modify output: ['slice', 'hello', 'hi', 'how', 'are', 'you', 1, 2, 3, 4, 5, "splice"]

let my2 = newArray.splice(1, 3); // its also include the third range [1, 2, 3]
console.log("but splice will do effect original value C:", my2); // output:  [ 'hello', 'hi', 'how' ]

console.log(newArray); // array will modified output: [ 'slice', 'are', 'you', 1, 2, 3, 4, 5, 'splice' ]





