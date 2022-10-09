// remainder of 5/2
console.log(5 % 2);
// console.log(5 / 2); // 5 = 2*2 + 1 (only take integer part then see what remainder would be needed to add it)
console.log(8 % 3);
// console.log(8 / 3); // 8 = 2*3 + 2 (2.6666)

console.log(6 % 2);
// console.log(6 / 2); //since it returns an integer then it has no remainders

console.log(7 % 2);
// console.log(7/2); //returns a floating point (with decimals) so number has remainders

const isEven = n => n % 2 === 0;

console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

//% is usually used to check if any number is exactly devisible by any other number
