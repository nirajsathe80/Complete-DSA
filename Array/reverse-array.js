// Reverse the given array

const array = [1, 2, 3, 4, 5, 6];

//Using a new array

// const newArray = [];

// for (let i = array.length - 1; i >= 0; i--) {
//   newArray.push(array[i]);
// }

// Using two pointer approch

// let start = 0;
// let end = array.length - 1;
// while (start <= end) {
//   const temp = array[start];
//   array[start] = array[end];
//   array[end] = temp;
//   start++;
//   end--;
// }

// Array reverse using recursion

function reverseArray(arr, start, end) {
  if (start === end || start > end) {
    return;
  }
  const temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;

  reverseArray(arr, start + 1, end - 1);
}
reverseArray(array, 0, array.length - 1);

console.log(array);
