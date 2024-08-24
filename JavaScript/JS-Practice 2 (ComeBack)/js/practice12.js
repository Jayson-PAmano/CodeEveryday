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

//Playing with array Methods

let allFruits = [];

fruits[4] = "sample fruits";
fruits.pop();
fruits.unshift("pumpkin");
fruits.reverse();
allFruits = fruits.concat(fruits2);

allFruits.forEach(function (value) {
  console.log(`Fruits: ${value}`);
});
console.log("\n");
const myColros = myColors.map(function (value) {
  console.log(`Colors: ${value}`);
});
console.log("\n");
const myFilter = numbers.filter(function (value) {
  // color === "red";
  // console.log(color === "red");
  return value > 2;
});
console.log(myFilter);
console.log("\n");
const results = newCharacter.find(function (user) {
  return user.FirstName === "Zane";
});
console.log(results);

const result2 = users.find(function (user) {
  return user.name === "James";
});
console.log(result2);

console.log("\n");
function bas(user) {
  return user.FirstName === "Bastion";
}
const result3 = newCharacter.findIndex(bas);
console.log(result3);
console.log("\n");

newCharacter.forEach((fullName) => {
  console.log(fullName.FirstName);
});
