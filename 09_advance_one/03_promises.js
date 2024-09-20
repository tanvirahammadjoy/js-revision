// * 1. promise One
// Creating a promise that simulates an async task using setTimeout
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task like DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve(); // Resolves the promise after the task completes
  }, 1000); // Simulating a 1-second delay
});

// Consuming the promise using then() when the async task is completed
promiseOne.then(function () {
  console.log("Promise consumed");
});

// * 2. promise Two
// Creating another promise with a 1-second delay
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve(); // Resolving the promise after task completion
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved"); // Logging after the promise is resolved
});

// * 3. promiseThree
// Promise that resolves to an object after 1 second
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "chai@example.com" }); // Resolving with user object
  }, 1000);
});

// Consuming promiseThree, logging the resolved user object
promiseThree.then(function (user) {
  console.log(user); // { username: "Chai", email: "chai@example.com" }
});

// * 4. promiseFour
// Creating a promise that might resolve or reject depending on an error condition
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true; // Simulating an error condition
    if (!error) {
      resolve({ username: "hitesh", password: "123" }); // Resolves with user data if no error
    } else {
      reject("ERROR: Something went wrong"); // Rejects the promise if there is an error
    }
  }, 1000);
});

// Consuming promiseFour with then, catch, and finally
promiseFour
  .then((user) => {
    console.log(user); // Logs the user object if promise is resolved
    return user.username; // Returns the username for the next then
  })
  .then((username) => {
    console.log(username); // Logs the username
  })
  .catch(function (error) {
    console.log(error); // Logs the error if the promise is rejected
  })
  .finally(() => console.log("The promise is either resolved or rejected")); // Runs regardless of promise outcome

// * 5. promiseFive
// Similar to promiseFour, but this is consumed using async/await
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true; // Simulating an error condition
    if (!error) {
      resolve({ username: "javascript", password: "123" }); // Resolves with user data if no error
    } else {
      reject("ERROR: JS went wrong"); // Rejects the promise if there is an error
    }
  }, 1000);
});

// Async function to consume promiseFive with async/await
async function consumePromiseFive() {
  try {
    const response = await promiseFive; // Waits for the promise to resolve
    console.log(response); // Logs the resolved response
  } catch (error) {
    console.log(error); // Logs the error if promise is rejected
  }
}

consumePromiseFive(); // Invokes the async function

// * Fetch example (async task)
// Fetching data from GitHub API (an asynchronous network request)
fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json(); // Parsing the response to JSON
  })
  .then((data) => {
    console.log(data); // Logs the parsed data
  })
  .catch((error) => console.log(error)); // Logs any error that occurs

// * Promise.all example
// You can combine multiple promises using Promise.all() to run them concurrently
// Example code not included here, but `Promise.all()` waits for all promises to either resolve or reject.

// Summary:
// Basic Promises:
// promiseOne and promiseTwo are simple examples of creating promises using setTimeout to simulate asynchronous tasks (e.g., network calls). They are resolved after the delay, and the then() method consumes the result.
// promiseThree resolves to an object, showing that promises can return any type of data.

// Promise with Error Handling:
// promiseFour introduces the concept of handling success (resolve) and failure (reject). If an error occurs, the promise is rejected, and this is caught using catch(). The finally() block runs regardless of the outcome, for cleanup purposes.

// Async/Await:
// promiseFive demonstrates the use of async/await for consuming promises in a more readable manner. It wraps promise consumption in a try/catch block to handle errors cleanly.

// Fetch API:
// The fetch() function is used to make an asynchronous HTTP request to an API (GitHub in this case), which returns a promise that resolves with a response. The response is then parsed and logged.

// Promise.all:
// Promise.all() allows you to run multiple promises concurrently and waits until all are either resolved or rejected. This part is mentioned but not implemented in the example.

// Key Concepts:
// Promise Chaining: Multiple then() blocks can be chained to handle successive asynchronous operations.
// Error Handling: Use catch() to handle promise rejections, and finally() for cleanup.
// Async/Await: Provides a more synchronous-looking code for handling promises, making the code cleaner and easier to read.
// Fetch: A modern way to make HTTP requests, returning promises by default.

// ******************* behind the scenes of fatch key word and promise under the hood ************************* //

