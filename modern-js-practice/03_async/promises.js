// Promises are important building blocks for asynchronous operations in JavaScript.
//  You may think that promises are not so easy to understand, learn, and work with. And trust me, you are not alone!

// Promises are challenging for many web developers, even after spending years working with them.

// In this article, I want to try to change that perception while sharing what I've learned about JavaScript Promises over the last few years.
//  Hope you find it useful.

// What is a Promise in JavaScript?
// A Promise is a special JavaScript object. 
// It produces a value after an asynchronous (aka, async) operation completes successfully,
//  or an error if it does not complete successfully due to time out, network error, and so on.

// Successful call completions are indicated by the resolve function call, and errors are indicated by the reject function call.

// You can create a promise using the promise constructor like this:

let promise = new Promise(function(resolve, reject) {    
});

// In most cases, a promise may be used for an asynchronous operation. 
// However, technically, you can resolve/reject on both synchronous and asynchronous operations.


// Hang on, don't we have callback functions for async operations?
// Oh, yes! That's right. We have callback functions in JavaScript. 
// But, a callback is not a special thing in JavaScript.
//  It is a regular function that produces results after an asynchronous call completes (with success/error).

// The word 'asynchronous' means that something happens in the future, not right now.
//  Usually, callbacks are only used when doing things like network calls, or uploading/downloading things, talking to databases, and so on.

// While callbacks are helpful, there is a huge downside to them as well.
//  At times, we may have one callback inside another callback that's in yet another callback and so on.
//  I'm serious! Let's understand this "callback hell" with an example.


// How to Avoid Callback Hell – PizzaHub Example
// Let's order a Veg Margherita pizza  from the PizzaHub. When we place the order,
// PizzaHub automatically detects our location, finds a nearby pizza restaurant, and finds if the pizza we are asking for is available.

// If it's available, it detects what kind of beverages we get for free along with the pizza, and finally,
//  it places the order.

// If the order is placed successfully, we get a message with a confirmation.

// So how do we code this using callback functions? I came up with something like this:

function orderPizza(type, name) {

    query(`/api/pizzahub/`, function(result, error){
       if (!error) {
           let shopId = result.shopId;

           query(`/api/pizzahub/pizza/${shopid}`, function(result, error){
               if (!error) {
                   let pizzas = result.pizzas;

                   let myPizza = pizzas.find((pizza) => {
                       return (pizza.type===type && pizza.name===name);
                   });

                   query(`/api/pizzahub/beverages/${myPizza.id}`, function(result, error){
                       if (!error) {
                           let beverage = result.id;

                           query(`/api/order`, {'type': type, 'name': name, 'beverage': beverage}, function(result, error){
                              if (!error) {
                                  console.log(`Your order of ${type} ${name} with ${beverage} has been placed`);
                              } else {
                                  console.log(`Bad luck, No Pizza for you today!`);
                              }
                           });

                       }
                   })
               }
           });
       } 
    });
}

orderPizza('veg', 'margherita');


// Let's have a close look at the orderPizza function in the above code.

// It calls an API to get your nearby pizza shop's id.
//  After that, it gets the list of pizzas available in that restaurant.
//  It checks if the pizza we are asking for is found and makes another API call to find the beverages for that pizza.
//  Finally the order API places the order.

// Here we use a callback for each of the API calls.
//  This leads us to use another callback inside the previous, and so on.

// This means we get into something we call (very expressively) Callback Hell.
//  And who wants that? It also forms a code pyramid which is not only confusing but also error-prone.



// There are a few ways to come out of (or not get into) callback hell.
//  The most common one is by using a Promise or async function. 
// However, to understand async functions well, you need to have a fair understanding of Promises first.

// So let's get started and dive into promises.

// Understanding Promise States
// Just to review, a promise can be created with the constructor syntax, like this:

let promis = new Promise(function(resolve, reject) {
});

// The constructor function takes a function as an argument. This function is called the executor function.

// Executor function passed to the 
// Promise constructor as an argument
// function(resolve, reject) {
    // Your logic goes here...
// }


// The executor function takes two arguments, resolve and reject.
//  These are the callbacks provided by the JavaScript language.
//  Your logic goes inside the executor function that runs automatically when a new Promise is created.

// For the promise to be effective,
//  the executor function should call either of the callback functions,
//  resolve or reject. We will learn more about this in detail in a while.

// The new Promise() constructor returns a promise object. 
// As the executor function needs to handle async operations,
//  the returned promise object should be capable of informing when the execution has been started, 
// completed (resolved) or retuned with error (rejected).

// A promise object has the following internal properties:

// state – This property can have the following values:

// pending: Initially when the executor function starts the execution.

// fulfilled: When the promise is resolved.
// rejected: When the promise is rejected.


// Promise states:

// result – This property can have the following values:

// undefined: Initially when the state value is pending.

// value: When resolve(value) is called.
// error: When reject(error) is called.
// These internal properties are code-inaccessible but they are inspectable.
//  This means that we will be able to inspect the state and result property values using the debugger tool, 
// but we will not be able to access them directly using the program.

// How promises are resolved and rejected
// Here is an example of a promise that will be resolved (fulfilled state) with the value I am done immediately.


let promises = new Promise(function(resolve, reject) {
    resolve("I am done");
});

// The promise below will be rejected (rejected state) with the error message Something is not right!.


let promi = new Promise(function(resolve, reject) {
    reject(new Error('Something is not right!'));
});

// An important point to note:

// A Promise executor should call only one resolve or one reject. 
// Once one state is changed (pending => fulfilled or pending => rejected), that's all.
//  Any further calls to resolve or reject will be ignored.

let prmise = new Promise(function(resolve, reject) {
  resolve("I am surely going to get resolved!");

  reject(new Error('Will this be ignored?')); // ignored
  resolve("Ignored?"); // ignored
});

// In the example above, only the first one to resolve will be called and the rest will be ignored.