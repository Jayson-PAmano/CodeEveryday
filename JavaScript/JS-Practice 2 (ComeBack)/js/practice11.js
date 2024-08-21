//Creating my Arrays
const letters = ["a", "b", "c", "d"];
const myLetters = ["e", "f", "g", "h"];
const colors = ["red", "green", "blue", "yellow"];
const myColors = ["orange", "purple", "pink", "gray"];
const numbers = [1, 2, 3, 4];
const SecondNumbers = [5, 6, 7, 8];
const ThirdNumbers = [9, 10, 11, 12];

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

//todo: Loop an number

for (let i = 0, j = 5; i <= j; i++) {
  console.log(i + "and" + j);
}
console.log("\n");
//todo: Loop an array
for (let i = 0; i < colors.length; i++) {
  console.log(`Index #: ${i}, Color: ${colors[i]}`);
}
console.log("\n");
for (color of colors) {
  console.log(`My Colors: ${color}`);
}
console.log("\n");
//todo: Loop an string of text
for (let i = 0; i < Deck.length; i++) {
  console.log(Deck.charAt(i));
}
console.log("\n");
//todo: Loop an Object
for (personKeys in myCharacter) {
  console.log(myCharacter[personKeys]);
}
console.log("\n");
const keys = Object.keys(myVillain);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(key + " : " + myVillain[key]);
}
//todo: call an array through function
function logLetters(element, index) {
  console.log(`Index #: ${index}`);
  console.log(`Color: ${element}`.toUpperCase());
}
console.log("\n");
for (let i = 0; i < letters.length; i++) {
  logLetters(letters[i], i);
}
//todo: Get the squared root of the numbers
for (let i = 0; i < numbers.length; i++) {
  squaredNumbers[i] = numbers[i] * numbers[i];
}
console.log("\n");
console.log(`My numbers: ${numbers} >  numbers² = ${squaredNumbers}`);
// console.log(`Squared numbers: ${squaredNumbers}`);
console.log("\n");
//todo: forEach
myLetters.forEach((element, index) => {
  console.log(`Index #: ${index}`);
  console.log(`Letter: ${element}`.toUpperCase());
});
console.log("\n");
newCharacter.forEach((value) => {
  console.log("Name: " + value.Name);
  console.log("\t" + "Deck: " + value.Deck);
});
console.log("\n");
SecondNumbers.forEach((value) => {
  console.log(value * value);
});

//todo: Maps
let SquaredNums = ThirdNumbers.map((value) => {
  return value * value;
});
console.log(SquaredNums);
console.log("\n");
//todo: Filter

const filterNums = ThirdNumbers.filter((value) => {
  return value > 10;
});
console.log(filterNums);
