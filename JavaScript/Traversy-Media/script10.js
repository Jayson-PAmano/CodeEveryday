/*Arrays and Objects*/
let x;
//Arrays Basics

//Array Literal
const numbers = [12, 45, 33, 29, 39, 22];
const mixed = [12, "hello", true, null];

//Array Contractors
const fruits = new Array("apple", "grape", "orange");

// console.log(numbers);
x = numbers[0];

x = numbers[0] + numbers[3];
/*
adds the array e.g [12] from index 0 + from the index 3 of [29]
  12 + 29 = 41  

*/

//Template Literal in  getting  the Array index
x = `My favorite fruit is ${fruits[2]}`;

x = numbers.length;

// fruits.length = 2;

/*
Replacing an items to our Array:
Will replace the 2nd index of our fruits array "orange" to "pear"
the results will be:

[ "apple", "grapes", "pear" ]
*/
fruits[2] = "pear";

/*
Adding an items to our Array:
Will add an array into the 3rd index of our fruits array, which is an empty,
the results will be:

[ "apple", "grapes", "pear", "strawberry" ]
*/
fruits[3] = "strawberry";

fruits[fruits.length] = "blueberry";
fruits[fruits.length] = "peach";

x = fruits;

console.log(x);
//TIME: 2:45:27
