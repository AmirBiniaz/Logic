
// Import functions from math.js
import { add, subtract, multiply, divide } from "./math.js";

// Use the functions
console.log("Add 10 + 5 =", add(10, 5));           // 15
console.log("Subtract 10 - 5 =", subtract(10, 5)); // 5
console.log("Multiply 10 * 5 =", multiply(10, 5)); // 50
console.log("Divide 10 / 5 =", divide(10, 5));     // 2

// Example with error handling
try {
  console.log("Divide 10 / 0 =", divide(10, 0)); // Throws error
} catch (error) {
  console.error("Error:", error.message);
}
