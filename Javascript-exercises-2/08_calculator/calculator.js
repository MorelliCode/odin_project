const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	const total = nums.reduce((sumTotal, num) => {
    return sumTotal + num;
  },0);
  return total;
};

const multiply = function(nums) {
  const total = nums.reduce((multTotal, num) => {
    return multTotal * num;
  });
  return total;
};

const power = function(num1, num2) {
	let pwrTotal = 1;
  for(let i = 0; i < num2; i++){
    pwrTotal *= num1;
  }
  return pwrTotal;
};

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
