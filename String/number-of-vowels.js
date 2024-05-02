// Find number of vowels in the given string

const str = "Hey there, I am unavailable right now";

function countTheNumberOfVowels(str) {
  let vowelsCount = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (vowels.includes(char.toLowerCase())) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

const count = countTheNumberOfVowels(str);
console.log(count);
