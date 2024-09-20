function SetUsername(username) {
  //complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);

// ****************************** (call() and this key word ********************************* //

// Understanding call() and this in JavaScript
// 1. this keyword:
// In JavaScript, the this keyword refers to the context (or owner) in which a function is executed. Its value is determined at runtime, and it can change depending on how the function is called.
// Example of a problem with this:

const person = {
  name: "Alice",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

const greetFunction = person.greet;
greetFunction(); // What happens here?

// Problem:
// greetFunction() is called without any context, so this refers to the global object (window in browsers, undefined in strict mode). Since there is no name property on the global object, it will print undefined or cause an error in strict mode.

// 2. call() method:
// The call() method allows you to specify the context (this value) for a function when you call it. This ensures that this refers to the correct object.
// Solving the problem using call():

const person1 = {
  name: "Alice",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

const greetFunction1 = person1.greet;
greetFunction.call(person1); // Correctly sets `this` to the person object

// Solution:
// By using greetFunction.call(person), the function's this is explicitly set to the person object. Now, the output will be:

// Hello, my name is Alice

// Key Points:
// Without call(): If you call a function without specifying the context, this might refer to the global object, causing unexpected behavior.

// With call(): You can explicitly bind the value of this when calling a function, solving context-related issues.
// Let me know if you'd like to dive deeper into this or explore more examples!

// one more situation please?

// Certainly! Let's explore another situation where the this keyword behaves unexpectedly, and we'll solve it using call().

// Scenario: Nested Function
// Problem:
// Imagine you have an object representing a car, and you want to log some information about the car's details using a method. Inside this method, you also call another function to log additional details, but the this context gets lost inside that nested function.

const car = {
  brand: "Toyota",
  model: "Corolla",
  details: function () {
    console.log(`Car: ${this.brand} ${this.model}`);

    function additionalDetails() {
      console.log(`Additional Info: ${this.brand}`);
    }

    additionalDetails(); // What happens here?
  },
};

car.details();

// Problem:
// When calling additionalDetails(), the this inside that function refers to the global object (or undefined in strict mode), not the car object. As a result, this.brand will either print undefined or throw an error in strict mode.

// Solution using call():
// To solve this, we can use the call() method to explicitly bind the this value inside additionalDetails() to the car object.

const car1 = {
  brand: "Toyota",
  model: "Corolla",
  details: function () {
    console.log(`Car: ${this.brand} ${this.model}`);

    function additionalDetails() {
      console.log(`Additional Info: ${this.brand}`);
    }

    additionalDetails.call(this); // Use `call()` to bind `this` to the car1 object
  },
};

car1.details();

// Solution:

// By using additionalDetails.call(this), we ensure that this inside additionalDetails refers to the same this value as in the details() method, which is the car object.
// Now the output will be:

// Car: Toyota Corolla
// Additional Info: Toyota

// Key Takeaways:
// 1. In nested functions, the value of this can get lost because the context changes.
// 2. Use call() to explicitly bind this to the desired object when calling the nested function.

// Let me know if you'd like further clarifications or more examples!

// can you explain me behind the scenes and write the same code with class please?

// Behind the Scenes: How this and call() Work in JavaScript
// The keyword this in JavaScript refers to the context in which a function is executed. When you call a function, JavaScript dynamically determines the value of this.

// Key points behind the scenes:
// Global Context: If a function is called in the global scope, this refers to the global object (window in browsers, global in Node.js).

// Object Method: If a function is called as a method of an object, this refers to the object itself.

// Standalone Function: In a standalone function call, this defaults to the global object (in non-strict mode), or undefined (in strict mode).

// call(): The call() method allows you to explicitly set the value of this inside a function. It takes the object to be used as this as its first argument, followed by the function's parameters (if any).

// Converting the Example to a Class
// When using classes, this behaves similarly to objects. The main difference is that in classes, this refers to the instance of the class. However, the problem with nested functions still exists, so we can use call() to fix it.

// Example with Class
// Let's write the same car example using a class structure, addressing the problem of this in nested functions:

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  details() {
    console.log(`Car: ${this.brand} ${this.model}`);

    // Nested function
    function additionalDetails() {
      console.log(`Additional Info: ${this.brand}`);
    }

    // Use call() to explicitly bind `this` to the instance of the Car class
    additionalDetails.call(this);
  }
}

// Create an instance of the Car class
const myCar = new Car("Toyota", "Corolla");
myCar.details();

// Explanation:
// Class Structure:
// We define a class Car with a constructor method to initialize brand and model for each instance.
// The details() method logs the car's basic information and then calls a nested function, additionalDetails(), to log extra information.
// Problem:

// Inside additionalDetails(), the value of this would default to the global object, so this.brand would be undefined.
// Solution with call():

// By using additionalDetails.call(this), we explicitly bind this to the class instance, ensuring that this.brand refers to the brand of the car ("Toyota").
// Behind the Scenes of call() in the Class Context:
// When additionalDetails.call(this) is executed:

// JavaScript executes additionalDetails with the context of this pointing to the instance of the Car class.
// Inside additionalDetails(), this.brand now refers to the brand property of the myCar object, instead of referring to the global object.
// Output:

// Car: Toyota Corolla
// Additional Info: Toyota

// Alternative Approach: Using Arrow Functions
// You can also solve this issue using arrow functions, which inherit this from their surrounding lexical context. Arrow functions do not have their own this, so they will use the this from the details() method.

// Here’s the class with an arrow function instead of call():

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  details() {
    console.log(`Car: ${this.brand} ${this.model}`);

    // Use an arrow function to preserve the `this` value
    const additionalDetails = () => {
      console.log(`Additional Info: ${this.brand}`);
    };

    additionalDetails(); // Arrow function inherits `this` from `details()`
  }
}

const myCar1 = new Car("Toyota", "Corolla");
myCar1.details();

// Output with Arrow Function:

// Car: Toyota Corolla
// Additional Info: Toyota

// Key Differences:
// Using call(): You explicitly set the context (this) when calling a function.
// Using Arrow Functions: The this value is inherited lexically from the surrounding context, eliminating the need for call() in some cases.

// Would you like more information on either approach?

// What about super key word?

// Understanding the super Keyword in JavaScript
// The super keyword in JavaScript is used in the context of classes and inheritance. It allows a subclass to access and call functions on its parent class. This is useful when you want to extend the functionality of a class, but still need to use some logic from the parent class.

// Here's how super works behind the scenes:

// 1. Calling Parent Constructors:
// In a subclass, you can use super() to call the constructor of the parent class. This ensures that the properties and methods of the parent class are properly initialized for the child class instance.

// 2. Calling Parent Methods:
// You can use super.methodName() to call a method from the parent class, allowing you to extend or modify its behavior in the subclass.

// Example: Using super to Call Parent Constructor and Methods
// Let's create a basic example using classes to demonstrate how super works.

// Parent class
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  startEngine() {
    console.log(`${this.brand} engine started.`);
  }
}

