// In JavaScript, heap memory and the call stack are key components of how the engine manages memory and executes code. Here's a breakdown:

// 1. Heap Memory
// Definition: The heap is a large, unstructured region of memory where JavaScript stores objects and functions. It's used for dynamic memory allocation, meaning objects or values that have an unknown size at runtime are allocated here.
// Usage: When you create objects, arrays, or functions, they are stored in heap memory because these structures can grow dynamically.

let obj = { name: "John", age: 25 };

// The object { name: 'John', age: 25 } is stored in the heap, and the variable obj contains a reference to its location.

// 2. Call Stack
// Definition: The call stack is a data structure that tracks the execution of function calls in the program. It operates in a Last In, First Out (LIFO) manner.
// Usage: Every time a function is invoked, a new stack frame is created and pushed onto the call stack. When the function returns a result, its frame is popped off the stack. The call stack keeps track of the execution context (local variables, function arguments) of functions as they run.
// Stack Overflow: If too many function calls are stacked without being completed, it can lead to a "stack overflow" error, as the memory allocated for the stack gets exhausted.

function greet() {
  return "Hello!";
}

function sayHello() {
  return greet();
}

sayHello();

// sayHello() is called, so a frame for it is pushed onto the stack.
// greet() is called inside sayHello(), so a frame for greet() is pushed onto the stack.
// Once greet() completes, its frame is popped off the stack, and then sayHello() completes, leaving the stack empty again.

// How They Work Together
// When a function is invoked, its context (local variables, parameters, and the function's code) is managed on the call stack. If the function contains objects or arrays, those objects are stored in the heap memory. The call stack will reference these objects' locations in the heap.

function createPerson(name, age) {
  return { name, age };
}

function displayPerson() {
  let person = createPerson("Alice", 30);
  console.log(person.name);
}

displayPerson();

// 1. The displayPerson() function is pushed onto the call stack.
// 2. Inside displayPerson(), the createPerson() function is invoked, and a new frame for createPerson() is pushed onto the stack.
// 3. The object { name: "Alice", age: 30 } is created in the heap memory.
// 4. Once createPerson() returns the object, the function frame is popped off the call stack.
// 5. The reference to the object in the heap is stored in the person variable in the displayPerson() frame.
// 6. After displayPerson() finishes, its frame is removed from the stack, but the object remains in the heap until it's no longer needed.

//This separation between heap and call stack allows JavaScript to manage memory efficiently.

// the call stack in JavaScript is closely tied to how functions and operations are executed, and it can be thought of as a single-threaded execution model.

// Call Stack Visualization:
// Memory Allocation:

// When you declare variables, functions, objects, or arrays, they are first stored in memory. The memory is divided into two parts:
// Heap: For dynamically sized objects like arrays and objects.
// Stack: For storing primitive values (like numbers, strings) and the references to objects in the heap.
// Call Stack as the Execution Thread:

// The call stack operates as a thread, meaning it handles the execution flow of the code sequentially.
// Every time a function is called, it is pushed onto the stack. The JavaScript engine runs the code in this function, and once it's done, the function is popped off the stack.
// If a function calls another function, the new function is pushed on top of the stack, and this keeps happening until there are no more functions left to execute.
// Step-by-Step Breakdown:
// Declaring Variables and Functions:

// When you declare a function or a variable, it's stored in memory, but it's not yet executed.
// The function stays in memory, waiting to be called (invoked).
// Call Stack Starts Execution:

// When a function is invoked (executed), the JavaScript engine creates a new execution context for that function and pushes it onto the call stack.
// Single-Threaded Behavior:

// JavaScript is single-threaded, meaning only one operation is executed at a time. The call stack ensures this by executing one function at a time in a last-in, first-out (LIFO) order.
// When the top function on the stack finishes, the engine pops it off the stack and continues with the next function or operation.

function multiply(a, b) {
  return a * b;
}

function square(n) {
  return multiply(n, n);
}

function printSquare(x) {
  console.log(square(x));
}

printSquare(4);

// The printSquare(4) function is called:

