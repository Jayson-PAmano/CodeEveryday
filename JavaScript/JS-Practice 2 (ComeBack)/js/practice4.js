const letters = ["a", "b", "c", "d"];
const letters2 = ["e", "f", "g", "h"];
const letters3 = ["i", "j", "k", "l"];
const letters4 = ["m", "n", "o", "p"];
const colors = ["red", "blue", "green", "yellow"];

let count = 0;
let deckName = "Elemental heroes";

const person = {
  Name: "Jaden Yuki",
  Deck: "Elemental Hero",
  Dorm: "Sliffer Red",
  eyeColor: "Brown",
  Age: 15,
  Info: function () {
    return this.Name + "," + this.Deck;
  },
};

const person2 = {
  Name: "Yusei Fudo",
  Deck: ' "Synchron" ',
};
const person3 = {
  Name: "Aster Phoenix",
  Deck: ' "Destiny Hero" ',
};
//TODO: Calling the object
console.log(person.Info());
console.log(person.Info.call(person2));

console.log("\n");

//TODO: Loop an object
// easy way
for (let keys in person2) {
  console.log(keys + ": " + person2[keys]);
}

console.log("\n");
const keys = Object.keys(person3);

for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  console.log(key + ":" + person3[key]);
}

console.log("\n");
//TODO: Loop an array

for (let i = 0; i < colors.length; i++) {
  console.log("Index: " + i);
  console.log("Color: " + colors[i]);
}

console.log("\n");
//TODO: Calling an array through function
for (let i = 0; i < letters.length; i++) {
  logLetters(letters[i], i);
}

function logLetters(element, index) {
  console.log("Index: " + index);
  console.log("Element: " + element);
}

console.log("\n");
//TODO: Loop an string of text
for (let i = 0; i < deckName.length; i++) {
  console.log(deckName.charAt(i));
}

console.log("\n");
//TODO: ForEach sample
letters2.forEach(function (element, index) {
  console.log("Index: " + index);
  console.log("Element: " + element);
});

console.log("\n");

letters3.forEach((e, i) => {
  console.log("Index: " + i);
  console.log("Element: " + e);
});
console.log("\n");
