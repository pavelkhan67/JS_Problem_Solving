// Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function stringReverse(input) {
  let reversedString = '';
  for (let i = input.length - 1; i >= 0; i--) {
    reversedString += input.charAt(i);
  }
  return reversedString;
}

const input = "hello world";
const reversed = stringReverse(input);
console.log(`Output is: ${reversed}`);
