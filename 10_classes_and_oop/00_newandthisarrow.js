// Let's go step by step and explore how the new keyword works in JavaScript, particularly in the context of constructors. I’ll first give you a scenario where things go wrong, explain why that happens, and then we’ll solve it using the new keyword.

// Scenario Without new
// Imagine you're trying to create a simple object using a constructor function for a Person. Here's how your code might look without using the new keyword:

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = Person('Alice', 25); // Forgot the 'new' keyword
console.log(person1); // undefined
console.log(name); // 'Alice'
console.log(age); // 25

// sort of like this
console.log(window.name); // alice
console.log(window.age); // 25

// Problem: Why It’s Not Working
// Undefined object: The variable person1 is undefined. This is because when you call the Person function without the new keyword, the function doesn't return a new object. Instead, it just runs the function like a regular one, and by default, functions return undefined unless you explicitly return something.

// Global variable leakage: Instead of assigning name and age to the person1 object, they are added to the global scope (in non-strict mode) because this in a regular function refers to the global object (window in browsers). Hence, name and age are defined globally.

// This behavior creates unexpected results and is definitely not what we want when using constructor functions.

// Solution: Using the new Keyword
// Let's fix this by using the new keyword correctly:

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person2 = new Person('Alice', 25); // Correct usage of 'new'
console.log(person2); // { name: 'Alice', age: 25 }

// How new Solves the Problem
// When you use the new keyword, here’s what happens behind the scenes:

// 1. An empty object is created: A new empty object is created by JavaScript and becomes the value of this inside the constructor function.

// 2. Linking to a prototype: The newly created object is linked to the constructor function’s prototype (i.e., Person.prototype).

// 3. Property assignment: The constructor function (Person) is executed with this referring to the new object. So, when you assign this.name and this.age, they get added as properties of the newly created object.

// 4. Return the object: By default, the new object is returned unless you explicitly return something else.

// Example With Explanation:

function Person(name, age) {
  this.name = name; // 'this' refers to the new object created
  this.age = age;
}

// Creates a new 'Person' object
const person3 = new Person('Alice', 25);
console.log(person3); // { name: 'Alice', age: 25 }

// Here’s the breakdown:

// When you call new Person('Alice', 25), JavaScript creates a new object (let's call it tempObject).
// The this keyword inside the Person function now refers to tempObject.
// this.name = name means tempObject.name = 'Alice'.
// this.age = age means tempObject.age = 25.
// Finally, tempObject is returned automatically.

// Without new vs. With new
// Without new: The function runs in the global context, and this refers to the global object, causing global variable leakage.

// With new: A new object is created, and this refers to that object, preventing global variables from being created and ensuring the constructor works as expected.

// Conclusion:
// Using new ensures that when you call a constructor function, a new object is created and returned. Without new, the function behaves as a normal function, which leads to unintended results.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person20 = Person('Alice', 25); // Forgot the 'new' keyword
const person21 = Person('Aliceahammad', 35); // it is Overwritten on parson20 un expectedly without calling
console.log(person20); // not undefined there here added value ok but there unnecessary global variable leakage method with the results

 // but the problem when add person2 argument it’s override the the person1 without call why the this problem explain me in depth please first problem explain why than solution???

console.log(name); // 'Alice'
console.log(age); // 25

// The issue you’re encountering is due to the behavior of the this keyword when you forget to use the new keyword with a constructor function. Let’s break this down and understand why person1 is being overwritten when person2 is called and how this relates to the global object.

// Problem: Why Does person20 Get Overwritten?
// Without the new keyword, the Person function behaves like a regular function, not a constructor. So when you call Person('Alice', 25), it runs as a standard function, and in non-strict mode, the this keyword inside the function points to the global object (e.g., window in browsers).

// Global assignment: Inside the Person function, you're doing this.name = name and this.age = age. Since this refers to the global object when new is not used, it assigns name and age to global variables, effectively doing:

window.name = 'Alice';
window.age = 25;

// Global variable overwrite: When you call Person('Aliceahammad', 35) (for person2), the same thing happens again: the global object (window) gets its name and age properties updated to:

window.name = 'Aliceahammad';
window.age = 35;

// As a result, when you log the name and age, they show the latest values from the global scope, which are 'Aliceahammad' and 35. There’s no separate object for person1 or person2; both calls are simply updating global variables.

