// JavaScript events are crucial for making web pages interactive. Below are key event topics in JavaScript, along with a brief explanation of each:

// 1. Event Flow (Capturing and Bubbling)
// Capturing: Events propagate from the outermost element (document) to the target element.
// Bubbling: Events propagate from the target element back to the outermost element (document).
// Event.stopPropagation() can stop the event from propagating further.

// 2. Event Handlers
// Methods or functions that are triggered when an event occurs.
// Example: element.addEventListener('click', function() {}) or using inline event attributes like onclick="...".

// 3. Types of Events
// Mouse Events: click, dblclick, mouseover, mouseout, mousedown, mouseup, etc.
// Keyboard Events: keydown, keyup, keypress.
// Form Events: submit, focus, blur, change, input.
// Window Events: load, resize, scroll, unload.
// Touch Events (for mobile): touchstart, touchmove, touchend.

// 4. Event Object
// Contains properties and methods to interact with the event.
// Example properties: event.target, event.currentTarget, event.type, event.preventDefault() (prevents the default behavior, e.g., form submission).

// 5. Event Delegation
// Instead of adding event listeners to multiple child elements, a single listener is added to a parent element. This leverages event bubbling for better performance.
// Example: document.querySelector('#parent').addEventListener('click', function(e) { if(e.target.matches('button')) { ... } }).

// 6. Preventing Default Behavior
// event.preventDefault(): Prevents the browser's default action for an event (e.g., stopping a link from navigating).

// 7. Asynchronous Event Handling
// Handling events with asynchronous functions, especially with Promises and async/await inside event listeners.

// 8. Custom Events
// You can create and dispatch custom events using the CustomEvent constructor.
const customEvent = new CustomEvent("myCustomEvent", {
  detail: { someData: 123 },
});
element.dispatchEvent(customEvent);

// 9. Keyboard Event Key Codes
// Capturing key codes from keydown, keypress, and keyup events to detect which key was pressed (e.g., event.keyCode or event.key).

// 10. Throttling and Debouncing
// Throttling: Limits the number of times a function gets called in a period.
// Debouncing: Ensures a function is only called after a certain period of inactivity.

// 11. Pointer Events
// Designed to handle input from various pointing devices (mouse, touch, stylus). Events include pointerdown, pointerup, pointermove, pointercancel.

// 12. Drag and Drop Events
// dragstart, dragover, drop, dragend events that allow elements to be dragged and dropped.

// 13. Event Listener Options
// addEventListener supports options like passive: true, once: true, and capture: true for performance and flexibility.
// Example: element.addEventListener('scroll', handleScroll, { passive: true });.

// JavaScript Event Flow: Capturing and Bubbling
// Event flow in JavaScript determines the order in which event listeners are triggered when an event occurs on an element. It consists of three phases:

// Capturing Phase (Event Capture)
// Target Phase
// Bubbling Phase (Event Bubble)
// 1. Capturing Phase
// The event starts from the window and moves down through the ancestors of the target element until it reaches the target element itself.
// In capturing, listeners registered during this phase handle the event as it "travels down" the DOM tree.
// 2. Target Phase
// The event reaches the target element and triggers any listeners on that element.
// 3. Bubbling Phase
// After reaching the target, the event "bubbles" back up to the root (window), triggering listeners attached during the bubbling phase.
// Behind the Scenes
// Event Propagation: When an event is fired, the browser first checks whether there are any event listeners in the capturing phase for elements along the path down to the target. After reaching the target, the event listeners of the target phase execute. Then, the bubbling phase starts, moving up the DOM tree, triggering event listeners along the way.

// Event Listeners in Capturing and Bubbling: You can specify whether the listener runs in the capturing or bubbling phase by passing a third argument (true for capturing and false or omitted for bubbling).

// Event Flow Control:

// event.stopPropagation() prevents the event from propagating further in any phase (capture or bubble).
// event.stopImmediatePropagation() stops all other event listeners from being executed on the same element.
// Example of Event Flow (Capturing and Bubbling)

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Event Capturing and Bubbling</title>
//     <style>
//         .box { padding: 20px; margin: 20px; border: 1px solid black; }
//     </style>
// </head>
// <body>
//     <div id="grandparent" class="box">Grandparent
//         <div id="parent" class="box">Parent
//             <div id="child" class="box">Child</div>
//         </div>
//     </div>

//     <script>
// Add event listeners for each phase

