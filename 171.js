/*
console.log(Math.sqrt(25));

console.log(25 ** (1 / 2)); //square root
console.log(8 ** (1 / 3)); //quibic root

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, '18', '23', 11, 2)); //does type coercion
console.log(Math.max(5, 18, '23px', 11, 2)); //doesn't do parcing results in NaN

console.log(Math.min(5, '18', '23', 11, 2)); //does type coercion

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
//works as range + min = max
//min = 10, max = 15, range = 5
// 5 + 10 = 15

console.log(randomInt(10, 12));

console.log('//////////////////////////////////');
// Rounding integers
console.log(Math.trunc(23.999));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log('this', Math.ceil(23.3));
console.log('this', Math.ceil(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

// all of these methods do type coersion
console.log(Math.ceil(23.3));
console.log(Math.ceil('23.9')); //returns largest integer value by rounding
*/

// console.log(Math.floor(23.3));
// console.log(Math.floor('23.9'));

// console.log(Math.trunc(23.3));
// console.log(Math.trunc('23.9'));

// console.log(Math.trunc(-23.3)); //trunc just removes the decimals no matter if val posetive or negative doesn't do any rounding
// console.log(Math.floor(-23.3)); //floor returns smallest integer value by rounding

//Rounding decimals

//works similar to string, js will do boxing (transform to number object, then call method, then convert it back to number), as primatives don't have methods
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log((2.7).toFixed(0));
console.log(+(2.345).toFixed(2)); //toFixed returns a string so convert it to a number

const x = new Number(324);
x.toFixed(0);
