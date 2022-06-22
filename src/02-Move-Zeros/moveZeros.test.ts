import moveZeros from './moveZeros';

test('should return nonZeros first', () => {
  const response = moveZeros([2, 0, 0, 1, 0, 3, 0]);
  expect(response).toEqual([2, 1, 3, 0, 0, 0, 0]);
});

test('should return truthy value if passed array of numbers', () => {
  expect(moveZeros([2, 0, 0, 1, 0, 3, 0])).toBeTruthy();
});

test('passed array should not change the length', () => {
  const nums1 = [1, 2, 3];
  const nums2 = [0, 0, 0];
  expect(moveZeros([...nums2, ...nums1])).toHaveLength(6);
});

test('Passed empty array should resolves as defined', () => {
  expect(moveZeros([])).toBeDefined();
});

test('array should contain only numbers', () => {
  const randomArray = [1, 2, 3, 0];
  expect(moveZeros([1, 2, 'a', 3, 0])).toEqual(expect.arrayContaining(randomArray));
});