// Why person1 is undefined: Since you forgot the new keyword, the function does not return anything explicitly. In JavaScript, if a function doesn’t return anything, it implicitly returns undefined. Therefore, person1 is undefined.

// Summary of the Problem:
// The first time you call Person('Alice', 25), the global name and age variables are set to 'Alice' and 25.
// The second time you call Person('Aliceahammad', 35), it overwrites the global name and age with 'Aliceahammad' and 35.
// The person1 and person2 variables are both undefined because the Person function doesn't return a value without new.
// Solution: Use the new Keyword
// The new keyword solves this problem by ensuring that each time you call the Person constructor, a new object is created and the this keyword refers to that object, not the global object.

// Here’s the corrected version:

function Person(name, age) {
  this.name = name;  // 'this' now refers to a newly created object
  this.age = age;
}

const person16 = new Person('Alice', 25); // Correctly using 'new'
const person17 = new Person('Aliceahammad', 35); // Another new object is created

console.log(person16); // { name: 'Alice', age: 25 }
console.log(person17); // { name: 'Aliceahammad', age: 35 }
console.log(name); // Now, 'name' is not leaking globally, so 'name' is undefined in global scope

// Why It Works Now:
// New object creation: The new keyword ensures that a new object is created for each call (person1 and person2). So, two separate objects are created with different values.

// No global leakage: Since this now refers to the new object, the name and age properties are set on that object, not on the global object (window). This prevents global variable pollution.

// Independent objects: Each call to the Person constructor results in a completely separate object, so person1 and person2 don’t interfere with each other’s data.

// Conclusion:
// The problem arises because, without new, this refers to the global object, causing unintended global variable assignments and overwriting values. Using new ensures that this refers to a new object, thus solving the issue and preventing any conflict between multiple object instances.

// ** can you explain me please about new key word and this key word behind the scene in detail when way in use new keyword?

// No worries—let’s dive deep into what happens behind the scenes when we use the new keyword in JavaScript, and how the this keyword behaves with and without it.

// Understanding new and this
// The new keyword in JavaScript plays a crucial role in object creation, particularly when using constructor functions or classes. When you use new, JavaScript performs several steps under the hood to create and initialize a new object.

// Let’s explore what happens step by step when you use new, and then understand how this works in different contexts.

// What Happens Behind the Scenes with new?
// When you call a function with the new keyword, JavaScript does the following behind the scenes:

// 1. Creates a New Object: JavaScript creates a new object. The new keyword is essentially responsible for instantiating (creating) a new object. This object is initially empty.

const newObj = {};  // an empty object is created

// 2. Sets the Prototype: The prototype of the new object is linked to the constructor function’s prototype. In other words, newObj gets linked to Person.prototype (or whatever constructor you’re using).

newObj.__proto__ = Person.prototype;

// 3. Binds this to the New Object: Inside the constructor function (e.g., Person), the this keyword is set to refer to the new object (newObj), not the global object (window).

this = newObj;  // Inside the constructor function, 'this' refers to the new object

// 4. Executes the Constructor Function: The constructor function is executed with this bound to the new object. This allows you to assign properties to the new object using this inside the constructor.

// Inside Person function:
this.name = name;  // This assigns the 'name' property to the new object
this.age = age;    // This assigns the 'age' property to the new object

// Returns the New Object: Unless the constructor function explicitly returns an object, the newly created object (newObj) is returned by default.

return newObj;  // The new object is returned automatically

// Code Example with new
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person4 = new Person('Alice', 25);
console.log(person4);  // { name: 'Alice', age: 25 }

// Here’s what happens when new Person('Alice', 25) is executed:

// 1. A new object is created.
// 2. The Person.prototype is linked to the new object’s prototype.
// 3. The this inside the Person function now refers to the new object.
// 4. The name and age properties are assigned to the new object using this.
// 5. The new object is returned automatically.

// What Happens Without new?
// When you don’t use the new keyword, the function behaves like a regular function, and the this keyword is no longer bound to a new object. Instead, it behaves as follows:

// In non-strict mode: this refers to the global object (i.e., window in browsers).

// In strict mode: this will be undefined, leading to errors if you try to assign properties to this.

// Example:

function Person(name, age) {
  this.name = name;  // 'this' refers to the global object (window) in non-strict mode
  this.age = age;
}

const person18 = Person('Alice', 25);  // Calling without 'new'
console.log(person18);  // undefined
console.log(name);     // 'Alice' (global variable)
console.log(age);      // 25 (global variable)

