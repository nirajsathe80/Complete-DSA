// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

// rotate the array to left i.e [4,5,6,7,1,2,3]
// time complexity = O(n2)

// for (let i = 0; i < k; i++) {
//   let temp = nums[0];
//   for (let j = 0; j < nums.length; j++) {
//     if (j === nums.length - 1) {
//       nums[j] = temp;
//     } else {
//       nums[j] = nums[j + 1];
//     }
//   }
// }

// rotate the array to right i.e [5,6,7,1,2,3,4]

// for (let i = 0; i < k; i++) {
//   let temp = nums[nums.length - 1];
//   for (let j = nums.length - 1; j >= 0; j--) {
//     if (j === 0) {
//       nums[j] = temp;
//     } else {
//       nums[j] = nums[j - 1];
//     }
//   }
// }

// rotate array to right the optimized way
// aaproch : 1. rotate first k element of an array
//   2. rotate last n-k elements of an array
//   3. rotate the entire array

// not a better approch
let i = 0;
let j = k - 1;
while (i <= j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
  i++;
  j--;
}

let m = k;
let n = nums.length - 1;
while (m <= n) {
  let temp = nums[m];
  nums[m] = nums[n];
  nums[n] = temp;
  m++;
  n--;
}

let z = 0;
let y = nums.length - 1;
while (z <= y) {
  let temp = nums[z];
  nums[z] = nums[y];
  nums[y] = temp;
  z++;
  y--;
}

// best approch

function reverse(array, start, end) {
  while (start <= end) {
    [array[start], array[end]] = [array[end], array[start]];
    start++;
    end--;
  }
}

function rotate(nums, l) {
  const length = nums.length - 1;
  let k = l % length;
  reverse(nums, 0, k - 1);
  reverse(nums, k, length);
  reverse(nums, 0, length);
}
rotate(nums, k);
console.log(nums);
