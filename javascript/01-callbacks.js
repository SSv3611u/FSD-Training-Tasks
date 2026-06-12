// 1. Simple Callback Example
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);


// 2. Callback with Parameters
function add(a, b, callback) {
  let result = a + b;
  callback(result);
}

function displayResult(res) {
  console.log("Result: " + res);
}

add(5, 3, displayResult);


// 3. Callback Example with Data Processing
function fetchUserData(userId, callback) {
  // Simulating data fetching
  let userData = { id: userId, name: "John" };
  callback(userData);
}

function processUser(user) {
  console.log("User: " + user.name + " (ID: " + user.id + ")");
}

fetchUserData(1, processUser);


// 4. Callback Hell Example (to understand why we need Promises/Async-Await)
function step1(callback) {
  console.log("Step 1 completed");
  callback();
}

function step2(callback) {
  console.log("Step 2 completed");
  callback();
}

function step3(callback) {
  console.log("Step 3 completed");
  callback();
}

// This creates "callback hell"
step1(function() {
  step2(function() {
    step3(function() {
      console.log("All steps done!");
    });
  });
});
