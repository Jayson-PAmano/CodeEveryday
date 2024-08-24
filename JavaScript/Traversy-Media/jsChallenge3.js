//Array Challenges
//Challenge #1
const arr = [1, 2, 3, 4, 5];

arr.push(6);
arr.unshift(0);
arr.reverse();
console.log(arr);
console.log("\n");
//Challenge #2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
let arr3 = [];
// let arr4 = [];

arr3 = arr2.splice(1);
// console.log(arr1);
// arr3 = arr1.concat(arr2);
arr3 = arr1.concat(arr3);

console.log(arr3);
console.log("\n");
/***************** Tutorial Solution ***********************/

//Challenge #1
const Arr = [1, 2, 3, 4, 5];

Arr.reverse();
Arr.push(0);
Arr.unshift(6);

//Get the Result: [6,5,4,3,2,1,0]
console.log(Arr);
console.log("\n");

//Challenge #2

const Arr1 = [1, 2, 3, 4, 5];
const Arr2 = [5, 6, 7, 8, 9, 10];

//Solution #1:
let Arr3 = arr1.slice(0, 4).concat(Arr2);
console.log(Arr3);

console.log("\n");
//Solution #2:
let Arr4 = [...Arr1, ...Arr2];
Arr4.splice(4, 1);

console.log(Arr4);

//Time: 3:13:16
