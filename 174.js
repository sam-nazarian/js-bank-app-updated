//64 bit numbers
//53 bits for digits the rest for storing decimal point & sign

// -1 as numbers start at 0
//2 as we are using base 2
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(2 ** 53 + 1); //wrong number, loses percision
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(38129389012839012839012839012830912890); //doesn't have percision
// console.log(BigInt(38129389012839012839012839012830912890)); //js will first inaccurately represent that number to BigInt() before BigInt() has even begun to process it, instead use string to pass it, don't pass numbers to bigInt

console.log(38129389012839012839012839012830912890n); //bigInt number
console.log(BigInt('38129389012839012839012839012830912890')); //convert string to bigInt

// Operations
console.log(1000n + 1000009380128309210n);
console.log(3182392183919032819038190809820938120380n * 90381902830n);

const huge = 39028190342343244234322810309n;
const num = 3123;
console.log(huge * BigInt(num)); //can't mix bigInt & num together in operations

// console.log(Math.sqrt(8n)); //Math operations don't work on bigInt

//Exceptions
console.log(20n > 15);
console.log(20n === 20); //js doesn't do coercion for '==='(strict equality operator), not equal as values have different primative type
console.log(typeof 20n, typeof 20);

console.log(20n == 20); //'==' (non-strict equality operator) works as js does coercion
console.log(20n == '20');

console.log(huge + ' is REALLY BIG!!!'); //bigInt gets converted to a string

// Divisions
console.log(11 / 3); //3.3333333
console.log(11n / 3n); //bigInt devision truncates decimals

// console.log(10321332.13n); bigInt doesn't work with decimals
