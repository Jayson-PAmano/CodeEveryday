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

let = allFruits = [];
let x = [];
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
//Playing with arrays
fruits.push("pineapple");
console.log(fruits);
allFruits = fruits.concat(fruits2);
console.log(allFruits);
allFruits.unshift("grapes");
console.log(allFruits);
x = allFruits.toString();
console.log(typeof x, x, x.length + "= characters");
x = numbers.indexOf(2);
console.log(x);
x = numbers.includes(2);
console.log(x);
x = numbers.slice(1, 2);
console.log(x);
console.log("\n");
//Iterating arrays
for (let i = 0; i < fruits.length; i++) {
  console.log(`Index #: ${i}, Fruit: ${fruits[i]}`);
}
//end{ code }
console.log("\n");
for (color of colors) {
  console.log(color);
}
//end{ code }
console.log("\n");
for (letter of myLetters) {
  console.log(letter);
}

//end{ code }
console.log("\n");
for (Letters in letters) {
  console.log(Letters + ") " + letters[Letters].toUpperCase());
}
//end{code}
console.log("\n");
//Iterating Objects
for (billionares in users2) {
  console.log(billionares + " " + users2[billionares].company);
}
//end{code}
console.log("\n");
for (key2 of newCharacter) {
  console.log(key2.FirstName);
}
//end{code}
console.log("\n");
for (let i = 0; i < users.length; i++) {
  console.log(`${i}) Name: ${users[i].name}`);
}
//end{code}
console.log("\n");
const keys = Object.keys(myCharacter);
for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  console.log(key + ": " + myCharacter[key]);
}
//end{code}
console.log("\n");
for (const letterKeys of Object.keys(myLetters)) {
  console.log(letterKeys + ": " + myLetters[letterKeys]);
}
//end{code}
console.log("\n");
//Calling a function in a loop
function logLetters(element, index) {
  console.log(`${index}: ${element}`);
}
for (let i = 0; i < letters.length; i++) {
  logLetters(letters[i], i);
}
//end{code}
console.log("\n");
//Square root the numbers
for (let i = 0; i < numbers.length; i++) {
  squaredNumbers[i] = numbers[i] * numbers[i];
}
console.log(squaredNumbers);
