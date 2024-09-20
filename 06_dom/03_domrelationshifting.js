// Traversing the DOM efficiently involves understanding how the DOM tree works and using the right methods and strategies for navigation and updates. I'll break down the most efficient ways to move between elements in the DOM, provide insights into how to avoid common pitfalls, and offer optimization tips.

// 1. DOM Traversal Basics
// The DOM represents a web page as a tree structure, with elements like nodes that are linked in a hierarchy (parents, children, and siblings). Understanding the relationship between elements is key to navigating the DOM.

// Navigating Between Parent and Child Nodes
// - Parent to Child
// To move from a parent element to its children, you can use:

// children: Returns an HTMLCollection of the element's direct children.
// firstElementChild and lastElementChild: Access the first or last child element directly.
// querySelector or querySelectorAll: For more specific or complex queries.

let parentElement = document.getElementById("parent");

// All children
let children = parentElement.children; // HTMLCollection of child elements

// First child
let firstChild = parentElement.firstElementChild;

// Last child
let lastChild = parentElement.lastElementChild;

// Using querySelector (returns the first match)
let specificChild = parentElement.querySelector(".child-class");

// Using querySelectorAll (returns all matching elements)
let allSpecificChildren = parentElement.querySelectorAll(".child-class"); // here we will get (nodeList)

// - Child to Parent
// To move from a child element to its parent:

// parentElement: Direct reference to the parent element of the selected child.

let childElement = document.getElementById("child");

// Get parent
let parentElement1 = childElement.parentElement;

// Navigating Between Siblings
// nextElementSibling: Access the next sibling element of the current element.
// previousElementSibling: Access the previous sibling element of the current element.

let element = document.getElementById("sibling1");

// Get next sibling
let nextSibling = element.nextElementSibling;

// Get previous sibling
let previousSibling = element.previousElementSibling;

// Parent to Siblings
// There isn’t a direct method for going from a parent to its child’s siblings, but you can combine child-to-parent traversal with sibling traversal. Once you’re at the parent, you can use children to access all the siblings of a child.

let child = document.getElementById("child");

// Get parent
let parent = child.parentElement;

// Get all siblings (including the child itself)
let siblings = parent.children;

// Filter out the child from the list
let otherSiblings = Array.from(siblings).filter((sibling) => sibling !== child);

// 2. Efficient DOM Traversal: Best Practices
// Avoid Traversing Large Sections Repeatedly
// Cache your elements: When working with elements, especially if you need to access the same element multiple times, store them in variables instead of querying the DOM multiple times.

// Bad practice (inefficient):

document.querySelector(".item").style.color = "red";
document.querySelector(".item").style.fontSize = "20px";

// Good practice (efficient):
let item = document.querySelector(".item");
item.style.color = "red";
item.style.fontSize = "20px";

// Use Event Delegation
// When handling events (e.g., click events on a list of items), it's more efficient to attach the event listener to a parent element and delegate the event handling to child elements using event delegation. This avoids adding multiple event listeners and improves performance.

let parentElement2 = document.getElementById("parent");

parentElement2.addEventListener("click", function (event) {
  if (event.target && event.target.matches("li.item")) {
    // Handle click event on the specific list item
    console.log(event.target.textContent);
  }
});

// Use Closest for Parent Traversal
// When moving upwards in the DOM, instead of chaining multiple parentElement lookups, you can use element.closest() to find the nearest ancestor that matches a given selector. It’s faster and cleaner.

let childElement3 = document.getElementById("child");

// Get the closest parent that matches the selector
let closestParent = childElement3.closest(".parent-class");

// 3. DOM Updating and Optimization Techniques
// Batch DOM Updates
// Avoid performing multiple DOM updates in a row, as this can cause excessive reflows (layout recalculations) and repaints. Instead, try to batch DOM updates together.

// Bad practice (causes multiple reflows):
element.style.width = "100px";
element.style.height = "200px";
element.style.color = "red";

// Good practice (batch updates):
element.style.cssText = "width: 100px; height: 200px; color: red;";

// Use DocumentFragment for Bulk DOM Manipulations
// When inserting multiple elements into the DOM, instead of appending them one by one, use a DocumentFragment. This is a lightweight container that lets you add elements to it without triggering multiple reflows, and then you can append the whole fragment at once.

