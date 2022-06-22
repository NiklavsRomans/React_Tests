import sortedSquares from './squareArray';

test('should return sorted and squared numbers', () => {
  const response = sortedSquares([-4, -1, 0, 3, 10]);
  expect(response).toEqual([0, 1, 9, 16, 100]);
});

test('should return truthy if passed an array of nums', () => {
  const response = sortedSquares([-5, -2, 0, 8, 10]);
  expect(response).toBeTruthy();
});

test('should return correct length of passed number array', () => {
  const response = sortedSquares([-5, -2, 0, 8, 10]);
  expect(response).toHaveLength(5);
});

test('should return falsy if passed an empty array', () => {
  const response = sortedSquares([]).length;
  expect(response).toBeFalsy();
});

test('result should contain rounded numbers', () => {
  const numberArray = [2.7, 4.4, 6.5];
  expect(sortedSquares(numberArray)).toEqual(expect.arrayContaining([4, 16, 36]));
});
