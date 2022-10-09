const account1 = {
  owner: 'Saman Fathnazarian',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

//////////////////////////////////////

/*
const now = new Date();
console.log(now);

console.log(new Date('Oct 08 2022 06:10:36')); //giving string a certain date

console.log(new Date('December 24, 2015')); //not a good way, can be unreliable

console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2037, 10, 19, 15, 23, 5)); //month in js is 0-based
console.log(new Date(2037, 10, 33)); //js auto corrects dates

console.log(new Date(0)); // gets date that's 0 seconds after unix time passed
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //convert 3 days to milliseconds (which is a timestamp)
*/

// Working with Dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);

console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate()); //refers to day in date (returns 19)
console.log(future.getDay()); //day of the week, (returns 4, as thursday is 5th day of week, day SUNDAY is day 0, it's 0 based)

console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());

console.log(future.toISOString()); //follows an international standard, store dates as strings like this

console.log(future.getTime()); //(get a time stamp) how much time in milliseconds has passed since that 1970
console.log(new Date(2142278580000)); //create a new date based on a timestamp (time in milliseconds has passed since 1970)

console.log(Date.now()); //gives us current timestamp for now

//there's a set version for all date get methods above
future.setFullYear(2040);
console.log(future);
