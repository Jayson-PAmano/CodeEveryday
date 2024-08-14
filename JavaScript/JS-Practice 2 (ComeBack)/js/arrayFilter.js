//Array filter method javascript

/** SYNTAX
 *
 *   array.filter(callbackFn) | filter(callbackFn.thisArg)
 *    filter(element,index,array) => {....}
 * **/

const numbers = [9, 1, 8, 2, 5];
const result = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 5) {
    result.push(numbers[i]);
  }
}
console.log("Results1: " + result);

console.log("\n");
function greaterThan5(value) {
  //(index, array) {}
  return value > 5;
}
console.log("Results2: " + result);
console.log("\n");

//using filter method

const result2 = numbers.filter(greaterThan5);
console.log("Results3: " + result2);

console.log("\n");

const result3 = numbers.filter(function (value) {
  return value > 5;
});
console.log("Results4: " + result3);

console.log("\n");

const result4 = numbers.filter((value) => {
  return value > 5;
});
console.log("Results5: " + result4);

console.log("\n");
const result5 = numbers.filter((value) => value > 5);

console.log("Results6: " + result5);
