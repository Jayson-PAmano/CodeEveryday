const consoleStyles =
  "display:block;background-color:coral;color:whitesmoke;text-align:center; padding:5px; font-size:2rem";
console.log('%c"Console Logs"', consoleStyles);

let letters = ["a", "b", "c", "d"];
let letters2 = ["e", "f", "g", "h"];
let colors = ["red", "green", "blue", "yellow"];
let colors2 = ["purple", "orange", "pink", "black"];
let deckName = "Elemental Hero";
let numbers = [1, 2, 3, 4];
let count = 0;

let person = {
  name: "Juan DelaCruz",
  age: 25,
  location: "Quezon City",
  Details: function () {
    return this.name + " >  " + this.location;
  },
};
let person2 = {
  name: "James Reid",
  age: 30,
  location: "Pasay City",
};

//todo: loop numbers
for (let i = 0; i < 5; i++) {
  console.log("Number: " + i);
}
console.log("\n");
//todo: loop an array
for (let i = 0; i < colors.length; i++) {
  console.log("Index: " + i);
  console.log("Color: " + colors[i]);
}

console.log("\n");
//todo:loop string of letters
for (let i = 0; i < deckName.length; i++) {
  console.log("Index:" + i + " " + deckName.charAt(i).toUpperCase());
}
console.log("\n");
//todo:loop an array in function
function logColors(element, index) {
  console.log("Index: " + index);
  console.log("Color: " + element);
}

for (let i = 0; i < colors2.length; i++) {
  logColors(colors2[i], i);
}
console.log("\n");
//todo: loop an object
for (let people in person) {
  console.log(people + ": " + person[people]);
}
console.log("\n");
const keys = Object.keys(person2);

for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(key + " : " + person2[key]);
}
console.log("\n");
//todo: log object
console.log(person.Details());
console.log(person.Details.call(person2));

console.log("\n");
//todo: forEach
letters.forEach(function (element, index) {
  console.log("Index: " + index + " " + element.toUpperCase());
});
console.log("\n");
letters2.forEach((element, index) => {
  console.log("Index: " + index);
  console.log("Letter: " + element);
});

console.log("\n");
//todo: functions
function sayHello(name) {
  name = " Jaden";
  console.log("Hello, " + name);
}
sayHello();
console.log("\n");
function sayHello2() {
  let name = "Aster";
  return name;
}
console.log("Hello, " + sayHello2());
console.log("\n");
function addNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addNumbers(5, 3));
console.log("\n");
function addNumbers2(n1, n2) {
  n1 = 21;
  n2 = 32;
  return n1 + n2;
}
console.log(addNumbers2());
console.log("\n");
//todo: arrow function

sayHello = (name) => {
  return name;
};
console.log(sayHello("Juan"));
console.log("\n");
hello = () => "Hello,World";
console.log(hello());

//todo: DOM
// document.querySelector("button").onclick = (changeText) => {
//   changeText = "You Clicked it!";
//   document.querySelector("h1").innerHTML = changeText;
// };

// let btnChange = document.querySelector("button");
// btnChange.addEventListener("click", (changeText) => {
//   changeText = "You Clicked it!";
//   document.querySelector("h1").innerHTML = changeText;
// });

// sayHello = () => {
//   document.querySelector("h1").innerHTML = "Hello, World!";
// };
// let btnChange = (document.querySelector("button").onclick = () => {
//   sayHello();
// });
getName = () => {
  let name = document.getElementById("name").value;
  document.querySelector("h1").innerHTML = "Hello, " + name;
  document.querySelector("h1").style.color = "red";
  document.querySelector("h1").style.fontSize = "40px";
};
