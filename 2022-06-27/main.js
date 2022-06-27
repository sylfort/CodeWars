// Maximum Triplet Sum (Array Series #7)
function maxTriSum(numbers) {
  const singleNums = [...new Set(numbers)];
  singleNums.sort((a, b) => a - b);
  return singleNums.slice(-3).reduce((acc, cur) => acc + cur);
}
