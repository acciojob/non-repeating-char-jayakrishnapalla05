//your JS code here. If required.
function findFirstNonRepeatingChar() {
  var input = prompt("Enter a string:");

  // Create a frequency map to count the occurrences of each character
  var charMap = {};
  for (var i = 0; i < input.length; i++) {
    var char = input[i];
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
  }

  // Find the first non-repeating character
  for (var j = 0; j < input.length; j++) {
    var char = input[j];
    if (charMap[char] === 1) {
      alert("The first non-repeating character is: " + char);
      return;
    }
  }

  // If no non-repeating character is found
  alert("No non-repeating character found.");
}

findFirstNonRepeatingChar();