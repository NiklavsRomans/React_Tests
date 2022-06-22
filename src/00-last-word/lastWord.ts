// Given a string s consisting of words and spaces, return the length of the last word in the string.

const longestWord = (s:string) => {
  const splitted = s.trim().split(/\s+/);
  const lastIndex = splitted[splitted.length - 1];
  return lastIndex.length;
};

export default longestWord;
