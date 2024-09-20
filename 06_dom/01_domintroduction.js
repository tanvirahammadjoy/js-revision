// DOM (Document Object Model) in JavaScript
// The DOM is a programming interface for web documents. It represents the structure of a webpage as a tree of objects, where each object is a node that corresponds to a part of the document (like elements, text, or attributes). JavaScript uses the DOM to manipulate HTML and XML documents, allowing you to dynamically change content, structure, and styles on the fly.

// Structure of the DOM:
// Document: The root of the DOM tree. It represents the entire HTML document.
// Elements: Nodes in the DOM that represent HTML tags (e.g., <div>, <p>, etc.).
// Attributes: Nodes associated with elements representing attributes like class, id, etc.
// Text: Nodes representing text inside elements.

// DOM Selectors
// JavaScript provides several ways to select and manipulate elements in the DOM. Let's break them down:

// getElementById():
// Returns an Element object that matches the provided id value.
// Example: document.getElementById('myId')
// Behind the scenes:
// It quickly traverses the DOM by leveraging the unique id attribute, so it's fast and precise.

// getElementsByClassName():
// Returns a live HTMLCollection of elements that have the specified class name.
// Example: document.getElementsByClassName('myClass')
// Behind the scenes:
// Since it's a live collection, any changes to the DOM are reflected in the collection immediately. The DOM has to maintain a link to this collection to keep it updated, which may impact performance if the DOM changes frequently.

// getElementsByTagName():
// Returns a live HTMLCollection of elements with the specified tag name (e.g., div, p).
// Example: document.getElementsByTagName('div')
// Behind the scenes:
// Like getElementsByClassName(), it returns a live collection that dynamically updates with DOM changes.

// querySelector():
// Returns the first matching Element based on a CSS selector.
// Example: document.querySelector('.myClass')
// Behind the scenes:
// This uses CSS selectors and stops after finding the first match. It is slower than getElementById() but more versatile since it accepts complex selectors.

// querySelectorAll():
// Returns a static NodeList of all elements that match the CSS selector.
// Example: document.querySelectorAll('.myClass')
// Behind the scenes:
// Unlike getElementsByClassName(), this returns a static NodeList, meaning it does not automatically update if the DOM changes.

// getElementsByName():
// Returns a live NodeList of elements that have the specified name attribute.
// Example: document.getElementsByName('myName')

// Behind the scenes:
// Since name is used mainly in forms, this method is particularly useful for working with form fields.
// NodeList vs HTMLCollection

// NodeList:
// Can be static or live:
// Static NodeLists (e.g., from querySelectorAll()) do not update when the DOM changes.
// Live NodeLists (e.g., from childNodes) automatically update with DOM changes.

// Properties:
// length: Number of nodes in the list.

// Methods:
// .forEach(): Iterates over each node in the list (only available for NodeLists, not HTMLCollections).

let nodes = document.querySelectorAll('p'); // Static NodeList
nodes.forEach(node => console.log(node)); // You can loop using forEach

// HTMLCollection:
// Always live: It automatically updates whenever the DOM changes.
// Properties:
// length: Number of elements in the collection.
// Can access elements by index or by name or id.

let elements = document.getElementsByClassName('myClass'); // Live collection
console.log(elements[0]); // Access by index

// Behind the Scenes
// Static vs. Live Collections:

// When you request a static NodeList, the DOM essentially takes a snapshot of the current state and doesn’t keep track of future changes.
// In contrast, live collections like HTMLCollection or live NodeList keep a reference to the DOM structure. When the DOM changes, these collections reflect those changes immediately, but this can lead to performance overhead if the DOM is large or frequently modified.
// Performance:

// getElementById() is the fastest selector because IDs are unique and can be quickly found by the browser’s internal optimizations.
// querySelectorAll() can be slower for large documents, especially if complex CSS selectors are used.
// Live collections can be performance-heavy when large numbers of elements are involved because they need to stay synced with the DOM at all times.
// Summary of Key Differences

// Selector Type	            Type of Collection	    Static or Live	    Access Type
// getElementById()	            Single Element	        -	                ID
// getElementsByClassName()	    HTMLCollection	        Live	            Class name
// getElementsByTagName()	    HTMLCollection	        Live	            Tag name
// getElementsByName()	        NodeList	            Live	            Name
// querySelector()	            Single Element	        -	                CSS Selector
// querySelectorAll()	        NodeList	            Static	            CSS Selector

// Would you like to dive deeper into any particular method or DOM manipulation technique?







