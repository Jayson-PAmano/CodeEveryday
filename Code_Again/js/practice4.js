getName = (name1, name2) => {
  return `Hello, ${name1} and ${name2} nice to meet you!`;
};
// console.log(getName("Jaden", "Aster"));

addNum = (num1, num2) => {
  num1 = 23;
  num2 = 17;
  console.log(num1 + num2);
};
getResults = () => {
  addNum();
  console.log(getName("Jaden", "Aster"));
};
getResults();

totalWage = (wage, days, deductions, total) => {
  total = wage * days - deductions;
  console.log(` ₱ ${wage}`);
  console.log(`${days} days`);
  console.log(`- ${deductions} benifits`);
  console.log(`Total: ${total}`);
};

compute = () => {
  totalWage(465, 12, 1000);
};
compute();

let x = myFunction(4, 5);
function myFunction(z, y) {
  return z + y;
}
console.log(x);
