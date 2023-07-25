// Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findTwoSumIndices(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let minIndexDiff = Number.MAX_VALUE;
    let resultIndices = null;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
  
      if (sum === target) {
        const indexDiff = Math.abs(right - left);
        if (indexDiff < minIndexDiff) {
          minIndexDiff = indexDiff;
          resultIndices = [left, right];
        }
        left++; // Move the left pointer to explore other pairs with the same sum
      } else if (sum < target) {
        left++; // Move the left pointer to increase the sum
      } else {
        right--; // Move the right pointer to decrease the sum
      }
    }
  
    return resultIndices; // If no such pair is found, return the indices with the lowest index difference
  }
  
  const sortedArray = [1, 3, 6, 8, 11, 13, 15];
  const target = 9;
  const indices = findTwoSumIndices(sortedArray, target);
  console.log(`Indices of two numbers: ${indices}`);
   
  