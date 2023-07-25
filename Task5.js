// Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return "Cannot divide by zero!";
        }
        return num1 / num2;
      default:
        return "Invalid operator";
    }
  }
  const result = calculator(10, 4, '+');
  console.log("Result:", result);
  