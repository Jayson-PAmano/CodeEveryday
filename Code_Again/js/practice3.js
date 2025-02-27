// getName = (name1, name2) => {
//   console.log(`Hello, ${name1}`);
//   console.log(`Hi, ${name2}, nice to meet you both`);
// };
// getName("Jaden", "Aster");

// addNum = (n1, n2) => {
//   return n1 + n2;
// };
// console.log(addNum(5, 2));
// getResults = (num1, num2, taxRate, results) => {
//   num1 = 468;
//   num2 = 8;
//   taxRate = 0.1;
//   results = num1 * num2;
//   console.log("$", Math.round(results * taxRate), "is your total tax");
// };
// getResults();

// minWage = (wage, hourRate, deductions, total) => {
//   wage = 468;
//   hourRate = 8;
//   deductions = 1000;
//   total = wage * hourRate;
//   console.log(`Here is your basic pay $${total}`);
//   console.log(`Minus  $${deductions}`);
//   console.log("$", total - deductions, "is your take home pay");

// };
// minWage();
// const newCar = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2020,
//   color: "Blue",
//   price: 25000,
// };

// const newCar2 = {
//   make: "Honda",
//   model: "Civic",
//   year: 2019,
//   color: "Red",
//   price: 20000,
//   carInfo: function () {
//     console.log(`This ${this.year} ${this.color} ${this.make} ${this.model}`);
//   },
// };
// newCar2.carInfo();
// console.log(newCar.make, newCar.model);

// const person = {
//   name: "Jaden",
//   age: 20,
//   occupation: "Student",
//   address: "Dagupan",
// };
// const person2 = {
//   info: function () {
//     console.log(`My name is ${this.name}, I am ${this.age} years old,`);
//   },
// };
// person2.info.call(person);

// let x = myFunction(5, 3);

// function myFunction(x, y) {
//   return x + y;
// }
// console.log(x);
let qoutes = "JavaScript will give you super powers";
console.log(qoutes.length);
console.log(qoutes.charAt(4));
console.log(qoutes.indexOf("JavaScript"));
console.log(qoutes.slice(0, 12));
console.log(qoutes.search("powers"));
console.log(qoutes.startsWith("J"));

let newQoutes = qoutes.replace("JavaScript", "Coding");
console.log(newQoutes);

let text1 = "Hello";
let text2 = "World";

console.log(text1.concat(text2));
