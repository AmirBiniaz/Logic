// async-await.js

// Example Promise function
function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // try changing to false to test reject
      if (success) {
        resolve({ id: 1, name: "Amirreza" });
      } else {
        reject("❌ Could not fetch user!");
      }
    }, 1000);
  });
}

// Async/Await way
async function run() {
  try {
    console.log("⏳ Fetching user...");
    const user = await fetchUser(); // wait until promise resolves
    console.log("✅ User fetched:", user);
  } catch (err) {
    console.error(err);
  }
}

run();


// How this works:
// 	1.	fetchUser() returns a Promise that resolves after 1 second.
// 	2.	Inside run(), we use await fetchUser() → code pauses until the promise finishes.
// 	3.	If it resolves → logs the user.
// 	4.	If it rejects → the catch block logs the error.
