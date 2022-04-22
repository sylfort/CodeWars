function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) {
    return [];
  } else {
    let first = input.filter((n) => Math.sign(n) > 0).length;
    let negative = input.filter((n) => Math.sign(n) < 0);
    let second = negative.reduce((sum, current) => sum + current);
    let arr = [];
    arr.push(first, second);
    return arr;
  }
}

function positiveSum(arr) {
  let sum = 0;
  arr.forEach((e) => {
    if (e > 0) {
      sum += e;
    }
  });
  return sum;
}
