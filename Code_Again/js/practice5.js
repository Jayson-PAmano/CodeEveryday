//functions

// getName = (name1, name2) => {
//   console.log(`Hello ${name1} and ${name2} nice to meet you`);
// };
// getName("Jaden", "Aster");

// getSum = (n1, n2) => {
//   return n1 + n2;
// };
// console.log(getSum(5, 2));

// let x = getResults(5, 4);

// function getResults(a, b) {
//   return a + b;
// }
// console.log(x);

// //Objects

// const newCar = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2020,
//   color: "Blue",
//   isElectric: false,
// };

// const newQoutes = {
//   I_love_you: "You are my best friend",
//   I_hate_you: "You are my worst enemy",
//   myQuotes: function () {
//     console.log(this.I_hate_you);
//   },
// };

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
//   hobbies: ["swimming", "reading", "coding"],
//   address: "Calasio, Pangasinan",
// };

// const callPerson = {
//   personInfo: function () {
//     console.log(`Name: ${this.name}, Hobbies: ${this.hobbies} `);
//   },
// };

// console.log(newCar.brand, newCar.model);
// newQoutes.myQuotes();
// callPerson.personInfo.call(person);
let x;
let qoutes = "JavaScript will give you super powers";
let fruits1 = "Banana, Apple, Grapes";
let fruits2 = "PineApple, Orange, Guava";

x = qoutes.length;
x = qoutes.startsWith("s");
x = qoutes.charAt(5);
x = qoutes.search("super");
x = qoutes.indexOf("give");
x = fruits1.slice(0, 12);
x = fruits1.split("/");
x = fruits1.concat(fruits2);
x = qoutes.replace("JavaScript", "Coding");
console.log(x);
