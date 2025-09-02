// template-literals

function wellcome(name) {
  console.log("wellcome " + name + "too.......");
}

function wellCome(name) {
  console.log(`wellcom ${name} toooo. `);
}

// What is A Template Literal in JavaScript? Why and How to Use Template Literals in JavaScript
// Earlier, you saw that to create a template literal, you have to use backticks.

// Template literals were introduced with ES6, and they allow you to perform more complex operations using strings.

// One of those is the ability to embed a variable inline inside a string, like so:

let firstName = "John";
let lastName = "Doe";

console.log(
  `Hi! My first name is ${firstName} and my last name is ${lastName}!`
);

// output

//Hi! My first name is John and my last name is Doe!

// In the example above, I created two variables, firstName and lastName, and stored a person's first and last name, respectively.

// Then, using console.log(), I printed a string created with backticks, also known as a template literal.

// Inside that string, I embedded those two variables.

// To do so, I wrapped the variable names in ${} - this is also known as string interpolation which allows you to introduce any variables without having to concatenate them like so:

let FirstName = "John";
let LastName = "Doe";

console.log(
  "Hi! My first name is " + FirstName + " and my last name is " + LastName + "!"
);
s
// output

// Hi! My first name is John and my last name is Doe!
