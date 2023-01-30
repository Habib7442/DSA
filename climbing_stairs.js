// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

const climbingStairs = (n) => {
  if (n < 0) {
    return 0;
  }
  if (n == 0) {
    return 1;
  }

  return climbingStairs(n - 1) + climbingStairs(n - 2);
};

console.log(climbingStairs(2));
