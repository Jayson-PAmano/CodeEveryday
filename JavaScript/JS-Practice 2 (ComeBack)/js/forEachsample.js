const letters = ["a", "b", "c"];
const letters2 = ["d", "e", "f"];
const letters3 = ["g", "h", "i"];

// Loop in function

for (let i = 0; i < letters.length; i++) {
  //   console.log("Index: " + i);
  //   console.log("Letters: " + letters[i]);
  logLetters(letters[i], i);
}

function logLetters(element, index) {
  console.log("Index: " + index);
  console.log("Letters: " + element);
}

console.log("\n");
// forEach

letters2.forEach(function (element, index) {
  console.log("Index: " + index);
  console.log("Letters: " + element);
});
