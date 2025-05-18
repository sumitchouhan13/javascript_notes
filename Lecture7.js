/*
    Question: Create a function calculator that should take one initial value.
    Chain calculations like add, subtract on it.
    Return the calculated value on invocation of val function at the end of the chain.
 */

//This approach is not recommended as this pollutes the global object
function cal(initialValue) {
  //1. Create accumulator - store result
  let accumulator = initialValue;

  //2. define add, sub and val functions
  this.add = function add(num) {
    accumulator += num;
    return this;
  };

  this.sub = function sub(num) {
    accumulator -= num;
    return this;
  };

  this.val = function val() {
    return accumulator;
  };

  //3. return an object with add, sub and val functions - chain

  return this;
}

cal(2).add(5).sub(4).val();
