//Capitalize Challenge

const myString = "developer";
//first step
const firstLetter = myString.charAt().toUpperCase();
//second step
const sliceString = myString.slice(1, 9);
//third step
const myNewString = firstLetter + sliceString;
console.log(myNewString);

/*  Tutorial Solution*/
const myString2 = "developer2";
// let myNewString2 = myString2.charAt(0).toUpperCase() + myString2.substring(1);
let myNewString2 = myString2.charAt(0).toUpperCase() + myString2.slice(1);

console.log(myNewString2);
