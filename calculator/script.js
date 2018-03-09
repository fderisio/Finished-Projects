let onScreen = [];
let nums = [];
let result = 0;

function show(num) {
  // enter number max 10 digits long
  if (onScreen.length === 10) {
    $('#screen').val(onScreen.join(''));
  }
  onScreen.push(num);
  $('#screen').val(onScreen.join(''));
}

function calculate(operator) {
  // store all numbers and operators
  switch (operator) {
    case "plus":
      operator = "+";
      break;
    case "minus":
      operator = "-";
      break;
    case "times":
      operator = "*";
      break;
    case "divide":
      operator = "/";
      break;
  }

  onScreen = onScreen.join(''); 

  // when pressing sign after sign
  if (operator !== "equals" && typeof nums[nums.length-1] === 'string' && typeof onScreen == 'number') {
    nums.pop();
    nums.push(operator);
  } else if (operator !== "equals" && nums.length >= 0) {
    $('#screen').val(onScreen);
    nums.push(parseFloat(onScreen), operator)
    onScreen = [];
  }

  // result calculation
  if (operator === "equals") {
    if (onScreen.length > 0) {
      nums.push(parseFloat(onScreen))
    }
    if (typeof nums[nums.length-1] === 'string') {
      nums.pop();
    }
    result = nums[0];
    nums.forEach(function(number, i) {
      if (number === "+") {
        result += nums[i+1];
      }
      if (number === "-") {
        result -= nums[i+1];
      }
      if (number === "*") {
        result *= nums[i+1];
      }
      if (number === "/") {
        result /= nums[i+1];
      }
    })
    $('#screen').val(result);
    lastOperation = [nums[nums.length-2], nums[nums.length-1]];
    onScreen = [result];
    nums = [];
    result = 0;
  }

}

function squareRoot() {
  if (onScreen.length > 0) {
    result = Math.sqrt(parseFloat(onScreen.join('')));
    $('#screen').val(result);
    onScreen = [result];
    result = 0;
  }
}

function square() {
  if (onScreen.length > 0) {
    result = Math.pow(parseFloat(onScreen.join('')), 2);
    $('#screen').val(result);
    onScreen = [result];
    result = 0; 
  }
}

// negative numbers
function abso() {
  if (onScreen.length > 0) {
  	onScreen = parseFloat(onScreen.join('')) * -1;
  	$('#screen').val(onScreen);
  	onScreen = [onScreen]
  }
}

function addComma() {
  if (onScreen.length === 0) {
    onScreen.push(0, ".");
    $('#screen').val(onScreen.join(''));
  } else if (onScreen.join('').indexOf(".") === -1) {
    onScreen.push(".");
    $('#screen').val(onScreen.join(''));
  } else if (onScreen[0].toString().indexOf(".") > 0) {
    $('#screen').val(onScreen.join(''));
  }
}

function erase() {
  $('#screen').val(0);
  onScreen = [];
  nums = [];
  total = 0;
}