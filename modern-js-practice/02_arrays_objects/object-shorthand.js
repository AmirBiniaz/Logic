const name = "Amirreza";
const age = 22;

// Old way
const personOld = { name: name, age: age };

// Shorthand way
const person = { name, age };

console.log("Example 1:", person);
// Output: { name: 'Amirreza', age: 22 }

const user = {
  username: "amirreza",

  // Old way: greet: function() { ... }
  greet() {
    return `Hello, ${this.username}!`;
  },
};

console.log("Example 2:", user.greet());
// Output: Hello, amirreza!

const title = "Laptop";
const price = 35000;
const inStock = true;

const product = {
  title,
  price,
  inStock,
  info() {
    return `${this.title} costs $${this.price}. In stock: ${this.inStock}`;
  },
};

console.log("Example 3:", product.info());
// Output: Laptop costs $35000. In stock: true

function makeCar(brand, model) {
  return {
    brand,
    model,
    drive() {
      return `Driving a ${brand} ${model}`;
    },
  };
}

const car = makeCar("BMW", "X5");
console.log("Example 4:", car.drive());
// Output: Driving a BMW X5
