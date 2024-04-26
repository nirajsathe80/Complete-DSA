// Finding the kth min element from the array

const arr = [23, 13, 43, 24, 56, 78, 96, 43, 21];

function findKthMinElement(arr, k) {
  arr.sort((a, b) => a - b);
  return arr[k - 1];
}

const ans = findKthMinElement(arr, 3);
console.log(ans);
