// forEach() in JavaScript
// The forEach() method is used to iterate over the elements of an array, executing a function for each element. It's primarily useful when you need to perform an action on each item in an array but don’t need to transform or return anything from the array.

// Basic Syntax
array.forEach(function (currentValue, index, array) {
  // Do something with currentValue
});

// currentValue: The element currently being processed in the array.
// index (optional): The index of the current element.
// array (optional): The array that forEach() was called upon.

const numbers1 = [1, 2, 3, 4, 5];

numbers1.forEach(function (num) {
  console.log(num * 2);
});
// This prints:
// 2;
// 4;
// 6;
// 8;
// 10;

// In this example, forEach() iterates over the numbers array and multiplies each number by 2, logging the result to the console.

// What forEach() Returns
// One important thing to note is that forEach() does not return anything. It returns undefined. Its purpose is to perform side effects, like logging to the console or modifying an external variable, but not to transform the array like map() or filter().

const result = numbers.forEach((num) => num * 2);
console.log(result); // undefined

// What Happens Behind the Scenes
// 1. Function Invocation: forEach() loops over each element in the array and calls the callback function for each one.
// 2. No Early Exit: Unlike for loops, you cannot break out of a forEach() loop early. It will always iterate over the entire array.
// 3. This Context: By default, forEach() does not alter the context (this). However, you can pass an optional second argument to set the value of this inside the callback.

const obj = {
  multiplier: 2,
  multiply: function (numbers) {
    numbers.forEach(function (num) {
      console.log(num * this.multiplier); // NaN (this refers to the global context)
    });
  },
};

obj.multiply([1, 2, 3]);

// To fix this, you can pass the object itself as the this context:

const obj1 = {
  multiplier: 2,
  multiply: function (numbers) {
    numbers.forEach(function (num) {
      console.log(num * this.multiplier); // Correctly refers to obj's multiplier
    }, this); // Pass 'this' as the second argument
  },
};

obj.multiply([1, 2, 3]); // 2, 4, 6

// Behind the Scenes: Steps of Execution
// 1. The forEach() method starts at the first element of the array and invokes the provided callback function.
// 2. The current element, index, and the array are passed to the callback.
// 3. The callback function executes with these arguments.
// 4. This process repeats for each element in the array.
// 5. Once all elements are processed, forEach() returns undefined and finishes.

// Difference from map(), filter(), and reduce()
// forEach(): Executes a function on each element but does not return a new array or a transformed result. It’s purely for side effects.

// map(): Transforms each element and returns a new array.
const doubled = numbers.map((num) => num * 2); // [2, 4, 6, 8, 10]

// filter(): Returns a new array containing elements that satisfy a given condition.
const evenNumbers = numbers.filter((num) => num % 2 === 0); // [2, 4]

// reduce(): Reduces the array to a single value (e.g., sum, product).
const sum = numbers.reduce((acc, num) => acc + num, 0); // 15

// Use Cases for forEach()
// 1. Side Effects: When you need to perform an action for every element without creating a new array. Examples include logging data, updating the DOM, or modifying objects.
const items = ["apple", "banana", "orange"];
items.forEach((item) => console.log(item)); // Logs each item

// 2. Modifying External Data: You can use forEach() to modify variables outside of its scope (although it's generally considered better practice to use methods like map() or reduce() for this).
let sum1 = 0;
numbers.forEach((num) => (sum += num));
console.log(sum1); // 15

// DOM Manipulation: It’s often used to iterate over arrays of DOM elements to apply changes.
const elements = document.querySelectorAll(".class");
elements.forEach((el) => (el.style.color = "blue"));

// Key Differences in Use:
// Use forEach() when:

// You want to loop through an array without caring about the return value.
// You need to perform side effects like logging or updating data in place.
// Use map(), filter(), or reduce() when:

// You need to transform or reduce the array to a new structure.
// You expect to get a return value from each iteration.
// Limitations of forEach()
// No break or continue: You can’t stop or skip iterations. To work around this, you might need to use a for loop.

// Performance: Since it doesn't return anything and only runs for side effects, forEach() might not be as efficient as using more appropriate methods like map() or reduce() when returning data is necessary.

// Let me know if you'd like any more clarifications or examples!

// forEach: Iterates over an array and executes a function for each element.

const numbers = [1, 2, 3];
numbers.forEach((num) => console.log(num * 2)); // 2, 4, 6

const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (val) {
  console.log(val);
});

coding.forEach((item) => {
  console.log(item);
});

function printMe(item) {
  console.log(item);
}

coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
