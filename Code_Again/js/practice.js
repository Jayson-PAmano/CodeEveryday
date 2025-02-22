// Example 1: Using charAt() in a for loop
const str1 = "Hello World";
for (let i = 0; i < str1.length; i++) {
  console.log(`Character at index ${i}: ${str1.charAt(i)}`);
}

// Example 2: Using charAt() in a while loop
const str2 = "JavaScript";
let j = 0;
while (j < str2.length) {
  console.log(`Character at index ${j}: ${str2.charAt(j)}`);
  j++;
}

// Example 3: Using charAt() in a for...of loop
const str3 = "Looping";
for (const char of str3) {
  console.log(`Character: ${char}`);
}

// Example 4: Using charAt() with string manipulation
const str4 = "Reverse Me";
let reversed = "";
// };
// fullName();

const newCar = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "Blue",
  getCarInfo: function () {
    return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
  },
};
console.log(newCar.getCarInfo());

console.log(newCar.color);

const person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};

const personInfo = {
  getPersonInfo: function () {
    return `Name: ${this.name}, Age: ${this.age}, Occupation: ${this.name}`;
  },
};
console.log(personInfo.getPersonInfo.call(person));
console.log(person.occupation);
