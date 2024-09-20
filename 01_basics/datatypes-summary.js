// Core Concept:
// JavaScript has multiple data types, but they can be broadly divided into two categories based on where they are stored in memory:

// Primitive types (stored on the stack)
// Non-primitive types (Objects) (stored on the heap)

// Foundation of Stack vs Heap in JavaScript Memory Management:
// In JavaScript, understanding how memory is managed helps clarify how the language handles primitive and non-primitive data types. This revolves around two key memory structures:

// The Stack
// The Heap

// These two structures determine how JavaScript stores and accesses data, impacting performance and behavior.

// 1. The Stack (Fast Access, Fixed Size)
// The stack is a region of memory where primitive types are stored. It's called a stack because it works like a stack of plates (LIFO—Last In, First Out). When data is added, it gets placed on top of the stack, and when data is removed, it gets taken from the top.

// Key Points of the Stack:
// Fast: Accessing data in the stack is extremely fast because it’s directly on top of memory. You don't need to search for the value.
// Fixed Size: The size of data in the stack is known ahead of time (like numbers, booleans, etc.). Primitive types like Number, Boolean, and String are of fixed size, so they can be stored directly.
// Direct Access: Primitive values are stored directly in the variable. If you assign a variable to another, it copies the value.

let x = 10;   // Stored directly on the stack
let y = x;    // Copies the value (also stored on the stack)

y = 20;       // Changes y, but x is unaffected

console.log(x);  // Output: 10 (because x is independent)

// Here, x and y are stored on the stack. Changing y doesn't affect x, because the value is copied, not referenced.

// 2. The Heap (Dynamic Size, Flexible Access)
// The heap is a region of memory where non-primitive types (objects, arrays, functions) are stored. The heap is more like a vast pool of memory, where pieces of data can be stored dynamically. Unlike the stack, the heap is more flexible, but access to it is slower.

// Key Points of the Heap:
// Flexible Size: Objects and arrays don’t have a fixed size. They can grow or shrink dynamically, which is why they are stored in the heap.
// Slower Access: Accessing data in the heap takes more time because it involves a process of looking up references to find the actual data.
// Reference Storage: Variables that store non-primitive types don’t hold the actual value in memory. Instead, they hold a reference to the location in the heap where the data is stored.

let obj1 = { name: "Alice" };  // Stored in the heap
let obj2 = obj1;               // obj2 holds a reference to obj1

obj2.name = "Bob";             // Changes the object itself

console.log(obj1.name);  // Output: "Bob" (both point to the same object)

// In this case, both obj1 and obj2 refer to the same object in the heap. Changing obj2.name also changes obj1.name, because both variables are pointing to the same memory location in the heap.

// 3. Relationship Between Stack and Heap
// To summarize the interaction between the stack and the heap:

// When you declare a primitive type, the actual value is stored on the stack.
// When you declare a non-primitive type (like an object or an array), a reference to that object is stored on the stack, but the actual object is stored in the heap.

let age = 30;              // Primitive, stored on the stack
let person = { name: "John" }; // Non-primitive, reference on the stack, object on the heap

// The age variable stores the value 30 directly on the stack.
// The person variable stores a reference to the object { name: "John" } in the heap. This reference itself is stored on the stack.

// 4. Copying vs. Referencing
// Primitive types: When you assign a primitive type to another variable, you are copying the value, not the reference. This means the two variables are independent of each other.

let a = 100;   // Stack: a = 100
let b = a;     // Stack: b = 100 (copy)
b = 200;
console.log(a);  // Output: 100

// Non-primitive types: When you assign a non-primitive type (like an object) to another variable, you are copying the reference, not the actual value. The two variables share the same object.

let car = { model: "Tesla" };  // Heap: car -> { model: "Tesla" }
let anotherCar = car;          // Both point to the same object
anotherCar.model = "BMW";
console.log(car.model);  // Output: "BMW"

// 5. Garbage Collection
// JavaScript has automatic garbage collection. When objects in the heap are no longer referenced by any variable (i.e., no stack references pointing to them), JavaScript automatically frees up memory. This process helps avoid memory leaks.

let obj = { name: "John" };  // Reference to object
obj = null;  // No references to object, so it's eligible for garbage collection

// conclusion:
// Primitive types (numbers, booleans, strings, etc.) are stored directly on the stack because they are simple, fixed-size values.Non-primitive types (objects, arrays) are stored on the heap, and variables hold a reference to them on the stack.Primitive types are copied by value, while non-primitive types are shared by reference.

// Q1: What are the two core categories of data types in JavaScript?
// Answer: JavaScript data types are categorized into primitive types and non-primitive types. Primitive types are stored on the stack, while non-primitive types (objects) are stored on the heap.

// Q2: Which data types are stored on the stack, and why?
// Answer: The following primitive types are stored on the stack:

// Number
// String
// Boolean
// Undefined
// Null
// BigInt
// Symbol
// They are stored on the stack because they are fixed-size and can be quickly accessed.

// Q3: Why are non-primitive types stored on the heap?
// Answer: Non-primitive types (like objects, arrays, and functions) are stored on the heap because they are dynamic in size. The heap allows more flexible and large storage, but accessing it takes more time compared to the stack.

// Q4: What happens when you assign a primitive data type to a variable in JavaScript?
// Answer: When a primitive type is assigned to a variable, the actual value is stored directly in the variable's memory location on the stack.

// Q5: What happens when you assign an object (non-primitive) to a variable in JavaScript?
// Answer: When a non-primitive type (like an object or array) is assigned to a variable, the variable stores a reference to the memory location on the heap where the object is stored. The reference itself is stored on the stack.

// Q6: How does JavaScript treat primitive data types when copying variables?
// Answer: When you copy a variable holding a primitive type, the value is copied directly. This means any change in one variable does not affect the other.

// Q7: How does JavaScript treat non-primitive types when copying variables?
// Answer: When copying a variable holding a non-primitive type, the reference is copied, not the actual object. This means changes to the object through one variable will affect all other variables that reference the same object.


