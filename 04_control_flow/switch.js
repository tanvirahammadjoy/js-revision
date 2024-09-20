// c. switch statement
// Evaluates an expression and executes corresponding case blocks.

let color = "blue";

switch (color) {
  case "red":
    console.log("The color is red");
    break;
  case "blue":
    console.log("The color is blue");
    break;
  case "green":
    console.log("The color is green");
    break;
  default:
    console.log("Unknown color");
}

// Explanation:

// The value of color is 'blue', so the code block for the case 'blue' is executed.
// The break prevents the execution from falling through to other cases.
// Output: The color is blue

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}
