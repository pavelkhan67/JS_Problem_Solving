// Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number

function secondSmallest(arr) {
  if (arr.length < 2) {
    return null; // Return null if the array has fewer than two elements
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (const num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  return secondSmallest;
}

const numbers = [5, 8, 4, 7, 2, 9];
const result = secondSmallest(numbers);
console.log(`Second Smallest Number: ${result}`);
