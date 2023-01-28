//Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.

function findMissingElement(N, A) {
  var totalSum = (N * (N + 1)) / 2;
  var currentSum = A.reduce((a, b) => a + b, 0);
  return totalSum - currentSum;
}
console.log(findMissingElement(5, [1, 2, 3, 5]));
