// Merge two sorted arrays into one

function mergeArrays(arr1, arr2) {
  //   merge arrays
  const mergedArr = [...arr1, ...arr2];
  //   sort new arr
  mergedArr.sort((a, b) => a - b);
  //   remove duplicates
  return [...new Set(mergedArr)];
}

// P 2 arrays
// R 1 sorted without duplicates array
// E mergeArrays(([1,2,3,4], [5,6,7,8])) //[1,2,3,4,5,6,7,8]
