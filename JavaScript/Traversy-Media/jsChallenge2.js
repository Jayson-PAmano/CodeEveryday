let x = Math.round(Math.random() * 100 + 1);
let y = Math.round(Math.random() * 50 + 1);

let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;
let rm = x % y;

console.log("SumOutput: " + sum);
console.log("differenceOutput: " + difference);
console.log("productOutput: " + product);
console.log("quotientOutput: " + quotient);
console.log("rmOutput: " + rm);
// console.log(x);
// console.log(y);

console.log("\n");
/*Tutorial Solution*/

const a = Math.floor(Math.random() * 100 + 1);
const b = Math.floor(Math.random() * 50 + 1);

//Get the sum
const sum2 = a + b;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);

//Get the difference
const diff = a + b;
const diffOutput = `${x} - ${y} = ${diff}`;
console.log(diffOutput);

//Get the product
const prod = a + b;
const prodOutput = `${x} * ${y} = ${prod}`;
console.log(prodOutput);

//Get the quotient
const quot = a + b;
const quotOutput = `${x} / ${y} = ${quot}`;
console.log(quotOutput);

//Get the remainder
const rm2 = a + b;
const rmOutput = `${x} % ${y} = ${rm2}`;
console.log(rmOutput);

//TIME: 2:20:00
