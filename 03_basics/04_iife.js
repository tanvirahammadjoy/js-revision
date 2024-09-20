// IIFE (Immediately Invoked Function Expression)
// An Immediately Invoked Function Expression (IIFE) is a function that is executed as soon as it is defined. It's a powerful tool for creating private scopes and avoiding global variable pollution.

(function () {
  console.log("This is an IIFE!");
})();

// we have to give semicolon must after the IIFE function to write another IIFE function. other wise we will get error!!!!!!!

// In this example:
// The function is defined inside parentheses (function() {...}).
// The function is then immediately executed with ().
// The purpose of an IIFE is to execute code immediately without leaving anything behind in the global scope.

// 1. Why Use an IIFE?
// IIFE is commonly used to protect variables from polluting the global scope. Variables inside the IIFE are not accessible from outside, which helps prevent naming conflicts.

(function () {
  var secret = "This is a secret variable";
  console.log(secret); // "This is a secret variable"
})();
// console.log(secret); // Error: secret is not defined

// In this example, secret is confined to the IIFE and cannot be accessed globally.

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

// 2. IIFE with Parameters
// You can also pass arguments into an IIFE, just like any other function.

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");

(function (name) {
  console.log("Hello " + name);
})("Alice");

// Here, "Alice" is passed as an argument to the IIFE.

// 3. Benefits of IIFE
// Avoid Polluting the Global Namespace: IIFE ensures that variables are contained within the function's scope and do not affect the global scope.
// Data Privacy: IIFE is a pattern for creating private variables that cannot be accessed from outside the function.
// Safe from Overwriting: Since the function is executed immediately, there's no risk of accidentally reassigning the function or its variables.

// Example of IIFE in Practice (Closure):
// IIFEs are often used to create closures and to safely maintain state.

var counter = (function () {
  var count = 0; // Private variable

  return function () {
    count++;
    return count;
  };
})();

console.log(counter()); // 1
console.log(counter()); // 2

// In this example:

// The IIFE returns an inner function that can access the count variable even after the IIFE has executed.
// The count variable is private and is not accessible directly, but it persists through the closure created by the IIFE.

// Conclusion:
// this: Its value is dynamic and depends on how a function is invoked. It can point to the global object, an instance of a class, the current object, or even be undefined in strict mode.
// IIFE: Useful for creating a private scope, immediately executing a function, and preventing global namespace pollution.

// Together, understanding this and IIFE helps you manage scopes, handle this binding, and maintain encapsulated code.
