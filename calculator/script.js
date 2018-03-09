let onScreen = [];
let nums = [];
let result = 0;

function show(num) {
  if (onScreen.length === 10) {
    $('#screen').val(onScreen.join(''));
  }

  if (num !== "." && num !== "-"){
    onScreen.push(num);
    $('#screen').val(onScreen.join(''));
  }

  // add or remove commas
  if (num === "." && num === onScreen[onScreen.length-1] ||
    num === "." && onScreen.toString().indexOf(".") >= 0) {
    $('#screen').val(onScreen.join(''));
  } else if (num === "." && onScreen.length === 0) {
    onScreen.push(0,num);
    $('#screen').val(onScreen.join(''));
  }

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
    case "square":
      operator = "**";
      break;
    case "root":
      operator = "sqrroot";
      break;
  }

	// when pressing sign after sign
  if (operator !== "equals" && typeof nums[nums.length-1] === 'string') {
    nums.pop();
    nums.push(operator);
  } else if (operator !== "equals" && nums.length >= 0) {
    $('#screen').val(onScreen.join(''));
    nums.push(parseFloat(onScreen.join('')), operator)
    onScreen = [];
  }

  // result calculation
  if (operator === "equals") {
    nums.push(parseFloat(onScreen.join('')))
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

  if (operator === "**") {
    nums.push(parseFloat(onScreen.join('')))
    result = Math.pow(nums[0], 2);
    $('#screen').val(result);
    onScreen = [result];
    nums = [];
    result = 0;
  }

  if (operator === "sqrroot") {
    nums.push(parseFloat(onScreen.join('')))
    result = Math.sqrt(parseFloat(nums[0]));
    $('#screen').val(result);
    onScreen = [result];
    nums = [];
    result = 0;
  }

}

// negative numbers
function abso() {
	onScreen = parseFloat(onScreen.join('')) * -1;
	$('#screen').val(onScreen);
	onScreen = [onScreen]
}

function erase() {
  $('#screen').val(0);
  onScreen = [];
  nums = [];
  total = 0;
}