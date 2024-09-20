// In JavaScript, a singleton object is a design pattern where only one instance of an object can exist. This concept ensures that a class or object has only one instance and provides a global point of access to that instance. Singleton patterns are commonly used in scenarios like managing a global configuration or creating a single database connection.

// In JavaScript, singletons can be created in a variety of ways, but the essence remains the same: ensuring only one instance of an object is ever created.

// Key Characteristics of a Singleton:
// One instance: Only one instance of the singleton object exists.
// Global access: The instance can be accessed globally across different parts of the application.
// Ways to Implement a Singleton:
// 1. Using Object Literals
// In JavaScript, an object literal is inherently a singleton because it's a unique instance.

const Singleton1 = {
  name: "Singleton Object",
  getName() {
    return this.name;
  },
};

console.log(Singleton1.getName()); // 'Singleton Object'

// This is a simple and direct way to create a singleton. The Singleton object is created once and can be accessed globally.

// 2. Using a Closure
// A more flexible and robust approach is using a closure to encapsulate and control access to the instance.

const Singleton2 = (function () {
  let instance;

  function createInstance() {
    return {
      name: "I am the only instance",
      sayHello() {
        console.log("Hello from the Singleton");
      },
    };
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instance1 = Singleton2.getInstance();
const instance2 = Singleton2.getInstance();

console.log(instance1 === instance2); // true, both point to the same instance

// We use an Immediately Invoked Function Expression (IIFE) to create a closure.
// Inside the closure, the createInstance() function creates the object.
// The getInstance() function ensures that if the instance has already been created, the same instance is returned.

// This pattern is useful when you want more control over how the singleton is created or when lazily creating the instance (i.e., not creating it until it's needed).

// 3. Using ES6 Class Syntax
// You can also implement a singleton using ES6 classes with static properties:

class Singleton {
  constructor(name) {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    this.name = name;
    Singleton.instance = this;
  }

  getName() {
    return this.name;
  }
}

const obj1 = new Singleton("First Instance");
// console.log(obj1.getName()); // 'First Instance'

const obj2 = new Singleton("Second Instance");
// console.log(obj2.getName()); // 'First Instance' (because the instance already exists)

// console.log(obj1 === obj2); // true

// In this example:
// We store the single instance in a static property (Singleton.instance).
// If an instance already exists, the constructor returns that instance, ensuring only one instance is created.

// No, using new Object() does not create a singleton object. When you use new Object(), you create a new instance of an object every time you invoke it, which means each call to new Object() will return a different object with its own reference in memory.

// Example of new Object():

// In this example:

// obj1 and obj2 are two separate objects. They are not the same instance.
// Each new Object() call creates a new instance with a different memory reference.
// Key Differences Between new Object() and Singleton:
// Singleton: Ensures only one instance exists, and any attempt to create more instances will return the same object.
// new Object(): Every time it is called, it creates a new object instance, meaning multiple objects are created in memory.

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "tanvir";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); // { id: '123abc', name: 'tanvir', isLoggedIn: false }

const regularUser = {
  email: "tanvir@goole.com",
  fullName: {
    firstName: "tanvir",
    lastName: "ahammad",
  },
};

// console.log(regularUser);
// {
//   email: 'tanvir@goole.com',
//   fullName: { firstName: 'tanvir', lastName: 'ahammad' }
// }

// console.log(regularUser.fullName); // { firstName: 'tanvir', lastName: 'ahammad' }
// console.log(regularUser.fullName.firstName); // tanvir

const obj3 = { 1: "a", 2: "b", 3: "c", 4: "d" };
const obj4 = { 5: "e", 6: "f", 7: "g", 8: "h" };

const obj5 = { obj3, obj4 };
// output
// {
//   obj3: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' },
//   obj4: { '1': 'e', '2': 'f', '3': 'g', '4': 'h' }
// }

// console.log(obj5);

// const obj6 = Object.assign({}, obj3, obj4); // in this case data will only go to the obj6 by adding empty {} this is batter.
// const obj6 = Object.assign( obj3, obj4); // in this case data will go in to the both obj6 and obj3.
// console.log("obj6 ", obj6);
// console.log("obj3 ", obj3);
// output
// {
//   '1': 'a',
//   '2': 'b',
//   '3': 'c',
//   '4': 'd',
//   '5': 'e',
//   '6': 'f',
//   '7': 'g',
//   '8': 'h'
// }

// one more way we can do it using (...) spread operator
const spread = { ...obj3, ...obj4 };
// console.log(spread);
// {
//   '1': 'a',
//   '2': 'b',
//   '3': 'c',
//   '4': 'd',
//   '5': 'e',
//   '6': 'f',
//   '7': 'g',
//   '8': 'h'
// }

// it's also known as JSON format data
const randomUserMe = {
  results: [
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Çetin",
        last: "Akar",
      },
      location: {
        street: {
          number: 5100,
          name: "Fatih Sultan Mehmet Cd",
        },
        city: "Tekirdağ",
        state: "İzmir",
        country: "Turkey",
        postcode: 77848,
        coordinates: {
          latitude: "72.6449",
          longitude: "-171.2918",
        },
        timezone: {
          offset: "+11:00",
          description: "Magadan, Solomon Islands, New Caledonia",
        },
      },
      email: "cetin.akar@example.com",
      login: {
        uuid: "30f8cb6c-d2da-432a-b9e1-f535fc85a9fb",
        username: "tinybutterfly953",
        password: "mario",
        salt: "2j1OolQ0",
        md5: "ad61f2c8003dc00e45cdaf1c93f28c6c",
        sha1: "4466adea67bde3544ad2d20427b29ea1d0a7f293",
        sha256:
          "2227607ed12c131b7e207241997ac04548e213405e690afefe31c6a3087c947e",
      },
      dob: {
        date: "1964-05-21T00:52:13.377Z",
        age: 60,
      },
      registered: {
        date: "2006-07-10T01:58:20.039Z",
        age: 18,
      },
      phone: "(985)-365-9740",
      cell: "(777)-824-3823",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/36.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/36.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/36.jpg",
      },
      nat: "TR",
    },
  ],
  info: {
    seed: "cf85b99d14a86640",
    results: 1,
    page: 1,
    version: "1.4",
  },
};

