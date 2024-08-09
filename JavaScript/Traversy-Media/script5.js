//TODO: Working with Strings
let x;

const name = "John";
const age = 30;

x = "Hello, my name is " + name + " and I am " + age + " years old";

//Template literals
x = `Hello, my name is ${name} and I'am ${age} years old`;

//String Properties and Methods
const s = new String("Hello World");
x = typeof s;
x = s.length;

//Acces value by key
x = s[1];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf("d");

x = s.substring(0, 4);

x = s.substring(7);

x = s.slice(-5, 1); // can start with end, with negative numbers,

x = s.trim(); //trims the white space

x = s.replace("World", "John");

x = s.includes("Hello");

//Time: 1:50:54
console.log(x);
