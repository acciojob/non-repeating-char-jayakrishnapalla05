//your JS code here. If required.
function findFirstNonRepeatedChar() {
  const input = prompt("Enter a string:"); // Take input from the user

  // Create a frequency map to count the occurrences of each character
  const frequencyMap = {};

  // Iterate through the characters of the string and update the frequency map
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (frequencyMap.hasOwnProperty(char)) {
      frequencyMap[char]++;
    } else {
      frequencyMap[char] = 1;
    }
  }

  // Find the first non-repeated character in the string
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (frequencyMap[char] === 1) {
      return char;
    }
  }

  return null; // If no non-repeated character found, return null
}

const firstNonRepeatedChar = findFirstNonRepeatedChar();
alert( firstNonRepeatedChar);