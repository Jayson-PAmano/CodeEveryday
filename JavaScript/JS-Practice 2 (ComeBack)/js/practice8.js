let letters = ["a", "b", "c"];
let colors = ["red", "green", "blue", "yellow"];
let numbers = [1, 2, 3, 4];
let deckName = "Elemental Hero";
let squaredNums = [];

let text = "";
let text2 = "";
let text3 = "";
let text4 = "";
let text5 = "";
let text6 = "";
let text7 = "";
let text8 = "";
let text9 = "";
let text10 = "";
let text11 = "";
let text12 = "";
let text13 = "";
let text14 = "";
let text15 = "";
let text16 = "";

let person = {
  Name: "Juan Dela Cruz",
  Age: 23,
  Location: "Pampanga, Philippines",
  Occupation: "Sales-Man",
  details: function () {
    return this.Name + " " + this.Age + " " + this.age;
  },
};

let person2 = {
  Name: "Anna Mae Los Banios",
  Age: 25,
  Location: "Pangasinan, Philippines",
  Occupation: "Cashier",
};

let newPerson = [
  {
    Name: "Jaden Yuki",
    Age: 14,
    Deck: "Elemental Hero",
    Dorm: "Sliffer Red",
  },
  {
    Name: "Aster Phoenix",
    Age: 15,
    Deck: "Destiniy Hero",
    Dorm: "Pro-Duelist",
  },
  {
    Name: "Zane Truesdale",
    Age: 18,
    Deck: "Cyber Dragon",
    Dorm: "Pro-Duelist",
  },
];
for (let i = 0; i < colors.length; i++) {
  text += "Index: " + i + "<br>";
  text += "Color: " + colors[i] + "<br>";
}
document.getElementById("p1").innerHTML = text;

for (let i = 0; i < deckName.length; i++) {
  text2 += i + " " + deckName.charAt(i).toUpperCase() + "<br>";
}
document.getElementById("p2").innerHTML = text2;

function logLetters(element, index) {
  text3 += "Index: " + index + " ";
  text3 += "Letter: " + element.toUpperCase() + " ";
}
for (let i = 0; i < letters.length; i++) {
  logLetters(letters[i], i);
}

document.getElementById("p3").innerHTML = text3;

for (let i = 0; i < numbers.length; i++) {
  text4 += numbers[i] + "&#178; = ";
  text4 += squaredNums[i] = numbers[i] * numbers[i] + "<br>";
}
document.getElementById("p4").innerHTML = text4;

let keys = Object.keys(person);

for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  text5 += key + " : " + person[key] + " , ";
}
document.getElementById("p5").innerHTML = text5;

for (let keys in person2) {
  text6 += keys + " : " + person2[keys] + " , ";
}
document.getElementById("p6").innerHTML = text6;

for (let keys in newPerson) {
  text7 += keys + " : " + newPerson[keys].Name + " / ";
}
document.getElementById("p7").innerHTML = text7;

letters.forEach((e, i) => {
  text8 += "Index: " + i + " ";
  text8 += "Letter: " + e.toUpperCase() + " ";
});

document.getElementById("p8").innerHTML = "forEach: " + text8;

let squaredNumbers = numbers.map((value) => {
  return value * value + "<br>";
});
document.getElementById("p9").innerHTML = squaredNumbers;

text10 += person.details.call(person2);
document.getElementById("p10").innerHTML = text10;