// Breakdown of Issues Without new:
// Global this: When new is omitted, this inside the function refers to the global object (window in browsers) rather than a new object. This results in name and age being added as global variables instead of object properties.

// No object creation: Without new, there’s no new object being created. The function doesn’t return an object unless you explicitly return one, so person1 is undefined.

// Global pollution: Variables leak into the global scope, leading to potential conflicts or unintended behavior in other parts of the program.

// The Difference Between new and Regular Function Calls
// Let’s compare the behavior of this with and without new:

// Without new (Regular Function Call):
// Non-strict mode: this refers to the global object (window).
// Strict mode: this is undefined.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person19 = Person('Alice', 25);  // No 'new', regular function call
console.log(person19);  // undefined
console.log(window.name);  // 'Alice', leaked into global scope
console.log(window.age);   // 25, leaked into global scope

// With new (Constructor Call):
// this refers to the newly created object.
// A new object is automatically returned, even if the function doesn’t explicitly return an object.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person5 = new Person('Alice', 25);  // Using 'new'
console.log(person5);  // { name: 'Alice', age: 25 }

// Conclusion: Key Differences Between new and Regular Function Calls
// new ensures that a new object is created, and this inside the constructor refers to that object.
// Without new, this refers to the global object or undefined in strict mode, causing global variables to be set and no new object to be returned.

// Using new is essential when creating instances of constructor functions to avoid global variable pollution and ensure each object instance is unique.

// I think now I can understand more clearly about prototype do you can continue prototype how work behind the scenes how function getting there how string getting there how object getting there how arrays getting there hoop you can open the cover step by step?

// Absolutely! Now that you've got a solid understanding of how the new keyword and this work, let's dive deeper into how prototypes work behind the scenes. This is a crucial concept in JavaScript, especially when it comes to inheritance and how functions, strings, objects, arrays, and other data types share behavior.

// What Is a Prototype?
// In JavaScript, every object (and this includes functions, arrays, etc.) has a hidden property called [[Prototype]] (also known as the internal prototype). This [[Prototype]] is a reference to another object, and this chain of prototypes is used to look up properties or methods that are not directly found on the object itself.

// Step-by-Step Breakdown of How Prototypes Work
// Let’s walk through the steps of how prototypes work, including how functions, strings, objects, and arrays inherit methods.

// 1. Every Object Has a Prototype
// In JavaScript, objects are created using constructors (like Object, Function, Array, etc.), and these constructors have their own prototypes. Any object created by a constructor will have a hidden reference to the constructor's prototype object.

// For example:

function Person(name) {
  this.name = name;
}

const person6 = new Person('Alice');  // Created using a constructor function

// person1 is an object created by the Person constructor.
// Behind the scenes, person1 has a hidden [[Prototype]] that references Person.prototype.
// Prototype chain: If person1 doesn’t have a property or method, JavaScript will look up the chain to Person.prototype to find it.

// 2. Prototype Chain
// When you try to access a property or a method on an object, JavaScript will first look at the object itself. If the property or method is not found, it will continue searching up the prototype chain.

// Here’s how it works:

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const person7 = new Person('Alice');
person7.greet();  // Works because JavaScript finds 'greet' on Person.prototype
person7.greet() // does not find greet on person1 directly, so it looks up the chain to Person.prototype and finds it there.

// 3. Constructor Function and Prototype
// When you define a function in JavaScript (like Person), it automatically gets a prototype property, which is an object that stores shared methods and properties.

// When you create a new instance using new, JavaScript links the new object to the constructor's prototype.
// Let’s visualize this:

function Person(name) {
  this.name = name;
}

// This is the prototype object
Person.prototype.greet = function() {
  console.log(`Hi, I'm ${this.name}`);
};

// const person1 = new Person('Alice');

// person1's [[Prototype]] points to Person.prototype
// person1.greet();  // Works because 'greet' is found on Person.prototype
// When you call person1.greet(), JavaScript first looks at person1 itself for the greet method. Since it's not there, it looks at Person.prototype, where it finds the method.
// 4. How Strings and Arrays Inherit Methods
// Now, let’s explore how strings and arrays inherit their methods. Both strings and arrays are objects in JavaScript, and they have their own prototype chains.

// Strings:

let str = "Hello, World!";

// Behind the scenes:
console.log(str.toUpperCase());  // 'HELLO, WORLD!'

// Here’s how the toUpperCase method is found:

