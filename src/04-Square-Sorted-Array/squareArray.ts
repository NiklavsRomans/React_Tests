/* eslint-disable no-plusplus */
// Given an integer array nums sorted in non-decreasing order,
// Return an array of the squares of each number sorted in non-decreasing order.

const sortedSquares = (nums: number[]): number[] => {
  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(Math.floor(nums[i]) * Math.floor(nums[i]));
  }
  return result.sort((a, b) => a - b);
};

export default sortedSquares;
