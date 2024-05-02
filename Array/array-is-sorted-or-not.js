//  Check whether given array is sorted or not if the array is sorted then return true else return false

const array = [23, 45, 65, 76, 86, 98];

function isArraySorted(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

const ans = isArraySorted(array);
console.log(ans);
