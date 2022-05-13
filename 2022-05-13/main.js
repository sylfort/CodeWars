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
