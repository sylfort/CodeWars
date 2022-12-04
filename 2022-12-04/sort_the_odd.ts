// 6 kyu Sort the odd

function sortArray(array: number[]): number[] {
  let oddsMap = {};
  let evensMap = {};

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddsMap[i] = array[i];
    } else {
      evensMap[i] = array[i];
    }
  }

  let oddsArrayIndexes: number[] = [];

  let j = 0;

  for (const key in oddsMap) {
    oddsArrayIndexes.push(oddsMap[key]);
  }

  console.log(oddsMap);
  console.log(oddsArrayIndexes);

  oddsArrayIndexes.sort((a, b) => a - b);

  for (const key in oddsMap) {
    oddsMap[key] = oddsArrayIndexes[j];
    j++;
  }

  let correctIndexesMap = {
    ...oddsMap,
    ...evensMap,
  };

  let correctIndexesArray: number[] = [];

  let k = 0;

  for (let key in correctIndexesMap) {
    correctIndexesArray[k] = +correctIndexesMap[key];
    k++;
  }

  return correctIndexesArray;
}

// separate in two hash maps: odds and evens, saving the values and original indexes
// sort the odds in ascending order
// join both hash maps using the indexes to push to just one array

// console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
// console.log(sortArray([2, 3, 4, 1, 5]), [2, 1, 4, 3, 5])