let fragment = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
  let newElement = document.createElement("div");
  newElement.textContent = `Item ${i}`;
  fragment.appendChild(newElement);
}

document.getElementById("container").appendChild(fragment); // Single reflow

// Use innerHTML Sparingly
// While innerHTML is powerful for inserting HTML content, it’s also slow because the browser has to parse the entire string and rebuild the DOM. For minor updates, prefer methods like textContent, createElement(), or insertAdjacentHTML().

// Minimize Layout Thrashing
// Layout thrashing happens when you alternate between reading and writing to the DOM, forcing the browser to recalculate styles over and over. This can degrade performance.

// Bad practice (layout thrashing):
let height = element.clientHeight; // Reading from DOM
element.style.height = height + "px"; // Writing to DOM

// Good practice (group reads and writes):
let height1 = element.clientHeight; // Read once
element.style.height = height1 + "px"; // Write after read

// 4. Optimizing for Large DOM Trees
// Reduce Depth of the DOM Tree: Complex and deeply nested DOM structures can lead to slower traversal and rendering. Try to keep the DOM tree shallow when possible.

// Virtual DOM Libraries: If your application has frequent and large-scale DOM updates, consider using a virtual DOM implementation (like React or Vue.js). The virtual DOM minimizes the actual DOM updates by batching and comparing differences before making real changes.

// 5. Summary of Efficient DOM Traversal and Updating
// Parent to child: Use children, firstElementChild, lastElementChild, querySelector.
// Child to parent: Use parentElement or closest.
// Siblings: Use nextElementSibling, previousElementSibling.
// Cache DOM elements and batch updates to avoid multiple reflows.
// Event delegation: Handle multiple child events at the parent level.
// Optimize DOM manipulations: Use DocumentFragment for bulk changes, insertAdjacentHTML() for efficient HTML insertion, and minimize layout thrashing.
// By mastering these techniques, you'll make your DOM interactions more efficient, especially in complex web applications. Would you like a more specific example or deeper explanation on any of these areas?

// ************************************ by chai aur code ************************************** //

// <div class="parent">
//     <!-- this is a comment -->
//     <div class="day">Monday</div>
//     <div class="day">Tuesday</div>
//     <div class="day">Wednesday</div>
//     <div class="day">Thursday</div>
// </div>

const parent1 = document.querySelector(".parent");
// console.log(parent1); // parent div ans her all children will get here
// console.log(parent1.children); // all children will get here!
// console.log(parent1.children[1].innerHTML); // children 1=first will be get here!

// we can't loop throw htmlCollection but for loop can be use here be cause for loop can add any where witch arrayLike
// for (let i = 0; i < parent.children.length; i++) {
//      console.log(parent1.children[i].innerHTML); // all children we can get by for loop

// }
parent1.children[1].style.color = "orange";
// console.log(parent1.firstElementChild); // it will give me the first childe of the parent element
// console.log(parent1.lastElementChild); // it will give me the last element childe of parent element

const dayOne = document.querySelector(".day"); // query selector
// console.log(dayOne); // all child
// console.log(dayOne.parentElement); // childe to parent
// console.log(dayOne.nextElementSibling); // first sibling to second sibling
// console.log(dayOne.previousElementSibling); // go to the first sibling

console.log("NODES: ", parent.childNodes); // we will get the all nodes of the parent every single break line of the parent tree text node

// ********************************** my extra recourse ******************************************** //

// To efficiently navigate between siblings in the DOM, such as moving to the third or fourth sibling, you can use a combination of the nextElementSibling and previousElementSibling properties. These properties allow you to traverse between elements, while avoiding non-element nodes like text or comments, and ensuring smooth performance.

// Efficient Sibling Traversal in the DOM
// Moving to Next or Previous Sibling:
// nextElementSibling: Moves to the next element sibling.
// previousElementSibling: Moves to the previous element sibling.
// Navigating to Nth Sibling Efficiently
// If you need to move to the third, fourth, or any Nth sibling, you can create a loop that leverages the nextElementSibling or previousElementSibling method while keeping performance in mind.

// Example: Moving to the Nth Next Sibling
// To move to the Nth sibling efficiently, use a loop to iterate over the siblings and avoid redundant operations:

