// find the largest element in an array

let array = [23, 43, 54, 12, 34, 65, 98, 54];
let largestNumber = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > largestNumber) {
    largestNumber = array[i];
  }
}

console.log(largestNumber);
