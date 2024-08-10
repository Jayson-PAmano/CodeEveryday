//Array map Method in JavaScript

const numbers = [1, 2, 3, 4];
const numbers2 = [5, 6, 7, 8];
const numbers3 = [9, 10, 11, 12];
const numbers4 = [13, 14, 15, 16];
const numbers5 = [17, 18, 19, 20];

const squared = [];

//SYNTAX:
//map() method calls a provided function once for each element in an array and returns a new array

/* 
    array.map(callbackFn)
    array.map(function (element,index,arr) {....})
    array.map((element,index,arr) => {....})
*/

for (let i = 0; i < numbers.length; i++) {
  squared[i] = numbers[i] * numbers[i];

  console.log(squared[i]);
}
console.log("\n");
function dblVal(value) {
  return value * value;
}
console.log("Double Value:" + dblVal(3));
console.log("\n");
function sq(value) {
  return value * value;
}
const squared2 = numbers2.map(sq);
console.log("My numbers:" + numbers2);
console.log("Squared Numbers:" + squared2);

console.log("\n");

//TODO: Using Maps
const squared3 = numbers3.map(function (value) {
  return value * value;
});
console.log("My numbers: " + numbers3);
console.log("Squared Numbers:" + squared3);

console.log("\n");
const squared4 = numbers4.map((value) => {
  return value * value;
});
console.log("My numbers: " + numbers4);
console.log("Squared Numbers:" + squared4);

console.log("\n");
console.log("My numbers: " + numbers5);
const squared5 = numbers5.map((value) => value * value);

console.log("Squared Numbers:" + squared5);
