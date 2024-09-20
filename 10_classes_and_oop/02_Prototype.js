// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objects`);
};

Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says hello`);
};

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();

// ---------------------------- JavaScript prototype hierarchy --------------------------- //

// In JavaScript, objects inherit properties and methods from other objects through the prototype chain. This mechanism allows objects to share properties, providing a foundational way to reuse code and manage relationships between objects.

// Prototype Hierarchy in JavaScript
// At the core of JavaScript’s prototype hierarchy is the relationship between objects and functions, where each object has a reference to its "prototype." Here’s a breakdown of the prototype chain:

// Object: The root of all objects in JavaScript.
// Function: Every function is also an object and inherits from Function.prototype.
// Custom Objects: When you create objects or define constructors, they inherit from Object.prototype unless specified otherwise.
// Prototype Chain: When accessing a property or method, JavaScript first checks the object itself, then moves up the prototype chain if it's not found.
// Key Points of the Prototype Chain:
// Every object in JavaScript has an internal link ([[Prototype]]) to another object, which forms the prototype chain.
// The prototype chain ends at Object.prototype, which has null as its prototype.
// Properties and methods are looked up the chain from the current object up through its prototypes.
// Basic Prototype Hierarchy:
// Object.prototype

// This is the base object from which all other objects in JavaScript derive.
// It includes methods like .toString(), .hasOwnProperty(), etc.
// Function.prototype

// Every function in JavaScript is an object, and inherits from Function.prototype.
// It includes methods like .call(), .apply(), .bind(), etc.
// Custom Object Instances

// When you create an object using a constructor, the object inherits properties and methods from the constructor’s prototype.
// JavaScript Prototype Hierarchy Diagram:

// +-----------------------------------------+
// |             null (end of chain)         |
// +-----------------------------------------+
//             ↑
// +-----------------------------------------+
// |         Object.prototype                |
// |  (Base methods like toString(), valueOf())|
// +-----------------------------------------+
//             ↑
// +-----------------------------------------+
// |      Function.prototype (constructor)   |
// |  (Methods like call(), apply(), bind()) |
// +-----------------------------------------+
//             ↑
// +-----------------------------------------+
// |           Custom Object.prototype       |
// |  (Inherits from Object or other objects)|
// +-----------------------------------------+
//             ↑
// +-----------------------------------------+
// |        Custom Object Instances          |
// |   (Specific objects created with new)   |
// +-----------------------------------------+

// Explanation of the Connections:
// Custom Object Instances (bottom-most) directly inherit from the prototype of the constructor function that created them. If they don't have a property or method, they look at the prototype.

// Custom Object.prototype is the prototype object of the constructor. It inherits from Object.prototype unless it's linked to another object prototype.

// Function.prototype applies to all functions in JavaScript and is the prototype for all function objects.

// Object.prototype is the root of all objects. It contains methods that all objects can use, such as toString(), hasOwnProperty(), etc.

// The chain ends at null, which signifies that no further prototype exists.

// This structure is powerful because it allows all JavaScript objects to share common functionality through inheritance, without duplicating properties on each object. When JavaScript attempts to resolve a property or method, it starts with the instance and travels up this chain until it finds the appropriate method or property, or reaches null if not found.

// Example Scenario:
// We will create a custom constructor function for a Person and demonstrate how its instances inherit properties and methods through the prototype chain.

// Step 1: Define a Person constructor

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Here, Person is a constructor function that creates Person objects with name and age properties. Every instance created using this constructor will inherit from Person.prototype.

// Step 2: Add a method to Person.prototype

Person.prototype.greet = function () {
  return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

// This adds a method greet to the Person.prototype, which all instances of Person will inherit. The greet method can now be accessed by any object created using the Person constructor.

// Step 3: Create an instance of Person
const john = new Person("John", 30);

// Now, john is an object that has name and age properties and can access the greet method from the prototype.

// Step 4: Access properties and methods
console.log(john.name);        // Output: John
console.log(john.age);         // Output: 30
console.log(john.greet());     // Output: Hello, my name is John and I am 30 years old.

// Here’s the key: john doesn't have the greet method directly on it. JavaScript looks at john, sees that it doesn’t have greet, and moves up the prototype chain to Person.prototype, where it finds the method.

// Step 5: Understanding the Prototype Chain
// Let's explore the chain behind john.

console.log(john.__proto__);              // Output: Person.prototype object
console.log(Person.prototype.__proto__);  // Output: Object.prototype
console.log(Object.prototype.__proto__);  // Output: null

// Full Example Code:

// Step 1: Define a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Step 2: Add a method to the prototype
Person.prototype.greet = function() {
  return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

// Step 3: Create an instance
const john1 = new Person('John', 30);

// Step 4: Accessing properties and methods
console.log(john1.name);           // John
console.log(john1.age);            // 30
console.log(john1.greet());        // Hello, my name is John and I am 30 years old

// Step 5: Check the prototype chain
console.log(john1.__proto__);              // Person.prototype
console.log(Person.prototype.__proto__);  // Object.prototype
console.log(Object.prototype.__proto__);  // null

// Visualizing the Prototype Chain
// john ---> Person.prototype ---> Object.prototype ---> null

// john is an instance of Person.
// john inherits greet from Person.prototype.
// If greet isn't found in Person.prototype, the search continues up to Object.prototype.
// The chain stops at null.

// Summary of How Prototype Inheritance Works:
// 1. Direct properties like name and age exist on the object (john).
// 2. Inherited methods like greet exist on Person.prototype, which the instance john inherits.
// 3. If you try to access a property that doesn’t exist on john, JavaScript automatically looks up the prototype chain until it finds the property or reaches null.

// This demonstrates how the prototype chain works in JavaScript. Each object has access to the methods and properties defined on its prototype, allowing for code reuse and inheritance across objects.
