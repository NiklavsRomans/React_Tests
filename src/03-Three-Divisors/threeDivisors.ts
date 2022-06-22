/* eslint-disable no-plusplus */
// Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.
// An integer m is a divisor of n if there exists an integer k such that n = k * m.

const isThreeDivisors = (n: number | any): boolean => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count === 3;
};

export default isThreeDivisors;
