function myReduce(callback, initialValue) {
  if (this === null || this === undefined) {
    throw new TypeError(`Array.prototype.reduce called on null or undefined`);
  }
  //Check if callback is a function
  if (!callback || typeof callback !== "function") {
    throw new TypeError(`
            ${callback} is not a function
        `);
  }
  //Reduce on empty array with no initialValue
  //Invoked on empty array with initalValue, returns initalValue
  if (!this.length) {
    if (arguments.length < 2) {
      throw new TypeError(`
                Reduce of empty array with no initial value
            `);
    } else if (arguments.length === 2) {
      return initialValue;
    }
  }
  //Invoked with initalValue
  var k = 0;
  var acc = initalValue;
  if (arguments.length === 2) {
    acc = this[k++];
  }
  // 0 -- arr.length
  // callback(acc, currentValue, currentIndex, arr)
  // with initalValue
  // acc = initalValue, currentValue = arr[0]
  // 0 -- arr.length
  while (k < this.length) {
    if (Object.prototype.hasOwnProperty.call(this, k)) {
      acc = callback(acc, this[k], k, this);
    }
    k++;
  }
  // without initialValue
  // acc = arr[0], currentValue = arr[1];
  // 1 -- arr.length
  return acc;
}
