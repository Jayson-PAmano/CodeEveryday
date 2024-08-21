//Array Methods
let x;
const arr = [34, 55, 95, 20, 15];

/*Array Manipulation*/

// put an value into the end of the array
arr.push(100);

// remove value in the end of the array
arr.pop();

//add value in the beginning of an array
arr.unshift(10);

//remove the beginning value of an array
arr.shift();

//reversed the array
// arr.reverse();

/* Mixing string methods with array methods 
    ⇩ ⇩ ⇩
*/
x = arr.includes(200);
x = arr.indexOf(15);

//will not change the initial array
x = arr.slice(1, 4);

//does change the original array , it will delete then from the initial array
//x = arr.splice(1, 4);
//x = arr.splice(3, 1);
x = arr.splice(1, 4).reverse().toString().charAt(0);

// console.log(x, arr);
console.log(x);
//Time: 2:55:56