// Child class (subclass)
class Car extends Vehicle {
  constructor(brand, model) {
    // Call the parent constructor using super()
    super(brand); // `this` is initialized after `super()` is called
    this.model = model;
  }

  displayDetails() {
    // Call the parent class method using super()
    super.startEngine(); // Call the `startEngine` method from Vehicle class
    console.log(`Car: ${this.brand} ${this.model}`);
  }
}

const myCar2 = new Car("Toyota", "Corolla");
myCar2.displayDetails();

// Explanation:
// Parent Class (Vehicle):
// The Vehicle class has a constructor that initializes a brand property and a startEngine() method that logs a message.
// Child Class (Car):
// The Car class extends the Vehicle class and adds an extra model property.
// super(brand) is used inside the Car class constructor to call the constructor of the Vehicle class and initialize the brand property.
// super.startEngine() is used in the displayDetails() method to call the startEngine() method of the parent Vehicle class.

// Output:
// Toyota engine started.
// Car: Toyota Corolla

// Behind the Scenes of super:
// When you call super() in the constructor:
// JavaScript invokes the constructor of the parent class (Vehicle in this case), ensuring that the brand property is initialized for the Car instance. This happens before you can access this in the child class.

// When you call super.methodName():
// The child class uses the parent's method. You can still override this method in the child class, but if you call super.methodName(), it will execute the parent class's version of the method.

// More on Constructor Flow with super()
// In classes that extend other classes, the constructor of the subclass is not allowed to access this until super() has been called. This is why calling super() is mandatory in subclasses before using this.

// Example with error if super() is not called:

class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    // Error if we try to use `this` before calling super()
    this.model = model;  // This will cause an error
    super(brand); // `super()` must be called before accessing `this`
  }
}

