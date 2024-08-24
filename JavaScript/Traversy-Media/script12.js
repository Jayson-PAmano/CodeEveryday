//Array Nesting Concat & Spread
let x;

const fruits = ["apple", "pear", "orange"];
const berries = ["straberry", "blueberry", "rosberry"];

fruits.push("berries");

// x = fruits[3][1];

const allFruits = [fruits, berries];

x = allFruits[1][0];

x = fruits.concat(berries);

//Spread Operator(...)
x = [...fruits, ...berries];

//Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();
/*
    Output: > w /o flat

    Array(6) [ 1, 2, (2) […], 5, (2) […], 8 ]

    with flat: Array(8) [ 1, 2, 3, 4, 5, 6, 7, 8 ]
*/

//Static methods on array object

x = Array.isArray(fruits); //true

x = Array.from("12345"); //Array(5) [ "1", "2", "3", "4", "5" ]

const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c); //Array(3) [ 1, 2, 3 ]

console.log(x);