// Fetch API and Promises: Behind the Scenes in JavaScript
// The fetch() function is a modern way to make HTTP requests in JavaScript, and it returns a Promise that resolves once the request is complete. To understand how fetch() and Promises work under the hood, we need to break down the processes involved in a typical fetch request, the role of the Promise, and how the JavaScript event loop and Web APIs like the Queue operate together.

// 1. Fetch Process Flow
// When you call fetch(), JavaScript performs several steps:

// Step 1: Web API Integration (Fetch Call)

// When you invoke fetch(), the JavaScript engine doesn't handle HTTP requests directly. Instead, it offloads this task to the Web API (provided by the browser). fetch() is part of the Web API, which provides the underlying functionality to make network requests.

fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// Step 2: Network Request
// The Web API initiates the actual network request using browser networking tools (internally, this involves the HTTP stack of the browser).
// This request is made asynchronously (non-blocking). JavaScript continues executing the code while waiting for the response.
// Step 3: Response Handling

// Once the server sends the response (success or failure), the Web API handles it and creates a Promise object that represents the eventual completion of the asynchronous operation.
// Step 4: Adding to the Task Queue

// The response doesn't directly return data but rather goes to the Task Queue. This queue is managed by the event loop.
// Once the synchronous tasks (current JavaScript code) are completed, the event loop picks up the Promise result and processes the next .then() or .catch() callback.
// Step 5: Resolving or Rejecting the Promise

// If the request was successful, the Promise is resolved with the response object.
// If an error occurred (network failure, timeout, etc.), the Promise is rejected with an error object, which is handled in the .catch() block.

// 2. Promises: Resolving, Rejecting, and the Event Loop
// The Promise is the mechanism used to handle asynchronous code. Here’s how it works under the hood:

// Creating a Promise

// When you call fetch(), a Promise object is created. This object initially starts in a pending state.
// Promise States:

// Pending: The Promise is neither fulfilled nor rejected. It stays in this state until the asynchronous operation finishes.
// Resolved (Fulfilled): The operation completed successfully, and the Promise is marked as resolved.
// Rejected: If an error occurred, the Promise is marked as rejected, and the error is passed to the .catch() block.
// Behind the Scenes Flow

// A Promise's .then() and .catch() callbacks are asynchronous, meaning they don’t block the execution of the program. They are placed in the Microtask Queue once the Promise resolves or rejects.
// Event Loop and Queues

// JavaScript uses an event loop to manage async code execution. There are two key queues:

// Task Queue (Macro task): This queue holds tasks like setTimeout(), setInterval(), and network requests.
// Microtask Queue: This queue holds Promise resolutions, which are executed before the task queue.
// Once all synchronous code finishes, the event loop checks the microtask queue, executes all microtasks (Promise callbacks), and only then proceeds to the task queue.

// 3. Request Flow, Resolve Flow, Reject Flow
// To summarize the lifecycle:

// Request Flow (Fetch):

// You call fetch(), the Web API sends the HTTP request, and JavaScript continues executing other code without waiting for the request to complete.
// Resolve Flow (Success)

// Once the HTTP response is received, the Web API hands over the result to the event loop.
// The Promise resolves, and the result is passed into the .then() function.
// The event loop picks the callback from the microtask queue and runs it when all synchronous code finishes.
// Reject Flow (Error)

// If an error occurs (e.g., a network failure), the Web API passes an error to the event loop.
// The Promise is rejected, and the error object is passed to the .catch() function.
// Again, the event loop processes this rejection after all synchronous code finishes.
// 4. How Promise Resolution Happens Under the Hood
// Internally, the Promise constructor has a resolver function that takes two parameters: resolve and reject.

const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  if (successful) {
    resolve(result); // Transitions to "fulfilled" state
  } else {
    reject(error); // Transitions to "rejected" state
  }
});

// When you pass these resolve and reject functions to your asynchronous operation, the Promise transitions to the appropriate state once the operation completes.

// If the operation succeeds, resolve() is called with the result, which transitions the Promise to the fulfilled state.
// If the operation fails, reject() is called with an error, which transitions the Promise to the rejected state.

