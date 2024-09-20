const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);

// **************************************** reduce ********************************************** //

// reduce() in JavaScript
// The reduce() method in JavaScript is used to iterate through an array and accumulate a single result from all the elements. It applies a reducer function (your callback) on each element of the array, passing the result of each iteration to the next.

// Basic Syntax

// array.reduce((accumulator, currentValue, index, array) => {
// logic to reduce the array into a single value
// }, initialValue);

// accumulator: The accumulated value from the previous iteration.
// currentValue: The current element being processed.
// index (optional): The index of the current element.
// array (optional): The original array being reduced.
// initialValue (optional): The value to use as the first argument to the first call of the callback.

// What reduce() Returns
// It returns a single value that is the result of processing the entire array. The type of this value depends on the logic inside the callback.

// Use Case Example
const numbers2 = [1, 2, 3, 4];
const sum = numbers2.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // 10

// In this example, reduce() iterates over the array, summing all the elements, and returns a single value: 10.

// What Happens Behind the Scenes
// Initial Setup: If an initialValue is provided, it is used as the starting value for the accumulator. If not, the first element of the array is used as the accumulator, and iteration starts from the second element.
// Iteration: For each element in the array, the callback function is called with the current value and the accumulator. The result is stored in the accumulator for the next iteration.
// Final Value: After all elements have been processed, the accumulator holds the final value, which is then returned.
// Example with Objects
// You can use reduce() not only with numbers but also with objects to accumulate more complex data:

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 750 },
];

const totalPrice = products.reduce(
  (total, product) => total + product.price,
  0
);

console.log(totalPrice); // 2250

// Here, reduce() adds the price of each product, returning the total price of all products.

// Behind the Scenes: Execution Steps
// Initialize Accumulator: If the initialValue is provided, it sets the accumulator to that value; otherwise, the first element becomes the accumulator.
// Callback Execution: On each iteration, the callback function processes the currentValue and the accumulator. It updates the accumulator for the next iteration.
// Final Output: Once the array is fully iterated, reduce() returns the accumulated result.
// reduce() with an Array of Arrays
// You can use reduce() to flatten an array of arrays:

const arrayOfArrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattened = arrayOfArrays.reduce((acc, curr) => acc.concat(curr), []);

console.log(flattened); // [1, 2, 3, 4, 5, 6]

// Here, the callback uses concat() to merge each subarray into the accumulator, creating a single flattened array.

// Use Cases for reduce()
// 1. Summing Values: As seen above, reduce() is commonly used to sum up numeric values in an array.

// 2. Flattening Arrays: As demonstrated, reduce() can be used to flatten nested arrays into a single-level array.

// 3. Counting Occurrences: You can use reduce() to count the occurrences of elements in an array:

const fruits = ["apple", "banana", "orange", "apple", "banana", "banana"];
const fruitCount = fruits.reduce((count, fruit) => {
  count[fruit] = (count[fruit] || 0) + 1;
  return count;
}, {});

console.log(fruitCount);
// { apple: 2, banana: 3, orange: 1 }

// 4. Transforming Data: You can use reduce() to transform or restructure data. For instance, turning an array of objects into a single object:

const users1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const userMap = users1.reduce((map, user) => {
  map[user.id] = user.name;
  return map;
}, {});

console.log(userMap);
// { 1: 'Alice', 2: 'Bob', 3: 'Charlie' }

// How this Works Inside reduce()
// The this keyword inside reduce() works similarly to how it works in other array methods, like map() and filter():

// Arrow Functions and this
// When using an arrow function as the callback, this refers to the lexical context (the value of this outside of the reduce()).

const numbers3 = [1, 2, 3, 4];

const context = {
  threshold: 10,
  calculate: function () {
    return numbers3.reduce((sum, num) => {
      return sum + num + this.threshold; // 'this' refers to context
    }, 0);
  },
};

console.log(context.calculate()); // 30

// Here, the arrow function inherits the this value from the context object, allowing access to this.threshold.

// Regular Functions and this
// If you use a regular function as the callback, you can explicitly pass this using the thisArg argument or bind this manually:

const numbers4 = [1, 2, 3, 4];

const context1 = {
  threshold: 10,
  calculate: function () {
    return numbers4.reduce(
      function (sum, num) {
        return sum + num + this.threshold; // 'this' is undefined without passing context
      }.bind(this),
      0
    ); // binding 'this' to ensure correct reference
  },
};

console.log(context1.calculate()); // 30

// Here, bind(this) is used to make sure this refers to context inside the callback function.

// Summary
// reduce(): Used to reduce an array to a single value by applying a callback function to each element.
// Returns: A single value, which could be a sum, a concatenated string, an object, or any other data structure.
// Use Case: Typically used for summing values, flattening arrays, counting occurrences, or transforming data.
// this in reduce():
// Arrow functions: this refers to the surrounding context.
// Regular functions: You must explicitly pass this or bind it manually using bind().
