import isAnagram from './anagram';

test('should return true if passed string is an anagram', () => {
  expect(isAnagram('abc', 'cba')).toBeTruthy();
});

test('should return false if passed string is not an anagram', () => {
  expect(isAnagram('hello', 'niklavs')).toBeFalsy();
});

test('check if passes with valid arguments', () => {
  expect(isAnagram('alus', 'sula')).not.toBeUndefined();
});

test('should return true if passed string with uppercase and lowercase', () => {
  expect(isAnagram('AluS', 'SulA')).toBeTruthy();
});

test('should return true if passed string with special characters', () => {
  expect(isAnagram('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
});
