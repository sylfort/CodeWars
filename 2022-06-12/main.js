// Maximum Product
function adjacentElementsProduct(array) {
  return array.reduce((acc, cur, curIndex) => {
    return cur * array[curIndex + 1] > acc ? cur * array[curIndex + 1] : acc;
  }, -Infinity);
}
