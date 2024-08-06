// const style =
//   "display:block; padding: 20px; width:120px; background-color: seagreen;  color: #333;";
// console.log("%cHello,World", style);

//These values are stored on the stack(memory)
//Primitive datatypes
let name = "John Doe";
let age = 30;

//Reference values are stored in the heap
const person = {
  name: "Brad",
  age: 40,
};
let newName = name;
newName = "Jonathan";

let newPerson = person;
newPerson.name = "Bradley";

console.log(name, newName);
console.log(person, newPerson);

// let score = 11;

// if (score < 10) {
//   while (score < 10) {
//     console.log(score);
//     score++;
//   }
// } else {
//   console.log("Score is greater than 10");
// }
