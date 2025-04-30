function outer() {
  console.log(this); // {a: 1}
  function inner() {
    console.log(this); // points to the global object and prints window object
  }
  inner();
}

var obj = { a: 1 };
outer.call(obj);

function outerArrow() {
  console.log(this); // {a: 1}
  const inner = () => {
    console.log(this); // {a: 1}
  };

  inner();
}

var obj1 = { a: 1 };
outerArrow.call(obj1);

//Arguments (Regular functions have the arguments object whereas arrow functions doesn't have the arguments object)

function fooRegularFunction() {
  console.log(arguments);
}

fooRegularFunction(1, 2, 3, 4); //Will get an arguments array

const fooArrowFunction = () => {
  console.log(arguments); //Reference Error: arguments is not defined
};

fooArrowFunction(1, 2, 3, 4);
