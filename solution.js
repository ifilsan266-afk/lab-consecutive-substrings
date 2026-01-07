function consecutiveSubstrings(string) {
  const result = [];
  
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      result.push(string.slice(i, j));
    }
  }
  
  return result;
}

if (require.main === module) {
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));
  console.log("");
  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;
