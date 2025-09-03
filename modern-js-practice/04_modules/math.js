// math.js

// Function to add two numbers
export function add(a, b) {
  return a + b;
}

// Function to subtract two numbers
export function subtract(a, b) {
  return a - b;
}

// Function to multiply two numbers
export function multiply(a, b) {
  return a * b;
}

// Function to divide two numbers
export function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}


// Using the exported functions

// Create a new file, e.g., app.js:

import { add, subtract, multiply, divide } from "./math.js";

console.log("Add:", add(10, 5));        // 15
console.log("Subtract:", subtract(10, 5)); // 5
console.log("Multiply:", multiply(10, 5)); // 50
console.log("Divide:", divide(10, 5));     // 2


