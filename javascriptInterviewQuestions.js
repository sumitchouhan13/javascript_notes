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
