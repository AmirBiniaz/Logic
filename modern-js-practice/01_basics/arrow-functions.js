// Arrow function syntax
// Arrow functions were introduced with ECMAScript 6 (ES6). They give you a more concside way of defining functions in JavaScript.

// Using the same sayHello function from the previous example,
//  let's see how to create it with the arrow function syntax.

const sayHello = (name) => {
  return "Hello " + name;
};

// Unlike regular functions,
//  you don't have to use an explicit return if there's only one statement like the above example.
// You can write the function on a single line like so.

const sayhello = (name) => "Hello " + name;

// Note how the curly braces are also removed to implicitly return the result of the expression.
// You can even remove the parenthesis too if there is only one argument. See the example below:

const sayHEllo = (name) => "Hello " + name;

// The name is the only argument the function takes.
//  And this means you can remove the parenthesis from the argument and it will still work fine.

// How to Access the Arguments Passed to Functions
// JavaScript provides a way to access all arguments passed to a function. But the way you acess these arguments depends on the type of function you are working with.

// How to access arguments with regular functions
// You can access all the arguments passed to a regular function using the arguments object.
//  The arguments object is an array-like object that holds all the arguments passed to the function.

// Example:

function logNumbers(num1, num2) {
  console.log(arguments);
}

logNumbers(8, 24);

// [Arguments] { '0': 8, '1': 24 }

// How to access arguments with arrow functions
// The arguments object is not available in arrow functions.
// If you try to access it in arrow functions, JavaScript will throw a reference error.

const logNumberss = (num1, num2) => {
  console.log(arguments);
};

logNumberss(8, 24); // Uncaught ReferenceError: arguments is not defined

// To access the arguments passed to an arrow function, you can use the rest parameter syntax (...).

// Example:

const logNumberS = (...args) => {
  console.log(args);
};

logNumberS(8, 24);
