// Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function randomPassword(length) {
    const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()-_+=<>?/[]{}";
    const allChars = upperLetters + lowerLetters + numbers + specialChars;
  
    const getRandomChar = (str) => str[Math.floor(Math.random() * str.length)];
  
    let password = getRandomChar(upperLetters) + getRandomChar(lowerLetters) + getRandomChar(numbers) + getRandomChar(specialChars);
  
    for (let i = password.length; i < length; i++) {
      password += getRandomChar(allChars);
    }
  
    password = password.split('').sort(() => Math.random() - 0.5).join('');
  
    return password;
  }
  
  const password = randomPassword(12);
  console.log("Random Password:", password);
  
  
  