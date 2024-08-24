/*
    find and findIndex
*/

/* Find */
//SYNTAX
/* 
    array.find(callbackFn)
array.find(function(element,index,arr){....})
array.find((element,index,arr) => {....})

*/
const users = [
  {
    name: "Robert",
    age: 27,
  },
  {
    name: "James",
    age: 30,
  },
  {
    name: "Mary",
    age: 25,
  },
];

//Using for Loop
let result;

for (let i = 0; i < users.length; i++) {
  const user = users[i];
  //   if (user.name === "James") {
  //     result = user;
  //     break;
  //   }

  if (user.name === "John") {
    result = user;
    break;
  }
}
console.log(result);

// Using the find Method in function
function james(user) {
  return user.name === "James";
}
const result2 = users.find(james);
console.log(result2);

console.log("\n");

//Using Inline find method

const result3 = users.find(function (user) {
  return user.name === "James";
});
console.log(result3);

console.log("\n");

const result4 = users.find((user) => {
  return user.name === "Robert";
});
console.log(result4);

console.log("\n");

const result5 = users.find((user) => user.name === "Mary");

console.log(result5);
console.log("\n");

const numbers = [9, 1, 8, 5, 4, 2];
const obj = {
  name: "Jaden",
};

const findNumber = numbers.find(function (value) {
  console.log(this);
  return value === 5;
}, obj);
console.log("\n");

/* Find Index */

//SYNTAX
/*
    findIndex(callbackFn) | findIndex(callbackFn,thisArg)
    findIndex(element,index,array) =>{...})
*/
//Examples

function mary(user) {
  return user.name === "Mary";
}
const index = users.findIndex(mary);
console.log("Index of Mary: " + index);

function john(user) {
  return user.name === "John";
}

const index2 = users.findIndex(john);
console.log("Index of John:" + index2);
