// 7 kyu Finding length of the sequence

var lengthOfSequence = function (arr, n) {
  let first = -1;
  let second = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      if (first === -1) {
        first = i;
      } else if (second === -1) {
        second = i;
      } else {
        // More than two instances found
        return 0;
      }
    }
  }

  // Check if we found exactly two instances
  if (first !== -1 && second !== -1) {
    return second - first + 1;
  }

  // If we didn't find exactly two instances, return 0
  return 0;
};
