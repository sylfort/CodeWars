// Product Of Maximums Of Array (Array Series #2)
function maxProduct(numbers, size) {
  numbers.sort((a, b) => a - b);
  let multiply = [];
  multiply.push(numbers.slice(-size));
  let spread = Array.prototype.concat.apply([], multiply);
  return spread.reduce((a, b) => a * b);
}
