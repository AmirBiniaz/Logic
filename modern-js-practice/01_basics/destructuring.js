// What Is Array Destructuring?
// Array destructuring is a unique technique that allows you to neatly extract an array’s value into new variables.

// For instance, without using the array destructuring assignment technique, you would copy an array’s value into a new variable like so:

const name = ["amir", "it", "biniaz"];

const firstName = name[0];
const lastName = name[2];
const job = name[1];

console.log(firstName);
console.log(lastName);
console.log(job);

// Let’s now see how array destructuring makes things neater and DRYer.

const nname = ["amir", "it", "biniaz"];

const [firStName, laStName, Job] = nname;

console.log(firStName);
console.log(laStName);
console.log(Job);

// You see, like magic, we’ve cleaned up our code by placing the three new variables 
// (that is, firstName, lastName, and website) into an array object ([...]). Then, we assigned them the profile array's values.
// In other words, we instructed the computer to extract the profile array’s values into the variables on the left-hand side of the assignment operator.
// Therefore, JavaScript will parse the profile array and copy its first value ("Oluwatobi") into the destructuring array’s first variable (firstName).
// Likewise, the computer will extract the profile array’s second value ("Sofela") into the destructuring array’s second variable (lastName).
// Lastly, JavaScript will copy the profile array’s third value ("codesweetly.com") into the destructuring array’s third variable (website).
// Notice that the snippet above destructured the profile array by referencing it. However, you can also do direct destructuring of an array. Let’s see how.

const [FirstName, LastName, jOb] = ["amir", "it", "biniaz"];

console.log(FirstName);
console.log(LastName);
console.log(jOb);




// Suppose you prefer to separate your variable declarations from their assignments. In that case, JavaScript has you covered. Let’s see how.

// How to Use Array Destructuring While Separating Variable Declarations from Their Assignments
// Whenever you use array destructuring, JavaScript allows you to separate your variable declarations from their assignments.

// Here’s an example:

let ffirStName, llaStName, Jjob;
 
[ffirStName, llaStName, Jjob] = ["amir", "it", "biniaz"];

console.log(ffirStName);
console.log(llaStName);
console.log(Jjob);

// What if you want "Oluwatobi" assigned to the firstName variable—and the rest of the array items to another variable? How you do that? Let’s find out below.

// How to Use Array Destructuring to Assign the Rest of an Array Literal to a Variable
// JavaScript allows you to use the rest operator within a destructuring array to assign the rest of a regular array to a variable.

// Here’s an example:


const [fffirstName, ...otherInfo] = ["Oluwatobi", "Sofela", "codesweetly.com"];

console.log(firstName); // "Oluwatobi"
console.log(otherInfo); // ["Sofela", "codesweetly.com"]

// Note: Always use the rest operator as the last item of your destructuring array to avoid getting a SyntaxError.

// Now, what if you only want to extract "codesweetly.com"? Let's discuss the technique you can use below.

const [, , website] = ["Oluwatobi", "Sofela", "codesweetly.com"];

console.log(website); // "codesweetly.com"


// In the snippet above, we used commas to skip variables at the destructuring array's first and second index positions.

// By so doing, we were able to link the website variable to the third index value of the regular array on the right side of the assignment operator (that is, "codesweetly.com").

// At times, however, the value you wish to extract from an array is undefined. In that case, JavaScript provides a way to set default values in the destructuring array. Let’s learn more about this below.

// How Default Values Work in an Array Destructuring Assignment
// Setting a default value can be handy when the value you wish to extract from an array does not exist (or is set to undefined).

// Here’s how you can set one inside a destructuring array:

const [ffirstName = "Tobi", wwebsite = "CodeSweetly"] = ["Oluwatobi"];

console.log(firstName); // "Oluwatobi"
console.log(website); // "CodeSweetly"

// In the snippet above, we set "Tobi" and "CodeSweetly" as the default values of the firstName and website variables.

// Therefore, in our attempt to extract the first index value from the right-hand side array, the computer defaulted to "CodeSweetly"—because only a zeroth index value exists in ["Oluwatobi"].

// So, what if you need to swap firstName’s value with that of website? Again, you can use array destructuring to get the job done. Let’s see how.