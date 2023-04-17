function letterCombinations(digits) {
  // Define the mapping of digit to letters
  const mapping = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  };
  // Initialize the result array with an empty string
  let result = [""];
  // Loop through each digit in the input string
  for (let digit of digits) {
    // Get the letters corresponding to the digit from the mapping
    const letters = mapping[digit];
    // Create a new temporary array to store the combinations
    let temp = [];
    // Loop through each combination in the result array
    for (let combo of result) {
      // Loop through each letter for the current digit
      for (let letter of letters) {
        // Add the current letter to the current combination
        temp.push(combo + letter);
      }
    }
    // Set the result array to the temporary array
    result = temp;
  }
  // Return the result array
  return result;
}


module.exports = letterCombinations;
