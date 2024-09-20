// d. for...of loop
// Iterates over the values of an iterable object like an array or string.

const fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}
// Explanation:
// The for...of loop iterates over the values in the fruits array.

// Output:
// apple
// banana
// cherry

// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

// here we will get only value
const greetings = "Hello world!";
for (const greet of greetings) {
  console.log(`Each char is ${greet}`)
}

// the Maps object holds key-value pairs and remember the original insertion order of the key. any value (both object and primitive values) may be use as either a key or value.
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

console.log(map);
// in map if have any duplicate value one will be keep others will be omitted.

// this way we will get key value together like sort of array destructuring
for (const [key, value] of map) {
  console.log(key, ':-', value);
}

// object are not iterable directly by For-Of loop we have to use For-In to iterate object directly
// const myObject = {
//   game1: "NFS",
//   game2: "Spiderman",
// };

// TypeError: myObject is not iterable
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }
