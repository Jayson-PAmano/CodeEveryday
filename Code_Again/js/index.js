ChangeTitle = () => {
  document.querySelector("h1").textContent = "Hello, YouTube!";
};
const myCar = {
  carName: "Toyota",
  carYear: 2020,
  color: "slate-gray",
};

const animeCharacter = {
  name: "Naruto",
  age: 17,
  ninjaLevel: 1,
  favoriteFood: "Ramen",
  jutsu: "Rasengan",
};
const animeCharacter2 = {
  name: "Sauske",
  age: 18,
  ninjaLevel: 3,
  favoriteFood: "None",
  jutsu: "Chidori",
  Info: function () {
    return this.name + " " + this.jutsu;
  },
};

const callCharacter = {
  fullName: function () {
    return this.name + " " + this.favoriteFood;
  },
};

console.log(callCharacter.fullName.call(animeCharacter));
console.log(`My car ${myCar.carName}`);
console.log(animeCharacter2.Info());