// str is a primitive string.
// JavaScript temporarily wraps str in a String object (autoboxing) so it can look for methods like toUpperCase.
// JavaScript then checks String.prototype, where it finds the toUpperCase method.
// Finally, it executes the method on the string.

// Internally:
str.__proto__ === String.prototype;  // true

// Arrays:
// Similarly, arrays have methods like map(), forEach(), and reduce() that are stored in Array.prototype.

let arr = [1, 2, 3];
arr.map(x => x * 2);  // [2, 4, 6]

// Internally:
arr.__proto__ === Array.prototype;  // true

// The map method is not directly on the array arr. Instead, it’s on Array.prototype.
// JavaScript looks up the prototype chain and finds map() on Array.prototype.

// 5. Objects and Prototypes
// Objects themselves also have a prototype chain. If you create a plain object, it will inherit from Object.prototype.

let obj = { name: 'Alice' };

// Internally:
obj.__proto__ === Object.prototype;  // true

console.log(obj.hasOwnProperty('name'));  // true

// The hasOwnProperty method is found on Object.prototype.
// obj doesn't have hasOwnProperty, so JavaScript checks Object.prototype.

// 6. Prototype Chain Lookup
// When a property or method is accessed, JavaScript looks through the object and its prototypes in the following way:

// Check the object itself.
// If the property or method isn’t found, go to the object’s [[Prototype]].
// Repeat step 2 until the property is found or the end of the chain is reached (null).
// Example:

function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function() {
  console.log(`Hi, I'm ${this.name}`);
};

const person8 = new Person('Alice');

person8.sayHi();  // Found on Person.prototype
console.log(person8.toString());  // Found on Object.prototype

// sayHi() is found on Person.prototype.
// toString() is not defined on person1 or Person.prototype, so JavaScript looks at Object.prototype, where it finds toString().

// 7. How JavaScript Functions Inherit
// Functions in JavaScript are also objects, which means they too have a prototype chain.

// Every function has a prototype property.
// Every function itself is created from Function.prototype.
// Example:

function greet() {
  console.log('Hello');
}

greet();  // This works fine

// Internally:
// console.log(greet.__proto__ === Function.prototype);  // true
// greet is an instance of Function, and its __proto__ points to Function.prototype.
// Function.prototype contains methods like call(), apply(), and bind().

// Prototype Chain Summary:
// Objects: Inherit from Object.prototype (e.g., hasOwnProperty(), toString()).
// Arrays: Inherit from Array.prototype (e.g., map(), filter(), reduce()).
// Strings: Inherit from String.prototype (e.g., toUpperCase(), charAt()).
// Functions: Inherit from Function.prototype (e.g., call(), apply(), bind()).
// Prototype Example Visualization

const person = new Person('Alice');

// Prototype chain:
console.log(person.__proto__ === Person.prototype);        // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null);          // true

// Here’s how the prototype chain looks:

// person inherits from Person.prototype.
// Person.prototype inherits from Object.prototype.
// Object.prototype is the top of the chain, and its __proto__ is null.

// Conclusion
// Prototypes are the foundation of JavaScript's inheritance system. Every object has a prototype, and JavaScript uses this prototype chain to look up properties and methods. Whether it's objects, arrays, strings, or functions, they all follow this prototype inheritance model to share methods efficiently. Understanding the prototype chain is key to mastering how objects and methods work in JavaScript.


// can you explain why we don't have context in arrow function whats is stopping it is it not linked with prototype?

// Great question! The behavior of arrow functions in JavaScript, especially with regards to context and this, is one of the key differences between them and regular functions. Let’s break this down step by step to understand why arrow functions don’t have their own context and how prototypes play a role.

// 1. Understanding this in JavaScript
// In regular (non-arrow) functions, the value of this is determined dynamically, based on how the function is called:

// Global context: If a regular function is called on its own, this refers to the global object (window in browsers).

function greet() {
  console.log(this);  // Global object (window in browsers)
}
greet();  // Global context
// Object method: When called as a method of an object, this refers to the object itself.

const obj1 = {
  name: 'Alice',
  greet() {
    console.log(this.name);  // 'Alice'
  }
};
obj1.greet();  // 'this' refers to 'obj'

// Constructor functions: In a constructor function, this refers to the new instance being created.
function Person(name) {
  this.name = name;
}

const person9 = new Person('Alice');
console.log(person9.name);  // 'Alice'
// In all these cases, this is bound dynamically depending on how the function is invoked.

