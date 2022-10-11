const num = 3884764.23;

const options = {
  style: 'currency', //unit, percent, currency
  unit: 'celsius', //mile-per-hour

  //locale & currency have nothing to do with each other
  currency: 'EUR', //currency not defined by locale
  // useGrouping: false,
};

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num)); //adds dividers/seperators to numbers, also modifies the decimal point depending on the country
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num)); //adds dividers/seperators to numbers
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num)); //adds dividers/seperators to numbers
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
); //adds dividers/seperators to numbers
