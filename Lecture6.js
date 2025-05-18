/* Question: Given a deeply nested array, create a function on the array, namely flatten,
    that when invoked returns a flat version of the original array. Function should be 
    defined in a way that it can be invoked on existing and future array.
*/

let input = [
  1,
  2,
  3,
  [4],
  [5, 6, [7], [8, [9, [10]]]],
  11,
  12,
  13,
  [14, [[[[[15, [16]]]]]]],
  17,
  18,
  [19, [20, [21, [22, [23, [24]]]]]],
];

//We can't use arrow function here because arrow function will use the definition scope and not the calling scope

//Version completed by me
function flatten() {
  let array = this;
  let finalArray = [];
  function recursionFlatten(recievedArray) {
    for (let i = 0; i < recievedArray.length; i++) {
      if (typeof recievedArray[i] === "object") {
        recursionFlatten(recievedArray[i]);
      } else {
        finalArray.push(recievedArray[i]);
      }
    }
  }
  recursionFlatten(array);
  return finalArray;
}

//Video Version
// function flatten() {
//   const output = [];
//   function processing(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       const currentElement = arr[i];
//       if (Array.isArray(currentElement)) {
//         processing(currentElement);
//       } else {
//         output.push(currentElement);
//       }
//     }
//   }
//   processing(this);
//   return output;
// }

//Alternate solution

function flatIt() {
  return this.toString()
    .split(",")
    .map((el) => Number(el));
}

Array.prototype.flatten = flatten;
console.log(input.flatten());
