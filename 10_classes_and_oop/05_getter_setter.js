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

// another explanation with password please?

// Let's explain getters and setters using a password as an example. You want to create an object user that stores a password. The password should be hashed when set and only returned in its hashed form when accessed.

// Problem:
// You have an object user where:

// When you set the password, it should be hashed (for example, using a simple obfuscation for this example).
// When you get the password, it should return the hashed password, not the original one.
// You should also ensure that passwords cannot be accidentally accessed or revealed in plain text.

// Solution:
// Step 1: Create an object with a setter and getter for the password
let user = {
  _password: '',  // The actual password (stored as hashed)

  // Step 2: Define a getter for password (return the hashed password)
  get password() {
    return this._password;
  },

  // Step 3: Define a setter for password (hash the password when set)
  set password(value) {
    // A simple hashing simulation (in real-world, use proper hashing like bcrypt)
    this._password = value.split('').reverse().join('');  // Reverse the password as a "hash"
  }
};

// Step 4: Use the setter to store a password (it gets hashed)
user.password = 'mySecretPass';  // When setting the password, it is hashed

// Step 5: Use the getter to retrieve the password (it returns the hashed version)
console.log(user.password);  // Output: "ssaPerteSym" (the reversed version)

// Explanation:
// Hidden password storage (_password):

// The _password property is used to store the hashed password internally. We prefix it with an underscore (_) to indicate that it’s private and should not be accessed directly (though this is a convention, not a hard restriction in JavaScript).
// Setter for password:

// When setting the password (user.password = 'mySecretPass';), the setter function takes the plain-text password and "hashes" it (in this case, by reversing the string). In a real application, you'd use a cryptographic hash function like bcrypt.
// Getter for password:

// When accessing the password (console.log(user.password)), the getter returns the hashed version of the password, not the plain-text version.
// Why is this useful?
// Encapsulation: The plain-text password is never exposed outside the object. Only the hashed version is visible.
// Security: By using a setter to hash the password, you ensure that it's always stored securely.
// Data control: With getters and setters, you control exactly what happens when the property is accessed or updated.
// Example in real life with password validation:
// You could also use the setter to validate the password (e.g., check if it meets certain security criteria like length or complexity) before storing it.

let user = {
  _password: '',

  get password() {
    return this._password;
  },

  set password(value) {
    if (value.length < 8) {
      console.log('Password too short!');
      return;
    }
    // Hash password (in this example, reversing as a simple hash)
    this._password = value.split('').reverse().join('');
  }
};

// Try setting a short password
user.password = 'short';  // Output: Password too short!
console.log(user.password);  // Output: ''

// Set a valid password
user.password = 'longEnoughPassword';
console.log(user.password);  // Output: "drowssaPgnohEnoglo"

// Why use this?
// You control the logic for password handling (hashing, validation) within the setter.
// The user never has access to the plain-text password after setting it.
// You ensure that passwords meet specific requirements before they're stored.

