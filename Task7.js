// Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(romanNumeral) {
    const romanToIntMap = {
      'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    };
  
    let result = 0;
    let prevValue = 0;
  
    for (const currentChar of romanNumeral.split('').reverse()) {
      const currentValue = romanToIntMap[currentChar];
      result += (currentValue < prevValue) ? -currentValue : currentValue;
      prevValue = currentValue;
    }
  
    return result;
  }
  
  const romanNumeral = "XIX";
  const integerValue = romanToInteger(romanNumeral);
  console.log(`Integer value: ${integerValue}`);
  