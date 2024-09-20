// In JavaScript, higher-order functions are functions that can do at least one of the following:

// Take another function as an argument (a callback function).
// Return a function as a result.
// They are a fundamental concept in functional programming and provide a lot of flexibility for working with functions.

// Why Higher-Order Functions Are Useful
// They allow you to:

// Abstract common patterns into reusable functions.
// Simplify your code by reducing repetition.
// Implement powerful concepts like callbacks, closures, currying, and function composition.
// Example 1: Passing a Function as an Argument
// Here’s a common example of passing a function as an argument:

function greet(name, callback) {
  const message = `Hello, ${name}!`;
  callback(message);
}

function logMessage(message) {
  console.log(message);
}

greet("Alice", logMessage); // Logs "Hello, Alice!"

// In this example, greet is a higher-order function because it takes another function (logMessage) as an argument and calls it inside.

// Example 2: Returning a Function
// Another aspect of higher-order functions is returning a function:

function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const multiplyByTwo = multiplyBy(2); // Returns a function that multiplies by 2
console.log(multiplyByTwo(5)); // Outputs 10

// Here, multiplyBy returns a new function that multiplies the input by a certain factor. multiplyBy(2) returns a function that multiplies any number by 2.

// Common Higher-Order Functions in JavaScript
// Some commonly used higher-order functions are the array methods like ( map, filter, reduce, forEach, and sort ). These methods take other functions as arguments.

// 1. map: Transforms each element in an array based on a function.

const numbers1 = [1, 2, 3];
const doubled = numbers1.map((num) => num * 2);
console.log(doubled); // [2, 4, 6]

// 2. filter: Filters elements in an array based on a condition.

const numbers2 = [1, 2, 3, 4];
const evenNumbers = numbers2.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// 3. reduce: Reduces an array to a single value based on a function.

const numbers3 = [1, 2, 3, 4];
const sum = numbers3.reduce((total, num) => total + num, 0);
console.log(sum); // 10

// 4. forEach: Iterates over an array and executes a function for each element.

const numbers4 = [1, 2, 3];
numbers4.forEach((num) => console.log(num * 2)); // 2, 4, 6

// Behind the Scenes: How Higher-Order Functions Work
// When you pass a function as an argument or return one from another function, you're essentially treating functions as first-class citizens. JavaScript allows functions to be assigned to variables, stored in objects, passed to other functions, and returned as values, which is a key concept behind higher-order functions.

// Callback Functions: When a higher-order function takes another function as an argument, that function is known as a callback. For example, in greet('Alice', logMessage), logMessage is the callback.

// Closures: When a function is returned from another function, it often has access to variables from the outer function’s scope. This is called a closure, and it’s what makes the multiplyBy function work in the earlier example.

// Practice Problem
// To practice, try writing a higher-order function that accepts an array and a function, and applies that function to every element in the array:

function applyToEach(arr, func) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }
  return result;
}

const numbers = [1, 2, 3];
const squared = applyToEach(numbers, (num) => num * num);
console.log(squared); // [1, 4, 9]

// Higher-order functions make JavaScript more flexible, readable, and powerful, especially when handling operations on arrays or other collections of data. Let me know if you'd like to dive deeper into this topic!

// ***************************************** filter by chai ************************************* //

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//console.log(item);
//     return item
// } )

// console.log(values); // here will be error be cause foreach not return anything return undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History");

userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});
console.log(userBooks);

// ***************************************** filter ****************************************** //

// filter() in JavaScript
// The filter() method creates a new array that contains all elements from the original array that pass a test (i.e., elements that return true when evaluated by the callback function). It doesn’t change the original array.

// Basic Syntax

// const newArray = array.filter(function (currentValue, index, array) {
// Return true to keep the element, false to discard it
// });

// currentValue: The current element being processed.
// index (optional): The index of the current element.
// array (optional): The original array.

// What filter() Returns
// A new array containing all elements from the original array that passed the test in the callback function.
// It returns an empty array if no elements pass the test.
// Example Use Case

const numbers5 = [1, 2, 3, 4, 5, 6];
const evenNumbers2 = numbers5.filter((num) => num % 2 === 0);

console.log(evenNumbers2); // [2, 4, 6]

// In this example, the filter() method creates a new array, evenNumbers, which contains only the even numbers from the original array.

