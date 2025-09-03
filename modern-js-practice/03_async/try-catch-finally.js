
// Example 1: Synchronous code
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    const result = a / b;
    console.log("Result:", result);
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    console.log("Example 1: Operation finished ✅\n");
  }
}

divide(10, 2); // works
divide(10, 0); // triggers error



// Example 2: Asynchronous code with async/await
async function fetchData(url) {
  try {
    console.log("⏳ Fetching data...");
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Data fetched:", data.slice(0, 2)); // show first 2 items
  } catch (error) {
    console.error("Fetch Error:", error.message);
  } finally {
    console.log("Example 2: Fetch attempt finished ✅\n");
  }
}

// JSONPlaceholder API
fetchData("https://jsonplaceholder.typicode.com/posts");   // works
fetchData("https://jsonplaceholder.typicode.com/invalid"); // triggers error


// try { ... } → put the code that might throw errors.
// 	2.	catch (error) { ... } → handle the error.
// 	3.	finally { ... } → always runs no matter success or error.