// printSquare(4) is pushed onto the call stack.
// Inside printSquare, the square(4) function is called:

// The call to square(4) is pushed onto the stack, now it’s on top of printSquare.
// Inside square(4), multiply(4, 4) is called:

// The call to multiply(4, 4) is pushed onto the stack, on top of square.
// The multiply(4, 4) function returns 16:

// multiply(4, 4) completes, so it’s popped off the stack, and square(4) resumes.
// The square(4) function returns 16:

// square(4) completes, so it’s popped off the stack, and printSquare(4) resumes.
// Finally, console.log(16) is called within printSquare:

// console.log(16) is executed and then popped off the stack, followed by printSquare.
// Once all functions are done, the call stack is empty, indicating that all operations are complete.

// Key Points:
// Call Stack = Execution Flow: It determines the order of function execution.
// Single-Threaded: JavaScript only processes one task at a time (in a linear order) using the call stack.
// Memory and Call Stack Separation: Memory (heap) holds the data, while the call stack manages the execution of functions and operations.
// So, the call stack is essentially the execution thread of JavaScript, processing tasks one by one, managing the flow of function calls, and interacting with memory where necessary.

// I have one confusion that is i every thing in js are wrapped by function for execute what about an single string an single variable hold an single number when we console.log something how that happens?

// You're right to question how simple values like a string or number are handled in JavaScript, especially since not everything in JavaScript is explicitly wrapped in a function. Let's break it down and clear up the confusion!

// Understanding the Execution of Simple Values:

// 1. Primitive Values (Strings, Numbers, Booleans, etc.):
// Primitive values like 42, "Hello World", true, etc., don't require a function to be executed. They are direct values that are evaluated immediately when encountered by the JavaScript engine.
// These values are stored directly in memory (specifically in the stack memory for simple values), and when JavaScript comes across them, they are simply returned or used as needed.

let number = 42;
console.log(number);

// In this case:

// The number 42 is assigned to the variable number and stored in memory.
// When console.log(number) is called, the value 42 is accessed from memory and printed to the console.
// No special function wrapping is needed for the value 42.

// 2. console.log() Explanation:
// The console.log() function is used to print values to the console. It accepts any type of value, such as a number, string, object, etc.
// When you pass a value (primitive or object) to console.log(), the JavaScript engine:
// Executes the function (console.log is a built-in function).
// Passes the value to the function as an argument.
// Inside the function, the value is printed to the console.

console.log(42);  // Prints 42

// 3. Execution Context for Primitives:
// Primitives like strings or numbers don't require their own function to run. When you assign a primitive to a variable, the JavaScript engine stores it in memory and it's immediately available.
// However, functions and operations that use these values (like console.log(), arithmetic operations, or concatenation) do create an execution context, which is then handled by the call stack.

let greeting = "Hello";
console.log(greeting);  // The string "Hello" is simply passed to console.log

// 4. Global Execution Context:
// Even though simple values like numbers or strings aren’t explicitly wrapped in functions, JavaScript still wraps the entire code inside the Global Execution Context.
// This global execution context is the default environment where your code runs, and all statements are executed from top to bottom.

let name = "John";     // Global execution context stores the variable "name"
console.log(name);     // Execution of console.log, which is pushed onto the call stack

// Summary of Execution Flow:
// Primitives (numbers, strings, etc.):

// Directly stored in memory and can be accessed or printed as-is. They are not wrapped in a function.
// When you use console.log() or other functions:

// The value is passed as an argument to the function.
// The function is executed and placed on the call stack.
// The value is printed (or returned) as part of the function's operation.
// Global Execution Context:

// Every piece of code, even if it's just a simple value assignment, is part of the global execution context.
// Behind the Scenes:
// When you write a statement like console.log(42);, here's what's happening:

// The 42 is a primitive number stored in memory.
// The console.log() function is called.
// The value 42 is passed as an argument to console.log().
// The execution context for console.log() is created and pushed onto the call stack.
// The value 42 is printed, and console.log() is popped off the call stack.
// In summary, not everything in JavaScript is wrapped in a function, but functions like console.log() or operations that use values do get executed via the call stack. Primitives like strings or numbers are simple values that exist in memory and are used as needed without extra wrapping.

