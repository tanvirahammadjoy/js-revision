// b. while loop
// Repeats a block of code while a specified condition is true.

// let index1 = 4; // it will not be work it will be out in the first iteration check
let index1 = 0;

while (index1 < 3) {
  console.log(index1);
  index1++;
}

// explanation:
// The loop continues to execute as long as i < 3.The value of i is incremented in each iteration, stopping the loop when i equals 3.

// Output
// 0;
// 1;
// 2;

let index = 0;
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}

let myArray = ["flash", "batman", "superman"];

let arr = 0;
while (arr < myArray.length) {
  console.log(`Value is ${myArray[arr]}`);
  arr = arr + 1;
}

// c. do...while loop
// Executes the code block at least once before checking the condition.

let i = 0;

do {
  console.log(i);
  i++;
} while (i < 3);

// Explanation:
// The do...while loop executes the code block first, then checks the condition.
// Even if the condition is false initially, the code block runs at least once.

// Output:
// 0
// 1
// 2

let score = 11; 
// but on the other hand do while will give us one chance to run the first block before condition check doesn't mater if it match or not the condition than if not match the condition it will break to iterate other wise if match it will continue until loop match

do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);
