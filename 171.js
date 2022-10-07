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

// Rounding integers
console.log(Math.trunc(23.999));
