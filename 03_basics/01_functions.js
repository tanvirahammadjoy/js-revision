// 1. Function Declaration vs. Function Expression:
// Declaration: Traditional way of defining a function using the function keyword.
// function greet() {
//   console.log("Hello!");
// }

// function greet(name) {
//   return `Hello, ${name}!`;
// }
// console.log(greet("Alice"));
// Behind the Scenes: Function declarations are hoisted, meaning they are moved to the top of their scope. Before the code runs, JavaScript "knows" about the function, so it can be called before it is defined.

// console.log(greet("Alice")); // Works due to hoisting
// function greet(name) {
//   return `Hello, ${name}!`;
// }

// expression: Defining a function inside an expression and assigning it to a variable.
// const greet = function (name) {
//   return `Hello, ${name}!`;
// };
// console.log(greet("Alice"));
// Behind the Scenes: Function expressions are not hoisted. The variable greet is hoisted, but not initialized with the function until the line is executed. So calling it before initialization will throw an error.

// console.log(greet("Alice")); // Error: greet is not a function can not use before initialization
// const greet = function (name) {
//   return `Hello, ${name}!`;
// };

// 2. Arrow Functions:
// Shorter syntax for writing functions. They do not bind their own this context.

// const greet = () => console.log("Hello!");
// greet();

// 3. Higher-Order Functions:
// Functions that take other functions as arguments or return functions.
// const greet = (name) => `Hello, ${name}`;
// const process = (func, value) => func(value);
// process(greet, "John");

// 4. Callback Functions:
// A function passed as an argument to another function, often used in asynchronous programming.
// setTimeout(() => {
//   console.log("Executed after delay");
// }, 1000);

// 5. closures:
// A function that retains access to variables from its outer scope, even after that outer function has executed.
// function outer() {
//   const message = "Hello";
//   return function inner() {
//     console.log(message);
//   };
// }
// const closure = outer();
// closure(); // "Hello"

// 6. Immediately Invoked Function Expression (IIFE):
// A function that runs as soon as it is defined, often used to create a local scope
// (function () {
//   console.log("IIFE executed!");
// })(); // IIFE executed!

// 7. Rest and Spread Operators in Functions:
// Allows a function to accept an indefinite number of arguments as an array.
// Rest:
// function sum(...numbers) {
//   return numbers.reduce((acc, num) => acc + num, 0);
// }
// let sum1 = sum(1, 2, 3); // 6
// console.log(sum1); // 6

// Behind the Scenes: The rest operator ... collects all the function arguments into an array. In the example above, numbers contains all the arguments passed to sum() and can be manipulated as an array.

// Spread:
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log(combined); // [1, 2, 3, 4, 5, 6]

// Behind the Scenes: The spread operator ... takes an array and spreads its elements out into individual values. It's often used to combine arrays, pass array elements as arguments, or copy objects.

// 8. Default Parameters:
// Provides default values for function parameters.

// 9. Function Scope vs. Block Scope:
// Function scope (var) means variables are scoped to the function, whereas block scope (let, const) restricts variables to the block where they're defined.

// function example() {
//   console.log(x); // undefined due to hoisting
//   var x = 10;
//   console.log(x); // 10
// }
// example();

// 10. Recursive Functions:
// A function that calls itself, useful for tasks like traversing data structures

// function factorial(n) {
//   return n <= 1 ? 1 : n * factorial(n - 1);
// }
// factorial(5);
// console.log(factorial(5)); // 120

// 11. The bind(), call(), and apply() Methods:
// Used to control the this context in functions

// bind():
// const person = {
//   name: "Alice khan",
//   age: 22,
//   greet() {
//     console.log(`Hello, my name is ${this.name} my age ${this.age}`);
//   }
// };

// person.greet(); // this is also work
// const greetPerson = person.greet(); // no bind key word is here be cause without return we can't hold value any where
// greetPerson(); // this is not will be work this is not an function error

// const greetPerson = person.greet.bind(person);
// greetPerson(); // Hello, my name is Alice khan my age 22

// Behind the Scenes: bind() creates a new function that, when called, has its this keyword set to the provided value (person in this case). The original function isn't executed until the new function is invoked. This is useful when you need to pass functions as arguments and want to control the context (this).

// call():
// function sayHello(age) {
//   console.log(`Hello, my name is ${this.name} and I am ${age}`);
// }
// const user = { name: "Bob" };
// sayHello.call(user, 25); // Hello, my name is Bob and I am 25

// Behind the Scenes: call() immediately invokes the function with a specified this value and individual arguments. It allows us to set the value of this dynamically at function execution time.

// apply():
// sayHello.apply(user, [10, 20, 25]); // Hello, my name is Bob and I am 30

// Behind the Scenes: apply() works like call(), but it accepts an array of arguments instead of individual ones. It's useful when you have arguments in an array form.

// const person = { name: "Alice" };
// function greet() {
//   console.log(`Hello, ${this.name}`);
// }
// const boundGreet = greet.bind(person);
// boundGreet(); // "Hello, Alice"

// 12. Anonymous Functions:
// Functions without a name, typically used as arguments to other functions or immediately executed.
// setTimeout(function () {
//   console.log("Anonymous function");
// }, 1000);

// 13. Pure Functions:
// A function that, given the same input, always returns the same output without side effects.
// const add1 = (a, b) => a + b;
// add1(10, 5);
// function add(a, b) {
//   return a + b;
// }
// console.log(add(3, 4)); // 7

// 14. currying:
// A function that takes multiple arguments one at a time and returns a new function for each argument.

// const add2 = (a) => (b) => a + b;
// add2(2)(3);
// console.log(add2(2)(3)); // 5

