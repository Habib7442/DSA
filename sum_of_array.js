let arr = [2, 5, 7, 9, 11];

const sum = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sum(arr.slice(1));
};

console.log(sum(arr));
