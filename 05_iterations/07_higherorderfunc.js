// In JavaScript, higher-order functions are functions that can do at least one of the following:

// Take another function as an argument (a callback function).
// Return a function as a result.
// They are a fundamental concept in functional programming and provide a lot of flexibility for working with functions.

// Why Higher-Order Functions Are Useful
// They allow you to:

// Abstract common patterns into reusable functions.
// Simplify your code by reducing repetition.
// Implement powerful concepts like callbacks, closures, currying, and function composition.

// Common Higher-Order Functions in JavaScript

// Some commonly used higher-order functions are the array methods like map, filter, reduce, forEach, and sort. These methods take other functions as arguments.

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNums);

// ************************************************** maps ******************************************************* //

// map() in JavaScript
// The map() method is used to create a new array by applying a function to each element of an existing array. It transforms every element based on the logic defined in the callback function.

// Basic Syntax
// const newArray = array.map(function (currentValue, index, array) {
// Return a transformed value
// });

// currentValue: The current element being processed.
// index (optional): The index of the current element.
// array (optional): The original array that map() was called on.
// What map() Returns
// A new array where each element is the result of the callback function applied to the corresponding element in the original array.

// It does not mutate the original array. Instead, it returns a transformed copy.

// Example Use Case
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]

// In this example, the map() method creates a new array doubled, where each number from the original array is multiplied by 2.

// What Happens Behind the Scenes
// Function Invocation: Similar to forEach(), map() loops through each element of the array and calls the provided callback function with the current element, its index, and the array itself.

// Transformation: The callback function performs some operation on each element (e.g., doubling numbers, converting strings, etc.) and returns a new value.

// New Array Creation: After the function is applied to every element, map() collects all the return values into a new array and returns it.

// Immutability: The original array remains unchanged, which is key to functional programming principles where immutability is favored.

// Behind the Scenes: Execution Steps
// Create a new array: An empty array is initialized by map().
// Loop over each element: For each element in the array, the callback function is executed.
// Store results: The result of the callback is added to the new array.
// Return the new array: Once all elements are processed, the new array is returned.
// Example: Transforming Strings

const names = ["Alice", "Bob", "Charlie"];
const uppercasedNames = names.map((name) => name.toUpperCase());

console.log(uppercasedNames); // ['ALICE', 'BOB', 'CHARLIE']

// Use Cases for map()
// 1. Transforming Data: The most common use case is transforming one array into another. For example, converting an array of numbers to their squared values, or turning an array of objects into an array of specific properties.

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const names1 = users.map((user) => user.name);
console.log(names1); // ['Alice', 'Bob', 'Charlie']

// 2. Converting Data Formats: You might want to map one data format to another. For instance, converting a list of temperatures from Celsius to Fahrenheit.

const celsiusTemps = [0, 20, 30];
const fahrenheitTemps = celsiusTemps.map((c) => (c * 9) / 5 + 32);

console.log(fahrenheitTemps); // [32, 68, 86]

// 3. Calculations: You can perform mathematical operations on arrays, such as increasing prices, adding tax, or modifying scores.

const prices = [10, 20, 30];
const withTax = prices.map((price) => price * 1.1);

console.log(withTax); // [11, 22, 33]

// Differences Between map() and forEach()
// map():

// Returns a new array based on the transformations made by the callback.
// Suitable when you need to transform data or chain other array methods after it.
// Functional programming: Does not cause side effects or modify the original array.
// forEach():

// Does not return anything (returns undefined).
// Used for side effects like logging, updating external data, or modifying elements in place.
// Focuses on performing an action rather than transforming data.
// Key Differences in Use:
// Use map() when you:

// Need a new array.
// Want to perform operations that will transform the values.
// Need to chain other array methods afterward, like filter() or reduce().
// Use forEach() when you:

// Only care about performing side effects like logging, DOM updates, or modifying external variables.
// Don't need a new array, just looping over the current one.

// Chaining Methods with map()
// Since map() returns a new array, you can chain other array methods afterward.

const numbers1 = [1, 2, 3, 4, 5];

// Doubling and then filtering out numbers greater than 5
const result = numbers1.map((num) => num * 2).filter((num) => num > 5);

console.log(result); // [6, 8, 10]

// Limitations of map()
// No Early Exit: Just like forEach(), map() iterates over the entire array without an option to exit early (e.g., no break or continue).

// Always Creates a New Array: If you don’t need the new array, forEach() is more appropriate for simple iterations.