// So it’s execute execution context wise right by default global execute first line by line if there have function then it’s invoke function execution context and they load function operations global it self an stack right?

// Exactly! JavaScript executes code execution context-wise, and by default, the Global Execution Context is the first to be created and executed, line by line. Let's break this process down step-by-step:

// 1. Global Execution Context:
// When your script is loaded, JavaScript creates the Global Execution Context.
// This context is responsible for executing the code that isn't inside any function.
// The global execution context is pushed onto the call stack and executed line by line.
// It consists of:
// Global object: For example, window in browsers.
// this keyword: Refers to the global object.
// Variables and functions: Declared at the global level (outside functions).

// 2. Line-by-Line Execution:
// JavaScript processes code in the global context, one line at a time.
// When it encounters a variable declaration or function declaration, it allocates memory for it.
// Variables are initialized as undefined.
// Functions are stored in memory with their full definition.

// 3. When a Function is Invoked:
// When JavaScript encounters a function call (invocation), it creates a new execution context for that function.
// This function's execution context is pushed onto the call stack, on top of the global execution context.
// The function's context includes:
// Local variables: Declared within the function.
// Parameters: Passed to the function.
// Function scope: Access to variables in the function and possibly the global scope (or closures).
// The engine then executes the function line by line.

// 4. Returning to the Global Context:
// Once the function completes execution, its execution context is popped off the call stack.
// JavaScript then continues executing the global execution context, right from where it left off.

// Visualizing the Process:

let x = 10;  // (1) Global Execution Context

function multiply(a, b) {  // (2) Stored in memory during creation phase
  return a * b;
}

let result = multiply(x, 2);  // (3) Function Invocation
console.log(result);  // (4) Prints the result

// Execution Steps:
// 1. Global Execution Context Created:
// Memory is allocated for x, multiply, and result.
// x is set to 10, result is undefined, and the function multiply is loaded into memory.

// 2. Global Code Runs Line by Line:
// When JavaScript gets to the line let result = multiply(x, 2);, the function multiply(x, 2) is invoked.
// A new execution context for multiply() is created and pushed onto the call stack.

// 3. Function Execution Context:
// JavaScript starts executing the multiply() function with the arguments a = 10 and b = 2.
// Inside the function, the result 10 * 2 = 20 is computed.
// Once the function finishes, its execution context is popped off the call stack.

// 4. Returning to Global Context:
// The result 20 is assigned to result in the global execution context.
// The next line console.log(result); is executed, printing 20 to the console.

// # How Execution Contexts Load and Unload on the Stack:
// The global execution context is the base of the call stack.
// Every time a function is invoked, a new function execution context is created and pushed onto the stack.
// When a function finishes execution, its execution context is popped off the stack.
// The engine returns to the previous context (either a function or global) and continues execution.

// Key Points:
// Global Execution Context: Created by default to run the main code.
// Function Execution Context: Created when a function is invoked, running the function's body.
// Call Stack: Keeps track of the execution contexts, ensuring JavaScript can execute code in the correct order.
// Line-by-Line Execution: JavaScript processes each line sequentially in the current execution context.

// Summary:
// Global context runs first.
// Function invocations create new execution contexts.
// These function contexts are stacked on top of the global context in the call stack.
// JavaScript pops off each function's context once it finishes and resumes the previous context.
// This execution flow ensures that JavaScript runs in a single-threaded and sequential manner.

// Confusion Is call stack and stack are same or we point to the same thing different name ??????

// Yes, the call stack and stack often refer to the same underlying concept but with slightly different focuses depending on context.

