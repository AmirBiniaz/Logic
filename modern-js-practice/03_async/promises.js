//  What is a Promise?

// A Promise in JavaScript is an object that represents the result of an asynchronous operation.
// It can be in one of three states:

// 	1.	Pending → The async task is still running.
// 	2.	Fulfilled (Resolved) → The task finished successfully.
// 	3.	Rejected → The task failed.

//  Basic Promise

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("✅ Task completed successfully!");
  } else {
    reject("❌ Something went wrong!");
  }
});

// Handling the promise
myPromise
  .then((result) => console.log(result)) // runs if resolved
  .catch((error) => console.error(error)) // runs if rejected
  .finally(() => console.log("Promise finished!"));

//  Promise with setTimeout

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = Math.random() > 0.5; // 50% chance
      if (success) {
        resolve("📦 Data received!");
      } else {
        reject("⚠️ Failed to fetch data.");
      }
    }, 2000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