// What Happens Behind the Scenes
// 1. Loop Over Array: filter() iterates over each element of the array.
// 2. Callback Function Execution: For each element, the callback function is executed with the currentValue, index, and array.
// 3. Conditional Test: The callback function should return a boolean value (true or false). If true, the element is kept in the new array; if false, the element is discarded.
// 4. New Array Creation: Elements that pass the test (i.e., where the callback returns true) are collected into a new array.
// 5. Return the New Array: After iterating over all elements, the new array is returned.
// 6. Example: Filtering Objects

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const youngPeople = people.filter((person) => person.age < 30);

console.log(youngPeople); // [{ name: 'Alice', age: 25 }]

// Here, filter() returns a new array with only the objects that meet the condition (age less than 30).

// Behind the Scenes: Execution Steps
// 1. Create a New Array: filter() internally initializes an empty array.
// 2. Loop through Each Element: For every element in the array, the callback function is called.
// 3. Boolean Check: If the callback returns true, the element is included in the new array; if false, it's excluded.
// 4. Final Return: After looping through all elements, filter() returns the new array containing only the elements that passed the test.

// Use Cases for filter()

// 1. Filtering Out Specific Items:
// Use filter() to create a subset of an array. For example, you can filter out inactive users from a list of users:

const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true },
];

const activeUsers = users.filter((user) => user.active);
console.log(activeUsers); // [{ name: 'Alice', active: true }, { name: 'Charlie', active: true }]

// 2. Removing Unwanted Data:
// Remove null or undefined values from an array:

const values = [0, 1, false, 2, "", 3];
const truthyValues = values.filter((value) => Boolean(value));

console.log(truthyValues); // [1, 2, 3]

// 3. Filtering Based on Conditions:
// Create a filtered list based on specific conditions, like selecting only items that match a price range:

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 750 },
];

const affordableProducts = products.filter((product) => product.price < 800);
console.log(affordableProducts); // [{ name: 'Phone', price: 500 }, { name: 'Tablet', price: 750 }]

// Differences Between filter() and map()

// filter():
// Used to create a subset of an array based on a test.
// It removes elements that don’t meet the condition (where the callback returns false).
// The length of the new array may be shorter or equal to the original array, but never longer.

// map():
// Transforms each element of the array and creates a new array of the same length.
// It doesn’t exclude elements but rather modifies each one.

// How this Works Inside filter()
// Just like in map() or forEach(), the this keyword behaves according to how the callback function is defined:

// Arrow Function with filter()
// If you use an arrow function inside filter(), the this keyword will refer to the lexical scope (the surrounding context).

const numbers6 = [1, 2, 3, 4, 5, 6];

const filterObj = {
  threshold: 4,
  filterNumbers: function () {
    return numbers6.filter((num) => num > this.threshold); // 'this' refers to filterObj
  },
};

console.log(filterObj.filterNumbers()); // [5, 6]

// In this example, since we are using an arrow function, this refers to filterObj (the object containing threshold).

// Regular Function with filter()
// When using a regular function, this will not refer to the surrounding object unless explicitly bound or passed using the thisArg argument.

const numbers7 = [1, 2, 3, 4, 5, 6];

const filterObj1 = {
  threshold: 4,
  filterNumbers: function () {
    return numbers7.filter(function (num) {
      return num > this.threshold; // 'this' will be undefined here unless we pass it explicitly
    }, this); // Explicitly pass 'this'
  },
};

console.log(filterObj1.filterNumbers()); // [5, 6]

// In this case, passing this as the second argument to filter() allows the callback to access filterObj.threshold.

// How thisArg Works Inside filter()
// The second argument of filter() (called thisArg) can be used to explicitly set the this value inside the callback.

const numbers8 = [10, 15, 20, 25, 30];

const context = { threshold: 20 };

const result = numbers8.filter(function (num) {
  return num > this.threshold;
}, context); // 'this' refers to context

console.log(result); // [25, 30]

// Here, the context object is passed as thisArg, allowing the callback function to access this.threshold correctly.

// Summary
// filter(): Creates a new array with elements that pass the test defined in the callback function.
// Returns: A new array with the filtered elements (or an empty array if no elements pass the test).
// Use Case: Used when you need to select or exclude elements from an array based on a specific condition.
// this in filter():
// Arrow functions: Inherits this from the surrounding context.
// Regular functions: this needs to be explicitly passed using the thisArg argument or bound manually.
// Example Practice Problem
// Try writing a filter() that removes all falsy values (false, 0, null, undefined, NaN, "") from an array:

const values1 = [0, 1, false, 2, "", 3, NaN, 4];
const filtered = values1.filter(Boolean); // Using Boolean constructor to filter truthy values
console.log(filtered); // [1, 2, 3, 4]
