//Flatten and sort an array
function flattenAndSort(array) {
  let newArr = [].concat.apply([], array);
  newArr.sort((a, b) => a - b);
  return newArr;
}
