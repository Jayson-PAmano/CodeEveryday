/*Arrays and Objects*/
let x;
//Arrays Basics

//Array Literal
const numbers = [12, 45, 33, 29, 39, 22];
const mixed = [12, "hello", true, null];

//Array Constractor
const fruits = new Array("apple", "grape", "orange");

// console.log(numbers);
x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is ${fruits[2]}`;

x = numbers.length;

// fruits.length = 2;

fruits[2] = "pear";

fruits[3] = "straberry";

fruits[fruits.length] = "blueberry";
fruits[fruits.length] = "peach";

x = fruits;

console.log(x);
//TIME: 2:45:27
