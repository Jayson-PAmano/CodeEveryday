// getName = (name1, name2) => {
//   console.log(`Hello, ${name1}`);
//   console.log(`Hello, ${name2}`);
//   console.log("Nice to meet you both!");
// };
// getName("Jaden", "Aster");

// addNum = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addNum(54, 3));

// getResults = (num1, num2, results) => {
//   num1 = 12;
//   num2 = 23;

//   results = (num1 * num2) / 2;
//   console.log(results);
// };
// getResults();

// const newCar = {
//   carName: "Toyota",
//   carYear: 2020,
//   carColor: "Blue",
//   carPrice: 30000,
//   myNewCar: function () {
//     return this.carName + " " + this.carColor;
//   },
// };

// const myHouse = {
//   houseName: "My House",
//   houseYear: 2010,
//   houseColor: "Red",
//   housePrice: 200000,
// };

// const getHouse = {
//   houseInfo: function () {
//     return this.houseName + " " + this.houseYear + " " + this.houseColor;
//   },
// };

// console.log(getHouse.houseInfo.call(myHouse));

// console.log(newCar.myNewCar());

// console.log(newCar.carName);

let randomMsg = "JavaScript, give's you super POWER's!";

let NewrandomMsg = randomMsg.replace("JavaScript", "Coding");
console.log(NewrandomMsg);
console.log(randomMsg.length);
console.log(randomMsg.charAt(2));
let text1 = "Hello ",
  text2 = "World!";

console.log(text1.concat(text2));
