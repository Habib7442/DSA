// Two Sum

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 10;

//Approach 1

const twoSum1 = (arr, target) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push([i, j]);
      }
    }
  }
  return result;
};
console.log(twoSum1(arr, target));

//Approach 2

const twoSum2 = (arr, target) => {
  const previousValues = {};
  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    const neededValue = target - currentValue;
    const index2 = previousValues[neededValue];
    if (index2 != null) {
      return [index2, i];
    } else {
      previousValues[currentValue] = i;
    }
  }
};
console.log(twoSum2(arr, target));
