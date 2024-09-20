console.log("promises");

// In JavaScript, making requests to a server involves sending HTTP requests and receiving responses. Over time, different methods have been developed to handle these requests, evolving as web technologies and standards have improved. Below is an overview of the main methods used to send server requests in JavaScript:

// 1. Older Method: XMLHttpRequest (XHR)
// Introduction: This was the primary way to make HTTP requests in JavaScript before modern alternatives were introduced.

// How It Works:
// You create a new instance of XMLHttpRequest.
// You call its .open() method to initialize the request.
// Then you use .send() to send the request to the server.
// It supports event handlers like onreadystatechange and onload to process the response.

// Limitations:
// It's verbose and lacks native support for promises, making the code harder to read and maintain.
// Handling different request states requires manual setup with event listeners.

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://example.com/data");
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();

// 1. XMLHttpRequest (Older)
// Before the more modern approaches like fetch and axios, developers used the XMLHttpRequest object to send HTTP requests to servers.

// Example of XMLHttpRequest:
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.error("Error fetching data");
  }
};

xhr.onerror = function () {
  console.error("Network error");
};

xhr.send();

// Features and Limitations:
// * Asynchronous: Supports asynchronous requests, but using callbacks.
// * Complicated Syntax: You need to manually handle opening connections, error handling, and parsing.
// * Limited: Lacks many modern features like better error handling, simpler syntax, or support for promises.

// 2. Promises (Modern ES6+ Feature)
// A Promise is an object representing the eventual completion or failure of an asynchronous operation. It's a cleaner way to handle asynchronous code compared to callbacks.

let promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});

promise
  .then((result) => {
    console.log(result); // Operation successful
  })
  .catch((error) => {
    console.error(error); // Operation failed
  });

// Key Properties of Promises:
// * Pending: Initial state, neither fulfilled nor rejected.
// * Resolved (fulfilled): The operation was successful.
// * Rejected: The operation failed.

// Features:
// * Improves readability.
// * Allows for chaining (.then(), .catch(), .finally()).
// * Can handle multiple promises in parallel using Promise.all().

// 2. Modern Method: fetch()
// Introduction: Introduced in ES6 (2015), the fetch() API provides a more modern and cleaner way to make network requests.
// How It Works:
// fetch() returns a promise, allowing you to use .then() and .catch() for handling success and errors.
// It simplifies error handling, especially compared to XMLHttpRequest.
// It’s also more flexible, with built-in support for promises and easier configuration for request headers, bodies, etc.
// fetch() doesn’t automatically reject HTTP error status codes (e.g., 404, 500), so you need to check for success manually.

fetch("https://example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("Fetch error:", error));

// 3. Axios (Library)
// Introduction: Axios is a popular third-party library that simplifies making HTTP requests in JavaScript.
// How It Works:
// Like fetch(), Axios returns promises.
// It has better error handling by default, supports older browsers (which fetch() may not), and simplifies making requests with features like automatic JSON parsing and cancellation of requests.
// Axios can also be used in both the browser and Node.js environments.

axios
  .get("https://example.com/data")
  .then((response) => console.log(response.data))
  .catch((error) => console.error("Axios error:", error));

// 4. jQuery.ajax() (Deprecated for Modern Use)
// Introduction: jQuery’s .ajax() method was widely used in the past before modern tools like fetch() became common.
// How It Works:
// This is a wrapper around XMLHttpRequest, simplifying the API and making requests more concise.
// jQuery also handles some cross-browser compatibility issues.
// However, as native solutions like fetch() have evolved, jQuery’s .ajax() method is considered less optimal for new projects.

$.ajax({
  url: "https://example.com/data",
  method: "GET",
  success: function (data) {
    console.log(data);
  },
  error: function (error) {
    console.error("jQuery error:", error);
  },
});

// Key Differences between XMLHttpRequest and fetch():
// Feature	XMLHttpRequest	fetch()
// Ease of Use	More complex, event-based	Simpler, promise-based
// Support for Promises	No, requires callback functions	Yes, natively supports promises
// Error Handling	Manually check status codes	Requires manual status check but easier to handle errors with promises
// Browser Support	Supported in all browsers	Supported in modern browsers (with some polyfills needed for older browsers)
// Data Parsing	Response must be parsed manually	Built-in methods like json() make parsing easier
// Conclusion:
// Older method: XMLHttpRequest was the original way to make requests, but it's less efficient and requires more code.
// Modern method: fetch() is the go-to choice today for simplicity, readability, and flexibility.
// Library support: For more advanced use cases or improved compatibility, Axios is often chosen as it provides a rich set of features with simpler syntax and better defaults.
// In most modern applications, fetch() is widely used unless additional features like request cancellation or node compatibility are needed, in which case Axios is a better choice.