// 2. How Arrow Functions Handle this
// Arrow functions are different because they do not have their own this context. Instead, arrow functions lexically bind this, meaning that they inherit this from their surrounding (enclosing) context at the time the arrow function is defined.

// Let’s look at an example:

const obj2 = {
  name: 'Alice',
  greet: () => {
    console.log(this.name);  // 'this' is lexically bound to the surrounding context
  }
};

obj2.greet();  // undefined

// In this example, this inside the arrow function refers to the lexical scope where the function was defined, which is the global scope (or module scope) in this case, not the obj object. Therefore, this.name is undefined.

// 3. Why Don’t Arrow Functions Have Their Own this?
// Arrow functions don’t have their own this context because of how they are designed. When you use an arrow function, this is not re-bound (i.e., it’s not set based on how the function is invoked). Instead, it uses the this value from the outer lexical scope (i.e., where the function was defined).

// This behavior is by design, and it’s particularly useful in scenarios like callbacks, event listeners, and closures where you might want to maintain the this context of the outer function:

function Person() {
  this.age = 25;

  setTimeout(() => {
    console.log(this.age);  // 'this' refers to the Person instance, not the global object
  }, 1000);
}

const person10 = new Person();  // 25

// In the example above, this inside the arrow function in setTimeout refers to the Person instance, not the global object. This is because the arrow function inherits the this value from the surrounding context (the Person constructor).
// 4. Is the Arrow Function Linked to the Prototype?
// Arrow functions are not linked to any prototype, and that’s one of the reasons they don’t have their own this or context.

// Regular functions (both named and anonymous) have a prototype property. When a function is used as a constructor (using the new keyword), JavaScript uses this prototype property to link objects together in the prototype chain.

function Person(name) {
  this.name = name;
}

console.log(Person.prototype);  // {constructor: ƒ} (an object)

// Arrow functions, however, don’t have a prototype property. Since they can’t be used as constructors and don’t have a prototype, they don’t participate in the prototype-based inheritance model.

const arrowFunc = () => {};
console.log(arrowFunc.prototype);  // undefined

// Because arrow functions don’t have a prototype, they don’t have access to the dynamic this context that regular functions have when used as constructors or methods.

// 5. What Is Stopping Arrow Functions from Having this?
// To summarize, these key points explain why arrow functions don’t have their own this:

// 1. Lexical Binding of this: Arrow functions are designed to lexically bind this from the surrounding scope. This means they don’t dynamically change this depending on how they’re called, unlike regular functions.

// 2. No prototype: Arrow functions don’t have a prototype property, meaning they can’t be used as constructors, nor do they participate in the prototype chain. Since they don’t have a prototype, they don’t get their own this.

// 3. Simplifying Scope: The idea behind arrow functions was to simplify working with callbacks and closures where keeping track of the correct this context can be tricky. By lexically scoping this, arrow functions reduce the confusion around context.

// Example: Arrow Function vs. Regular Function this Binding
// Let’s look at a comparison:

function Person() {
  this.age = 30;

  setTimeout(function() {
    console.log(this.age);  // 'this' refers to the global object
  }, 1000);

  setTimeout(() => {
    console.log(this.age);  // 'this' refers to the Person instance
  }, 1000);
}

const person11 = new Person();

// Regular function inside setTimeout: The this context inside the regular function refers to the global object, so this.age is undefined (because age is not defined in the global scope).

// Arrow function inside setTimeout: The arrow function doesn’t have its own this. It uses the this from the Person constructor, so this.age correctly refers to the age property of the Person instance.

// Conclusion
// Arrow functions don’t have their own this context because they are designed to lexically inherit this from the surrounding scope where they are defined. This design helps prevent issues where this might unexpectedly change based on how a function is called. Additionally, arrow functions don’t have a prototype, which further prevents them from being used as constructors and contributing to the prototype chain.

// In scenarios where you want the function to use the this value from its surrounding context (like in callbacks or event handlers), arrow functions are very useful. However, if you need dynamic this behavior (like in object methods or constructors), regular functions are more appropriate.

// Ooooh that mean because of regular function have a prototype object or kinked with prototype it’s have her on this and until we call it with new key word it’s normal function but we call it constructor when we connect by new key word actually than become an object and constructor am I clear or not yet?

// You're on the right track, and I can see you're connecting the dots! Let's clarify and solidify your understanding step by step:

