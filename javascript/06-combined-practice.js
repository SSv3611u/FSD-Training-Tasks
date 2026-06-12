// Example 1: Using setTimeout with Promises
console.log("=== Example 1: setTimeout + Promise ===");

function delayedPromise(message, delay) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(message);
    }, delay);
  });
}

delayedPromise("First message", 1000)
  .then(function(msg) {
    console.log(msg);
    return delayedPromise("Second message", 1000);
  })
  .then(function(msg) {
    console.log(msg);
  });


// Example 2: Using async/await with setTimeout
console.log("\n=== Example 2: async/await + setTimeout ===");

function wait(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);
  });
}

async function processSteps() {
  console.log("Starting process...");
  
  await wait(1000);
  console.log("Step 1 completed after 1 second");
  
  await wait(1000);
  console.log("Step 2 completed after 1 more second");
  
  await wait(1000);
  console.log("All steps done!");
}

processSteps();


// Example 3: setInterval with callback
console.log("\n=== Example 3: setInterval with callback ===");

let time = 0;

function timerCallback() {
  time++;
  console.log("Timer: " + time + " seconds");
}

let timer = setInterval(timerCallback, 1000);

// Stop timer after 5 seconds
setTimeout(function() {
  clearInterval(timer);
  console.log("Timer stopped!");
}, 5000);


// Example 4: Practical API-like example
console.log("\n=== Example 4: Simulated API Calls ===");

function fetchUserData(userId) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (userId > 0) {
        resolve({ id: userId, name: "User " + userId, email: "user" + userId + "@example.com" });
      } else {
        reject("Invalid user ID");
      }
    }, 1000);
  });
}

function fetchUserPosts(userId) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(["Post 1", "Post 2", "Post 3"]);
    }, 800);
  });
}

async function getUserInfo(userId) {
  try {
    console.log("Fetching user " + userId + "...");
    let user = await fetchUserData(userId);
    console.log("User: " + user.name + " (" + user.email + ")");
    
    let posts = await fetchUserPosts(userId);
    console.log("Posts: " + posts.join(", "));
  } catch (error) {
    console.log("Error: " + error);
  }
}

getUserInfo(1);


// Example 5: Module-like object with mixed concepts
console.log("\n=== Example 5: Complete Module Example ===");

const DataProcessor = {
  // Property
  data: [],
  
  // Method with callback
  loadData: function(callback) {
    setTimeout(function() {
      DataProcessor.data = [1, 2, 3, 4, 5];
      callback();
    }, 500);
  },
  
  // Method with Promise
  processData: function() {
    return new Promise(function(resolve) {
      setTimeout(function() {
        let processed = DataProcessor.data.map(function(num) {
          return num * 2;
        });
        resolve(processed);
      }, 500);
    });
  },
  
  // Method with async/await
  displayData: async function() {
    try {
      this.loadData(function() {
        console.log("Data loaded");
      });
      
      let processed = await this.processData();
      console.log("Processed data: " + processed);
    } catch (error) {
      console.log("Error: " + error);
    }
  }
};

DataProcessor.displayData();


// Example 6: Interval with async operations
console.log("\n=== Example 6: Interval + Async ===");

let counter = 0;

async function asyncTask() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Task completed " + counter);
    }, 300);
  });
}

let asyncInterval = setInterval(async function() {
  counter++;
  if (counter <= 3) {
    let result = await asyncTask();
    console.log(result);
  } else {
    clearInterval(asyncInterval);
    console.log("Async interval stopped!");
  }
}, 1000);


// Example 7: Error handling with setTimeout + Promise
console.log("\n=== Example 7: Error Handling ===");

function riskyAsyncTask() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let shouldFail = Math.random() > 0.5;
      if (shouldFail) {
        reject("Random error occurred!");
      } else {
        resolve("Task succeeded!");
      }
    }, 1000);
  });
}

async function handleErrors() {
  try {
    console.log("Attempting risky task...");
    let result = await riskyAsyncTask();
    console.log(result);
  } catch (error) {
    console.log("Caught: " + error);
  } finally {
    console.log("Task finished (whether success or error)");
  }
}

handleErrors();


// Example 8: Chaining multiple async operations
console.log("\n=== Example 8: Async Chain ===");

async function step1() {
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log("Step 1 done");
  return "Step 1 result";
}

async function step2(prevResult) {
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log("Step 2 done: " + prevResult);
  return "Step 2 result";
}

async function step3(prevResult) {
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log("Step 3 done: " + prevResult);
}

async function executeSteps() {
  try {
    let result1 = await step1();
    let result2 = await step2(result1);
    await step3(result2);
    console.log("All async steps completed!");
  } catch (error) {
    console.log("Error in steps: " + error);
  }
}

executeSteps();