// console.log(randomUserMe.results[0].name.title);
// console.log(randomUserMe.results[0].gender);
// console.log(randomUserMe.results[0].location.street.name);

// console.log(Object.keys(randomUserMe));
// console.log(Object.keys(randomUserMe.results[0]));
// console.log(Object.keys(randomUserMe.results[0].name));
// ["results", "info"][
//   ("gender",
//   "name",
//   "location",
//   "email",
//   "login",
//   "dob",
//   "registered",
//   "phone",
//   "cell",
//   "id",
//   "picture",
//   "nat")
// ][("title", "first", "last")];

// console.log(Object.values(randomUserMe.results));
// console.log(Object.values(randomUserMe.results[0]));
// console.log(Object.values(randomUserMe.results[0].name));

// console.log(Object.entries(randomUserMe));
// console.log(Object.entries(randomUserMe.results));
// console.log(Object.entries(randomUserMe.results[0]));
// console.log(Object.entries(randomUserMe.results[0].name));

// Object.hasOwnProperty()

// console.log(randomUserMe.hasOwnProperty("info")); // true
// console.log(randomUserMe.hasOwnProperty("results")); // true
// console.log(randomUserMe.results.hasOwnProperty("name")); // false
// console.log(randomUserMe.results[0].hasOwnProperty("name")); // true

// object destructuring
// console.log(randomUserMe.results);
// const { results } = randomUserMe;
// console.log(results);
const { info } = randomUserMe;
console.log(info);
const { name } = randomUserMe.results[0];
console.log(name); // output { title: 'Mr', first: 'Çetin', last: 'Akar' }
const { first } = randomUserMe.results[0].name;
console.log(first); // output: Çetin
const { gender: hello } = randomUserMe.results[0]; // you can set name as you wish
console.log(hello); // output: Çetin



