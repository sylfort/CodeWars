// Sum Numbers
function sum(numbers) {
  return numbers.length !== 0 ? numbers.reduce((acc, cur) => acc + cur, 0) : 0;
}
