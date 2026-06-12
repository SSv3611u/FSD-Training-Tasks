// 1. Basic async function
async function sayHello() {
  return "Hello from async function!";
}

sayHello().then(function(message) {
  console.log(message);
});


// 2. Async function with await
function getUser() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve({ name: "Alice", age: 25 });
    }, 1000);
  });
}

async function displayUser() {
  console.log("Fetching user...");
  let user = await getUser();
  console.log("User: " + user.name);
}

displayUser();


// 3. Async/Await with multiple awaits
function fetchName() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve("John");
    }, 500);
  });
}

function fetchAge() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(30);
    }, 500);
  });
}

async function getUserInfo() {
  let name = await fetchName();
  let age = await fetchAge();
  console.log("Name: " + name + ", Age: " + age);
}

getUserInfo();


// 4. Async/Await with Error Handling
function riskyOperation() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject("Operation failed!");
    }, 1000);
  });
}

async function handleRiskyOperation() {
  try {
    let result = await riskyOperation();
    console.log(result);
  } catch (error) {
    console.log("Caught error: " + error);
  }
}

handleRiskyOperation();


// 5. Async function returning data
async function fetchData() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Data received");
    }, 1000);
  });
}

async function processAndDisplay() {
  console.log("Starting...");
  let data = await fetchData();
  console.log("Result: " + data);
  console.log("Done!");
}

processAndDisplay();


// 6. Simple async/await comparison with .then()
// Using .then()
function getTitleThen() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Title");
    }, 500);
  });
}

getTitleThen().then(function(title) {
  console.log(".then() result: " + title);
});

// Using async/await (cleaner syntax)
async function getTitleAsync() {
  let title = await getTitleThen();
  console.log("async/await result: " + title);
}

getTitleAsync();
