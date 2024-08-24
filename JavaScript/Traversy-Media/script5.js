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

//Access value by key
x = s[1];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);
/*
    count the given string and ouput the result
    s.charAt(0); Will retrun "H" coz it start counting from zero
*/
x = s.indexOf("d");
/*
    s.indexOf("d"); Will return the index of 10
*/

x = s.substring(0, 4);

x = s.substring(7);

x = s.slice(-5, 1); // can start with end, with negative numbers,

x = s.trim(); //trims the white space

x = s.replace("World", "John");

x = s.includes("Hello");

x = s.valueOf();

x = s.split("");
console.log(x);
