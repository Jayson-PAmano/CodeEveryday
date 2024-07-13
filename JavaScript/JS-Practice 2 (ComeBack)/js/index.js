let colors = ["red", "blue", "green", "yellow"];
let colors2 = ["violet", "gray", "orange", "yellow"];
let counter = 0;
let deck = "Elemental Hero";

const gxCharacter = {
  firstName: "Jaden",
  lastName: "Yuki",
  deck: "Elemental Hero",
  dorm: "Sliffer Red",
  eyeColor: "Brown",
  age: 14,
  fullName: function () {
    return this.firstName + this.lastName;
  },
};
console.log(gxCharacter.fullName());
/******Loops*******/

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

for (let i = 0; i < colors.length; i++) {
  console.log("Color #: " + i);
  console.log("Color: " + colors[i].toUpperCase());
}

while (counter < deck.length) {
  console.log(deck.charAt(counter));
  counter++;
}
/*****functions******/

//Old Way

function getName(myName) {
  myName = "Jaden Yuki";
  console.log(myName);
}
getName();

function addNums(n1, n2) {
  return n1 + n2;
}
console.log(addNums(5, 10));

function addNums2(n1, n2) {
  n1 = 23;
  n2 = 2;
  return n1 + n2;
}
console.log(addNums2());
function multiplier(num1) {
  return num1 * 5;
}
console.log(multiplier(23));

// New Way

sayHello = () => {
  console.log("Hello, JavaScript");
};
sayHello();

Hello = (val) => {
  console.log(val + "Universe!");
};
Hello("Ola");

greetLinda = (name) => "Hi there, " + name;
console.log(greetLinda("Linda"));

adder = (n1, n2) => n1 + n2;
console.log(adder(10, 20));
