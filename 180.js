//SET_TIMEOUT

//setTimeout to execute a code in the future
//schedual func call 3 seconds later
const ingredients = ['olives', 'spinach'];

//only runs a func once
const pizzaTimer = setTimeout(
  (ing1, ing2) => {
    console.log(`Here is your pizza with ${ing1} & ${ing2} 🍕`);
  },
  1000,
  ...ingredients //takes the elms and puts them comma seperated
  // 'olives', //will be parameters of setTimeout function
  // 'spinach'
); //doesn't stop code execution, async js

console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

//SET_INTERVAL

const options = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
};

//callback function runs after every second continuously
setInterval(() => {
  //both ways work in showing time
  // const date = new Intl.DateTimeFormat('en-CA', options).format(new Date());
  // console.log(date);

  console.log(new Date().toLocaleTimeString());
}, 1000);
