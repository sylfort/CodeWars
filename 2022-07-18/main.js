// Find The Duplicated Number in a Consecutive Unsorted List
function findDup(arr) {
  const arrSet = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (arrSet.has(arr[i])) {
      return arr[i];
    } else {
      arrSet.add(arr[i]);
    }
  }
}