// Error:
// ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor

// To fix this, super(brand) should be called first before assigning this.model.

// Using super with Overridden Methods
// If the subclass overrides a method from the parent class, you can still call the parent’s version of that method using super.

// Example of Method Overriding:

class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
    super.speak(); // Call the parent class's speak method
  }
}

const myDog = new Dog();
myDog.speak();

// Output:
// Dog barks
// Animal speaks

// Explanation:
// The Dog class overrides the speak() method, but by calling super.speak(), it can still invoke the speak() method from the Animal class.

// Key Points about super:
// Constructor:
// In a subclass, you must call super() before accessing this. The super() call invokes the parent class's constructor, initializing properties inherited from the parent.

// Method Calls:
// You can call a parent class method in a subclass using super.methodName(). This is useful when you want to extend or customize the functionality of a parent method in the subclass.
// Would you like to see more examples or explore any other concepts?

// This Same problem we can solve with call() method right?

// Yes, you can solve a similar problem with the call() method, but there are key differences between call() and super() when dealing with inheritance.

// super(): This is specifically designed for class inheritance in JavaScript. It's used when you're working with classes and need to call the constructor or methods of a parent class. It manages the object prototype chain, ensuring that the subclass properly inherits from its parent class.

// call(): The call() method is a more general-purpose function that lets you invoke a function with a specific value of this. It can be used in non-class-based inheritance or when you're not working with classes at all. It allows you to invoke functions from one object in the context of another object.

// Let’s solve a similar inheritance problem using call() instead of super().

// Example Using call() to Solve the Problem
// Here, we’ll use constructor functions (an older pattern before ES6 classes) and use the call() method to inherit properties and methods from a parent constructor.

// Code Example with call():

// Parent constructor function
function Vehicle(brand) {
  this.brand = brand;
}

Vehicle.prototype.startEngine = function() {
  console.log(`${this.brand} engine started.`);
};

// Child constructor function
function Car(brand, model) {
  // Call the parent constructor using call()
  Vehicle.call(this, brand); // Set `this` inside Vehicle to point to the current Car instance
  this.model = model;
}

// Inherit methods from Vehicle's prototype
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Add additional methods to Car
Car.prototype.displayDetails = function() {
  this.startEngine(); // Call the inherited startEngine method
  console.log(`Car: ${this.brand} ${this.model}`);
};

const myCar3 = new Car("Toyota", "Corolla");
myCar3.displayDetails();

// Explanation:
// Constructor Functions (Vehicle and Car):

// Instead of classes, we're using constructor functions (Vehicle and Car), which is the older way of creating objects and inheritance before ES6 introduced classes.
// Using call() to Inherit Properties:

// Inside the Car constructor function, Vehicle.call(this, brand) is used. This allows the Vehicle constructor to run in the context of the Car instance. It initializes the brand property for the Car instance, just like super(brand) would in a class.
// Prototypal Inheritance:

// To make sure the Car instances inherit methods from Vehicle (like startEngine), we set Car.prototype = Object.create(Vehicle.prototype) to create the prototype chain. This links the Car prototype to the Vehicle prototype.
// Calling Inherited Methods:

// The Car class now has access to startEngine() from Vehicle because of the prototype chain. In the displayDetails() method, we can call this.startEngine() to use the method inherited from Vehicle.

// Output:
// Toyota engine started.
// Car: Toyota Corolla

// Key Differences Between super() and call():
// super() (Class-Based Inheritance):

// Designed for ES6 class inheritance: It manages the prototype chain automatically when using extends to inherit from a parent class.
// Constructor Call: super() is called within the constructor of a subclass, and it must be called before this can be used.
// Method Call: super.methodName() allows you to call a method from the parent class.
// call() (Function-Based Inheritance or Function Context Switching):

// Used to set this manually: You can use call() to borrow functions from another object or constructor and invoke them with a specified this context.
// More flexible: You can use call() in any function, not just in class constructors.
// No automatic prototype inheritance: If you're using call() in constructor functions, you need to manually set up the prototype chain (Object.create) to inherit methods.

// Conclusion:
// super() is for class-based inheritance and should be used when you're working with ES6 classes.
// call() is for manually setting the this context and is useful when you're not using classes or need to invoke methods from one object in another object's context.

// Let me know if you'd like further examples or deeper insights into either call() or super()!
