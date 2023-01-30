// Fibonacci series = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..]

// Approach 1 - Recursive

const fibonacci1 = (n) => {
  if (n <= 1) {
    return n;
  }

  let ans = fibonacci(n - 1) + fibonacci(n - 2);
  return ans;
};

console.log(fibonacci(4));

// Approach 2 - Iterative

const fibonacci2 = (n) => {
  if (n <= 1) return n;
  let prev1 = 0;
  let prev2 = 1;
  let current;

  for (i = 2; i <= n; i++) {
    current = prev1 + prev2;
    prev1 = prev2;
    prev2 = current;
  }
  return current;
};

console.log(fibonacci(4));
