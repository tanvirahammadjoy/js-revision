const marvel_heros = ["thor", "Iron_man", "spider_man"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros); // output: [ 'thor', 'Iron-man', 'spider_man', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]); // flash

let concat = marvel_heros.concat(dc_heros);
// console.log(concat); // output: [ 'thor', 'Iron_man', 'spider_man', 'superman', 'flash', 'batman' ]

let spread = [...marvel_heros, ...dc_heros];
// console.log(spread); // output [ 'thor', 'Iron_man', 'spider_man', 'superman', 'flash', 'batman' ]

let mixedArray = [1, "hello", true, { name: "John" }, [50, 0o5, 10,[1, 2, 3, 4, 5], 20], null];
// console.log(mixedArray); // output: [1, "hello", true, { name: "John" }, 50, 0o5, 10,1, 2, 3, 4, 5, 20, null]


let combineIntoOne = mixedArray.flat(Infinity);
// console.log(combineIntoOne); // output: [1, "hello", true, { name: "John" }, 50, 0o5, 10,1, 2, 3, 4, 5, 20, null]

let combineIntoOne2 = mixedArray.flat(2); // set manually set the array deep
// console.log(combineIntoOne2); // output: [1, "hello", true, { name: "John" }, 50, 0o5, 10,1, 2, 3, 4, 5, 20, null]

// console.log(combineIntoOne); // [1, "hello", true, { name: "John" }, 50, 0o5, 10,1, 2, 3, 4, 5, 20, null]

// console.log(Array.isArray("tanvir")); // false
// console.log(Array.from("tanvir")); // array: [ 't', 'a', 'n', 'v', 'i', 'r' ]
// console.log(Array.from({name: "tanvir"})); // return empty array: []

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3)); // output: [ 100, 200, 300 ]




