// Array element parity
function solve(arr) {
  let arrSet = [...new Set(arr)];
  return arrSet.reduce((a, b) => a + b);
}
