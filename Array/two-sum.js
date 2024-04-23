// Find the Pair in array that matches with the target value

let nums = [2, 7, 11, 15];
let target = 9;

// brute force approch
// time complexity = O(n2)
// function twoSum(nums, target) {
//   const arrayLength = nums.length;
//   for (let i = 0; i < arrayLength; i++) {
//     for (let j = i + 1; j < arrayLength; j++) {
//       let sum = nums[i] + nums[j];
//       if (sum === target) return [i, j];
//     }
//   }
// }

// Better approch

let sumObject = {};
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let sumDifference = target - nums[i];
    if (sumObject.hasOwnProperty(sumDifference)) {
      const index = sumObject[sumDifference];
      return [index, i];
    }
    sumObject[nums[i]] = i;
  }
}

const twoSumPair = twoSum(nums, target);
console.log(twoSumPair);
