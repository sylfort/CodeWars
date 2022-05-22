// Sort array by string length
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

// P: array of str
// Return an array containing the same strings, ordered from shortest to longest
// sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]) //["Telescopes", "Glasses", "Eyes", "Monocles"]