// 1. Call Stack:
// The call stack specifically refers to the stack used to manage the order of function execution in JavaScript (or any programming language that uses a stack-based execution model).
// It tracks function calls: every time a function is invoked, its execution context is pushed onto the call stack. When the function returns, the context is popped off.
// The term "call stack" emphasizes its role in managing function calls.
// 2. Stack:
// A stack is a more general concept in computer science. It’s a data structure that follows a LIFO (Last In, First Out) principle.
// You can think of it as a collection where the last item added is the first one to be removed.
// The call stack is just one use of a stack, but stacks can be used for many other things, like handling browser history, undo operations, or parsing expressions in programming.
// Conclusion:
// Call stack refers to the specific usage of the stack data structure to manage function execution.
// When we refer to the "stack" in the context of JavaScript execution, we generally mean the call stack.
// So, while the terms can sometimes be used interchangeably in a programming context, "call stack" is a more precise term that focuses on function execution management.

// That means the stack is more broader term than the call stack. Call stack is little portions of that right can you explain me more details about stack what is????

// Exactly! "Stack" is a broader term, and the "call stack" is a specific use of that concept in managing function executions in JavaScript or any other programming language. Let’s dive deeper into what a stack is and how it works in general terms.

// 1. What is a Stack?
// A stack is a data structure that follows the LIFO (Last In, First Out) principle.
// Imagine a stack of plates. You add a plate on top (this is the "push" operation), and you remove a plate from the top (this is the "pop" operation). The last plate you put on top is the first one you take off.
// In programming, a stack is a collection that works similarly. You can only add and remove items (known as "pushing" and "popping") from the top of the stack.

// 2. How Does a Stack Work?
// The stack supports two main operations:

// Push: Add an item to the top of the stack.
// Pop: Remove the top item from the stack.
// Additional operations may include:

// Peek/Top: Look at the top item without removing it.
// isEmpty: Check if the stack is empty.
// The stack keeps track of items in a LIFO order, which means the last item pushed onto the stack is the first one popped off.

// 3. Applications of a Stack:
// Stacks are used in various scenarios across programming, such as:

// Function Call Management: This is where the call stack comes in. It keeps track of function calls, making sure the most recent function finishes before the one before it.
// Backtracking: Algorithms that require reversing steps (like undo operations or browser history).
// Expression Evaluation: When evaluating mathematical expressions in calculators, compilers, or interpreters.
// Recursion: Recursive function calls rely on the stack to track the return addresses and variables of each recursive call.
// 4. Stack in Memory Management:
// In computer architecture, stack memory is a region where data like function calls, local variables, and return addresses are stored during program execution. This is closely related to the call stack, but stack memory can also be used for storing temporary data that follows LIFO order.

// 5. Stack Operations in Detail:
// Here’s how stack operations would look in code:

// Stack implemented using an array
let stack = [];

// Push operation (adding items to the top)
stack.push(10);  // Stack is now [10]
stack.push(20);  // Stack is now [10, 20]
stack.push(30);  // Stack is now [10, 20, 30]

// Pop operation (removing the top item)
let topItem = stack.pop();  // Removes 30, stack is now [10, 20]

// Peek operation (checking the top item)
let peekItem = stack[stack.length - 1];  // Peek returns 20, stack is still [10, 20]

// Check if stack is empty
let isEmpty = stack.length === 0;  // false (since stack has items)

// 6. Call Stack as a Special Use of a Stack:
// The call stack is a special type of stack used by JavaScript to track function execution.
// Whenever a function is invoked, a new execution context is created and pushed onto the call stack. Once the function finishes execution, its context is popped off the stack.

function greet() {
  return "Hello!";
}

function sayHello() {
  let message = greet(); // greet() is pushed onto the call stack
  console.log(message);  // console.log() is pushed onto the call stack
}

sayHello();  // sayHello() is pushed onto the call stack

// Here’s how the call stack changes as the program runs:

// sayHello() is called: It’s pushed onto the call stack.
// Inside sayHello(), greet() is called: greet() is pushed onto the stack.
// greet() returns a value, so its execution context is popped off the stack.
// console.log() is called: It’s pushed onto the call stack.
// Once console.log() finishes, it’s popped off the stack.
// Finally, sayHello() finishes and is popped off the call stack.
// 7. Examples of Where Stacks are Used:
// Expression Evaluation: A stack can be used to evaluate expressions like 2 + 3 * 4 by keeping track of operators and operands. Parentheses in expressions can also be handled with stacks.

