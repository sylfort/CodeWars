// return the two oldest/oldest ages within the array of ages passed in.
// Two Oldest Ages
function twoOldestAges(ages) {
  let sorted = ages.sort((a, b) => a - b);
  let arr = [];
  arr.push(sorted[sorted.length - 2], sorted[sorted.length - 1]);
  return arr;
}
