// Sum of Minimums!
function sumOfMinimums(arr) {
  let min = [];
  //   sort each sub arr
  for (let i = 0; i < arr.length; i++) {
    arr[i].sort((a, b) => a - b);
    min.push(arr[i][0]);
  }
  return min.reduce((a, b) => a + b);
}