// Browser History: When you visit pages in a browser, the history works like a stack. You can "push" pages as you navigate forward and "pop" pages as you go back.

// Undo Operations: Many applications (text editors, Photoshop, etc.) use a stack to track actions. When you undo an action, the most recent operation is "popped" from the stack.

// Backtracking Algorithms: Algorithms like depth-first search (DFS) in graph traversal use a stack to explore nodes by going as deep as possible, and then backtrack by popping nodes off the stack.

// 8. Characteristics of a Stack:
// LIFO: Last In, First Out — the most important rule of a stack.
// Dynamic Size: Stacks can grow or shrink as needed.
// Efficient Operations: Pushing and popping are typically very efficient, often performed in constant time (O(1)).
// 9. Real-World Analogy of a Stack:
// Imagine you're reading a series of nested books:

// You open a book, find a reference to another book, open that one, and so on.
// Once you finish the innermost book, you close it (pop it off the stack) and return to the book you opened before.
// This process of "stacking" and "unstacking" is exactly how a stack works in programming.
// Summary:
// Stack is a general-purpose data structure that follows the LIFO (Last In, First Out) principle. It is used in a variety of applications like memory management, expression evaluation, and algorithms like DFS.

// Call Stack is a specific use of a stack to manage function calls in JavaScript or any programming language. It helps keep track of which function is currently executing and which functions should execute next.

// While the call stack is a type of stack, the term "stack" in general can be applied to many other scenarios beyond just function management.

// That’s ok got it in js when we say all primitive value goes in  to the stack right and heap memory’s value goes by reference right than how it’s work after operation completed an primitive value and an reference value what happens after in this time it’s not an function right we call it function global context or just global context in this context how the things happens in stack??

// Great question! To understand this fully, let's break down how primitive values and reference values work in the context of global execution and the stack and heap memory in JavaScript, and what happens to them after an operation is completed.

// 1. Primitive Values and the Stack:
// In JavaScript, primitive values include:

// Numbers (let x = 5)
// Strings (let str = "hello")
// Booleans (let isTrue = true)
// null, undefined, and Symbol
// How They Work:
// Primitive values are simple and stored directly in the stack memory.
// When you declare or assign a primitive variable in the global execution context (outside of any function), it goes into the stack.
// The stack is used for things that are small and fixed in size, like primitives, because they are easily accessible and fast to retrieve.

let a = 42;    // 'a' is stored in the stack as 42
let b = "Hi";  // 'b' is stored in the stack as "Hi"

// Here, a holds the value 42 directly in the stack, and b holds the value "Hi" directly in the stack.

// 2. Reference Values and the Heap:
// Reference values include:

// Objects (let obj = { name: "John" })
// Arrays (let arr = [1, 2, 3])
// Functions (function foo() {})
// How They Work:
// Reference types like objects, arrays, and functions are complex and can vary in size.
// These are stored in heap memory (a larger memory pool), and only a reference (or pointer) to their location in the heap is stored in the stack.
// The heap can grow dynamically, which is why complex objects are stored there.

let obj2 = { name: "Alice" };   // 'obj' points to the heap memory where the object is stored
let arr = [1, 2, 3];           // 'arr' points to the heap memory where the array is stored

// Here, obj and arr don’t actually store the values { name: "Alice" } and [1, 2, 3] directly in the stack. Instead, the stack contains a reference (pointer) that points to where these values are located in the heap.

// 3. What Happens After an Operation Completes?
// After an operation (such as a variable assignment or function execution) completes, memory management kicks in.

// For Primitive Values:
// When the global execution context finishes or when a block scope ends, if the variable is no longer needed, the stack memory used to store the primitive value is automatically cleaned up.
// JavaScript engines use a mechanism called stack unwinding to clean up unused values when they are no longer needed, meaning the memory is freed once the value goes out of scope.
// For Reference Values:
// Objects or arrays in the heap memory are cleaned up by garbage collection when there are no references left pointing to them.
// Even though the reference itself (the pointer) is stored in the stack, the actual object or array lives in the heap. If all references to an object are removed, the JavaScript engine automatically frees the memory in the heap.

