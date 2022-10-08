function higherOrder(fn) {
  fn('test', 'test2'); //parameters callback func gets
  //parameters will always be same but (content in) function will be different
}

higherOrder((param1, param2) => {
  console.log(param1, param2);
});
