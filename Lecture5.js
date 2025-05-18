function greeting(name) {
  console.log("name: ", name);
}

//The last argument is the greeting function parameter
setTimeout(greeting, 0, "name argument");

//Cancelling a scheduled timeout

function greeting1(name) {
  console.log("name: ", name);
}

var timeoutId = setTimeout(greeting1, 0, "name argument");
clearTimeout(timeoutId);

//Calling setInterval with String as the first parameter

//this string syntax isn't allowed in nodejs and only browser
setInterval('console.log("This is an example")', 1000);

//Implementing own setInterval with setTimeout

function createSetIntervalPolyfill() {
  let intervalId = 0;
  let intervalMap = {};

  function setIntervalPolyfill(callbackFn, delay = 0, ...args) {
    if (typeof callbackFn !== "function") {
      throw new TypeError("callback should be a function");
    }
    let id = intervalId++;
    function repeat() {
      intervalMap[id] = setTimeout(() => {
        callbackFn(...args);
        if (intervalMap[id]) {
          repeat();
        }
      }, delay);
    }
    repeat();
    return id;
  }

  function clearIntervalPolyfill(intervalId) {
    clearTimeout(intervalMap[intervalId]);
    delete intervalMap[intervalId];
  }

  return { setIntervalPolyfill, clearIntervalPolyfill };
}

const { setIntervalPolyfill, clearIntervalPolyfill } =
  createSetIntervalPolyfill();

let counter = 0;
let intervalId;

function greeting() {
  counter++;
  console.log("Hello");
  if (counter >= 3) {
    clearIntervalPolyfill(intervalId);
  }
}

intervalId = setIntervalPolyfill(greeting, 1000);