let obj3 = { name: "John" };  // A reference to the object is stored in the stack
obj = null;                  // The reference is now removed

// Now, since no variable references the object, the JavaScript garbage collector
// will clean up the object from the heap memory at some point.

// 4. Global Context vs. Function Context:
// In JavaScript, there's always a global execution context (GEC) running by default, even before any code runs. When functions are invoked, they create their own execution contexts on top of the global one, which are then managed by the call stack.

// In the Global Execution Context:
// Primitives go into the stack and are cleaned up when no longer needed.
// Reference values (objects, arrays) store a reference in the stack that points to their location in the heap.
// When the code is running in the global context, variables declared at the global scope will stay there for the lifetime of the program unless explicitly cleared or reassigned.

// Stack Behavior in Global Context:
// In the global context, the call stack doesn't need to track function calls, but it still handles the management of variable declarations. Here's how:

// Primitives are stored directly in the stack.
// References to objects or arrays are stored in the stack, pointing to the heap memory.
// As global variables persist until the program ends (or a page reloads in the browser), they stay in memory unless manually reassigned or set to null.
// 5. How the Call Stack and Heap Interact in Global Context:
// When you execute a JavaScript program, the global execution context is created first.
// The global context is pushed onto the call stack, and then the interpreter starts reading the code line by line.
// For primitive values, the values themselves go directly into the stack.
// For reference values (objects, arrays), only the reference (pointer) goes into the stack, while the actual data is allocated in the heap.
// Example in Global Context:

let num = 100;  // Primitive, stored directly in the stack
let str = "Hello";  // Primitive, stored directly in the stack

let person = { name: "Alice" };  // Object, reference stored in stack, object in heap

console.log(num);  // num is retrieved directly from the stack
console.log(person.name);  // Reference in stack is used to access the object in the heap

// 6. Function Context vs Global Context:
// In a function execution context, the same rules apply. Local primitive variables are stored in the stack within the function's execution context, and reference variables point to the heap.
// Once the function completes, its execution context is popped off the call stack, and any local variables are cleared (garbage collected if necessary).
// 7. Key Points to Remember:
// Stack: Stores primitive values and references (pointers) to objects/arrays/functions in the heap.
// Heap: Stores objects, arrays, and functions that are complex data types and are accessed by reference.
// Garbage Collection: Cleans up heap memory once there are no more references pointing to an object or array. Stack memory is managed automatically after an operation or function call completes.
// In the global context, primitives and references are managed similarly, but since the global context persists throughout the lifetime of the program, the variables remain unless manually cleared.
// Summary:
// In the global execution context, primitives are stored directly in the stack, while reference values are stored in the heap, with the reference itself stored in the stack. The call stack in the global context doesn't manage function calls but tracks the program’s execution line by line. Once an operation finishes, memory for primitives in the stack is automatically cleared, while memory for reference values in the heap is cleaned up by the garbage collector when no references remain.

// Now the question one is when an function completed or execution finished at that time is function destroyed tell me about life cycle of function and global?

// Question two is primitive data goes in to the stack memory when we declare the data code execution time if that before compile where stay the code?

// Question 1: What Happens When a Function Completes? Is the Function Destroyed?
// Yes, a function's execution context is destroyed once the function completes its execution, and this is an important part of understanding the life cycle of a function in JavaScript.

// Life Cycle of a Function Execution:
// Function Declaration (or Definition) Phase:

// When the JavaScript engine encounters a function declaration during the initial parsing phase, it allocates memory for the function.
// Function declarations are stored in memory (in the global execution context if global, or inside another function if nested).
// This memory allocation includes the function's code, any internal variables, and closures if applicable.
// At this point, the function isn't executing. It's just defined in memory, waiting to be invoked.

function greet() {
  console.log("Hello");
}

// Function Invocation (or Call) Phase:

