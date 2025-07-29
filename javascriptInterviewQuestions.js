// Output based questions

// Question 1:-

console.log(test3);
console.log(test3());
var test3 = function () {
  return 3;
};

// Question 2:-

(function () {
  var a = (b = 1);
})();

console.log("b", b);

console.log("a", a);

// Question 3:-

console.log(x);

var x = 2;

// Question 4:-

console.log(1);

setTimeout(() => {
  console.log("setTimeOut");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("P1");
  })
  .then(() => {
    console.log("P2");
  })
  .then(() => {
    console.log("P3");
  });

console.log(2);

// Question 5:-

function userDetails(username) {
  if (username) {
    console.log(salary);

    console.log(age);

    let age = 30;

    var salary = 10000;
  }

  console.log(salary);

  console.log(age);
}

userDetails("John");

// Question 5:-
//Print the pairs in an array for a given sum k, [2,1,3,9,4,6,10,-1]. If input is 5, then output should be [2,3] [1,4] [6,-1] , Time complexity o(N)

const input = [2, 1, 3, 9, 4, 6, 10, -1];
// const input = []
const k = 6;

const findTwoSum = (input, k) => {
  const set = new Set();
  for (let element of input) {
    set.add(element);
  }
  let resultantArray = [];
  for (let element of input) {
    let firstElement = element;
    let secondElement = k - firstElement;
    if (set.has(secondElement)) {
      const innerArray = [firstElement, secondElement];
      set.delete(firstElement);
      set.delete(secondElement);
      resultantArray.push(innerArray);
    }
  }
  return resultantArray;
};

console.log(findTwoSum(input, k));

// Question 6:-

const inputArray = [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0];
const inputArray2 = [1, 1, 0, 0]; //[0, 0, 1, 1]
const inputArray3 = [1, 1, 1, 1, 0, 0, 1, 1, 1];

const sortArray = (inputArray) => {
  let length = inputArray.length;
  if (length === 0) {
    return [];
  }
  let l = 0,
    r = 1;
  while (l < length && r < length) {
    if (inputArray[l] === 1) {
      while (inputArray[r] !== 0 && r < length) {
        r++;
      }
      if (inputArray[r] !== undefined) {
        [inputArray[l], inputArray[r]] = [inputArray[r], inputArray[l]];
      }
      l++;
    } else {
      l++;
      r++;
    }
  }
  return inputArray;
};

console.log(sortArray(inputArray3));

//Question related to Event loops, debouncing, closure, (call, bind, apply)

// Question - Implement a debouncing function
// let timer;
// const debounceFunction = (cb, delay) => {
//     if(timer) {
//         return () => clearTimeout(timer);
//     }
//     timer = setTimeout(cb, delay);
// }

// Question - output of this?

for (var i = 0; i < 5; i++) {
  setTimeout(
    (i) => {
      console.log(i);
    },
    0,
    i
  );
}

for (var i = 0; i < 5; i++) {
  setTimeout((i) => {
    console.log(i);
  });
}

// Question - Output of this?

function logA() {
  console.log("A");
}
function logB() {
  console.log("B");
}
function logC() {
  console.log("C");
}
function logD() {
  console.log("D");
}

logA();
setTimeout(logB, 0);
Promise.resolve().then(logC);
logD();

/* Question - What problems does promises resolve?
   Answer - Before promises, JavaScript handled async operations (like fetching data, reading files, or waiting for timeouts) using callbacks.
   This often led to:
   1. Nested callbacks inside callbacks (aka "callback hell")
      eg:- doSomething(function(result1) {
            doSomethingElse(result1, function(result2) {
              doThirdThing(result2, function(result3) {
                // and so on...
              });
            });
          });
   2. Hard to read and maintain
   3. Error handling is messy — you’d have to manually check for errors at every level.

   The solution for this:-
    Promises make async code:-
      -> Easier to read (chaining with .then())
      -> Easier to manage errors (with .catch())
      -> Less nested and more linear
*/

/*
  Question - Explain the use of async await in javascript?
  Answer - async/await is syntactic sugar over Promises, giving you clean, readable asynchronous code that behaves more like synchronous code.

  Problem:-
    getUser()
    .then(user => getPosts(user.id))
    .then(posts => getComments(posts[0].id))
    .then(comments => console.log(comments))
    .catch(error => console.error(error));
  Solution:=
    async function fetchData() {
      try {
        const user = await getUser();
        const posts = await getPosts(user.id);
        const comments = await getComments(posts[0].id);
        console.log(comments);
      } catch (error) {
        console.error(error);
      }
    }
*/

/*
  Question - What is closure?
  Answer - A closure gives an inner function access to the variables of its outer function, even after the outer function has returned.
*/

/*
  Question - What is the difference between flexbox and grid?
  Answer - 
  |                       | **Flexbox**                            | **Grid**                                  |
  | --------------------- | -------------------------------------- | ----------------------------------------- |
  | **Layout**            | One-dimensional (either row OR column) | Two-dimensional (rows AND columns)        |
  | **Best for**          | Aligning elements in a line            | Complex layouts (e.g. page or card grids) |
  | **Content vs Layout** | Content-first (flexes with content)    | Layout-first (place items in grid areas)  |
  | **Alignment**         | Along main/cross axes                  | Precise grid lines, tracks, and areas     |

  🧠 Summary
  🪢 Flexbox = One-direction layout (row or column), great for navbars, cards, centering.

  🧮 Grid = Two-direction layout (rows and columns), great for entire page layouts, image galleries, dashboards.

*/
