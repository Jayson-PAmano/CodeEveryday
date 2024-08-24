//Creating my Arrays
const letters = ["a", "b", "c", "d"];
const myLetters = ["e", "f", "g", "h"];
const colors = ["red", "green", "blue", "yellow"];
const myColors = ["orange", "purple", "pink", "gray"];
const numbers = [1, 2, 3, 4];
const SecondNumbers = [5, 6, 7, 8];
const ThirdNumbers = [9, 10, 11, 12];

//Array Constractor
const fruits = new Array("apple", "orange", "mango", "banana");
const fruits2 = new Array("peach", "straberry", "avocado", "pineapple");

let squaredNumbers = [];
const Deck = "Elemental Hero";

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
    FirstName: "Zane",
    LastName: "Truesdale",
    Age: 17,
    Deck: "Cyber Dragon",
    School: "Duel Academy",
    Dorm: "Obelisk Blue",
  },

  {
    FirstName: "Aster",
    LastName: "Phoenix",
    Age: 15,
    Deck: "Destiny Hero",
    School: "N/A",
    Dorm: "N/A",
  },
  {
    FirstName: "Bastion",
    LastName: "Misawa",
    Age: 14,
    Deck: "Structured Deck",
    School: "Duel Academy",
    Dorm: "RA Yellow",
  },
];
const users = [
  {
    name: "Robert",
    age: 27,
  },
  {
    name: "James",
    age: 30,
  },
  {
    name: "Mary",
    age: 25,
  },
];
/********************************************************************************/
//Playing with Array's
let x;

fruits.push("peach"); // pop(), will remove the last array
fruits.unshift("straberry"); // shift, will remove the first array
fruits.reverse();
x = fruits.concat(fruits2);

console.log(fruits.toString());
console.log(x.toString());

x = fruits.includes("banana");
x = fruits.indexOf("apple");
// x = fruits.slice(1, 4);
// x = fruits.splice(1, 2);

console.log(x.toString());

// Looping with arrays
for (let i = 0; i < fruits.length; i++) {
  console.log(i + ". " + fruits[i]);
}
console.log("\n");
for (color in colors) {
  console.log(color + ". " + colors[color]);
}
console.log("\n");
for (letter of letters) {
  console.log(letter);
}
console.log("\n");
//Looping objects
for (key1 in myCharacter) {
  console.log(key1 + ": " + myCharacter[key1]);
}
console.log("\n");

for (key2 in users) {
  console.log(key2 + ": " + users[key2].name);
}
console.log("\n");
for (user of users) {
  console.log(user.name);
  /*
    for....of -> for arrays only,
    for....in -> both for arrays, objects, and array with objects
  */
}
console.log("\n");
const keys = Object.keys(myVillain);
for (let i = 0; i < keys.length; i++) {
  let key3 = keys[i];
  console.log(key3 + ": " + myVillain[key3]);
}
console.log("\n");
for (const key4 of Object.keys(myCharacter)) {
  console.log(key4 + ": " + myCharacter[key4]);
}
console.log("\n");
//Calling a function in loop
function logFruits(fruit, index) {
  console.log(`No. ${index} Fruits: ${fruit}`);
}
for (let i = 0; i < fruits.length; i++) {
  logFruits(fruits[i], i);
}
console.log("\n");
//sqaure rotting numbers
for (let i = 0; i < numbers.length; i++) {
  squaredNumbers[i] = numbers[i] * numbers[i];
}
console.log("Squared # of : " + numbers + " => " + squaredNumbers);
console.log("\n");
//forEach
myLetters.forEach((element, index) => {
  console.log("Index: " + index);
  console.log("Letters: " + element);
});
console.log("\n");
newCharacter.forEach((value) => {
  console.log("FirstName: " + value.FirstName);
});
console.log("\n");
//Array Map
const mappedLetters = myLetters.map((element) => {
  console.log(element.toUpperCase());
});
console.log("\n");
const mapCharacters = newCharacter.map((element) => {
  console.log(element.FirstName);
});
console.log("\n");
const squaredNumbs = numbers.map((value) => {
  console.log(value * value);
});
console.log("\n");
//Array Filter
const filtered = newCharacter.filter((element) => {
  //   console.log(element.Age < 12);
  return element.Age > 11;
});
console.log(filtered);
console.log("\n");
//Array find Index

function jaden(user) {
  return user.FirstName === "Aster";
}
const index = newCharacter.findIndex(jaden);
console.log(index);
