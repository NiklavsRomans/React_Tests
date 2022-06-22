import countOdds from './countOdds';

test('should return correct count of odd numbers', () => {
  expect(countOdds(1, 10)).toBe(5);
});

test('should return falsy if there isnt any odd numbers', () => {
  expect(countOdds(4, 4)).toBeFalsy();
});

test('should not be undefinied if values are passed', () => {
  expect(countOdds(2, 8)).toBeDefined();
});

test('should return falsy with passed negative numbers', () => {
  expect(countOdds(-1, -10)).toBeFalsy();
});
