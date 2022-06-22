import isThreeDivisors from './threeDivisors';

test('to return exatcly 3 divisorso of given numer', () => {
  expect(isThreeDivisors(4)).toBe(true);
  // Divisiors: 1, 2, 4
});

test('should return false if there isnt 3 divisors', () => {
  expect(isThreeDivisors(5)).toBeFalsy();
  // Divisiors: 1, 5
});

test('sample', () => {
  expect(isThreeDivisors(9)).toBeTruthy();
  // Divisiors: 1, 3, 9
});

test('passed when value is a number', () => {
  expect(isThreeDivisors(49)).not.toBeNaN();
  // Divisiors: 1, 7, 49
});

test('should return falsy if argument contains string', () => {
  expect(isThreeDivisors('a')).toBeFalsy();
});