// Listener on Grandparent in the capturing phase
//         document.getElementById('grandparent').addEventListener('click', function(event) {
//             console.log('Grandparent (Capturing)');
//         }, true);  // `true` means it triggers during capturing phase

// Listener on Parent in the capturing phase
//         document.getElementById('parent').addEventListener('click', function(event) {
//             console.log('Parent (Capturing)');
//         }, true);

// Listener on Child in the capturing phase
//         document.getElementById('child').addEventListener('click', function(event) {
//             console.log('Child (Capturing)');
//         }, true);

// Listener on Child in the bubbling phase
//         document.getElementById('child').addEventListener('click', function(event) {
//             console.log('Child (Bubbling)');
//         }, false);  // `false` or omitted means it triggers during bubbling phase

// Listener on Parent in the bubbling phase
//         document.getElementById('parent').addEventListener('click', function(event) {
//             console.log('Parent (Bubbling)');
//         }, false);

// Listener on Grandparent in the bubbling phase
//         document.getElementById('grandparent').addEventListener('click', function(event) {
//             console.log('Grandparent (Bubbling)');
//         }, false);

// Stop propagation at Child element in the bubbling phase
//         document.getElementById('child').addEventListener('click', function(event) {
//             console.log('Stopping Propagation');
//             event.stopPropagation();  // Prevents further bubbling beyond this element
//         }, false);
//     </script>
// </body>
// </html>

// Explanation of the Example:
// HTML Structure: We have three nested <div> elements: grandparent, parent, and child. Each has event listeners attached for both capturing and bubbling phases.

// Capturing Phase:

// When you click the "Child" element, the event travels from the window down to the target (child).
// The listeners for grandparent, parent, and child in the capturing phase are triggered in that order.
// Target Phase:

// The event reaches the child element, and the listeners attached directly to the child execute.
// Bubbling Phase:

// After the event reaches the child, it starts bubbling back up the DOM tree.
// The listeners for child, parent, and grandparent in the bubbling phase are triggered in reverse order.
// Stopping Propagation:

// The event's propagation is stopped at the child element in the bubbling phase using event.stopPropagation().
// This prevents the event from bubbling further up to the parent or grandparent.
// Output when Clicking the Child Element:
// When you click on the child element:

// Capturing Phase: The console logs:

// Grandparent (Capturing)
// Parent (Capturing)
// Child (Capturing)
// Target Phase:

// Child (Bubbling) (Since this listener runs both in capturing and bubbling).
// Bubbling Phase: The console logs:

// Stopping Propagation (The event is stopped here, so Parent (Bubbling) and Grandparent (Bubbling) are never triggered).
// Behind-the-Scenes Mechanism:
// Event Registration: The addEventListener function registers the event listener to the specified element. If useCapture is true, the listener will respond during the capturing phase; otherwise, it listens during the bubbling phase.

// Event Dispatching: When the click event occurs, the browser creates an event object and begins propagation. In the capturing phase, it checks the DOM tree from the root (window) to the target element, executing any listeners marked for capturing.

// Event Bubbling: Once the event hits the target, the event listeners marked for bubbling are executed from the target back up to the root.

// By leveraging these phases, developers can control when and how event handlers execute in complex DOM structures.

// JavaScript Event Handlers: From Old to Modern Approaches
// In JavaScript, event handling has evolved over the years. Each method of attaching event handlers comes with different capabilities, flexibility, and use cases. Let's walk through the various ways to handle events, from older to modern approaches, along with their behind-the-scenes behavior.

// 1. Inline Event Handlers (HTML Attribute Method)

<button onclick="alert('Button clicked!')">Click me</button>;

// Explanation:
// In the earliest days of JavaScript, event handling was done directly in HTML by adding event attributes to elements.
// You write JavaScript code directly in the attribute value, such as onclick="function()".
// Use Case:
// Suitable for simple demos or basic tasks, but not recommended for modern applications because:
// It mixes HTML and JavaScript, breaking the separation of concerns.
// It’s harder to debug or maintain.
// Limited flexibility (e.g., difficult to reuse or remove handlers).
// Behind the Scenes:
// The JavaScript code inside the onclick attribute is executed in the context of the global scope (the window object).
// When the event occurs (e.g., clicking a button), the browser parses and evaluates the inline JavaScript.

<button onclick="console.log('Inline handler')">Click me</button>;

// When clicked, the inline script runs, logging 'Inline handler' to the console.

// 2. DOM Level 0 Event Handlers (Property-Based Handlers)
// Syntax:

