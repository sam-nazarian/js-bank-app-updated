//all numbers represented are floating point numbers (always have decimals)
//thus only 1 data type for all numbers
console.log(23 === 23.0);

//base 10 - 0 to 9. 1/10 = 0.1. 10/3 3.333333 similar to 0.1+0.2 in base 2
//64 base 2 format (binary)

//don't do scentific calculation using js

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

//converted strings to numbers
console.log(Number('23'));
console.log(Number(+'23')); //js will do type coercion when '+' operator is seen

//parsing
// function test(hello) {
//   console.log(hello);
// }

//every function is an object in js
// console.log(test.arguments);

//js will find number in string
console.log(Number.parseInt('30px', 10));

//string needs to start with number
console.log(Number.parseInt('e23', 10));

console.log(Number.parseInt('101', 2));

console.log(Number.parseFloat('   2.5rem   ')); //always use parseFloat it works even for '2'
console.log(Number.parseFloat('   2rem   ')); //always use parseFloat it works even for '2'
console.log(Number.parseInt('   2.5rem    '));
console.log(Number.parseInt('   2.9rem    ')); //takes decimal out doesn't round

//parseFloat & parseInt are global functions
// console.log(parseFloat('   2.5rem   '));

//Number provides a namespace for different functions
console.log('//////////////////////////////////');

//Numbers & Infinity & '20'(numbers as strings)
console.log(Number.isNaN(20)); //(!NaN) false
console.log(Number.isNaN(23 / 0)); //infinity (!NaN) false

console.log(Number.isNaN('fsdfds')); //(!NaN) false meaning that it's a number (which is wrong since it's a text so it doesn't make sense)

console.log(Number.isNaN(+'20x')); //NaN true
console.log(Number.isNaN(+'23+2')); //NaN true

console.log('//////////////////////////////////');

//better way to check if number is a number, treat NaN as it's own data type as it also includes Infinity values
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20x'));
console.log(Number.isFinite(23 / 0));

console.log('//////////////////////////////////');

console.log(Number.isInteger(23)); //true
console.log(Number.isInteger(23.0)); //true
console.log(Number.isInteger(23.3)); //false
console.log(Number.isInteger(23 / 0)); //false
