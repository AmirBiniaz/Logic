

# Modern JS Practice

This repository contains **modern JavaScript examples** covering the fundamentals, arrays & objects, promises, async/await, fetch API, modules, and error handling. It is designed for learning and testing JavaScript concepts step by step.

---

## 📂 Folder Structure

```
modern-js-practice/
│
├── 01_basics/
│   ├── variables.js          # Examples of var, let, const
│   ├── arrow-functions.js    # Normal vs arrow functions
│   ├── template-literals.js  # Multiline strings & string interpolation
│   ├── destructuring.js      # Array & object destructuring
│   └── spread-rest.js        # Spread & rest operators
│
├── 02_arrays_objects/
│   ├── map-filter-reduce.js  # map, filter, reduce examples
│   ├── find-some-every.js    # find, some, every examples
│   ├── object-shorthand.js   # Object shorthand properties & methods
│   └── optional-chaining.js  # Optional chaining examples
│
├── 03_async/
│   ├── promises.js           # Create and handle Promises
│   ├── async-await.js        # Rewrite Promises using async/await
│   ├── try-catch-finally.js  # Error handling with try/catch/finally
│   └── fetch-api.js          # Fetch data from a public API
│
├── 04_modules/
│   ├── math.js               # Export math functions (add, subtract, etc.)
│   └── index.js              # Import and use math functions
│
└── README.md                 # Project documentation
```

---

## 💡 Features & Learning Points

### 01_basics
- Variables: `var`, `let`, `const`  
- Functions: normal vs arrow  
- Template literals: multiline & expressions  
- Destructuring: arrays & objects  
- Spread & rest operators  

### 02_arrays_objects
- Array methods: `map`, `filter`, `reduce`, `find`, `some`, `every`  
- Object shorthand & methods  
- Optional chaining: safe property access  

### 03_async
- Promises: resolve/reject & `.then/.catch`  
- Async/await: cleaner asynchronous code  
- Try/Catch/Finally: error handling  
- Fetch API: getting data from external APIs  

### 04_modules
- ES6 module export/import  
- Math utilities (add, subtract, multiply, divide)  

---

## 🚀 How to Run

1. Clone the repository:
```bash
git clone https://github.com/yourusername/modern-js-practice.git
```

2. Navigate to the project folder:
```bash
cd modern-js-practice
```

3. Run any JavaScript file using Node.js:
```bash
node 01_basics/variables.js
node 02_arrays_objects/object-shorthand.js
node 03_async/fetch-api.js
node 04_modules/index.js
```

> **Note:** Make sure you have Node.js v18+ for fetch API support or use `node-fetch` for older versions.  
> If using ES modules, set `"type": "module"` in your `package.json`.

---

## 📖 References
- [MDN JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  
- [FreeCodeCamp](https://www.freecodecamp.org/)  
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)