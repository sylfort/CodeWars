// Counting Array Elements
function count(array) {
  let uniqueHash = {};

  for (let i = 0; i < array.length; i++) {
    if (uniqueHash[array[i]]) {
      uniqueHash[array[i]]++;
    } else {
      uniqueHash[array[i]] = 1;
    }
  }

  return uniqueHash;
}
