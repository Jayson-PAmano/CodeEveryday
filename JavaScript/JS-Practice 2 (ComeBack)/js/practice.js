const letters = ["a", "b", "c", "d"];
const colors = ["red", "green", "blue", "yellow"];
let deckName = "Elemental Heroes";
let counter = 0;

// Objects
const person = {
  firstName: "Jayson",
  lastName: "Amano",
  address: "Calasiao Pangasinan",
  age: 31,
};

/**Loops**/
// Loop numbers

for (let i = 1, k = 5; i <= 5; i++, k--) {
  console.log("Number: " + i + " \t" + k);
}
console.log("\n");
for (let t = 1, j = 10; t < j; t++, j--) {
  console.log("Number: " + "\t" + j);
  console.log("Number: " + t);
}
console.log("\n");

// Nested Loops

for (let i = 0; i < 5; i++) {
  for (let k = 1; k < 5; k++) {
    console.log(i + "\t" + k);
  }
  console.log("\n");
}

console.log("\n");
// Loop string of text

while (counter < deckName.length) {
  //   console.log(deckName[counter].toUpperCase());
  console.log(deckName.charAt(counter));
  counter++;
}
console.log("\n");
// Loop an array

for (let i = 0; i < colors.length; i++) {
  console.log("Index: " + i);
  console.log("Colors: " + colors[i]);
}
console.log("\n");

//Loop an array throuhg function
