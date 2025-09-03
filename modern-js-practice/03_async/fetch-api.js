// What is an API?
// API stands for Application Programming Interface. It is a set of rules and protocols that allows one software application to interact with another.
//  APIs are used to fetch, send, or manipulate data between applications.

// For example, you might use an API to:

// Retrieve weather data from a weather service.
// Get user details from a backend server.
// Post data, such as user feedback, to a remote service.
// APIs are often provided by third-party services (like Twitter, Google Maps, or OpenWeather) 
// but can also be custom-built for your own applications (such as RESTful APIs or GraphQL APIs).


// What is the Fetch API?
// The Fetch API is a modern, native JavaScript API that provides an easy and flexible way to make network requests.
//  It is built into most modern browsers, so you don’t need to include any external libraries to use it.

// The Fetch API is promise-based, meaning it returns a promise that resolves with the response to the request.
//  This is an improvement over older APIs like XMLHttpRequest, which required more complex callback handling.
//  With the Fetch API, you can handle asynchronous operations more easily using .then() and async/await.


// Basic Syntax of Fetch API
// The basic syntax of fetch() looks like this:


fetch(url, options)
  .then(response => response.json())  // Parse JSON data
  .then(data => console.log(data))     // Handle the data
  .catch(error => console.error(error));  // Handle errors

//   url: The URL to which you want to make the request.
// options: Optional settings (like request method, headers, body data, etc.).

// Example 1: Fetching Data with the Fetch API
// Let’s look at an example of how you might fetch data from a public API (e.g., JSONPlaceholder, a fake online REST API used for testing and prototyping).

// Fetch data from the JSONPlaceholder API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())  // Parse the JSON data from the response
  .then(posts => {
    console.log(posts);  // Log the array of posts to the console
  })
  .catch(error => console.error('Error fetching data:', error));  // Handle any errors

  

//   In this example:

// We use the fetch() function to send a GET request to the https://jsonplaceholder.typicode.com/posts endpoint.
// The .then() method is used to handle the response. First, we call response.json() to parse the response body as JSON, 
// and then we handle the resulting data (the array of posts).
// Any errors that occur during the fetch operation are caught in the .catch() block.

// Example 2: Fetch API with POST Request
// To send data to an API (e.g., creating a new post), you might use a POST request. Here's how to use the Fetch API for that

// Data to be sent in the request body
const newPost = {
  title: 'New Post',
  body: 'This is the content of the new post.',
  userId: 1
};
// Fetch API with POST request
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',  // Specify the HTTP method
  headers: {
    'Content-Type': 'application/json'  // Indicate the type of data being sent
  },
  body: JSON.stringify(newPost)  // Convert JavaScript object to JSON string
})
  .then(response => response.json())  // Parse the JSON response
  .then(post => {
    console.log('Created Post:', post);  // Log the newly created post
  })
  .catch(error => console.error('Error creating post:', error));  // Handle errors


  