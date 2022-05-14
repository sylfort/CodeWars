// Sum Mixed Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
  return x.map((e) => parseInt(e)).reduce((sum, cur) => sum + cur, 0);
}

// receive arr of strs and nums
// transform everything to nums
// return sum of values = num
//Example sumMix([9, 3, '7', '3']) //22

const binaryArrayToNumber = (array) => {
  //   convert each digit x * 2^n
  //   where n == array.length - i
  let sum;
  for (let i = 0; i <= array.length; i++) {
    if (array[i] == 1) {
      sum += Number(array[i]) * 2 ** (array.length - (i + 1));
      console.log(sum);
    }
  }
  return sum;
};

binaryArrayToNumber([0, 0, 0, 1]);
