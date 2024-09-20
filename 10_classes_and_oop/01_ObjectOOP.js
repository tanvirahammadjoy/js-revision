function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2;

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

const chai = new createUser("chai", 25);
const tea = createUser("tea", 250);

chai.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

// why arrow function don't have her own this?

// Arrow functions don’t have their own this context because they are designed to lexically inherit this from the surrounding scope where they are defined. This design helps prevent issues where this might unexpectedly change based on how a function is called. Additionally, arrow functions don’t have a prototype, which further prevents them from being used as constructors and contributing to the prototype chain.

// ******************** Object-Oriented Programming (OOP) in JavaScript is a paradigm ******************** //

// Object-Oriented Programming (OOP) in JavaScript is a paradigm that helps organize code by grouping related properties and behaviors into objects. It allows developers to create reusable code, model real-world entities, and manage complexity in larger applications.

// To understand OOP in JavaScript, we can think of it like a tree:

// 1. Root: The Concept of Objects
// Object: At the core of OOP in JavaScript is the object. An object is a collection of properties (data) and methods (functions) that represent an entity. Objects can be created using object literals, constructors, or classes.

// 2. Branches: Key OOP Concepts
// Classes: Classes are blueprints for creating objects. They encapsulate data (properties) and methods (behaviors) that define the structure and behavior of the objects created from them.

// Constructor Functions: Before ES6 introduced classes, JavaScript used constructor functions to create objects. A constructor function is a special function that initializes an object.
// Inheritance: Inheritance allows one class (child) to inherit properties and methods from another class (parent). This promotes code reuse and helps in organizing code.

// Encapsulation: Encapsulation involves bundling the data (properties) and methods (functions) that operate on the data into a single unit (class). It also restricts direct access to some of the object’s components.

// Polymorphism: Polymorphism allows objects of different classes to be treated as objects of a common super class. It enables methods to do different things based on the object it is acting upon.

// Abstraction: Abstraction means hiding the complex implementation details of a class and exposing only the necessary parts. This makes the code more modular and easier to maintain.

// 3. Leaves: Practical Applications
// Object Creation: Using classes or constructors to create specific objects (instances). Each object has its own set of properties and methods as defined by the class.

// Methods: Functions defined inside a class that operate on the properties of the object.

// Properties: Variables defined inside a class that hold data related to the object.

// 4. Fruit: Output and Usage
// Instances: When a class is used to create an object, that object is called an instance. Each instance is a concrete realization of the class blueprint.

// Prototype: JavaScript uses a prototype-based inheritance model. Each object has a prototype from which it can inherit properties and methods. The prototype chain continues upwards until it reaches null.

// Birth of Objects in JavaScript:
// Object Literal: The simplest way to create an object is using an object literal, like {}.
// Constructor Function: You can create multiple objects using a constructor function.
// ES6 Classes: Modern JavaScript introduced classes, which make object creation more intuitive and structured.
// Prototypes: Objects can inherit from other objects via the prototype chain, allowing shared behavior.

// OOP Tree Summary:
// Root: The concept of objects.
// Branches: Key OOP principles like classes, inheritance, and encapsulation.
// Leaves: Practical implementations like creating objects and defining methods.
// Fruit: The resulting instances and their behaviors.

// This structure helps visualize how objects are born, grow, and interact within JavaScript, forming a robust framework for building complex applications.

// 1. Root: The Concept of Objects
// Object: At the root of OOP in JavaScript is the concept of an object. An object is a collection of properties (which are key-value pairs) and methods (which are functions associated with the object). Objects represent entities in your code.
// Example:

let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  startEngine: function () {
    console.log("Engine started");
  },
};

car.startEngine(); // Output: Engine started

// Here, car is an object with properties (brand, model, year) and a method (startEngine).

// 2. Branches: Key OOP Concepts
// 2.1. Classes
// Class: A class is a blueprint for creating objects. It defines the properties and methods that the objects created from the class will have. In JavaScript, classes were introduced in ES6 (ECMAScript 2015).

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    console.log(`${this.brand} engine started`);
  }
}

let myCar1 = new Car("Toyota", "Camry", 2020);
myCar1.startEngine(); // Output: Toyota engine started

// Here, Car is a class, and myCar is an instance of that class.

// 2.2. Constructor Functions
// Constructor Function: Before classes, JavaScript used constructor functions to create objects. A constructor function is a special function that initializes a new object when called with the new keyword.

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.startEngine = function () {
    console.log(`${this.brand} engine started`);
  };
}

