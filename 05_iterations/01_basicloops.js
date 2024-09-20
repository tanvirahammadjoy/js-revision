// 3. Loops
// a. for loop
// Repeats a block of code a specified number of times.

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// explanation:The loop starts with i = 0, and as long as i < 5, it runs the loop body and increments i.Output:

// 0;
// 1;
// 2;
// 3;
// 4;

// for

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is best number"); // this condition will be execute first
  }
//   console.log(element); // this will be seconde
}

// console.log(element); // this will give us error be cause we can not access from out side ReferenceError: element is not defined

for (let i = 1; i <= 10; i++) {
//   console.log(`Outer loop value: ${i}`); // this will be run first time
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and inner loop ${i}`); 
    // than it will run 10 times and than will go agin to outer will run second agin inner one will be 10 time in this way it will run until 10 is outer and inner as well
    // console.log(i + '*' + j + ' = ' + i*j );
  }
}

let myArray = ["flash", "batman", "superman"];
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}
// output:
// flash;
// batman;
// superman;

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`); // the break key word will terminate the code from iteration when detected 5
//         break
//     }
//    console.log(`Value of i is ${index}`);

// }

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`Detected 5`); // but continue will give an chance to continue for one time 5 will not be counted
//     continue;
//   }
//   console.log(`Value of i is ${index}`);
// }
