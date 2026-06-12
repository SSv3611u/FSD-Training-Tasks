// ========================================
// PROMISES - Basic Practice
// ========================================

// 1. Creating a Simple Promise
let myPromise = new Promise(function(resolve, reject) {
  let success = true;
  
  if (success) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise rejected!");
  }
});

myPromise
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.log(error);
  });


// 2. Promise with setTimeout (simulating delayed task)
let delayedPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("Task completed after 2 seconds");
  }, 2000);
});

delayedPromise.then(function(result) {
  console.log(result);
});


// 3. Promise that rejects
let failPromise = new Promise(function(resolve, reject) {
  let error = true;
  
  if (error) {
    reject("Something went wrong!");
  }
});

failPromise
  .then(function(result) {
    console.log("Success: " + result);
  })
  .catch(function(error) {
    console.log("Error caught: " + error);
  });


// 4. Chaining Promises
function fetchData() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Data fetched");
    }, 1000);
  });
}

function processData(data) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(data + " and processed");
    }, 1000);
  });
}

fetchData()
  .then(function(result) {
    console.log(result);
    return processData(result);
  })
  .then(function(result) {
    console.log(result);
  });


// 5. Promise.all() - Execute multiple promises
let promise1 = new Promise(function(resolve) {
  setTimeout(function() {
    resolve("Promise 1 done");
  }, 500);
});

let promise2 = new Promise(function(resolve) {
  setTimeout(function() {
    resolve("Promise 2 done");
  }, 1000);
});

Promise.all([promise1, promise2]).then(function(results) {
  console.log(results); // Shows when both promises resolve
});
