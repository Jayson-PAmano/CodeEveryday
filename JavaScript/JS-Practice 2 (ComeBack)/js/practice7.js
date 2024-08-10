const consoleStyles =
  "display:block;background-color:coral;color:whitesmoke;text-align:center; padding:5px; font-size:2rem";
console.log('%c"Console Logs"', consoleStyles);

const letters = ["a", "b", "c", "d"];
const letters2 = ["e", "f", "g", "h"];
const colors = ["red", "green", "blue", "yellow"];
const colors2 = ["purple", "orange", "pink", "black"];
const deckName = "Elemental Hero";

const numbers = [1, 2, 3, 4];
const numbers2 = [5, 6, 7, 8];
const numbers3 = [9, 10, 11, 12];
const numbers4 = [13, 14, 15, 16];
const numbers5 = [17, 18, 19, 20];

let count = 0;

const person = {
  name: "Juan DelaCruz",
  age: 25,
  location: "Quezon City",
  Details: function () {
    return this.name + " >  " + this.location;
  },
};
const person2 = {
  name: "James Reid",
  age: 30,
  location: "Pasay City",
};

//todo: Loop numbers
for (let i = 0; i < 5; i++) {
  console.log("number: " + i);
}
console.log("\n");
while (count < 6) {
  console.log("My number: " + count);
  count++;
}
console.log("\n");
//todo: loop arrays
for (let i = 0; i < colors.length; i++) {
  console.log("index: " + i);
  console.log("color: " + colors[i]);
}
console.log("\n");
for (let color of colors2) {
  console.log(color);
}
console.log("\n");
//todo: loop an string of text
for (let i = 0; i < deckName.length; i++) {
  console.log(i + " > " + "\t" + deckName.charAt(i).toUpperCase());
}
console.log("\n");
//todo: loop an object
for (let key in person) {
  console.log(key + " : " + person2[key]);
}
console.log("\n");
const keys = Object.keys(person2);

for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(key + " : " + person2[key]);
}
console.log("\n");
//todo: log an object
console.log(person.Details());
console.log(person.Details.call(person2));

console.log("\n");
//todo: forEach
letters.forEach(function (e, i) {
  console.log("index: " + i);
  console.log("letter: " + e);
});
console.log("\n");
letters2.forEach((e, i) => {
  console.log("index: " + i);
  console.log("letter: " + e);
});

console.log("\n");
//todo: Iterate array in function

for (let i = 0; i < colors2.length; i++) {
  myColors(colors2[i], i);
}
function myColors(e, i) {
  console.log("index: " + i);
  console.log("color: " + e);
}
console.log("\n");

//todo: arrayMaps
const squared = numbers.map(function (value) {
  return value * value;
});
console.log("Squared numbers: " + squared);

const squared2 = numbers2.map((value) => {
  return value * value;
});
console.log("Squared numbers: " + squared2);

function squaredNums(value) {
  return value * value;
}
const squared3 = numbers3.map(squaredNums);
console.log("Squared nums: " + squared3);

squaredNums = (value) => value * value;
const squared4 = numbers4.map(squaredNums);
console.log("Squared nums: " + squared4);

//TODO: DOM
//Event Handlers
document.getElementById("myButton").addEventListener("click", function () {
  document.querySelector("h1").innerHTML = "Hello, World!";
});
//end{code}
document.getElementById("myButton").onclick = () => {
  document.querySelector("h1").innerHTML = "Hello, World2!";
};
//end{code}
function changeText(text) {
  text = "HTML / CSS";
  document.querySelector("h1").innerHTML = "Hello," + text;
}
document.getElementById("myButton").onclick = () => {
  changeText();
};
