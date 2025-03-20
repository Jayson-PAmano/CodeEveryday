getName = (name) => {
  return `Hello, ${name}`;
};
console.log(getName("jaden"));

addNum = (n1, n2) => {
  n1 = 5;
  n2 = 10;
  return n1 + n2;
};
console.log(addNum());

let x = myFunction(4, 5);
console.log(x);
function myFunction(x, y) {
  return x + y;
}

const newCar = {
  brand: "Toyota",
  model: "Camry",
  year: 2018,
};
console.log(newCar.brand);

const person = {
  name: "John",
  age: 30,
  occupation: "Developer",
  Details: function () {
    return (
      this.name + " is " + this.age + " years old and is a " + this.occupation
    );
  },
};
console.log(person.Details());
const personInfo = {
  name: "Jaden",
  age: 15,
  isStudent: true,
  deck: "E-Hero",
};
const callPerson = {
  PersonInfo: function () {
    console.log(`My name is ${this.name} and i'am ${this.age}`);
  },
};
callPerson.PersonInfo.call(personInfo);
