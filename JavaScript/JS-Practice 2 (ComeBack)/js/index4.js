const letters = ["a", "b", "c", "d"];
const letters2 = ["e", "f", "g", "h"];
const letters3 = ["i", "j", "k", "l"];
const letters4 = ["m", "n", "o", "p"];

// TODO: Using the for loop
for (let index = 0; index < letters.length; index++) {
  //   console.log("index: " + index);
  //   console.log("element: " + letters[index]);
  log(letters[index], index);
}

//TODO: Function with for loop
function log(element2, index2) {
  console.log("index: " + index2);
  console.log("element: " + element2);
}
console.log("\n");
//TODO: ForEach Method

letters2.forEach(log);

console.log("\n");
letters3.forEach(function (element, index) {
  console.log("index: " + index);
  console.log("element: " + element);
});

console.log("\n");
letters4.forEach((element, index) => {
  console.log("index: " + index);
  console.log("element: " + element);
});
