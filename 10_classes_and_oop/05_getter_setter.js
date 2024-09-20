class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}hitesh`;
  }

  set password(value) {
    this._password = value;
  }
}

const hitesh = new User("h@hitesh.ai", "abc");
console.log(hitesh.email);

// ********************** getter setter function ******************************* //

// In JavaScript, getters and setters are special methods that allow you to control how properties of an object are accessed and updated. They let you define how a property is retrieved (getter) and how it is modified (setter) while still using the syntax of accessing and assigning to a property directly.

// Here's an example problem that demonstrates the use of getter and setter functions:

// Problem:
// You have an object user that stores a firstName and lastName. You want to create a new property called fullName that combines both the first and last name. You also want to update the firstName or lastName if the fullName is updated.

// When you get user.fullName, it should return the combination of firstName and lastName.
// When you set user.fullName, it should split the full name into firstName and lastName.

// Solution:
// Step 1: Create an object with firstName and lastName
let user = {
  firstName: 'John',
  lastName: 'Doe',

  // Step 2: Define a getter for fullName
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // Step 3: Define a setter for fullName
  set fullName(value) {
    let parts = value.split(' '); // Split the fullName by space
    this.firstName = parts[0]; // Set the firstName to the first part
    this.lastName = parts[1];   // Set the lastName to the second part
  }
};

// Step 4: Use the getter to retrieve the fullName
console.log(user.fullName); // Output: "John Doe"

// Step 5: Use the setter to update fullName and see changes in firstName and lastName
user.fullName = "Jane Smith"; // Setting fullName changes firstName and lastName
console.log(user.firstName);  // Output: "Jane"
console.log(user.lastName);   // Output: "Smith"

// Explanation:
// 1. Getter:
// The getter for fullName returns a string combining firstName and lastName. You access it like a property (user.fullName), but it's actually calling a method behind the scenes.

// 2. Setter:
// The setter for fullName accepts a new value (in this case, a string with a full name like "Jane Smith"). It splits this string and assigns the first and second parts to firstName and lastName, respectively.

// Why use getters and setters?
// Control over property access: You can control how the data is accessed or validated.
// Computed properties: They are great for properties that are computed from other properties (like fullName is computed from firstName and lastName).

// Let me know if you'd like more examples or details!

