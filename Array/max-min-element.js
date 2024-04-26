// Find the maximum and mininum element from a given array

const array = [32, 65, 87, 12, 43, 9, 56, 432, 18];

const findMinMax = (arr) => {
  // using inbuilt sort method
  //   arr.sort((a, b) => a - b);
  //   return [arr[0], arr[arr.length - 1]];

  // using variable
  let minElement = arr[0];
  let maxElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
    if (arr[i] < minElement) {
      minElement = arr[i];
    }
  }
  return [minElement, maxElement];
};

const ans = findMinMax(array);
console.log(ans);
