// Creating, Editing, and Removing Elements in the DOM

// 1. Creating New Elements
// JavaScript provides methods to dynamically create new HTML elements and insert them into the DOM. This is useful for generating content based on user interactions or data updates.

// document.createElement(): Creates a new HTML element.
let newDiv = document.createElement('div'); // Create a new <div> element
newDiv.textContent = "Hello World!"; // Add text content to the div

// appendChild(): Adds the newly created element as the last child of a parent node.
let parent = document.getElementById('container'); // Assuming a <div id="container">
parent.appendChild(newDiv); // Add the new div to the container

// insertBefore(): Inserts the new element before a specified existing child.
let referenceNode = document.getElementById('reference');
parent.insertBefore(newDiv, referenceNode); // Insert newDiv before referenceNode

// innerHTML: You can also create and insert HTML elements using innerHTML, though this is less efficient and can introduce security risks if dealing with user input (e.g., XSS attacks).

parent.innerHTML += '<div>Hello World!</div>'; // Adds new content

// Creating and Appending Text Nodes
// A TextNode represents the text inside an element. You can create and append a TextNode to an element using the following steps:

// document.createTextNode(): Creates a new TextNode.
// appendChild(): Appends the text node to an element.

let newText = document.createTextNode('This is a new text node.');
let element1 = document.getElementById('myElement');
element1.appendChild(newText); // Appends the text node to the element

// You can also combine this with creating a new element and inserting text within it:
let newDiv = document.createElement('div'); // Create a new div element
let newText1 = document.createTextNode('Hello World'); // Create a text node
newDiv.appendChild(newText1); // Append the text node to the div
document.body.appendChild(newDiv); // Finally, append the div to the body

// 2. Editing Elements
// Once an element exists in the DOM, it can be modified:

// Changing attributes:

// setAttribute(): Adds or changes an attribute.
newDiv.setAttribute('id', 'newId'); // Set a new id for the div

// Direct property setting: Some attributes like id, className, and style can be modified directly.
newDiv.id = 'newId'; // Set id
newDiv.className = 'myClass'; // Set class
newDiv.style.color = 'blue'; // Change style

// Modifying text content:

// textContent: Changes the text inside an element (removes HTML tags if any).
newDiv.textContent = "Updated Content";

// innerHTML: Modifies the inner HTML (preserves and renders HTML tags).
newDiv.innerHTML = "<strong>Bold Content</strong>";

// innerText
// Description: The innerText property is used to get or set the visible text content of an element. Unlike textContent, innerText respects the styles applied to the element, such as display: none or visibility: hidden, and only returns the text that is actually rendered on
let element = document.getElementById("myElement");

// Get the visible text content of the element
console.log(element.innerText);

// Set new visible text content
element.innerText = "New Visible Text";

// 3. Removing Elements
// JavaScript offers different ways to remove elements from the DOM:

// removeChild(): Removes a specific child node from the parent.
parent.removeChild(newDiv); // Removes the newDiv from the parent

// remove(): Directly removes the element from its parent (introduced in modern browsers).
newDiv.remove(); // Removes newDiv directly

// innerHTML = '': Clears out all child elements of a parent by setting its innerHTML to an empty string.
parent.innerHTML = ''; // Removes all content inside the parent

// Optimizing DOM Manipulation
// DOM manipulation can have performance impacts, especially in large applications or with frequent updates. Here are some optimization techniques:

// 1. Minimize Reflows and Repaints
// Reflow: Happens when the layout of the page changes (e.g., when you add/remove elements or change styles).
// Repaint: Occurs when visual elements are updated without changing the layout (e.g., changing a color).
// Avoid triggering multiple reflows by batching DOM updates:

// Instead of making multiple changes individually, group them together.

// Inefficient Example:
let el = document.getElementById("myDiv");
el.style.width = "100px";
el.style.height = "200px";
el.style.backgroundColor = "blue";

// Optimized Example:
el.style.cssText = "width: 100px; height: 200px; background-color: blue;";

// 2. Use Document Fragments
// When adding multiple elements, instead of inserting them one by one, use a DocumentFragment to minimize reflows and improve performance.

// DocumentFragment is a lightweight container that allows you to add multiple elements and insert them into the DOM at once.
let fragment = document.createDocumentFragment();

for (let i = 0; i < 10; i++) {
  let newDiv = document.createElement('div');
  newDiv.textContent = `Item ${i}`;
  fragment.appendChild(newDiv);
}

parent.appendChild(fragment); // Insert all items into the DOM at once

// 3. Use Event Delegation
// Instead of adding an event listener to every individual element, use event delegation. By attaching the event listener to a common parent, you avoid unnecessary multiple listeners.

// Inefficient Example:
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => console.log("Clicked!"));
});

// Optimized Example:
document.body.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    console.log("Button clicked!");
  }
});

// 4. Avoid innerHTML for Large Updates
// Using innerHTML can be convenient but is not efficient for large DOM trees or frequent updates. It causes the browser to re-parse and re-render the entire subtree, which can be slow.

// For performance, use methods like appendChild() or insertAdjacentHTML() instead when possible.

// 5. Debouncing and Throttling
// When performing frequent DOM manipulations (e.g., during window resize or scroll events), use debouncing or throttling techniques to reduce the number of function calls.

// Debouncing: Delays execution until after a specified period of inactivity.
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

window.addEventListener(
  "resize",
  debounce(() => {
    console.log("Resized!");
  }, 300)
);

// Throttling: Limits the frequency of execution to a fixed rate.
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

window.addEventListener(
  "scroll",
  throttle(() => {
    console.log("Scrolling!");
  }, 500)
);

