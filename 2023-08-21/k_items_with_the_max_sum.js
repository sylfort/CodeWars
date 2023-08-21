// 2600. K Items With the Maximum Sum

/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
  let sum = 0;
  while (k > 0) {
    if (numOnes > 0) {
      numOnes--;
      sum++;
      k--;
    } else if (numZeros > 0) {
      numZeros--;
      k--;
    } else {
      numNegOnes--;
      sum--;
      k--;
    }
  }
  return sum;
};
