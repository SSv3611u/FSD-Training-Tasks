# JavaScript Basic Practice - Beginner Level

This folder contains beginner-level practice code for fundamental JavaScript concepts.

## Files Overview

### 1. **01-callbacks.js**
- Basic callback function examples
- Passing functions as arguments
- Callback with return values and data processing
- Callback Hell (nested callbacks) - to understand why Promises/Async-Await exist

**Topics Covered:**
- Simple callbacks
- Callbacks with parameters
- Data processing with callbacks
- Nested callbacks (Callback Hell)

---

### 2. **02-promises.js**
- Creating basic promises
- Resolving and rejecting promises
- `.then()` and `.catch()` methods
- Promise chaining
- `Promise.all()` for multiple promises

**Topics Covered:**
- Promise creation and states
- Promise resolution and rejection
- Handling multiple promises
- Error handling with `.catch()`

---

### 3. **03-async-await.js**
- Basic async functions
- Using `await` keyword
- Multiple awaits in sequence
- Error handling with try/catch
- Comparison between `.then()` and async/await

**Topics Covered:**
- Async function declaration
- Await syntax
- Sequential operations with await
- Error handling in async functions
- Cleaner syntax than promises

---

### 4. **04-settimeout-setinterval.js**
- `setTimeout()` - execute code after a delay
- `setInterval()` - execute code repeatedly
- `clearTimeout()` - cancel setTimeout
- `clearInterval()` - stop setInterval
- Nested setTimeout
- Multiple intervals

**Topics Covered:**
- Delayed execution
- Repeated execution
- Clearing timers
- Passing parameters to setTimeout
- Timer management

---

### 5. **05-modules.js**
- CommonJS module pattern (Node.js)
- ES6 module syntax (import/export)
- Named exports and default exports
- Module using IIFE pattern
- Encapsulation and private variables

**Topics Covered:**
- Module creation and export
- Module import
- Named exports
- Default exports
- Private variables in modules

---

## How to Run

### **For Node.js:**
```bash
node 01-callbacks.js
node 02-promises.js
node 03-async-await.js
node 04-settimeout-setinterval.js
node 05-modules.js
```

### **For Browser:**
- Include the `.js` files in your HTML:
```html
<script src="01-callbacks.js"></script>
```
- Check the browser console (F12 → Console) to see output

---

## Key Concepts Explained

### **Callbacks**
- Function passed as an argument to another function
- Executed later (after some operation)
- Can lead to callback hell if nested too much

### **Promises**
- Better way to handle asynchronous operations
- Three states: Pending, Resolved, Rejected
- Use `.then()` for success, `.catch()` for errors

### **Async/Await**
- Modern way to handle asynchronous code
- Makes code look synchronous and easier to read
- Built on top of Promises
- Use `try/catch` for error handling

### **setTimeout & setInterval**
- `setTimeout()`: Runs code once after specified delay
- `setInterval()`: Runs code repeatedly at intervals
- Both return IDs that can be used with `clearTimeout()` and `clearInterval()`

### **Modules**
- Break code into reusable pieces
- Encapsulation and organization
- Node.js uses CommonJS (`require`, `module.exports`)
- Modern JavaScript uses ES6 modules (`import`, `export`)

---

## Practice Tips

1. **Run each file** and observe the console output
2. **Modify values** and see how output changes
3. **Combine concepts** - use async/await with setTimeout
4. **Try to predict** what will happen before running
5. **Experiment** - add your own examples to each file

---

## Common Mistakes to Avoid

- ❌ Forgetting to call the callback function
- ❌ Using `.then()` without returning a promise
- ❌ Not handling errors with `.catch()` or `try/catch`
- ❌ Forgetting to clear intervals/timeouts (can cause memory leaks)
- ❌ Treating async code as synchronous

---

## Next Steps

Once comfortable with these basics, explore:
- Fetch API with Promises and Async/Await
- Event listeners and callbacks
- Arrow functions with async/await
- Promise combinators (`Promise.race()`, `Promise.any()`)
- Custom modules in Node.js
