const letters = ["a", "b", "c", "d"];
const colors = ["red", "green", "blue", "yellow"];
const numbers = [1, 2, 3, 4];
const squaredNumbers = [];

const person = {
  Name: "Juan DelaCruz",
  Age: 31,
  Occupation: "Software Engineer",
  Location: "Makati City",
};

const person2 = {
  Name: "Anna DelaCruz",
  Age: 21,
  Occupation: "Front-End Engineer",
  Location: "Pasay City",
};

const person3 = {
  Name: "Cristy Tornato",
  Age: 38,
  Occupation: "Promodiser",
  Location: "Qeusban Calasiao",
  details: function () {
    return this.Name + " " + this.Occupation;
  },
};

const newPerson = [
  {
    Name: "Jaden Yuki",
    Deck: "Elemental Hero",
    Age: 14,
    Dorm: "Sliffer Red",
  },
  {
    Name: "Zane TruesDale",
    Deck: "Cyber Dragon",
    Age: 17,
    Dorm: "Obelisk Blue",
  },
  {
    Name: "Chazz Princeton",
    Deck: "Ojama / Armed Dragon",
    Age: 14,
    Dorm: "Obelisk Blue",
  },
];

//Loop Array
for (let i = 0; i < colors.length; i++) {
  console.log("Index: " + i + " Color: " + colors[i]);
}
console.log("\n");
for (let color of colors) {
  console.log("Color: " + color);
}
console.log("\n");
//Loop objects

for (let key in person) {
  console.log(key + ": " + person[key]);
}
console.log("\n");
const keys = Object.keys(person2);

for (let i = 0; i < keys.length; i++) {
  const key = keys[i];

  console.log(key + ": " + person2[key]);
}
// Call object from another Object
console.log("Details: " + person3.details.call(person));

console.log("\n");
//Call array in function

function logLetters(element, index) {
  console.log(index);
  console.log(element);
}
for (let i = 0; i < colors.length; i++) {
  logLetters(colors[i], i);
}

console.log("\n");
// Squared the numbers using oldway
for (let i = 0; i < numbers.length; i++) {
  squaredNumbers[i] = numbers[i] * numbers[i];
}
console.log("My Numbers: " + numbers);
console.log("SquaredNumbers: " + squaredNumbers);

console.log("\n");
//forEach method

letters.forEach(function (element, index) {
  console.log(index + element);
});
console.log("\n");
letters.forEach((element, index) => {
  console.log(index + element);
});
console.log("\n");
newPerson.forEach(function (element) {
  console.log(element.Name);
});
console.log("\n");
//Map
const squaredNumbs = numbers.map(function (value) {
  return value * value;
});
console.log(squaredNumbs);

console.log("\n");

const logPerson = newPerson.map(function (element) {
  return element.Name + " " + element.Age;
});
console.log(logPerson);
console.log("\n");
//filter

const evenNumbers = numbers.filter(function (value) {
  return value % 2 === 0;
});
console.log(evenNumbers);
console.log("\n");
const result = numbers.filter(function (value) {
  return value > 1;
});

console.log(result);