function getNthSibling(element, n) {
    let sibling = element;
    for (let i = 0; i < n; i++) {
        if (sibling.nextElementSibling) {
            sibling = sibling.nextElementSibling;
        } else {
            // If no more siblings, return null
            return null;
        }
    }
    return sibling;
}

// Usage: Get 3rd next sibling
let startElement = document.getElementById('startElement');
let thirdSibling = getNthSibling(startElement, 3);
console.log(thirdSibling); // This will return the 3rd sibling element

// Example: Moving to the Nth Previous Sibling
// To move to the Nth previous sibling, you can do the same but using previousElementSibling:

function getNthPreviousSibling(element, n) {
    let sibling = element;
    for (let i = 0; i < n; i++) {
        if (sibling.previousElementSibling) {
            sibling = sibling.previousElementSibling;
        } else {
            // If no more siblings, return null
            return null;
        }
    }
    return sibling;
}

// Usage: Get 2nd previous sibling
let secondPrevSibling = getNthPreviousSibling(startElement, 2);
console.log(secondPrevSibling); // This will return the 2nd previous sibling element

// Optimizing Performance in Sibling Traversal
// Avoid querying the DOM multiple times: Instead of repeatedly querying the DOM for the same element or property, store elements in variables during traversal.

// Use nextElementSibling or previousElementSibling: These properties are more efficient than nextSibling or previousSibling, as they skip over text nodes or comments, directly accessing the next or previous HTML element.

// Limit Traversal: Only traverse the number of siblings necessary. For example, if you need the 5th sibling, stop after the 5th iteration to avoid unnecessary steps.

// Practical Example: Looping Through All Siblings
// You can also loop through all siblings starting from a given element, moving forward or backward, while maintaining performance.

function getAllSiblings(element) {
    let siblings = [];
    let sibling = element.parentElement.firstElementChild;

    while (sibling) {
        if (sibling !== element) { // Skip the current element itself
            siblings.push(sibling);
        }
        sibling = sibling.nextElementSibling; // Move to the next sibling
    }
    return siblings;
}

let allSiblings = getAllSiblings(startElement);
console.log(allSiblings); // This will return an array of all sibling elements

// Handling Non-Element Nodes
// If you accidentally use nextSibling or previousSibling, it will include all types of nodes (like text nodes and comments). To focus only on element nodes (like div, span, etc.), use nextElementSibling and previousElementSibling.
// Example of nextSibling vs. nextElementSibling

let element = document.getElementById("myElement");

// Using nextSibling may return text nodes
console.log(element.nextSibling);

// Using nextElementSibling to skip text nodes and get the next element
console.log(element.nextElementSibling); 

// Conclusion:
// To efficiently navigate through siblings in the DOM:

// Use nextElementSibling and previousElementSibling for traversal, as they avoid non-element nodes.
// For moving to the Nth sibling, implement a loop to traverse as needed.
// Store DOM elements in variables to avoid querying the DOM multiple times.
// Use targeted traversal (stop when you find the required sibling) for performance optimization.
// Would you like further examples on specific scenarios?

// ********************** and also teach me same as well how can i do with children navigation? *************** //

// Navigating through child elements in the DOM works similarly to sibling navigation, but instead of moving between siblings, you're focusing on parent-child relationships. The DOM provides several methods and properties to help you efficiently navigate through child nodes and optimize performance.

// Efficient Navigation Through Children in the DOM
// Navigating to First and Last Child
// firstElementChild: Selects the first child that is an element (skipping text nodes and comments).
// lastElementChild: Selects the last child element.

let parent1 = document.getElementById("parentElement");

// First child element
let firstChild1 = parent1.firstElementChild;
console.log(firstChild1);

// Last child element
let lastChild1 = parent1.lastElementChild;
console.log(lastChild1);

// Navigating Through All Child Elements
// You can loop through all child elements of a parent using the children property, which returns an HTMLCollection containing all child elements (not text or comment nodes).

let children1 = parent.children; // returns an HTMLCollection
for (let child of children1) {
  console.log(child); // Logs each child element
}

// Accessing Nth Child Efficiently
// If you need to access the Nth child element, you can use the children property combined with array-like indexing.

