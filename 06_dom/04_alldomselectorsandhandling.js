// DOM selectors are methods provided by the DOM API to access elements in a webpage. Each selector has specific use cases and behaves differently. Understanding how to use them and how to handle the returned results like NodeList and HTMLCollection is crucial for efficient DOM manipulation.

// DOM Selectors: Overview
// 1. getElementById()
// Description: Returns the element with the specified id. It only returns one element.
// Use case: When you need to select a unique element with a known id.

let element = document.getElementById("myElement");
console.log(element); // Outputs the element with the id 'myElement'

// 2. getElementsByClassName()
// Description: Returns a live HTMLCollection of all elements with the given class name.
// Use case: When you want to select all elements sharing a common class.

let elements = document.getElementsByClassName("myClass");
console.log(elements); // Outputs a live HTMLCollection of elements with the class 'myClass'

// 3. getElementsByTagName()
// Description: Returns a live HTMLCollection of all elements with the specified tag name.
// Use case: When you need to select all elements of a particular type, like all <div> or <p> elements.

let divs = document.getElementsByTagName("div");
console.log(divs); // Outputs a live HTMLCollection of all <div> elements

// 4. querySelector()
// Description: Returns the first element that matches the specified CSS selector.
// Use case: When you need to select one specific element based on complex CSS selectors.

let element1 = document.querySelector(".myClass p");
console.log(element1); // Outputs the first <p> element inside an element with the class 'myClass'

// 5. querySelectorAll()
// Description: Returns a static NodeList of all elements that match the specified CSS selector.
// Use case: When you need to select multiple elements using CSS selectors.

let elements2 = document.querySelectorAll(".myClass p");
console.log(elements2); // Outputs a NodeList of all <p> elements inside '.myClass'

// NodeList vs. HTMLCollection
// NodeList
// What it is: A collection of nodes returned by methods like querySelectorAll(). It may contain elements and other node types (text, comment nodes).
// Live or Static: Usually static, meaning it doesn't update automatically if the DOM changes (except for methods like childNodes which return live NodeLists).
// Use case: Use when you need to select elements using CSS selectors and work with static data.
// HTMLCollection
// What it is: A collection of only HTML elements returned by methods like getElementsByClassName() or getElementsByTagName().
// Live or Static: Always live, meaning it automatically updates when the DOM changes.
// Use case: Use when you want to track changes in the DOM automatically (e.g., if new elements are added or removed).
// Example: Difference Between NodeList and HTMLCollection

let classElements = document.getElementsByClassName("myClass"); // HTMLCollection (live)
let allParagraphs = document.querySelectorAll("p"); // NodeList (static)

console.log(classElements); // Outputs HTMLCollection
console.log(allParagraphs); // Outputs NodeList

// Handling NodeList and HTMLCollection
// Iteration
// Neither NodeList nor HTMLCollection are real arrays, but they can be looped through like arrays.

// Looping Through a NodeList
// You can use standard array-like loops with NodeList:

let nodeList = document.querySelectorAll("div");

// Using forEach (supported on NodeList)
nodeList.forEach((element) => {
  console.log(element);
});

// Using for loop
for (let i = 0; i < nodeList.length; i++) {
  console.log(nodeList[i]);
}

// Looping Through an HTMLCollection
// HTMLCollection does not have the forEach method, so you need to use a for loop:

let htmlCollection = document.getElementsByClassName("myClass");

// Using for loop
for (let i = 0; i < htmlCollection.length; i++) {
  console.log(htmlCollection[i]);
}

// Converting NodeList and HTMLCollection into Arrays
// While NodeList and HTMLCollection are array-like, they don’t have array methods like map(), filter(), or reduce(). To use array methods, you can convert them into a true array.

// Converting a NodeList to an Array
// You can convert a NodeList to an array using Array.from() or the spread operator [...]:

let nodeList1 = document.querySelectorAll("p");

// Using Array.from
let arrayFromNodeList = Array.from(nodeList1);

// Using spread operator
let spreadArray = [...nodeList1];

// Now you can use array methods
arrayFromNodeList.forEach((item) => console.log(item.textContent));

// Converting an HTMLCollection to an Array
// You can convert an HTMLCollection in the same way:

let htmlCollection1 = document.getElementsByClassName("myClass");

// Using Array.from
let arrayFromHTMLCollection = Array.from(htmlCollection1);

// Using spread operator
let spreadArray1 = [...htmlCollection1];

// Now you can use array methods
arrayFromHTMLCollection.forEach((item) => console.log(item.textContent));

// Use Cases for Each Selector
// 1. getElementById()
// Use case: When you know the specific id of the element and want to retrieve it efficiently. Since IDs are unique, this method is faster than other selectors.
// 2. getElementsByClassName()
// Use case: Ideal when you want to grab multiple elements with the same class, and you're okay with working with a live HTMLCollection.
// 3. getElementsByTagName()
// Use case: Useful when you need to grab all elements of a specific tag, like all <li>, <a>, or <div> elements, and need a live collection.
// 4. querySelector()
// Use case: Perfect for grabbing the first element matching a complex CSS selector, for example, the first child element inside a specific parent with a class or ID.
// 5. querySelectorAll()
// Use case: When you need to grab multiple elements that match a CSS selector and prefer a static NodeList that won't update automatically with changes.

// Performance Considerations
// getElementById() is the fastest selector because it directly accesses the element by its unique id.
// querySelectorAll() is slower than getElementById() but more versatile because it supports complex CSS selectors.
// getElementsByClassName() and getElementsByTagName() are fast and return live collections but may incur a performance cost due to the live nature of the collection, especially if you are repeatedly interacting with the DOM.
// When you need a snapshot of elements that won’t change dynamically, querySelectorAll() is better because it returns a static NodeList.

// Summary
// DOM Selectors provide ways to access elements using different methods like getElementById(), querySelector(), etc.
// NodeList: A collection returned by methods like querySelectorAll(). It is typically static and supports forEach for iteration.
// HTMLCollection: A live collection of HTML elements returned by methods like getElementsByClassName(). It updates as the DOM changes.
// You can convert NodeList or HTMLCollection into arrays using Array.from() or the spread operator ([...]) to use array methods like map(), filter(), and reduce().

// ************************************************ by chai aur code ********************************************

function addLanguage(langName) {
  const li = document.createElement("li");
  li.innerHTML = `${langName}`;
  document.querySelector(".language").appendChild(li);
}
addLanguage("python");
addLanguage("typescript");

function addOptiLanguage(langName) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langName));
  document.querySelector(".language").appendChild(li);
}
addOptiLanguage("golang");

//Edit
const secondLang = document.querySelector("li:nth-child(2)");
console.log(secondLang);
//secondLang.innerHTML = "Mojo"
const newli = document.createElement("li");
newli.textContent = "Mojo";
secondLang.replaceWith(newli);

//edit
const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = "<li>TypeScript</li>";

//remove
const lastLang = document.querySelector("li:last-child");
lastLang.remove();
