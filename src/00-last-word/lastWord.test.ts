import longestWord from './lastWord';

test('should not return the first word count', () => {
  expect(longestWord('mama mia')).not.toBe(4);
});

test('should return count of the last word', () => {
  expect(longestWord('Hello World')).toBe(5);
});

test('should return falsy if there is an empty string', () => {
  expect(longestWord('')).toBeFalsy();
});

test('should return count of last word with additional whitespaces', () => {
  expect(longestWord('niklavs       romans    codelex')).toEqual(7);
});

test('should return truthy if there is passed string', () => {
  expect(longestWord('hello codelex')).toBeTruthy();
});
