/****  forEach method in Array  ****/

//for loop Example

const letters = ["a", "b", "c"];
const letters2 = ["d", "e", "f"];
const letters3 = ["g", "h", "i"];

for (let index = 0; index < letters.length; index++) {
  //     console.log("index: " + index);
  //     console.log("element: " + letters[index]);
  log(letters[index], index);
  //   log(letters2[index], index);
}

// loop through a function in for loop
function log(element, index2) {
  console.log("index: " + index2);
  console.log("element: " + element);
}
console.log("\n");
// loop through a function in forEach
// function log(element, index3) {
//   console.log("index: " + index3);
//   console.log("element: " + element);
// }

// forEach Example

// letters2.forEach(log);

letters2.forEach(function (element, index3) {
  console.log("index: " + index3);
  console.log("element: " + element);
});
console.log("\n");
letters3.forEach((element, index4) => {
  console.log("index: " + index4);
  console.log("element: " + element);
});
