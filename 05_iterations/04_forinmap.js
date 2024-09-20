// e. for...in loop
// Iterates over the properties of an object.

const person = { name: "Alice", age: 25, city: "New York" };

for (let key in person) {
  console.log(key + ": " + person[key]);
}

// Explanation:
// The for...in loop iterates over the keys (properties) of the person object.

// Output:
// name: Alice
// age: 25
// city: New York

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// here we will get key and values
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// if we use For-In loop in array it will work as well
const programming = ["js", "rb", "py", "java", "cpp"]

// in this way we will get the value but for in loop is not recommended for array be cause some times give unexpected results we should avoid for in for array
for (const key in programming) {
    console.log(programming[key]);
}

// but For-In loop will not work in maps no result there have some ways to do it but not work this way
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// here will not be return any result nether error or success result
for (const key in map) {
    console.log(key);
}
