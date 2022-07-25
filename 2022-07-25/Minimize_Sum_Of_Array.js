// Minimize Sum Of Array
function minSum(arr) {
  let l = 0;
  let r = arr.length - 1;
  let sumArr = [];

  arr.sort((a, b) => a - b);

  while (l < r) {
    sumArr.push(arr[l] * arr[r]);
    l++;
    r--;
  }

  return sumArr.reduce((a, c) => a + c);
}
