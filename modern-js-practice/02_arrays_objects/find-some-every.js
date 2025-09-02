// .some()
// This array method helps you determine if one or more of its values correspond to something you’re looking for. If that doesn’t sound clear to you, let me illustrate with an example…

// Here’s a list of operatives working for your super secret organization:

var operatives = [
  { id: 12, name: "Baze Malbus", pilot: false },
  { id: 44, name: "Bodhi Rook", pilot: true },
  { id: 59, name: "Chirrut Îmwe", pilot: false },
  { id: 122, name: "Jyn Erso", pilot: false },
];

// You want to know if there are any pilots among your operatives. There are many ways to achieve that goal.
// Most people will probably use .forEach() and do something like this:You want to know if there are any pilots among your operatives.
// There are many ways to achieve that goal. Most people will probably use .forEach() and do something like this:

var listHasPilots = false;
operatives.forEach(function (operative) {
  if (operative.pilot) {
    listHasPilots = true;
  }
});

// That’s a lot of lines just to see if the list contains a pilot. Let’s try using
//  .some()!

var listHasPilots = operatives.some(function (operative) {
  return operative.pilot;
});

// How does it work?
// Well, you pass .some() a function as the argument.
//  That function runs for each value in the array. You can then see if the value fits the condition you’ve written. The function must return a boolean (although a truthy/falsy value works as well). As soon as one true is returned, .some() will itself return true. If none of the values, when processed in your condition, return true (if they all return false), then .some() will return false.

// Note that as soon as a single true is returned,
//  .some() will stop checking the other array values. In our example above, the function only runs twice as the second operative, Bodhi Rook, is a pilot. No need to check for other pilots.

// TL;DR : if some of your array values correspond to what you’re looking for,
//  .some() will return true. If not, it’ll return false.

// .every()
// As was pointed out in the comments, know that you can also check if every value of the array matches your condition by using
// .every() . It works exactly like .some(), but will return true only if every occurence match.

// .find()
// This array method does exactly what it says: it finds what you’re looking for. In a nutshell,
// .find() will return the first value that corresponds to the passed condition. Let’s see it in action with the same data as earlier.

// Here is our list of operatives:

var operatives = [
  { id: 12, name: "Baze Malbus", pilot: false },
  { id: 44, name: "Bodhi Rook", pilot: true },
  { id: 59, name: "Chirrut Îmwe", pilot: false },
  { id: 122, name: "Jyn Erso", pilot: false },
];