// Conclusion
// Creating elements: Use createElement(), appendChild(), or insertBefore() for efficiency.
// Editing elements: Modify attributes and text content using setAttribute(), textContent, or innerHTML.
// Removing elements: Use removeChild() or remove() for removal, and avoid unnecessary DOM clearing with innerHTML.
// Optimization: Batch DOM updates, use Document Fragments, apply event delegation, and manage frequent events with debouncing or throttling.
// These techniques will help you efficiently create, manipulate, and optimize your web application's DOM. Would you like to explore any topic further?

// Differences Between textContent and innerHTML:
// Feature	    textContent	                            innerHTML
// Returns	    Only plain text (no HTML tags)	        HTML markup, including tags
// Setting	    Replaces text content	                  Replaces full HTML content
// Performance	Faster (doesn’t parse HTML)	            Slower (parses HTML)
// Security	    Safer (no XSS risk)	                    Risk of XSS if not sanitized
// Use case	    When working with plain text	          When you need to work with HTML

// Key Differences Between innerText and textContent
// Feature <=> innerText <=>	textContent
// Returns <=> The rendered text (ignores text in hidden elements) <=> The entire text content, even hidden elements
// Text Flow <=>	Modifies text to respect styling like display and line breaks <=>	Doesn’t respect styles; returns all text in one line
// Performance <=>	Slower (it triggers reflow and repaints) <=>	Faster (no reflow or repaint needed)
// Security <=>	Less safe than textContent (but safer than innerHTML) <=>	Safer, as it handles only text
// Use Case <=>	When you want only the visible text (e.g., what the user sees) <=>	When you need all the text, regardless of visibility

// innerText
// description: The innerText property is used to get or set the visible text content of an element. Unlike textContent, innerText respects the styles applied to the element, such as display: none or visibility: hidden, and only returns the text that is actually rendered on the page.Usage:

// Usage:
let element = document.getElementById("myElement");

// Get the visible text content of the element
console.log(element.innerText);

// Set new visible text content
element.innerText = "New Visible Text";

// Suppose you have the following HTML:
<div id="myElement" style="display: none;">
  <strong>Hello</strong> World!
</div>;

// Using innerText:

let element = document.getElementById('myElement');
console.log(element.innerText); // Outputs: "" (since the element is hidden)

// Using textContent:
let element = document.getElementById('myElement');
console.log(element.textContent); // Outputs: "Hello World!" (even though the element is hidden)

// Other Behaviors of innerText
// Line Breaks: innerText will insert line breaks when the content includes block elements (like <div> or <p>), while textContent won't.
<div id="myElement">
  <div>First Line</div>
  <div>Second Line</div>
</div>;

// innertext:
console.log(element.innerText); 
// Outputs:
// First Line
// Second Line

// textcontent:
console.log(element.textContent);
// Outputs: "First LineSecond Line"

// When to Use Each
// Use innerText: When you need to get or set the visible text that respects CSS styles like display: none, visibility: hidden, or line breaks.
// Use textContent: When you need to retrieve all the text inside an element, regardless of visibility, and want a performance-friendly option.
// Performance Considerations
// innerText can be slower because it has to calculate the layout and rendered text, triggering reflows and repaints of the page. It computes the layout of the DOM before returning the text.
// textContent, on the other hand, is faster because it simply grabs the text nodes without recalculating the layout.
// Summary
// innerText: Focuses on the visible text, respects styling, and can trigger layout recalculations.
// textContent: Focuses on the complete text, including hidden elements, and is more efficient.
// Would you like to explore more specific use cases or dive into the performance aspects further?

// ****************************** by chai aur code ************************************

 const div = document.createElement("div");
 console.log(div);
 div.className = "main";
 div.id = Math.round(Math.random() * 10 + 1);
 div.setAttribute("title", "generated title");
 div.style.backgroundColor = "green";
 div.style.padding = "12px";
 // div.innerText = "Chai aur code"
 const addText = document.createTextNode("Chai aur code");
 div.appendChild(addText);

 document.body.appendChild(div);

// **************************** my extra recourse ************************************ //

//  When to Use These Methods

// appendChild():
// Best for: Adding nodes (elements or text) at the end of a parent node's child list.
// Avoid when: You need to insert content at a specific position or insert HTML as a string.
// Syntax:
parentNode.appendChild(childNode);

// insertAdjacentHTML():
// Best for: Inserting raw HTML strings at specific positions relative to an element.
// Avoid when: You’re working with individual elements or nodes rather than strings.
// Syntax:
element.insertAdjacentHTML(position, htmlString);

// replaceWith():
// Best for: Replacing an entire element with a new node or string.
// Avoid when: You need to update or change only parts of an element’s content.
// Syntax:
element.replaceWith(newElement);

// replaceChild():
// Best for: Replacing a specific child node within a parent node.
// Avoid when: You’re replacing the entire parent element itself.
// Syntax:
parentNode.replaceChild(newChildNode, oldChildNode);

//  Performance and Optimization:
// Efficiency: When manipulating the DOM, minimizing the number of reflows and repaints is key. Methods like appendChild() and replaceChild() are optimized to make DOM updates in fewer steps, which can help reduce unnecessary reflows.

// Batching changes: Use DocumentFragment when appending multiple elements. DocumentFragment is like a lightweight version of the DOM that doesn’t trigger reflows or repaints until you append it to the DOM.

// Avoiding redundancy: Using methods like replaceWith() or replaceChild() is more efficient than manually removing and adding elements separately.

// Security: Always sanitize user input when using insertAdjacentHTML() to avoid XSS attacks, as it directly injects HTML into the DOM.
