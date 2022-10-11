const future = new Date(2037, 10, 19, 15, 23);

// Converts date to time stamp
console.log(Number(future));
console.log(+future);

//Math.abs() gets the difference between 2 dates
const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

//for more perise calculation such as including day time changes, use moment.js library
const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);
