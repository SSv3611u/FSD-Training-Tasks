// 1. Basic setTimeout - executes once after delay
setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);


// 2. setTimeout with variable
let delayedTask = setTimeout(function() {
  console.log("Delayed task executed");
}, 1500);


// 3. Clearing setTimeout before it executes
let taskToClear = setTimeout(function() {
  console.log("You won't see this!");
}, 3000);

// Clear it before 3 seconds pass
clearTimeout(taskToClear);
console.log("setTimeout cleared!");


// 4. setTimeout with parameters
function greetPerson(name, age) {
  console.log("Hello " + name + ", age: " + age);
}

setTimeout(greetPerson, 1000, "Bob", 25);


// 5. Nested setTimeout (chaining)
setTimeout(function() {
  console.log("First task - 1 second");
  setTimeout(function() {
    console.log("Second task - 2 seconds total");
    setTimeout(function() {
      console.log("Third task - 3 seconds total");
    }, 1000);
  }, 1000);
}, 1000);


// ============ SETINTERVAL ============

// 1. Basic setInterval - repeats every 2 seconds
let counter = 0;
let intervalId = setInterval(function() {
  counter++;
  console.log("Interval running: " + counter);
  
  // Stop after 5 repetitions
  if (counter === 5) {
    clearInterval(intervalId);
    console.log("Interval stopped!");
  }
}, 2000);


// 2. setInterval with function
function displayTime() {
  let date = new Date();
  console.log("Time: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}

let timeInterval = setInterval(displayTime, 1000);

// Stop after 5 seconds
setTimeout(function() {
  clearInterval(timeInterval);
  console.log("Time display stopped!");
}, 5000);


// 3. setInterval with variable increment
let count = 0;
let countInterval = setInterval(function() {
  count += 10;
  console.log("Count: " + count);
  
  if (count >= 50) {
    clearInterval(countInterval);
  }
}, 500);


// 4. Multiple setIntervals
let interval1 = setInterval(function() {
  console.log("Fast - every 1 second");
}, 1000);

let interval2 = setInterval(function() {
  console.log("Slow - every 2 seconds");
}, 2000);

// Clear both after 10 seconds
setTimeout(function() {
  clearInterval(interval1);
  clearInterval(interval2);
  console.log("Both intervals stopped!");
}, 10000);


// 5. setTimeout vs setInterval comparison
console.log("=== COMPARISON ===");

// This runs ONCE
setTimeout(function() {
  console.log("setTimeout - runs once");
}, 1000);

// This runs REPEATEDLY
let comparison = setInterval(function() {
  console.log("setInterval - runs repeatedly");
}, 1000);

// Stop the comparison after 3 seconds
setTimeout(function() {
  clearInterval(comparison);
  console.log("Comparison ended!");
}, 3000);
