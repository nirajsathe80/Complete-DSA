//Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.

// Input:
// N = 5
// Arr[] = {1,2,3,-2,5}
// Output:
// 9
// Explanation:
// Max subarray sum is 9
// of elements (1, 2, 3, -2, 5) which
// is a contiguous subarray.

const arr = [5, 4, -1, 7, 8];

// Brute Force Approch

// let largestSubArraySum = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   let sum = arr[i];
//   for (let j = i + 1; j < arr.length; j++) {
//     sum += arr[j];
//     if (sum > largestSubArraySum) {
//       largestSubArraySum = sum;
//     }
//   }
// }

//Optimized Approch (Kadane's algorithm)

let sum = 0;
let maximumSum = arr[0];

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  maximumSum = Math.max(sum, maximumSum);
  if (sum < 0) {
    sum = 0;
  }
}

console.log(maximumSum);
