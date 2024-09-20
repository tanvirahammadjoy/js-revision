// const user = {
//   username: "hitesh",
//   price: 999,

//   welcomeMessage: function () {
//     console.log(`${this.username} , welcome to website`); // here this will refer the user object
//     console.log(this);
//   },
// };

// user.welcomeMessage(); // here will be hitesh
// user.username = "sam"; // if we change here than what will happen
// user.welcomeMessage(); // here will be same 

// console.log(this); // this here will be the global context in browser will be (window) and in node.js (global {})

// function chai() {
//   let username = "hitesh";
//   console.log(this.username); // this here will be undefined be cause in empty function it will refer to global in strict mode undefined
// }

// chai();

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // undefined
// }

// this in Arrow Functions
// arrow function are not designed for this purpose

// arrow function are an Shorter syntax for writing functions. They do not bind their own this context.
const greet = () => console.log("Hello!");

// Arrow functions do not have their own this. Instead, they inherit this from the surrounding lexical context (where they were defined).

const person = {
  name: "Alice",
  greet: function () {
    const innerGreet = () => {
      console.log(this.name); // 'Alice'
    };
    innerGreet();
  },
};

person.greet();

// In this example, innerGreet is an arrow function and doesn’t bind its own this. Instead, it uses the this from greet, which is the person object.
// Arrow functions don’t have their own this, they inherit it from their lexical context.

const chai = () => {
  let username = "hitesh";
  console.log(this);
};

chai() // it will refer in in browser will be window in node.js global {}

// arrow function support this when it inside a regular function it's refer to the global object of the regular function be cause of lexical scope

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// if we don't use {} it will return implicitly return
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// if we use {} we have to give explicit return ({}) in this case return implicitly
const addTwo = (num1, num2) => ({ username: "hitesh" });

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// if we want to loop throw the array by using arrow function
// myArray.forEach(() => {}); // we can do like this
