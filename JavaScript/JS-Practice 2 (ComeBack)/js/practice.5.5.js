let styles =
  "display:block; background-color:coral; color:#333; padding:5px; font-size:2em;text-align:center";
console.log("%c'Console Logs'", styles);

let letters = ["a", "b", "c", "d"];
let letters2 = ["e", "f", "g", "h"];
let colors = ["red", "green", "blue", "yellow"];
let colors2 = ["purple", "orange", "pink", "black"];
let deckName = "Elemental Hero";
let numbers = [1, 2, 3, 4];
let count = 0;

let person = {
  name: "Juan DelaCruz",
  age: 25,
  location: "Quezon City",
};

//todo: loop numbers

for (let i = 0; i < 5; i++) {
  console.log("Number: " + i);
}
console.log("\n");

//todo: loop arrays

for (let i = 0; i < colors.length; i++) {
  console.log("Index: " + i);
  console.log("Color: " + colors[i]);
}
console.log("\n");

//todo: loop arrays in function
for (let i = 0; i < letters.length; i++) {
  logLetters(letters[i], i);
}

function logLetters(element, index) {
  console.log("Index: " + index);
  console.log("Letter: " + element);
}
console.log("\n");
//todo: loop string of text
for (let i = 0; i < deckName.length; i++) {
  console.log(deckName.charAt(i));
}
console.log("\n");
//todo: forEach

letters2.forEach(function (element, index) {
  console.log("Index: " + index);
  console.log("Letter: " + element);
});
console.log("\n");
colors2.forEach((element, index) => {
  console.log("Index: " + index);
  console.log("Letter: " + element);
});
