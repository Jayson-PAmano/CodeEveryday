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

let = allFruits = [];
let x = [];
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
const users2 = [
  {
    name: "Bill Gates",
    company: "Microsoft",
  },
  {
    name: "Steve Jobs",
    company: "Apple",
  },
  {
    name: "Elon Musk",
    company: "Tesla / Space-X",
  },
];
/********************************************************************************/
/** Playing with Arrays ***/

//Adding an Array in the beginning
fruits.unshift("grapes");
/*
If you want to remove the beginning of an array use the "shift" array method
*/
//Adding an Array in the end
fruits.push("pineapple"); //Used the pop method if you want to remove the last array
fruits.reverse();

// Combinning the two arrays together
allFruits = fruits.concat(fruits2);
console.log(allFruits);
console.log("\n");

//Combinning array with string methods
x = fruits.includes("apple");
x = allFruits.slice(1, 4);
x = fruits2.indexOf("avocado");
x = Deck.replace("Elemental", "Destiny");
x = Deck.split("");
console.log(x);
//end code
console.log("\n");
/********************************************************************************/
/* Iterating Arrays */
for (let i = 0; i < myColors.length; i++) {
  console.log(`# ${i}`);
  console.log(`Color:  ${myColors[i]}`);
}
console.log("\n");
for (color of colors) {
  console.log(color);
}
console.log("\n");
for (fruit in fruits) {
  console.log(fruit + " " + fruits[fruit]);
}
console.log("\n");
for (character of newCharacter) {
  console.log(character.FirstName);
}
console.log("\n");
for (deck in newCharacter) {
  console.log(deck + " " + newCharacter[deck].Deck);
}
console.log("\n");
//Calling for loop in function
function logLetters(index, element) {
  console.log(`# ${element}: Letter: ${index}`);
}
for (let i = 0; i < letters.length; i++) {
  logLetters(letters[i], i);
}
//Square root numbers in for loop
for (let i = 0; i < numbers.length; i++) {
  squaredNumbers[i] = numbers[i] * numbers[i];
}
console.log(squaredNumbers);
console.log("\n");
//Iterating Objects
for (villain in myVillain) {
  console.log(villain + ": " + myVillain[villain]);
}
console.log("\n");
const keys = Object.keys(users);
for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  console.log(key + ": " + users[key].name);
  //   console.log(`${key}: ${users[key].name}`);
  //   console.log(users[key].name);
  //   console.log(users[keys[i]].name);
}
console.log("\n");
const keys2 = Object.keys(myVillain);
for (let i = 0; i < keys2.length; i++) {
  let key2 = keys2[i];
  console.log(key2 + ": " + myVillain[key2]);
}