// 5. JavaScript Event Loop: How It Ties Everything Together
// JavaScript runs single-threaded, so asynchronous tasks need careful coordination. The event loop ensures that:

// Synchronous code runs first.
// Microtasks (like Promise resolution) run next.
// Tasks (like setTimeout, network requests) run after all synchronous and microtask code finishes.
// The event loop constantly checks for tasks in the microtask queue and task queue, ensuring they are processed in the right order to maintain smooth execution.

// Key Concepts Recap
// Fetch is an asynchronous function that uses Promises to return data from a server.
// The Web API handles the network request, and the Promise resolves or rejects based on the outcome.
// Promises work by managing async operations using the event loop and microtask queue.
// The event loop ensures that async tasks, like fetch responses, are processed without blocking the main thread.
// Would you like to dive deeper into a specific part, such as the event loop or Promises?

// *********************************** what is thread what is event loop ?? **************************************** //

// Absolutely! Let's dive deeper into threads and the event loop, and how they relate to JavaScript.

// 1. What is a Thread?
// A thread is essentially a sequence of instructions that a computer follows to execute a task. Think of a thread as a worker who can perform one task at a time, step-by-step.

// Multithreading vs. Single-threading?
// Multithreading: In some programming languages (like Java or Python), multiple threads can run simultaneously. This allows for parallel execution of code, meaning multiple tasks can be handled at the same time.
// Single-threading: JavaScript, however, is single-threaded, which means it can only execute one task at a time. It does not execute multiple pieces of code in parallel, which can lead to inefficiencies in some cases.
// 2. The JavaScript Event Loop
// Since JavaScript is single-threaded, it can't run multiple pieces of code at the same time. However, it still needs to handle multiple tasks, like responding to user input, making network requests, or dealing with timeouts. That’s where the event loop comes into play.

// Event Loop: How Does It Work?
// The event loop is a mechanism that allows JavaScript to perform non-blocking (asynchronous) operations, even though it’s single-threaded.

// Here’s how it works:

// Call Stack:
// JavaScript has a call stack, which keeps track of the functions currently being executed. Whenever a function is called, it’s pushed onto the call stack. When the function finishes, it’s popped off the stack.
// The call stack handles synchronous code. If you call a function, it gets executed immediately, and JavaScript won’t move to the next task until that function is finished.

// Web APIs:
// When JavaScript encounters asynchronous operations (like setTimeout(), fetch(), or DOM events), it hands them over to Web APIs (provided by the browser). These APIs handle the actual work in the background, allowing JavaScript to continue executing other code.
// For example, setTimeout() will wait for the specified time without blocking the main thread, because the Web API takes care of it.

// Callback/Task Queue:
// When the Web API finishes an asynchronous operation (like the timeout period ends or a fetch request completes), it sends a callback to the task queue (or callback queue).
// The task queue holds these callbacks, waiting for their turn to be executed.

// Event Loop:
// The event loop constantly checks two things:
// Is the call stack empty?
// Are there tasks in the task queue waiting to be processed?
// If the call stack is empty, the event loop picks up a task from the task queue and moves it to the call stack for execution.
// This system ensures that JavaScript can handle asynchronous tasks while continuing to process synchronous code without blocking.

// Example: Event Loop in Action
// Let’s break down an example to see how the event loop works:

console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 2000);

console.log("End");

// Step-by-Step Explanation:
// "Start" is logged immediately. The console.log() is synchronous, so it’s added to the call stack and executed.

// The setTimeout() function is encountered. JavaScript hands this off to the Web API, which starts the 2-second timer. Meanwhile, JavaScript moves on without waiting for the timeout to finish.

// "End" is logged next. Again, console.log() is synchronous, so it’s executed immediately.

// After 2 seconds, the Web API finishes the timeout and adds the callback (the function inside setTimeout()) to the task queue.

// The event loop checks the call stack. Since the stack is empty, it picks up the callback from the task queue and executes it, printing "Timeout callback".

// Output:
// Start
// End
// Timeout callback

// Synchronous vs. Asynchronous Code
// Synchronous Code: Code that is executed immediately, step-by-step. If one task takes a long time, it blocks the thread and prevents other tasks from running.

console.log("Task 1");
console.log("Task 2");

// Both logs are executed immediately, one after the other.

