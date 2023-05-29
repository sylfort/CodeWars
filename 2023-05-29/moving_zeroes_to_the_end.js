// 5 kyu Moving Zeros To The End

function moveZeros(arr) {
  let slowPointer = 0; // points to the next zero to be replaced

  // fastPointer is to find the next non-zero element
  for (let fastPointer = 0; fastPointer < arr.length; fastPointer++) {
    // if current element is not 0, then we need to
    // append it just in front of last non-0 element
    // we found till now
    if (arr[fastPointer] !== 0) {
      let temp = arr[slowPointer];
      arr[slowPointer] = arr[fastPointer];
      arr[fastPointer] = temp;
      slowPointer++; // increment slow pointer
    }
  }

  return arr;
}
