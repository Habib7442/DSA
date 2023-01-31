let arr = [2, 12, 10];

//Approach 1: Using lopp

const isSorted1 = (arr) => {
  for (let i = 0; i < arr.length -1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};

//Approach 2: Using recursion

const isSorted2 = (arr, index = 0) => {
    if (index === arr.length - 1) {
        return true;
    }
    if (arr[index] > arr[index + 1]) {
        return false;
    }
    return isSorted2(arr, index + 1);
}

console.log(isSorted2(arr));
