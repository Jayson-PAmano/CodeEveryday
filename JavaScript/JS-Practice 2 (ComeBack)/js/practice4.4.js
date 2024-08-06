let consoleStyles =
  "display:block; font-weight:bold;background-color: coral; color: #333; padding:5px; font-size:1.2em; text-align:center";

console.log("%cJAVASCRIPT CONSOLE", consoleStyles);

let counter = 0;
let colors = ["red", "green", "yellow"];
let colors2 = ["blue", "pink", "orange"];
let letters = ["a", "b", "c", "d"];
let letters2 = ["e", "f", "g", "h"];
let deck = "ElementalHero";

const person = {
  firstName: "Jaden",
  lastName: "Yuki",
  deck: "E-Hero",
  dorm: "Sliffer Red",
  age: 15,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person2 = {
  firstName: "Aster",
  lastName: "Phoenix",
  deck: "D-Hero",
  dorm: "Pro-Duelist",
  age: 15,
};

// TODO: Loop number

for (let i = 0; i < 5; i++) {
  console.log("Number: " + i);
}
console.log("\n");

//TODO: Loop an array

for (let i = 0; i < colors.length; i++) {
  console.log("Index" + i);
  console.log("Color: " + colors[i]);
}
console.log("\n");

//TODO: Loop through function

for (let i = 0; i < colors2.length; i++) {
  logColors(colors2[i], i);
}

function logColors(element, index) {
  console.log("Index:" + index);
  console.log("Fav-Color:" + element);
}

console.log("\n");

//TODO: Loop an object
//easyway
for (let keys in person) {
  console.log(keys + ":" + person[keys]);
}
console.log("\n");
//hard way

let keys = Object.keys(person2);

for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  console.log(key + " : " + person2[key]);
}

console.log("\n");

//TODO: Calling the object

console.log("Object Name: " + person.fullName());
console.log("Object Name: " + person.fullName.call(person2));

console.log("\n");
//TODO: ForEach

letters.forEach(function (element, index) {
  console.log("Index: " + index);
  console.log("Letter: " + element);
});

console.log("\n");
letters2.forEach((element, index) => {
  console.log("Index: " + index);
  console.log("Letter: " + element);
});
console.log("\n");

//TODO: Loop string of text

for (let i = 0; i < deck.length; i++) {
  console.log("Index: " + i);
  console.log("Letter: " + "\t" + deck.charAt(i).toUpperCase());
}