let myCar2 = new Car("Toyota", "Camry", 2020);
myCar2.startEngine(); // Output: Toyota engine started

// This example works similarly to the class example but uses a constructor function.

// 2.3. Inheritance
// Inheritance: Inheritance allows one class to inherit properties and methods from another class. This is useful for creating a hierarchy of objects.
// Example:

class Vehicle {
  constructor(type) {
    this.type = type;
  }

  describe() {
    console.log(`This is a ${this.type}`);
  }
}

class Car extends Vehicle {
  constructor(brand, model, year) {
    super("car"); // Call the parent class constructor
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    console.log(`${this.brand} engine started`);
  }
}

let myCar = new Car("Toyota", "Camry", 2020);
myCar.describe(); // Output: This is a car
myCar.startEngine(); // Output: Toyota engine started

// Here, Car inherits from Vehicle, so it can use the describe method from the Vehicle class.

// 2.4. Encapsulation
// Encapsulation: Encapsulation is the practice of keeping the internal state of an object hidden from the outside. This is achieved by defining properties as private (using conventions like an underscore _ or the # symbol) and exposing public methods to interact with them.

class Car {
  #brand; // Private property
  #model;
  #year;

  constructor(brand, model, year) {
    this.#brand = brand;
    this.#model = model;
    this.#year = year;
  }

  getBrand() {
    return this.#brand;
  }

  setBrand(newBrand) {
    this.#brand = newBrand;
  }

  startEngine() {
    console.log(`${this.#brand} engine started`);
  }
}

let myCar3 = new Car("Toyota", "Camry", 2020);
console.log(myCar.getBrand()); // Output: Toyota
myCar3.setBrand("Honda");
myCar3.startEngine(); // Output: Honda engine started

// Both Car and Motorcycle are treated as Vehicle types, but their startEngine methods behave differently.

// 2.6. Abstraction
// Abstraction: Abstraction is the process of hiding the complex details of a system and exposing only the essential parts. In JavaScript, abstraction can be achieved by defining methods that provide a simpler interface to the user.

class Car {
  #startIgnition() {
    console.log("Ignition started...");
  }

  #pumpFuel() {
    console.log("Fuel pumped...");
  }

  #igniteFuel() {
    console.log("Fuel ignited...");
  }

  startEngine() {
    this.#startIgnition();
    this.#pumpFuel();
    this.#igniteFuel();
    console.log("Engine started...");
  }
}

let myCar4 = new Car();
myCar4.startEngine();
// Output:
// Ignition started...
// Fuel pumped...
// Fuel ignited...
// Engine started...

// 3. Leaves: Practical Applications
// Object Creation: Classes or constructor functions are used to create specific objects (instances). Each object has its own set of properties and methods defined by the class.

let myCar5 = new Car('Toyota', 'Camry', 2020);
let yourCar = new Car('Honda', 'Civic', 2018);

console.log(myCar5.brand); // Output: Toyota
console.log(yourCar.brand); // Output: Honda

// Methods: Methods are functions defined inside a class that operate on the properties of the object.

myCar.startEngine(); // Output: Toyota engine started
yourCar.startEngine(); // Output: Honda engine started

// Properties: Properties are variables defined inside a class that hold data related to the object.

console.log(myCar.year); // Output: 2020
console.log(yourCar.year); // Output: 2018

// 4. Fruit: Output and Usage
// Instances: When a class is used to create an object, that object is called an instance. Each instance is a concrete realization of the class blueprint.

let myCar6 = new Car('Toyota', 'Camry', 2020);
let yourCar1 = new Car('Honda', 'Civic', 2018);

console.log(myCar6 instanceof Car); // Output: true
console.log(yourCar1 instanceof Car); // Output: true

// Prototype: JavaScript uses a prototype-based inheritance model. Each object has a prototype from which it can inherit properties and methods.

Car.prototype.honk = function() {
    console.log(`${this.brand} says beep beep!`);
};

myCar.honk(); // Output: Toyota says beep beep!
yourCar.honk(); // Output: Honda says beep beep!

// OOP Tree Summary:
// Root: Objects form the base of OOP in JavaScript.
// Branches: Concepts like classes, inheritance, and encapsulation grow from this base.
// Leaves: The practical applications of OOP principles, such as creating instances, defining methods, and setting properties.
// Fruit: The usable instances and the behaviors they exhibit.
// This detailed breakdown helps in understanding how objects evolve and interact within JavaScript, making OOP a powerful tool for structuring and organizing your code.

// ************************************ Constructor Functions *********************************** //

