const moveZeros = (nums: any): any => {
  const zeros = nums.filter((num: number) => typeof num === 'number' && num === 0);
  const nonZeros = nums.filter((num: number) => typeof num === 'number' && num !== 0);
  return [...nonZeros, ...zeros];
};

export default moveZeros;
