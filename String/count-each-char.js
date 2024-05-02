// In the given string count how many times each character appeared

const str = "Hare krishna hare krishana krishana krishana hare hare";

function countEachChar(str) {
  let object = {};
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i).toLowerCase();
    if (object.hasOwnProperty(char)) {
      object[char]++;
    } else if (char != " ") {
      object[char] = 1;
    }
  }
  return object;
}

const ans = countEachChar(str);
console.log(ans);
