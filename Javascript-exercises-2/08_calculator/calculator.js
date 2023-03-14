const add = function(a, b) {
	return a + b ;
};

const subtract = function(a, b) {
	return a - b ;
};

const sum = function(nums) {
    return nums.reduce((total, item) => total + item, 0);
	
};

const multiply = function(nums) {
    return nums.reduce((total, item) => total * item, 1);

};

const power = function(a, b) {
    return a ** b;
    //or
	// return Math.pow(a, b);
};

//I am keeping my original solution to this, because I think it is more readable.
const factorial = function(num) {
	let totalFac = 1;
  for( let i = 1 ; i <= num ; i++){
    totalFac *= i;
  };
  return totalFac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