// 1. Regular Functions and the this Context
// Yes, regular functions in JavaScript have a prototype object. But having a prototype doesn't automatically give them their own this.

// The this context in regular functions is dynamic, which means it depends on how the function is called:
// If called as a standalone function, this refers to the global object (or undefined in strict mode).
// If called as a method on an object, this refers to the object that called the function.
// If called as a constructor (with the new keyword), this refers to the newly created object.
// 2. The Role of prototype in Regular Functions
// Every regular function has a prototype property, which is an object. This prototype comes into play when the function is used as a constructor (when you call the function with the new keyword).

// When you call a regular function with the new keyword, JavaScript:
// Creates a new object.
// Sets the this keyword inside the function to refer to that new object.
// Links the new object to the function’s prototype (so that the new object inherits properties from the prototype).
// Returns the new object.
// In essence, when you use new, the function behaves like a constructor and creates an object. The new object is then linked to the function's prototype.

function Person(name) {
  this.name = name;
}

const person12 = new Person('Alice');

// Here’s what happens behind the scenes:

// A new object is created: {}
// The function Person is called with this pointing to the new object: this = {}
// The new object is linked to Person.prototype: person1.__proto__ === Person.prototype
// The function returns the new object: return this
// The function Person is just a regular function until you call it with new. That’s when it acts as a constructor, linking the newly created object to Person.prototype.

// 3. Arrow Functions and this
// Arrow functions don’t have a prototype property, which means they can’t be used as constructors (they can’t create new objects with the new keyword). Additionally, arrow functions don’t have their own this context—they inherit this from their surrounding lexical scope.

// This is why arrow functions don’t have dynamic this behavior like regular functions. They are not meant to be used as constructors, and they don’t have a prototype object to link new objects to.

// 4. To Sum Up:
// Regular functions have a prototype object and dynamic this behavior. When called with new, they act as constructors and create new objects, linking them to the function's prototype.
// Arrow functions don’t have a prototype object and don’t have their own this. They inherit this from their surrounding context and cannot be used as constructors.

// In Conclusion:
// A regular function becomes a constructor when you call it with new because it creates an object and links that object to the function’s prototype.

// Arrow functions, because they lack prototype and their own this, cannot become constructors.
// You’ve got it mostly right! The key detail is that the prototype is what allows regular functions to act as constructors when used with new, while arrow functions don’t have this capability because they lack a prototype.

// what is the difference betwin [[prototype]] and __proto__ in depth and behind the scenes please? ?????

// Great question! The difference between [[Prototype]] and __proto__ is subtle but important, and understanding it will give you deeper insight into how JavaScript handles inheritance behind the scenes. Let's dive into the details and explore how both work.

// 1. [[Prototype]] (Internal Slot)
// [[Prototype]] is the internal, hidden property of an object that references the prototype (another object) from which the current object can inherit properties. This internal property is often referred to as an object's prototype chain.

// [[Prototype]] is not directly accessible in JavaScript code, but it is part of the engine's internal mechanics.
// The [[Prototype]] of an object links it to another object (the prototype), and JavaScript uses this link for property lookup in the prototype chain.
// Behind the Scenes: How [[Prototype]] Works
// When you access a property on an object, JavaScript does the following:

// It first looks for the property on the object itself.
// If the property is not found, it follows the [[Prototype]] link to the object's prototype.
// It continues up the prototype chain until it either finds the property or reaches null (the end of the chain).

const person13 = {
  name: "Alice"
};

const student = {
  grade: "A"
};

// Set person as the prototype of student
Object.setPrototypeOf(student, person13);

console.log(student.name);  // "Alice" (inherited from person)

// In the example above:

// student doesn’t have a name property, but its [[Prototype]] links to the person object, where the name property is found.

// 2. __proto__ (Historical, Legacy Getter/Setter)
// __proto__ is a property on an object that gives you access to the object's [[Prototype]]. It is essentially a getter/setter for the internal [[Prototype]] property.

// __proto__ allows you to view or modify the [[Prototype]] of an object from JavaScript.
// However, it’s considered legacy and should not be used in modern code. Instead, we use Object.getPrototypeOf() and Object.setPrototypeOf() to interact with an object’s prototype in a standardized, safer way.
// Despite being legacy, __proto__ is still widely supported by browsers for backward compatibility.

const person14 = { name: "Alice" };
const student1 = { grade: "A" };

// Set person as the prototype of student using __proto__
student.__proto__ = person14;

