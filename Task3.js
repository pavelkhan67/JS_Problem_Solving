// Write a JavaScript program to find the most frequent element in an array and return it.

function frequentElement(arr) {
  if (arr.length === 0) {
    return null; // Return null for an empty array
  }

  const frequencyMap = {};
  let mostFrequentElement = arr[0];
  let maxFrequency = 1;

  for (const element of arr) {
    if (frequencyMap[element]) {
      frequencyMap[element]++;
    } else {
      frequencyMap[element] = 1;
    }

    if (frequencyMap[element] > maxFrequency) {
      mostFrequentElement = element;
      maxFrequency = frequencyMap[element];
    }
  }

  return mostFrequentElement;
  // return {mostFrequentElement , maxFrequency};
}

const array = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result = frequentElement(array);
console.log(`Most frequent element: ${result}`);
//   console.log(`Most frequent element is: ${result.mostFrequentElement} and it repeats ${result.maxFrequency} times.`);