// <button id="myButton">Click me</button>

// <script>
//  document.getElementById('myButton').onclick = function() {
//    alert('Button clicked!');
//  };
// </script>

// Explanation:
// This method involves setting an element’s event property, like onclick, to a function.
// Only one handler can be assigned per event because setting onclick replaces any previous handler attached to that element for that event.
// Use Case:
// This is an improvement over inline handlers as it keeps JavaScript separate from HTML.
// Works well for simple use cases where only one event listener is needed.
// Behind the Scenes:
// The browser assigns the provided function to the onclick property of the element.
// The function is executed when the event (in this case, click) is triggered.
// If another handler is set via onclick, it overwrites the previous one.

let button = document.getElementById("myButton");
button.onclick = function () {
  console.log("Property-based handler");
};

// When clicked, 'Property-based handler' is logged to the console.
// Setting button.onclick = anotherFunction; will replace the original handler.

// 3. DOM Level 2 Event Handlers (addEventListener)
// Syntax:

{
  /* <button id="myButton">Click me</button>

<script>
  document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
  });
</script> */
}

// Explanation:
// Introduced in DOM Level 2, addEventListener() is the modern and preferred way to handle events.
// You can attach multiple event listeners to the same element for the same event type.
// Supports capturing and bubbling phases through a third optional argument.
// Use Case:
// Flexible, allows for attaching, removing, and handling multiple event listeners.
// Ideal for large, modern applications due to the ability to handle multiple events and phases.
// Behind the Scenes:
// The browser maintains an internal list of event listeners for each element.
// When an event occurs, the browser checks all listeners for that event and phase (capturing or bubbling) and executes them in order.
// Event listeners are called in the order they were attached.
// You can remove listeners using removeEventListener(), which works by checking if the function reference matches the one used in addEventListener().

let button = document.getElementById("myButton");

// Add multiple listeners for the same event
button.addEventListener("click", function () {
  console.log("First handler");
});

button.addEventListener("click", function () {
  console.log("Second handler");
});

// Clicking the button logs both 'First handler' and 'Second handler'.
// Multiple listeners are preserved, unlike the DOM Level 0 method.

// 4. Removing Event Handlers
// With addEventListener(), you can also remove event listeners when they're no longer needed:

// Syntax:

let button = document.getElementById("myButton");

function logMessage() {
  console.log("Click event handled");
}

button.addEventListener("click", logMessage);

// Remove the event listener
button.removeEventListener("click", logMessage);

// Use Case:
// Useful when you want to control the lifecycle of an event handler, such as removing listeners after a task is completed or to optimize performance.
// Behind the Scenes:
// The browser maintains references to the attached functions, so when removeEventListener() is called, it compares the function reference to find the match in the internal list and removes it.
// Note: The exact same function reference must be used for both addEventListener() and removeEventListener(). Anonymous functions cannot be removed this way.

// 5. Event Handler Options
// Starting from modern browsers, addEventListener() supports additional options for more precise control over event behavior:

element.addEventListener("click", callback, { once: true, passive: true });

// Options:
// once: true: The event listener is called at most once and then removed automatically.
// passive: true: Indicates that the event handler will never call preventDefault(), improving performance for certain events like scroll or touchmove.
// capture: true: Specifies that the listener should be invoked during the capturing phase.
// Use Case:
// Use once for one-time events like form submissions or popups.
// Use passive for scroll events to improve performance on touch devices.
// Behind the Scenes:
// The browser optimizes event handling based on the provided options. For example, passive: true tells the browser it can proceed with default behaviors (like scrolling) without waiting for the event handler to finish.

// Comparison of Event Handling Approaches
// Method >	Strengths >	Weaknesses
// Inline Event Handlers >	Simple, quick, direct to the point. >	Poor separation of concerns, difficult to maintain.
// DOM Level 0 (Property) >	Keeps HTML and JS separate, easy to use. >	Limited to one event handler per event type.
// addEventListener >	Multiple handlers, flexible options (capturing, bubbling, once, passive). >	Requires more effort to manage multiple handlers.
// removeEventListener >	Granular control over event listeners. >	Must have the exact same function reference to remove.

// Best Practices:
// Use addEventListener for flexibility and better control.
// Avoid inline handlers to keep concerns separated (HTML, CSS, JS).
// Remove event listeners when they are no longer needed, especially in single-page applications to avoid memory leaks.
// Use passive listeners for events like scroll to improve performance.