// Asynchronous Code: Code that is executed at a later time (e.g., after a timeout or when a fetch request completes). It doesn't block the main thread.

console.log("Task 1");
setTimeout(() => console.log("Task 3"), 1000);
console.log("Task 2");

// In this case, Task 3 is logged after 1 second, but Task 2 is logged immediately.

// Microtask Queue vs. Task Queue
// JavaScript has two queues for handling asynchronous tasks:

// Microtask Queue:
// Holds tasks like Promise resolutions and MutationObserver callbacks. These microtasks are processed immediately after the current task and before the task queue.
// Even if there are tasks in the task queue, JavaScript will first process all microtasks in the microtask queue.

// Task Queue:
// Holds tasks like setTimeout(), setInterval(), or fetch() callbacks. These are processed only after the microtask queue is empty.
// Example with Promises (Microtask Queue)

console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise callback");
});

console.log("End");

// Output:

// Start
// End
// Promise callback
// Timeout callback

// "Start" and "End" are logged immediately because they’re synchronous.
// setTimeout() is added to the task queue with a delay of 0, meaning it’ll run as soon as the stack is empty.
// The Promise callback goes into the microtask queue and is executed before the setTimeout() callback because microtasks take priority over tasks.

// Key Differences Between Thread and Event Loop

// Thread:
// A thread is a sequence of instructions that the CPU executes. JavaScript runs in a single thread, meaning it can only handle one operation at a time.
// Event Loop:
// The event loop allows JavaScript to handle asynchronous operations by deferring them to Web APIs (like timers, network requests) and executing them later without blocking the main thread.
// It ensures smooth operation by continuously checking the call stack, task queue, and microtask queue, executing tasks in the right order.

// Final Recap:
// JavaScript is single-threaded but can handle asynchronous tasks (like fetching data or waiting for timeouts) using the event loop.
// The event loop manages the execution of tasks by interacting with the call stack, task queue, and microtask queue.
// Synchronous code is processed first, followed by asynchronous tasks that are handled in the correct order through the event loop system.

// Let's dive even deeper into threads, the event loop, microtasks, task queues, and how JavaScript's asynchronous behavior is coordinated by the browser or the JavaScript engine.

// 1. Thread in Detail
// A thread is a unit of execution in a program. Think of a thread as a path that the CPU follows to execute a sequence of instructions. A program can have multiple threads running in parallel, and modern computers with multiple CPU cores can execute multiple threads at the same time.

// Single-Threaded vs. Multi-Threaded
// Single-Threaded (like JavaScript):

// In single-threaded systems, only one set of instructions (one function or block of code) can be executed at a time.
// In JavaScript, there's one main thread called the call stack, which executes the code line by line.

// Multi-Threaded:
// Many modern languages and environments allow multiple threads, meaning multiple sets of instructions can be executed simultaneously.
// This can provide better performance for CPU-bound tasks (such as calculations, rendering graphics, etc.) but adds complexity since threads need to coordinate with each other to avoid conflicts (e.g., two threads trying to change the same data).
// Since JavaScript is single-threaded, it cannot run two pieces of code simultaneously. However, with asynchronous operations, it can avoid blocking the main thread, which leads us to how JavaScript handles async tasks using concurrency rather than true parallelism.

// 2. JavaScript Event Loop in Even More Detail
// The event loop is the mechanism that allows JavaScript to execute asynchronous tasks without blocking the main thread. While the language is single-threaded, it doesn't mean JavaScript can't "wait" for I/O operations like fetching data from an API or reading a file from disk. The event loop coordinates how asynchronous tasks (e.g., timers, network requests) are handled in a non-blocking manner.

// Let’s explore how the event loop manages asynchronous code under the hood:

// Components of the Event Loop

// Call Stack:
// The call stack is where the JavaScript engine keeps track of function calls and executions. Every time a function is called, it gets pushed onto the stack. Once the function finishes, it gets popped off the stack.
// The call stack executes synchronous code line by line.

// Web APIs (provided by the environment, like the browser):
// JavaScript has access to Web APIs (provided by the browser or Node.js), such as:
// Timers (e.g., setTimeout, setInterval)
// Network requests (fetch, XMLHttpRequest)
// DOM events (e.g., mouse clicks, keyboard input)
// File I/O
// These APIs handle asynchronous tasks in the background without blocking the call stack. Once they complete, they send the result back to JavaScript.

