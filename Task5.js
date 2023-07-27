// Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(num1, num2, operator) {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    if (num2 === 0) {
      return "Cannot divide by zero!";
    }
    return num1 / num2;
  } else {
    return "Invalid operator";
  }
}

const result = calculator(10, 4, '+');
console.log("Result:", result);