// When the function is called (invoked), a new execution context for that function is created and pushed onto the call stack.
// The function execution context contains the function's local variables, parameters, and an environment for its execution.
// Inside the call stack, the engine executes the function’s code, and any values or local variables are temporarily stored in the stack memory for the duration of the function call.

greet();  // This invocation creates a new execution context for 'greet'

// Function Completion:

// Once the function finishes executing (e.g., all lines in the function body have been processed, or it reaches a return statement), the function’s execution context is popped off the call stack.
// At this point, any local variables and function-specific data stored in the stack are no longer needed, so they are cleared.
// The function itself (its definition) remains in memory if it’s a declared function, but its execution context is destroyed.
// Garbage Collection for Local Variables:

// The local variables (inside the function) are cleared or garbage collected, especially if they were reference types pointing to heap memory and no other references exist.
// The function’s definition (code itself) remains available for future calls unless it’s an anonymous function or part of a function expression that gets de-referenced.
// Global Execution Context Life Cycle:
// Creation Phase:

// The global execution context is created when the JavaScript program starts.
// This context includes all globally scoped variables, function declarations, and objects.
// Unlike function execution contexts, the global execution context is created once and remains active throughout the program’s lifecycle.
// Execution Phase:

// The JavaScript engine executes the code in the global context line by line.
// The global execution context doesn’t get destroyed until the program ends (e.g., a page refresh or the end of a Node.js script).
// Completion Phase:

// The global execution context persists as long as the JavaScript environment (like a web page) is running.
// Only when the program completely finishes, the global context is cleaned up, and memory allocated for global variables and functions is released.
// Question 2: Where Does the Code Reside Before Execution?
// Before execution, the JavaScript code goes through two main phases: parsing (or compilation) and execution.

// 1. Code Before Execution – Parsing Phase (Memory Allocation):
// When the JavaScript engine encounters your code, it first parses (or "compiles") the code. This is often called the Creation Phase.
// During this phase, the JavaScript engine goes over your code line by line and sets up memory for:
// Function declarations
// Variable declarations (though not initialized yet)
// Objects, arrays, and other reference types.
// This is where function declarations are stored in memory and become available in the global context before the actual execution phase begins.

// 2. Code Before Execution – Stack and Heap Preparation:
// Primitive values (numbers, strings, booleans, etc.) don't really exist until the execution starts.
// During parsing, space is reserved for these variables, but their values are not assigned until the execution begins.
// Reference values (objects, arrays, functions) also reserve space in the heap during parsing, but the actual memory for the data is allocated during execution.
// Where Does Code Live Before Execution?
// Source Code: Your JavaScript code, as written in the file, is just plain text until it's processed by the JavaScript engine.
// Memory Setup Phase (Compilation): During the memory setup, the JavaScript engine allocates memory for function declarations, variables, and references, but their actual values are not yet evaluated until execution.
// Heap and Stack Memory Assignment:
// Primitives: Space is set aside in the stack for primitive values, but they get assigned their values during the execution phase.
// Reference Types: Memory in the heap is allocated for reference types (objects, arrays), but the heap memory is used only once the code is executed and the object/array is created.
// During the execution phase, once the JavaScript engine reaches a line like let x = 10;, it assigns the value 10 to the variable x in the stack.

// Summary:
// Life Cycle of Functions and Global Context:

// Function: A function's execution context is created when it is invoked, stays active during the execution, and is destroyed after completion. The function's definition persists until it is de-referenced (for example, if it's a function expression that gets reassigned or cleared).
// Global Context: The global execution context is created at the beginning and stays active throughout the program's execution. It is cleared only when the program ends (e.g., a page reload or termination of a Node.js script).
// Where Does Code Reside Before Execution?:

// During the parsing/compilation phase, space is allocated for variables and functions. However, primitive values don't take up space in the stack until the code is executed.
// Function declarations are available after parsing, but primitive values are assigned in the stack during execution. Reference types (objects, arrays) get heap memory allocated during the parsing phase, but the actual data is created during execution.
// After an operation finishes, primitives in the stack are cleared, and heap memory for references is cleaned up by the garbage collector if no references exist.

