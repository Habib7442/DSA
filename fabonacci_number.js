// Fibonacci series = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..]

const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  }

  let ans = fibonacci(n - 1) + fibonacci(n - 2);
  return ans;
};

console.log(fibonacci(4));