// To understand what happens under the hood before the introduction of ES6 classes, let's explore how JavaScript handled object creation, inheritance, and other OOP concepts using functions and prototypes. This will give you a clearer picture of how JavaScript's object model works behind the scenes.

// 1. Constructor Functions
// Before ES6 classes, JavaScript used constructor functions to create objects. A constructor function is just a regular function used with the new keyword to create an object.

// Under the Hood:
// When you use a constructor function with the new keyword, JavaScript does the following steps behind the scenes:

// Creates a new object: A new object is created and assigned to this.
// Sets the prototype: The prototype of the new object is set to the constructor function's prototype property.
// Executes the constructor function: The constructor function is executed with this bound to the new object.
// Returns the new object: The new object is returned automatically unless the constructor function explicitly returns a different object.

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  // No need to return, the object is returned automatically
}

let myCar7 = new Car("Toyota", "Camry", 2020);

// 2. Prototypes
// In JavaScript, every function has a prototype property, which is an object. This prototype object is shared among all instances created by the constructor function, allowing those instances to share methods and properties.

// Under the Hood:
// Prototype Chain: When you try to access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn’t find it, it looks at the object's prototype. This chain continues up until it reaches null.

// Prototype Inheritance: If you want to share methods across all instances of an object, you define those methods on the constructor function's prototype object.

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

// Adding a method to the prototype
Car.prototype.startEngine = function() {
    console.log(`${this.brand} engine started`);
};

let myCar8 = new Car('Toyota', 'Camry', 2020);
let yourCar2 = new Car('Honda', 'Civic', 2018);

myCar8.startEngine(); // Output: Toyota engine started
yourCar2.startEngine(); // Output: Honda engine started

// Here, startEngine is not defined directly on each Car object but on the Car.prototype. Both myCar and yourCar share this method.

// 3. Inheritance with Prototypes
// Before classes, inheritance was implemented using prototype chaining. You would create a new constructor function and set its prototype to an instance of another constructor function.

// Under the Hood:
// Create a Super Constructor: Define a constructor function for the parent class (superclass).
// Create a Sub Constructor: Define a constructor function for the child class (subclass).
// Set Prototype Chain: Set the prototype of the subclass to be an instance of the superclass.
// Reset Constructor Property: Ensure that the constructor of the subclass points to the correct function.

function Vehicle(type) {
    this.type = type;
}

Vehicle.prototype.describe = function() {
    console.log(`This is a ${this.type}`);
};

function Car(brand, model, year) {
    Vehicle.call(this, 'car'); // Inherit properties
    this.brand = brand;
    this.model = model;
    this.year = year;
}

// Inherit methods
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Adding a method to Car
Car.prototype.startEngine = function() {
    console.log(`${this.brand} engine started`);
};

let myCar9 = new Car('Toyota', 'Camry', 2020);
myCar9.describe();  // Output: This is a car
myCar9.startEngine(); // Output: Toyota engine started

// Vehicle.call(this, 'car'): Calls the Vehicle constructor with this pointing to the Car instance, allowing Car to inherit properties from Vehicle.
// Object.create(Vehicle.prototype): Creates a new object with its prototype set to Vehicle.prototype. This is how Car inherits methods from Vehicle.

// 4. Prototype Chain in Action
// When you access a property or method on an object, JavaScript follows the prototype chain:

// Own Properties: It first checks the object’s own properties.
// Prototype Properties: If not found, it checks the prototype.
// Prototype’s Prototype: If still not found, it checks the prototype’s prototype, and so on.
// End of Chain: The chain ends when it reaches an object with a null prototype.

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

Car.prototype.startEngine = function() {
    console.log(`${this.brand} engine started`);
};

let myCar10 = new Car('Toyota', 'Camry', 2020);

console.log(myCar10.toString()); // Output: [object Object]

// toString: myCar doesn't have a toString method directly on it, so JavaScript looks up the prototype chain to Object.prototype, which provides the toString method.

// 5. Summary of the Pre-ES6 OOP Approach
// Constructor Functions: Used to create objects and initialize their properties.
// Prototype: An object that provides shared properties and methods for all instances created by the constructor.
// Prototype Chain: A series of linked prototypes that JavaScript uses to resolve property and method lookups.
// Inheritance: Implemented by linking prototypes of different constructor functions.

// Understanding these concepts gives you insight into how JavaScript handles objects and inheritance under the hood, even before the syntactic sugar introduced by ES6 classes. The core principles remain the same; ES6 classes just provide a cleaner, more intuitive syntax for working with them.
