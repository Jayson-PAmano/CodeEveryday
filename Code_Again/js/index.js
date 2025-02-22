let x;

let randomMsg = "This is just a sample string of text to my text editor";
console.log(randomMsg);
// console.log(randomMsg.length);
console.log(randomMsg);
randomMsg.replace("text", "code");

let text1 = "Hello",
  text2 = "World!";

console.log(text1.concat(" ", text2));

let fruits = "Apple, Orange, Grapes";
console.log(fruits.slice(7));

const str1 = "Hello,World!";

for (let i = 0; i < str1.length; i++) {
  console.log(`index ${i}: ${str1.charAt(i)}`);
}

/*
A for loop is used to iterate over the string.
 The loop counter i starts at 0 and increments by 1 in each iteration. 
The loop condition is set to i <= str1.length, 
which means the loop will 
run until i is greater than the length of the string.
*/
