// Given an array arr[] of n integers, construct a Product Array prod[] (of the same size) such that prod[i] is equal to the product of all the elements of arr[] except arr[i].

// Input: arr[]  = {1, 2, 3, 4, 5}
// Output: prod[]  = {120, 60, 40, 30, 24 }
// 2 * 3 * 4 * 5  product of other array
// elements except 1 is 120
// 1 * 3 * 4 * 5  product of other array
// elements except 2 is 60
// 1 * 2 * 4 * 5  product of other array
// elements except 3 is 40
// 1 * 2 * 3 * 5  product of other array
// elements except 4 is 30
// 1 * 2 * 3 * 4  product of other array
// elements except 5 is 24

const arr = [1, 0];
const prod = new Array(arr.length).fill(1);

//Brute force approch
// time-complexity = O(n2)

// for (let i = 0; i < arr.length; i++) {
//   let sum = 1;
//   for (let j = 0; j < arr.length; j++) {
//     if (i !== j) {
//       sum *= arr[j];
//     }
//   }
//   prod[i] = sum;
// }

//Optimized solution but this fails in some case

// let arrayProduct = 1;

// for (let i = 0; i < arr.length; i++) {
//   arrayProduct *= arr[i];
// }

// for (let i = 0; i < arr.length; i++) {
//   const indexProduct = arrayProduct / arr[i];
//   prod[i] = indexProduct;
// }

// Optimized solution with left and right product

let leftProduct = 1;
let rightProduct = 1;
for (let i = 0; i < arr.length; i++) {
  prod[i] *= leftProduct;
  leftProduct *= arr[i];
}

for (let i = arr.length - 1; i >= 0; i--) {
  prod[i] *= rightProduct;
  rightProduct *= arr[i];
}

console.log(prod);
