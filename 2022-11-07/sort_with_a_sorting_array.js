// Sort with a sorting array

function sort(initialArray, sortingArray) {
  let finalArray = [];
  for (let i = 0; i < sortingArray.length; i++) {
    finalArray[sortingArray[i]] = initialArray[i];
  }

  return finalArray;
}

// console.log(sort(['z', 'x', 'y'], [0, 2, 1]), ['z', 'y', 'x']);
// console.log(sort([1, 2, 3, 4, 5], [0, 2, 1, 4, 3]), [1, 3, 2, 5, 4]);