// Task Queue (also called the Callback Queue):
// Once a Web API completes an async operation (like a network request or timeout), it sends a callback function to the Task Queue.
// The Task Queue stores all tasks (callbacks) that are waiting to be executed.

// Microtask Queue:
// A separate queue for microtasks, such as:
// Promise resolution (.then() or .catch() callbacks)
// MutationObserver (for monitoring changes in the DOM)
// Microtasks are prioritized over tasks in the Task Queue. After the current call stack is empty, all microtasks are executed before any tasks in the Task Queue.

// Event Loop:
// The event loop constantly checks the call stack, microtask queue, and task queue.
// If the call stack is empty, it processes all microtasks from the microtask queue.
// Only after all microtasks are processed does the event loop handle tasks from the task queue.

// 3. Asynchronous Operations in Depth
// How Web APIs Handle Async Tasks
// Let's focus on how the event loop interacts with Web APIs for managing async tasks like fetch() or setTimeout().

// Example: setTimeout

console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 2000);

console.log("End");

// Step 1: console.log('Start') is executed synchronously and printed to the console.
// Step 2: setTimeout() is called with a delay of 2 seconds. Instead of blocking the main thread, the Web API (Timer) handles the timer. The setTimeout() function itself finishes immediately and doesn't block the main thread.
// Step 3: console.log('End') is executed synchronously, printing "End" to the console.
// Step 4: After 2 seconds, the Timer Web API sends the callback (the function inside setTimeout()) to the task queue.
// Step 5: Once the call stack is empty (all synchronous code is finished), the event loop moves the callback from the task queue to the call stack for execution.
// Step 6: The callback is executed, and "Timeout callback" is printed.

// Example: fetch();

console.log("Start");

fetch("https://api.example.com/data").then(() => console.log("Data fetched"));

console.log("End");

// Step 1: console.log('Start') is executed synchronously.
// Step 2: fetch() is called. The Web API (Network Request) handles the network call in the background and doesn't block the call stack.
// Step 3: console.log('End') is executed synchronously.
// Step 4: Once the network request is complete, the Promise is resolved, and the callback inside .then() is placed in the microtask queue.
// Step 5: After all synchronous code finishes (the call stack is empty), the event loop checks the microtask queue.
// Step 6: The callback inside .then() is executed, printing "Data fetched".

// 4. Microtasks vs. Tasks (In Depth)
// Let’s dive into why microtasks (Promises) are executed before tasks (like setTimeout) and how this affects the behavior of your code.

// Microtask Queue Priority
// The Microtask Queue takes priority over the Task Queue. Once the call stack is empty, the event loop will first process all microtasks before it looks at the task queue.
// This ensures that things like Promise callbacks (which often involve important code, like resolving async operations) are handled before general asynchronous tasks like timers.
// Example: Promise vs setTimeout

console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise callback");
});

console.log("End");

// Step-by-Step Execution:

// console.log('Start') is executed first.
// setTimeout() is called with a 0ms delay. The Web API schedules the task for the future and the task is added to the Task Queue.
// A Promise is created and immediately resolved. The callback inside .then() is added to the Microtask Queue.
// console.log('End') is executed synchronously.
// The call stack is now empty, so the event loop checks the Microtask Queue first.
// The Promise callback is executed, printing "Promise callback".
// After all microtasks are processed, the event loop checks the Task Queue.
// The Timeout callback is executed, printing "Timeout callback".
// Output:

// Start
// End
// Promise callback
// Timeout callback

// This demonstrates that even though setTimeout() had a 0ms delay, the Promise callback was executed first because it was placed in the Microtask Queue.

// 5. Long-Running Tasks and Blocking the Event Loop
// Since JavaScript is single-threaded, long-running synchronous tasks can block the event loop, preventing asynchronous tasks from executing. For example, if you have a function that takes 2 seconds to complete, it will block the event loop, and no other tasks (even async tasks) can be executed during that time.

// Example: Blocking Code

console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 1000);

for (let i = 0; i < 1e9; i++) {} // Long-running loop

