let colors = ["red", "blue", "green", "yellow"];
let colors2 = ["violet", "gray", "orange", "yellow"];
let counter = 0;
let counter2 = 0;
let deck = "Elemental Hero";

const gxCharacter = {
  firstName: "Jaden",
  lastName: "Yuki",
  deck: "Elemental Hero",
  dorm: "Sliffer Red",
  eyeColor: "Brown",
  age: 14,
  fullName: function () {
    return (
      "Fullname: " +
      this.firstName +
      " " +
      this.lastName +
      ", " +
      "\n" +
      "Deck: " +
      deck
    );
  },
};

//TODO: Loops

//for Loop: Loop to 1 - 5

for (let i = 1; i <= 5; i++) {
  console.log("Number: " + i);
}
console.log("\n");

// Loop an array, using while loop
// p.s you can also used for loop
while (counter < colors.length) {
  console.log("Index: " + counter);
  console.log("Color: " + colors[counter]);
  counter++;
}
console.log("\n");
// Loop an string of text
while (counter2 < deck.length) {
  console.log(deck[counter2]);
  counter2++;
}
console.log("\n");

// Multiple Loops
for (let i = 0, j = 5; i < j; i++, j--) {
  console.log(i + " of " + j);
}
console.log("\n");
// Nested   Loop
for (let i = 0; i < 5; i++) {
  for (let k = 5; k < 10; k++) {
    console.log(i + " and " + k);
  }
  console.log("\n");
}

// for (let i = 1; i <= 10; i++) {
//   let row = "";
//   for (let j = 1; j <= 10; j++) {
//     row += i * j + "\t";
//   }
//   console.log(row);
// }
