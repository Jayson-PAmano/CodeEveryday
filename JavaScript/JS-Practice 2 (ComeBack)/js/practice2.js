// Define an array
let colors = ["red", "green", "blue"];
let colors2 = ["orange", "pink", "grey"];
let letters = ["a", "b", "c", "d"];
let deck = "Elemental Heroes";
let counter = 0;

const person = {
  name: "John",
  age: 25,
  pet: "Dog",
};

const person2 = {
  name: "Aster",
  age: 35,
  pet: "Cat",
};

//TODO: Loop an object
for (let key in person2) {
  console.log(key + ": " + person2[key]);
}
console.log("\n");
const keys = Object.keys(person);

for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  console.log(key + ": " + person[key]);
}
console.log("\n");
//TODO: Loop an array
// for loop

for (let i = 0; i < colors.length; i++) {
  console.log("Index: " + i);
  console.log("Colors: " + colors[i]);
}
console.log("\n");
//TODO: Loop an string of text
// Loop through a string of text
for (let i = 0; i < deck.length; i++) {
  console.log("Index: " + i);
  // console.log("Letter: " + deck[i].toUpperCase());
  console.log("Letter: " + deck.charAt(i).toUpperCase());
  console.log("\t");
}

console.log("\n");

//TODO: Multiple loops

for (let i = 0, k = 5; i < k; i++, k--) {
  console.log(i + " < " + k);
}