console.log("End");

// Output:

// Start
// End
// Timeout callback

// Explanation:

// The for loop takes a long time to execute, which blocks the event loop.
// Even though the setTimeout() callback is scheduled to run after 1 second, it only executes once the long-running loop finishes and the call stack is empty.
// How to Avoid Blocking the Event Loop
// Use Asynchronous Code: If you have heavy computations, offload them to asynchronous tasks, or use APIs like Web Workers or setTimeout() to split the workload into smaller chunks.
// Web Workers: In the browser, Web Workers allow you to run scripts in the background, on separate threads, without blocking the main thread.

// 6. Concurrency vs. Parallelism
// Concurrency: JavaScript can handle multiple tasks asynchronously without blocking, but it doesn’t mean those tasks are happening at the same time. The event loop ensures tasks are handled one by one, allowing for a smooth user experience without freezing the UI.
// Parallelism: Requires multiple threads running at the same time (e.g., Web Workers or other multi-threading systems).
// This detailed exploration into JavaScript's threading, event loop, and concurrency provides insights into how asynchronous behavior is implemented in a single-threaded environment. Understanding the event loop’s inner workings is crucial for writing efficient, non-blocking code.

// ********************************* web api concept ***************************************** //

// The concept of Web APIs refers to the set of interfaces provided by the browser (or in the case of Node.js, the runtime environment) that allow JavaScript to interact with the browser’s features, perform asynchronous tasks, or interact with web-based services. These APIs are essential for making JavaScript more capable and allow it to interact with the external world beyond simple computations. They enable tasks like:

// Fetching data from a server
// Handling user interactions with the page
// Manipulating the DOM
// Handling multimedia
// Storing data locally
// Let's dive deeper into Web APIs, what they offer, and how they work under the hood.

// What is a Web API?
// A Web API is essentially an interface that allows JavaScript to interact with the web browser or other web-based services (like a remote server).
// JavaScript on its own is a synchronous, single-threaded language. It handles operations in sequence and waits for each one to complete before moving on. Without Web APIs, JavaScript would be blocked while waiting for long-running tasks (like a network request).
// Where do Web APIs live?
// Browsers like Chrome, Firefox, or Safari implement these Web APIs, giving JavaScript access to them.
// In Node.js, the runtime environment implements its own APIs, such as file system access, network handling, and streams.
// Categories of Web APIs
// Web APIs can be divided into several key categories based on their functionality.

// 1. DOM (Document Object Model) APIs
// The DOM API allows JavaScript to interact with the structure of web pages, modify HTML, and manipulate the styling of elements.

// DOM Manipulation:

// Methods like document.querySelector(), document.createElement(), and document.getElementById() enable JavaScript to modify the structure and content of a web page dynamically.
// Example:

const element = document.querySelector("#myElement");
element.style.backgroundColor = "blue";

// Event Handling:

// APIs like addEventListener() allow developers to respond to user interactions (e.g., clicks, keyboard input) in real time.
// Example:

document.querySelector("#myButton").addEventListener("click", () => {
  console.log("Button clicked!");
});

// 2. Storage APIs
// The browser provides various storage mechanisms for persisting data locally.

// Local Storage:

// Stores data as key-value pairs with no expiration date (persists across page reloads and sessions).
// Example:

localStorage.setItem("name", "John");
const name = localStorage.getItem("name");
console.log(name); // "John"

// Session Storage:

// Similar to local storage but the data persists only for the duration of the page session.
// Example:

// IndexedDB:

// A low-level API for client-side storage of structured data, including large datasets like images or videos. This is an asynchronous API for storing large amounts of data.
// Example:

const request = indexedDB.open("myDatabase", 1);

// 3. Networking APIs
// Networking APIs enable JavaScript to make requests to servers, fetch data, and handle communications over the web.

// Fetch API:

// Used to make network requests, often for retrieving resources like JSON or files from a server. It returns a Promise, making it more modern and flexible than the old XMLHttpRequest.
// Example:

fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

//   WebSockets:

// Unlike the HTTP request/response cycle, WebSockets allow for full-duplex communication, enabling two-way data flow between the client and the server in real time.
// Example:

const socket = new WebSocket("wss://example.com/socket");
socket.onmessage = (event) => console.log(event.data);