console.log(student1.name);  // "Alice" (inherited from person)
console.log(student1.__proto__);  // { name: 'Alice' }

// In the example:

// student.__proto__ gives us access to the internal [[Prototype]], which is the person object. This is how the inheritance works, allowing student to access the name property from person.
// 3. Difference Between [[Prototype]] and __proto__
// [[Prototype]] is the internal, hidden link that JavaScript uses to handle inheritance and the prototype chain. It is part of the language’s specification and cannot be accessed directly in code.

// __proto__ is the getter/setter property that was historically used to access or modify the [[Prototype]]. It exposes [[Prototype]] for direct manipulation in JavaScript, but it is deprecated and not recommended for modern use.

// 4. Modern, Preferred Methods: Object.getPrototypeOf() and Object.setPrototypeOf()
// Instead of using __proto__, JavaScript provides two standard methods for working with prototypes:

// Object.getPrototypeOf(obj): This method returns the [[Prototype]] of the object obj.
// Object.setPrototypeOf(obj, prototype): This method sets the [[Prototype]] of the object obj to the given prototype.

const person15 = { name: "Alice" };
const student = { grade: "A" };

// Set person as the prototype of student using setPrototypeOf
Object.setPrototypeOf(student, person15);

console.log(Object.getPrototypeOf(student));  // { name: 'Alice' }
console.log(student.name);  // "Alice" (inherited from person)

// Using these methods is the recommended way to work with prototypes in modern JavaScript because they follow the ECMAScript standard and are more reliable across different environments.

// 5. Behind the Scenes: How Prototypes Work in JavaScript
// Prototypes are at the core of JavaScript’s inheritance model, which is known as prototype-based inheritance. Unlike classical inheritance (where classes define the blueprint of objects), JavaScript uses object-to-object inheritance through the prototype chain.

// When an object is created, it has a [[Prototype]] property that points to another object (its prototype). If you try to access a property that doesn’t exist on the object, JavaScript looks up the prototype chain, following the [[Prototype]] links until it finds the property or reaches null.

// Here’s how different objects and types are linked in the prototype chain:

// Objects: Every object has a [[Prototype]] that points to another object. If you create an object using new Object(), the [[Prototype]] points to Object.prototype.
// Functions: Functions are also objects in JavaScript. When a function is created, it has a prototype property that is used for inheritance when the function is used as a constructor.
// Arrays: Arrays in JavaScript are objects with their own [[Prototype]] that links to Array.prototype. This is why arrays have methods like .push(), .pop(), etc.
// Strings, Numbers, etc.: Primitive values like strings, numbers, and booleans are "wrapped" in their respective object types (String, Number, etc.), which have prototypes that provide methods like .toString() and .valueOf().
// 6. Visualizing the Prototype Chain
// Let’s visualize how different objects are linked through their [[Prototype]] properties:

const arr1 = [1, 2, 3];
console.log(arr1.__proto__);  // Array.prototype
console.log(arr1.__proto__.__proto__);  // Object.prototype
console.log(arr1.__proto__.__proto__.__proto__);  // null

// In this example:

// arr.__proto__ points to Array.prototype, which contains all the array methods like push(), pop(), etc.
// Array.prototype.__proto__ points to Object.prototype, which contains general methods like toString() that all objects inherit.
// The chain eventually ends with null, which means no further prototypes are found.

// 7. Summary of the Differences
// Aspect  >	[[Prototype]]     >  	__proto__
// Nature   >	Internal hidden property (spec level)   >	Getter/setter for the internal [[Prototype]]
// Usage    >	Not directly accessible     >	Accessible but deprecated, not recommended
// Modern Approach  >	Use Object.getPrototypeOf() and Object.setPrototypeOf()  >	Historically used for accessing/modifying the prototype
// Link  >	Points to the object’s prototype >	Exposes the internal [[Prototype]] for viewing/modifying

// Conclusion
// [[Prototype]] is the internal, hidden property that represents the prototype chain and enables inheritance in JavaScript.
// __proto__ is the historical getter/setter for [[Prototype]], but it's considered legacy and should not be used in modern code.

// Instead of using __proto__, it's recommended to use Object.getPrototypeOf() and Object.setPrototypeOf() to access and modify an object's prototype in a clean, standardized way.
// By understanding the relationship between [[Prototype]] and __proto__, you're now able to appreciate how JavaScript handles inheritance under the hood!
