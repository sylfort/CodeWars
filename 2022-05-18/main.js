// Removing Elements
const removeEveryOther = (arr) =>
  arr.filter((element, index) => index % 2 === 0);

// Sort and Star
function twoSort(s) {
  //   sort abc
  sorted = s.sort();
  //   return first value with each letter separeted by ***
  return sorted[0].split("").join("***");
}