let secondChild = parent.children[1]; // Nth child is zero-based index
console.log(secondChild); // Logs the 2nd child element

// This method is efficient because children directly gives access to the element children without including text nodes.

// Efficient Nth Child Access with Loops
// If you need to dynamically access the Nth child (e.g., third, fourth), you can loop through child elements and skip unnecessary iterations:

function getNthChild(parentElement, n) {
    return parentElement.children[n]; // Directly access the Nth child using index
}

// Usage: Get the 3rd child element
let thirdChild = getNthChild(parent, 2); // Index starts from 0
console.log(thirdChild); // Logs the 3rd child element

// Child Node Traversal with childNodes
// If you want to include all types of nodes (such as text, comment, or element nodes), you can use the childNodes property, which returns a NodeList of all child nodes (not just element nodes). However, this may include whitespace text nodes, so it's generally less efficient for element-only traversal.

let allChildNodes = parent.childNodes; // returns a NodeList of all nodes
for (let node of allChildNodes) {
  console.log(node); // Logs each child node, including text or comment nodes
}

// To avoid dealing with text or comment nodes when using childNodes, you can filter them:

let elementChildren = Array.from(parent.childNodes).filter(node => node.nodeType === Node.ELEMENT_NODE);
console.log(elementChildren); // Logs only element child nodes

// Navigating Up from Child to Parent
// To move from a child element back to its parent, use the parentElement property. This is straightforward and works for any element node.

let child1 = document.getElementById('childElement');
let parent1 = child1.parentElement;
console.log(parent1); // Logs the parent element

// Navigating to Specific Descendant (Using Query Selectors)
// You can also navigate directly to specific child or descendant elements using querySelector or querySelectorAll for more fine-tuned control.

// Find the first `.child-class` inside the parent
let specificChild1 = parent.querySelector('.child-class');
console.log(specificChild1);

// Find all `.child-class` elements inside the parent
let allSpecificChildren1 = parent.querySelectorAll('.child-class');
allSpecificChildren1.forEach(child => console.log(child)); // Logs all matching children

// Optimizing Child Element Navigation
// Minimize DOM Traversal: Accessing parent.children[index] is more efficient than looping manually through childNodes because it excludes non-element nodes.

// Store DOM Elements in Variables: Avoid querying the DOM multiple times by storing child nodes or parent nodes in variables before traversing them.

// Avoid Using childNodes for Element Traversal: Stick with children or firstElementChild/lastElementChild for element-based navigation.

// Batch DOM Manipulations: If you're modifying children (like adding or removing elements), batch DOM updates to prevent unnecessary reflows and repaints in the browser. This can drastically improve performance, especially when working with many elements.

// Traversing from Parent to Specific Child
// To move from a parent to a specific child efficiently:

// Use children[n] for a specific index.
// Use firstElementChild and lastElementChild for direct first/last child access.
// Traversing from Child to Siblings
// If you're already at a child and want to move to its siblings, you can combine child navigation with sibling properties (nextElementSibling or previousElementSibling):

// Move from a child to its next sibling
let nextSibling1 = child.nextElementSibling;
console.log(nextSibling1);

// Move to the previous sibling
let prevSibling = child.previousElementSibling;
console.log(prevSibling);

// Navigating to Nth Sibling from Child
// If you're at a child and want to jump multiple siblings (like the 3rd or 4th sibling), loop through siblings:

function getNthSiblingFromChild(childElement, n) {
  let sibling = childElement;
  for (let i = 0; i < n; i++) {
    sibling = sibling.nextElementSibling;
    if (!sibling) return null; // No more siblings
  }
  return sibling;
}

// Usage: Get the 3rd sibling of a child
let thirdSibling1 = getNthSiblingFromChild(child, 3);
console.log(thirdSibling1);

// Conclusion
// children[] is a fast and efficient way to navigate through child elements, as it ignores text nodes and returns an HTMLCollection.
// firstElementChild, lastElementChild provide direct access to the first or last child elements.
// For loop-based traversal: Use a simple loop when you need to move several children at once, or use querySelector for more complex navigation patterns.
// Optimization: Store references to parent and child elements in variables and batch operations when modifying the DOM to improve performance.

// Would you like to explore more examples or dive deeper into optimizing DOM manipulation techniques?
