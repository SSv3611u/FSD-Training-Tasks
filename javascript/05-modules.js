// ========================================
// MODULES - Basic Practice
// ========================================

// This file demonstrates both CommonJS and ES6 module syntax
// To use these files, you need to run them in Node.js or use ES6 modules in browser

// ============ COMMONJS (Node.js) ============
// CommonJS uses: module.exports and require()

// Example 1: Exporting a simple function
// file: math.js (hypothetical)
/*
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  add: add,
  subtract: subtract
};
*/

// To use: const math = require('./math');


// Example 2: Exporting a single function
// file: greet.js (hypothetical)
/*
function greet(name) {
  return "Hello " + name;
}

module.exports = greet;
*/

// To use: const greet = require('./greet');


// ============ ES6 MODULES (Modern JavaScript) ============
// ES6 uses: export and import

// Example 1: Named Exports
// file: utils.js
/*
export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}

export const PI = 3.14159;
*/

// To use: import { multiply, divide, PI } from './utils.js';


// Example 2: Default Export
// file: calculator.js
/*
export default class Calculator {
  add(a, b) {
    return a + b;
  }
  
  subtract(a, b) {
    return a - b;
  }
}
*/

// To use: import Calculator from './calculator.js';


// ============ COMPLETE WORKING EXAMPLE ============

// ---- FILE 1: math-utils.js ----
const mathUtils = {
  add: function(a, b) {
    return a + b;
  },
  
  subtract: function(a, b) {
    return a - b;
  },
  
  multiply: function(a, b) {
    return a * b;
  },
  
  divide: function(a, b) {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  }
};

// Simulating: module.exports = mathUtils;


// ---- FILE 2: string-utils.js ----
const stringUtils = {
  uppercase: function(str) {
    return str.toUpperCase();
  },
  
  lowercase: function(str) {
    return str.toLowerCase();
  },
  
  reverse: function(str) {
    return str.split('').reverse().join('');
  }
};

// Simulating: module.exports = stringUtils;


// ---- MAIN FILE: Using the modules ----
// Simulating: const mathUtils = require('./math-utils');
//             const stringUtils = require('./string-utils');

console.log("=== MATH UTILS ===");
console.log("Add: " + mathUtils.add(5, 3));
console.log("Subtract: " + mathUtils.subtract(10, 4));
console.log("Multiply: " + mathUtils.multiply(6, 7));
console.log("Divide: " + mathUtils.divide(20, 4));

console.log("\n=== STRING UTILS ===");
console.log("Uppercase: " + stringUtils.uppercase("hello"));
console.log("Lowercase: " + stringUtils.lowercase("WORLD"));
console.log("Reverse: " + stringUtils.reverse("javascript"));


// ============ ES6 MODULE EXAMPLE ============
// You can also create modules as objects

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  getInfo() {
    return "Name: " + this.name + ", Email: " + this.email;
  }
}

// Simulating: export default User;
// Or: export { User };

console.log("\n=== USER CLASS ===");
let user1 = new User("Alice", "alice@example.com");
console.log(user1.getInfo());


// ============ SIMPLE MODULE PATTERN ============
// Creating a module using IIFE (Immediately Invoked Function Expression)

const counterModule = (function() {
  let count = 0; // private variable
  
  return {
    increment: function() {
      count++;
      return count;
    },
    
    decrement: function() {
      count--;
      return count;
    },
    
    getCount: function() {
      return count;
    }
  };
})();

console.log("\n=== COUNTER MODULE ===");
console.log("Increment: " + counterModule.increment());
console.log("Increment: " + counterModule.increment());
console.log("Decrement: " + counterModule.decrement());
console.log("Current Count: " + counterModule.getCount());