// Server-Sent Events (SSE):

// A technology that allows servers to push updates to the client using a single long-lived connection, often used for real-time notifications or streaming data.
// Example:

const eventSource = new EventSource("https://example.com/stream");
eventSource.onmessage = (event) => {
  console.log(event.data);
};

// 4. Multimedia APIs
// Web APIs also provide ways to control multimedia elements (e.g., audio, video) in web pages or access media devices (like cameras or microphones).

// Media Capture and Streams API:

// This API allows the browser to access multimedia devices (such as a webcam or microphone) and capture media.
// Example:

navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  const video = document.querySelector("video");
  video.srcObject = stream;
});

// Web Audio API:

// A powerful API for processing and synthesizing audio, enabling things like music production, gaming soundtracks, or real-time effects.
// Example:

const audioContext = new AudioContext();
const oscillator = audioContext.createOscillator();
oscillator.connect(audioContext.destination);
oscillator.start();

// 5. Geolocation API
// This API allows web applications to access the geographical location of a user.

// Geolocation API:
// Used to retrieve the latitude and longitude of the device.
// Example:

navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude, position.coords.longitude);
});

// 6. Push Notifications and Background Sync
// These APIs enable web applications to engage users with notifications even when the application is not in focus.

// Push API:
// Allows servers to send notifications to the client (browser) even when the page is not open.
// Often used with Service Workers for background functionality.
// Service Workers:
// A background worker that enables features like offline caching (using the Cache API) and background sync.
// Example:

navigator.serviceWorker
  .register("/sw.js")
  .then(() => console.log("Service Worker Registered"));

// 7. Canvas API
// Used for drawing and manipulating 2D graphics within a web page.

// Canvas API:
// Allows for low-level drawing operations, useful for rendering shapes, text, images, and even real-time graphics (like games).
// Example:

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);

// 8. Web Workers API
// JavaScript is single-threaded, but Web Workers allow you to run JavaScript code in the background (on a separate thread) without affecting the main thread.

// Web Workers:
// These are separate JavaScript threads that can handle CPU-intensive operations (e.g., data processing, image manipulation) without blocking the main thread or user interface.
// Example:

const worker = new Worker("worker.js");
worker.postMessage({ data: "Start working" });
worker.onmessage = (event) => {
  console.log(event.data);
};

// 9. File API
// Allows web applications to read files from the user’s system (after the user selects them), as well as create and manipulate binary data.

// FileReader API:
// Enables reading files, such as images, PDFs, or text files, uploaded through an input field.
// Example:

const fileInput = document.querySelector('input[type="file"]');
fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = () => console.log(reader.result);
  reader.readAsText(file);
});

// 10. Battery API
// This API provides information about the battery status of the device.

// Battery Status API:
// Retrieves information such as the charging status and the percentage of the battery.
// Example:

navigator.getBattery().then((battery) => {
  console.log(battery.level * 100 + "%");
});
// How Web APIs Work Under the Hood

// Interaction with JavaScript:
// Web APIs extend the capabilities of JavaScript by giving it access to the browser's underlying functionality. For example, the fetch() function is not part of JavaScript but a Web API implemented by the browser.

// Asynchronous Behavior:
// Many Web APIs work asynchronously (e.g., fetch(), setTimeout(), navigator.geolocation), meaning that they handle tasks in the background and provide the results via callbacks or Promises.
// When a web API (like fetch()) is called, the task is handed over to the browser’s event loop. The browser handles the I/O operation while JavaScript continues to execute other code.

// Execution in Event Loop:
// Once the Web API completes the task (like retrieving data or finishing a timeout), it places the result in the callback queue, which is managed by the event loop. This ensures that asynchronous tasks are processed in the correct order after all synchronous code has run.

// Summary
// Web APIs are essential for enabling JavaScript to interact with the browser and the web. They provide the necessary interfaces to handle asynchronous tasks (network requests, DOM manipulation, multimedia), manage user interactions, and extend the capabilities of JavaScript beyond its core features.

// By leveraging these APIs, developers can create rich, interactive web applications that can handle network operations, manage multimedia, store data, and run tasks in the background, all while keeping the user experience smooth.
