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

//TODO: Loop an number

while (counter < 5) {
  console.log("Number: " + counter);
  counter++;
}

console.log("\n");
//TODO: Loop an array

for (let i = 0; i < colors.length; i++) {
  console.log("Index: " + i);
  console.log("Colors: " + colors[i]);
}
console.log("\n");
for (let color of colors2) {
  console.log("My Color: " + color);
}
console.log("\n");
//TODO Loop an string of text

for (let i = 0; i < deck.length; i++) {
  //   console.log("Index: " + i);
  console.log("Letter: " + deck.charAt(i).toUpperCase());
}
console.log("\n");
//TODO: Loop an object
console.log("My Objects: ");

for (let key in person) {
  console.log(key + " : " + person[key]);
}

console.log("\n");
console.log("My Objects: ");

const keys = Object.keys(person2);

for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  console.log(key + " : " + person2[key]);
}
console.log("\n");

//TODO: Multiple Loops

for (let i = 0, k = 10; i < k; i++, k--) {
  console.log(i + " in " + k);
}
console.log("\n");
//TODO: Nested Loops

for (let i = 0; i < 5; i++) {
  for (let j = 5; j < 10; j++) {
    console.log(i + " and " + j);
  }
  console.log("\n");
}
