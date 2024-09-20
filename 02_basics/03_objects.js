// Here are key topics related to JavaScript objects:

// singleton
// Object.create

// object literals

// 1. Object Creation
// Object Literals: Creating objects using {} notation.
// Object Constructor: Using new Object() to create objects.
// Object.create(): Creating objects with a specified prototype.

// 2. Properties and Methods
// Defining Properties: Adding key-value pairs inside objects.
// Accessing Properties: Using dot notation (object.property) or bracket notation (object['property']).
// Dynamic Properties: Adding and deleting properties at runtime.
// Methods: Functions that are properties of an object.

// 3. Prototypes and Inheritance
// Prototype Chain: How objects inherit properties and methods.
// Prototypal Inheritance: Sharing methods and properties via prototypes.
// Object.getPrototypeOf() and Object.setPrototypeOf(): Getting and setting an object's prototype.
// __proto__: Directly accessing an object’s prototype.

// 4. Object Methods
// Object.keys() / Object.values() / Object.entries(): Retrieving keys, values, or both.
// Object.assign(): Copying properties from one object to another.
// Object.freeze() / Object.seal(): Preventing modification of objects.
// Object.hasOwnProperty(): Checking if an object has a property directly.

// 5. Object Destructuring
// Extracting properties from objects into variables with shorthand syntax.
// Nested destructuring for complex objects.

// 6. this in Objects
// Understanding the context of this in methods and how it changes in different scenarios like method binding or arrow functions.

// 7. Object Cloning and Copying
// Shallow Copy: Copying references, e.g., Object.assign().
// Deep Copy: Creating completely independent clones using libraries or manual techniques.

// 8. Constructor Functions and Classes
// Constructor Functions: Creating objects using constructor functions.
// Class Syntax: ES6 class-based inheritance and method definitions.

// 9. Getters and Setters
// Using get and set to control access to object properties.

// 10. Enumerability and Property Descriptors
// Controlling property characteristics using Object.defineProperty().

// 11. Symbols as Property Keys
// Using Symbol to create unique, non-string property keys.

// 12. JSON and Objects
// Converting objects to JSON strings and back (JSON.stringify(), JSON.parse()).

// These topics cover foundational and advanced aspects of working with objects in JavaScript. Would you like to dive into a specific one?

// 1. Object Creation
// a) Object Literals
// The simplest and most commonly used method for creating objects.

const person1 = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Hello!");
  },
};

// b) Object Constructor
// Using the built-in Object constructor to create an empty object, which can then be populated with properties.

const person2 = new Object();
person2.name = "John";
person2.age = 30;
person2.greet = function () {
  console.log("Hello!");
};

// c) Object.create()
// Creates a new object with the specified prototype object and optionally defines additional properties.

const personPrototype = {
  greet: function () {
    console.log("Hello!");
  },
};

const person = Object.create(personPrototype);
person.name = "John";
person.age = 30;

// 2. Properties and Methods
// a) Defining Properties (Key-Value Pairs)
// Adding properties when creating the object.

const car1 = {
  brand: "Toyota",
  model: "Corolla",
};

// Adding properties after the object is created.

const car2 = {};
car2.brand = "Toyota";
car2.model = "Corolla";

// b) Accessing Properties
// Dot Notation: Common method when property names are known and valid identifiers.

console.log(car2.brand); // 'Toyota'

// Bracket Notation: Useful when property names are dynamic or contain spaces or special characters.

console.log(car2["model"]); // 'Corolla'
const prop = "brand";
console.log(car2[prop]); // 'Toyota'

// c) Dynamic Properties (Adding & Deleting at Runtime)
// Adding Properties

const laptop = {};
laptop.brand = "Dell";
laptop["model"] = "XPS";

// Deleting Properties

console.log(laptop.model);
// delete laptop.model;
console.log(laptop); // { brand: 'Dell' }

let mySymbol = Symbol("phone");

const phone = {
  name: "Iphone",
  [mySymbol]: "phone",
  model: "15",
  price: "100$",
  storage: "512",
};

console.log(phone.model); // 15
console.log(phone["model"]); // 15
// console.log(phone[model]); // error
// console.log(phone.mySymbol); // output: undefined
console.log(phone[mySymbol]); // output: phone
// console.log(phone["mySymbol"]); // output: undefined

// console.log(phone);
// output: =>
// {
//   name: 'Iphone',
//   model: '15',
//   price: '100$',
//   storage: '512',
//   [Symbol(phone)]: 'phone'
// }

// d) Methods (Functions as Properties)
// Adding methods inside the object.

const user1 = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};
user1.greet(); // 'Hello, Alice!'

// Adding methods after the object is created.

const user2 = {};
user2.name = "Alice";
user2.greet = function () {
  console.log(`Hello, ${this.name}!`);
};
user2.greet(); // 'Hello, Alice!'

const JsUser = {
  name: "Hitesh",
  "full name": "Hitesh Choudhary",
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

JsUser.email = "tanvir@gmail.com";
JsUser["full name"] = "tanvir ahammad joy";
// Object.freeze(JsUser);
JsUser.email = "hitesh@google.com"; // when will be freeze method the obj can not be edited

JsUser.greeting = function(){
    console.log("hello world");
};

JsUser.greetingTwo = function() {
    console.log(`hi, how are you, ${this.name}`)
}

// console.log(JsUser);

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


