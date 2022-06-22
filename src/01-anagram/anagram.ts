// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

const isAnagram = (s: string, t: string) => {
  const cleanS = s
    .replace(/[^\w\s]/gi, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  const cleanT = t
    .replace(/[^\w\s]/gi, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  return cleanS === cleanT;
};

export default isAnagram;
