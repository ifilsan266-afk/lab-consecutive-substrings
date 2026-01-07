function consecutiveSubstrings(string) {  // <-- CORRECT NAME
  // Array to store all substrings
  let substrings = [];
  
  // Loop through each starting position
  for (let i = 0; i < string.length; i++) {
      // Loop through each ending position (must be after start)
      for (let j = i + 1; j <= string.length; j++) {
          // Get the substring from i to j and add to array
          substrings.push(string.slice(i, j));
      }
  }
  
  return substrings;
}

if (require.main === module) {
  // Tests
  console.log("Testing with 'abc':");
  let result1 = consecutiveSubstrings('abc');
  console.log(result1); // ['a', 'ab', 'abc', 'b', 'bc', 'c']

  console.log("\nTesting with 'a':");
  let result2 = consecutiveSubstrings('a');
  console.log(result2); // ['a']

  console.log("\nTesting with empty string '':");
  let result3 = consecutiveSubstrings('');
  console.log(result3); // []

  console.log("\nTesting with 'phone':");
  let result4 = consecutiveSubstrings('phone');
  console.log("Number of substrings:", result4.length);
  console.log("First 5 substrings:", result4.slice(0, 5));

  console.log("\nTesting with 'ab':");
  let result5 = consecutiveSubstrings('ab');
  console.log(result5); // ['a', 'ab', 'b']
}

module.exports = consecutiveSubstrings;