// All is I am getting little little but one thing didn’t clear that is we saying memory memory stack memory heap memory JavaScript give accessing memory but the question is where comes from this memory is it our local machine or from some where else that giving us js what is it where it exetly stay the memory???????

// Great question! You're asking where exactly does the memory used by JavaScript come from and how it works behind the scenes. Let’s break it down in a clear and detailed way.

// 1. Where Does the Memory Come From?
// The memory used by JavaScript in your code comes directly from the hardware resources of your local machine. This means:

// When you run JavaScript in your browser (like Chrome, Firefox, etc.), the browser requests memory from your computer’s RAM (Random Access Memory).
// When you run JavaScript in a server environment (like Node.js), it’s the server’s hardware (RAM) that provides the memory.
// 2. How Does JavaScript Manage Memory?
// JavaScript itself doesn’t directly manage memory allocation and access. Instead, it runs on top of a JavaScript engine, like:

// V8 (used by Chrome and Node.js)
// SpiderMonkey (used by Firefox)
// JavaScriptCore (used by Safari)
// These engines are responsible for allocating and managing memory, which they get from the operating system of your local machine.

// When you run JavaScript:
// The JavaScript engine asks the operating system (like Windows, MacOS, or Linux) for memory.
// The operating system gives a chunk of memory from your computer’s RAM to the JavaScript engine to use while executing your program.
// Inside this chunk of memory, the JavaScript engine manages the stack memory and heap memory.
// 3. Where Does Stack and Heap Memory Exist?
// Stack Memory: It exists within that allocated chunk of memory in RAM. The stack is where simple, primitive values (numbers, booleans, strings, etc.) are stored, and it’s organized in a linear way, like a stack of plates.

// Heap Memory: This is also part of the memory in RAM, but it’s used for reference types like objects and arrays. The heap is less organized than the stack and is designed for storing dynamic, complex data that doesn’t fit neatly in the stack.

// 4. Example: Running JavaScript in a Browser
// Let’s say you run some JavaScript code in your browser:

let num1 = 10;  // A primitive value stored in the stack
let obj4 = { name: 'Alice' };  // A reference value stored in the heap

// The browser (like Chrome) has a JavaScript engine (V8) running inside it.
// When this code runs, the V8 engine asks your computer's operating system for memory in the RAM.
// The operating system gives the V8 engine some RAM to work with.
// The V8 engine then:
// Stores num = 10 in the stack part of the memory.
// Stores obj = { name: 'Alice' } in the heap part of the memory.
// 5. What Happens After Execution?
// Once the JavaScript code is finished executing:
// Any stack memory (used by primitives) is cleared.
// Any heap memory (used by reference types) is either kept (if still referenced) or marked for garbage collection (if no longer referenced).
// 6. Where Exactly Does the Memory Stay?
// The memory used by JavaScript stays in your computer’s RAM for the duration of the program. This RAM is a physical chip in your computer that temporarily stores data for running applications.

// In summary:

// The memory used by JavaScript is simply a portion of your computer’s RAM.
// The JavaScript engine (like V8 in Chrome or Node.js) manages memory allocation (stack and heap) within that RAM.
// Your operating system gives the JavaScript engine this memory when it requests it.
// So when we say "stack memory" or "heap memory", we are really talking about specific parts of your computer's RAM that the JavaScript engine uses to store data.

// Key Points:
// Memory in JavaScript comes from your local machine’s RAM (your physical memory).
// The JavaScript engine manages how memory is allocated and freed during program execution.
// Stack memory and heap memory are concepts used to organize how data is stored in that RAM.
// Once the program ends or a function finishes execution, the memory is cleared or garbage collected, but everything resides in your computer’s RAM while the program is running.
// This is how JavaScript uses and manages memory on your machine! Does this clear things up?

// Absolutely clear Thank you 🙏 so much..

// You're very welcome! I'm really glad it all makes sense now. If you ever have more questions or need further explanations, feel free to reach out. Happy coding, and good luck with your JavaScript journey! 🙏😊

