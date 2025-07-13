//This lecture is about the Event loop (Call stack, MacroTask Queue, MicroTask Queue)

function call() {
  return Promise.resolve();
}

call()
  .then(() => console.log(1))
  .then(() => console.log(2))
  .then(() => console.log(3));

call()
  .then(() => console.log(4))
  .then(() => console.log(5))
  .then(() => console.log(6));

//Output: 1 4 2 5 3 6 (Because the promises are pushed into the MicroTask Queue and then as these are chained then "1" resolves and push "2" in the queue so the order is something like - 1 4 2 5 3 6)

function call1() {
  return new Promise((resolve) => setTimeout(resolve, 100));
}

call1()
  .then(() => console.log(1))
  .then(() => console.log(2))
  .then(() => console.log(3));

call1()
  .then(() => console.log(4))
  .then(() => console.log(5))
  .then(() => console.log(6));

//Output -> 1 2 3 4 5 6 (Because here the tasks are pushed in the microTask Queue first and then into macrotask queue)