// Behind the Hood: How JavaScript Handles map()
// Array Creation: A new array is internally initialized.
// Callback Execution: For each element, the callback function is invoked with currentValue, index, and the full array.
// Collecting Results: The returned value from each callback is added to the new array.
// Return Value: After iterating over all the elements, the new array is returned.
// Practice Problem
// Try writing a simple map() transformation that converts an array of objects to an array of strings representing the names of people:

const people = [
  { name: "John", age: 28 },
  { name: "Sara", age: 22 },
  { name: "Mike", age: 32 },
];

const names2 = people.map((person) => person.name);
console.log(names2); // ['John', 'Sara', 'Mike']

// By mastering map(), you can perform powerful transformations on data and integrate this method with other functional programming concepts like filter(), reduce(), and find().

// Good question! Let's explore how the this keyword behaves inside the map() method in JavaScript.

// How this Works Inside map()
// The this keyword in JavaScript refers to the context in which the current function is executed. In the case of map(), the behavior of this depends on how the callback function is defined.

// Two Key Scenarios:
// Arrow Functions: Arrow functions do not have their own this. Instead, they inherit this from the surrounding lexical context (the scope in which the arrow function was defined).

// Regular Functions: In regular functions (not arrow functions), this is determined dynamically based on how the function is called.

// Using this Inside map() with Arrow Functions
// Since arrow functions do not bind their own this, the this inside an arrow function refers to the this of the surrounding context (outside the map() method).

const numbers5 = [1, 2, 3, 4];

const multiplier = {
  factor: 2,
  multiply: function () {
    return numbers5.map((num) => num * this.factor); // 'this' refers to multiplier object
  },
};

console.log(multiplier.multiply()); // [2, 4, 6, 8]

// In this example:

// The this inside the arrow function (used in the map() method) refers to the multiplier object.
// Since arrow functions don’t have their own this, the this.factor correctly refers to the factor property of the multiplier object.
// Using this Inside map() with Regular Functions
// In regular functions, this inside the map() method will be undefined if you don’t bind it explicitly. However, you can manually set the value of this using the second argument of the map() method.

// Example: Regular Function Without Explicit this Binding

const numbers6 = [1, 2, 3, 4];

const multiplier1 = {
  factor: 2,
  multiply: function () {
    return numbers6.map(function (num) {
      return num * this.factor; // 'this' refers to the global context (or undefined in strict mode)
    });
  },
};

console.log(multiplier1.multiply()); // Error: Cannot read property 'factor' of undefined

// In this case, this inside the regular function is undefined because regular functions do not inherit this from the outer context.

// Binding this Explicitly
// To avoid this issue, you can explicitly bind this by passing the desired context as the second argument to the map() method.

const numbers7 = [1, 2, 3, 4];

const multiplier2 = {
  factor: 2,
  multiply: function () {
    return numbers7.map(function (num) {
      return num * this.factor;
    }, this); // 'this' explicitly set to the multiplier object
  },
};

console.log(multiplier2.multiply()); // [2, 4, 6, 8]

// Here:
// We pass this as the second argument to map(), which ensures that this inside the callback refers to the multiplier object.
// How the thisArg Works Inside map()
// The second parameter of map() is the thisArg, which lets you explicitly set the value of this in the callback function. It is useful when working with regular functions where this might not behave as expected.

const numbers8 = [1, 2, 3, 4];

const multiplier3 = {
  factor: 2,
};

const result1 = numbers8.map(function (num) {
  return num * this.factor;
}, multiplier3); // 'this' is bound to the 'multiplier' object

console.log(result1); // [2, 4, 6, 8]

// In this case:

// By passing multiplier as the second argument to map(), the callback function can access the factor property using this.
// Summary
// Arrow Functions: When using an arrow function inside map(), the this keyword will refer to the outer scope (lexical this), and it doesn't need any special binding.

// Regular Functions: When using regular functions inside map(), this may not refer to the outer context unless explicitly passed as the second argument to map().

// Explicit Binding (thisArg): You can pass this manually as the second argument to map() to control the value of this inside the callback function.

// Key Example for Clarity

const numbers9 = [1, 2, 3, 4];

const multiplier4 = {
  factor: 2,
  multiplyArrow: function () {
    return numbers9.map((num) => num * this.factor); // 'this' refers to multiplier
  },
  multiplyRegular: function () {
    return numbers9.map(function (num) {
      return num * this.factor; // 'this' explicitly set via 'thisArg'
    }, this); // second argument sets 'this'
  },
};

console.log(multiplier4.multiplyArrow()); // [2, 4, 6, 8]
console.log(multiplier4.multiplyRegular()); // [2, 4, 6, 8]
