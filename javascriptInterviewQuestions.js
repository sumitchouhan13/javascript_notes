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
