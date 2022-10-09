// underscore gives number a different meaning

// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);

//gives meaning to the number, ovious that it has in last 2 digits
const price = 345_99;
console.log(price);

//underscore gives different meaning depending on where it's placed
const transferFee = 1_500;
const transferFee2 = 15_00;

//underscore can only be placed between numbers

//all numeric seperators must be between 2 numbers can't be between decimals, or at the end of a number
const PI = 3.1415;
console.log(PI);

console.log(Number('230_000')); //DON'T PUT NUMBERIC SEPERATOR ON STRINGS ONLY ON NUMBERS (result = NaN)
console.log(parseInt('230_000')); //NOT POSSIBLE TO PARSE A STRING WITH NUMERIC SEPERATORS (result = 230)
