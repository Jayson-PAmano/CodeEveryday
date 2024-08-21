//Creating my Arrays
const letters = ["a", "b", "c", "d"];
const myLetters = ["e", "f", "g", "h"];
const colors = ["red", "green", "blue", "yellow"];
const myColors = ["orange", "purple", "pink", "gray"];
const numbers = [1, 2, 3, 4];

const Deck = "Elemental Hero";
let squaredNumbers = [];

//My Objects
const myCharacter = {
  Name: "Jaden Yuki",
  Age: 14,
  Deck: "Elemental Hero",
  School: "Duel Academy",
  Dorm: "Sliffer Red",
};

const myVillain = {
  Name: "Chaz Princeton",
  Age: 14,
  Deck: "Ojama / Armed Dragon",
  School: "Duel Academy",
  Dorm: "Obelisk Blue",
};

const newCharacter = [
  {
    Name: "Zane Truesdale",
    Age: 17,
    Deck: "Cyber Dragon",
    School: "Duel Academy",
    Dorm: "Obelisk Blue",
  },

  {
    Name: "Aster Phoenix",
    Age: 15,
    Deck: "Destiny Hero",
    School: "N/A",
    Dorm: "N/A",
  },
  {
    Name: "Bastion Misawa",
    Age: 14,
    Deck: "Structured Deck",
    School: "Duel Academy",
    Dorm: "RA Yellow",
  },
];

//Loop an array
for (let i = 0; i < colors.length; i++) {
  console.log("Index: " + i + "| Color: " + colors[i]);
}
for (let key in myColors) {
  console.log(key + ": " + myColors[key]);
}
for (let color of colors) {
  console.log(color);
}
console.log("\n");
//Loop an string of text
for (let i = 0; i < Deck.length; i++) {
  console.log(i + " " + Deck.charAt(i).toUpperCase());
}
console.log("\n");
//Loop an Object
for (let key in myCharacter) {
  console.log(key + ": " + myCharacter[key]);
}
let keys = Object.keys(myVillain);
for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  console.log(key + " : " + myVillain[key]);
}
console.log("\n");
//Loop an array of object
newCharacter.forEach(function (element, index) {
  console.log(
    index + ":" + " Name: " + element.Name + "," + " Age: " + element.Age
  );
});
let Numbers = numbers.map(function (value) {
  return value * value;
});
console.log(Numbers);
console.log("\n");
for (let i = 0; i < numbers.length; i++) {
  squaredNumbers[i] = numbers[i] * numbers[i];
}
console.log(squaredNumbers);
console.log("\n");
let ageFilter = newCharacter.filter(function (value) {
  return;
});
