// Smallest value of an array
function min(arr, toReturn) {
  if (toReturn == "index") {
    const min = Math.min(...arr);
    return arr.indexOf(min);
  }

  return Math.min(...arr);
}