// 15. Function Composition:
// Combining multiple functions to create new functions
// const multiply = (x) => x * 2;
// const square = (x) => x * x;
// const composed = (x) => square(multiply(x));
// composed(3); // 36

// const double = (x) => x * 2;
// const increment = (x) => x + 1;
// const composedFunction = (x) => double(increment(x));
// console.log(composedFunction(3)); // (3 + 1) * 2 = 8

// 16. Generator Functions:
// A special type of function that can yield multiple values over time, used for lazy iteration
// function* generator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const gen = generator();
// console.log(gen.next().value); // 1

// 17. Memoization
// function memoizedAdd() {
//   const cache = {};
//   return (n) => {
//     if (n in cache) {
//       console.log("Fetching from cache");
//       return cache[n];
//     }
//     console.log("Calculating result");
//     const result = n + 10;
//     cache[n] = result;
//     return result;
//   };
// }
// const add = memoizedAdd();
// console.log(add(5)); // Calculating result -> 15
// console.log(add(5)); // Fetching from cache -> 15

// Behind the Scenes: Memoization stores the result of expensive function calls and reuses the cached result when the same inputs occur again. Behind the scenes, it uses a closure to maintain the cache and avoid recalculating the result.

// function name(parameter) {
//   console.log("hello World");
// }
// name // this is call reference
// name(argument) // this execute

// function hello(num1, num2) {
//   console.log(num1 + num2);
// }

// hello(2, 5); // output will: 7
// if we want to stor the value we can't without return like
// let sum = hello(5, 5); // but here it's executed
// console.log(sum); // undefined

// function hello(num1, num2) {
//   return `${num1 + num2}`;
// }

// hello(5, 10); // now it will not give any result be cause we have return the value
// now we have to hold the value in an variable other wise consoleLog it like this

// let sum1 = hello(5, 10);
// console.log(sum1); // output: 15

// function func(param) {
//     let hello = "hello world !!!"
//     return hello
    // after return any kind operation will not work
    // hello = "hi how are you"; // will not show 
// }
// console.log(func());

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage()) // it will pick the default value
// console.log(loginUserMessage("tanvir")) // here dynamic name

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
  username: "hitesh",
  prices: 199,
};

// we can take value like this from an object
function handleObject(anyobject) {
    // in professional code we have to check by if an else is there value exist or not
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

handleObject(user)

// taking direct object
handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

// ******************************this**************************************

// this Keyword in JavaScript
// The this keyword in JavaScript refers to the context in which a function is called. Its value depends on how a function is invoked, not where it is written. Understanding how this works is essential because it can behave differently depending on the context.

// 1. this in Global Context
// In the global context, outside of any function, this refers to the global object.
// In a browser, the global object is window.
// In Node.js, the global object is global meaning not window it will be an empty {}.

console.log(this); // In a browser: `window`, in Node.js: `global {}`
// Here, this refers to the global object.

// 2. this Inside a Function
// When you call a normal function, this refers to the global object in non-strict mode. However, in strict mode ('use strict'), this is undefined.
// Non-Strict Mode Example:
function myFunction() {
  console.log(this); // window (in a browser)
}
myFunction();

// Strict Mode Example:
"use strict";
function myFunction() {
  console.log(this); // undefined
}
myFunction();
// In strict mode, this does not default to the global object. Instead, it remains undefined unless explicitly set.

// 3. this Inside a Method
// When you call a function as a method of an object, this refers to the object that owns the method.
const person = {
  name: "Alice",
  greet: function () {
    console.log(this.name); // 'Alice'
  },
};

person.greet();
// Here, this.name refers to the person object, so this is bound to the object person, and this.name outputs "Alice".

// 4. this in a Constructor Function
// In a constructor function (when a function is called with new), this refers to the new object that is created by the constructor.
function Person(name) {
  this.name = name;
}

const alice = new Person('Alice');
console.log(alice.name); // 'Alice'
// Here, this refers to the instance of Person that is being created (i.e., alice).

// 5. this in Arrow Functions
// Arrow functions do not have their own this. Instead, they inherit this from the surrounding lexical context (where they were defined).
const person2 = {
  name: "Alice",
  greet: function () {
    const innerGreet = () => {
      console.log(this.name); // 'Alice'
    };
    innerGreet();
  },
};

person2.greet();
// In this example, innerGreet is an arrow function and doesn’t bind its own this. Instead, it uses the this from greet, which is the person object.

// 6. this with call, apply, and bind
// You can explicitly set the value of this using call(), apply(), or bind().
// call() and apply() immediately invoke the function with the specified this value.
// bind() returns a new function with the specified this value but does not invoke the function immediately.

function sayHello() {
  console.log(this.name);
}

const person1 = { name: 'Alice' };
const person3 = { name: 'Bob' };

sayHello.call(person1); // 'Alice'
sayHello.apply(person3); // 'Bob'

const boundFunction = sayHello.bind(person1);
boundFunction(); // 'Alice'
// Here, call and apply immediately call sayHello with this set to person1 and person2. The bind method returns a new function that is permanently bound to person1.

// 7. this in Event Handlers
// In event handlers, this usually refers to the DOM element that triggered the event.
const button = document.querySelector("button");
button.addEventListener("click", function () {
  console.log(this); // The button element
});
// Here, this refers to the button element that was clicked.

// Summary of this:
// Context	Value of this
// Global Context 	                Global object (window in browser)
// Function in Non-Strict Mode	    Global object
// Function in Strict Mode	        undefined
// Method	                        Object that owns the method
// Constructor Function	            New instance created by the constructor
// Arrow Function	                Lexical this (inherits from surrounding context)
// Event Handler	                DOM element that triggered the event
// call, apply, bind	            this explicitly set by the method
