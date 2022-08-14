// Find the unique number
function findUniq(arr) {
  let unique;
  if (arr[0] == arr[1]) {
    unique = arr[0];
  } else if (arr[2] == arr[1]) {
    unique = arr[1];
  } else {
    return arr[1];
  }
  for (let i = 0; i < arr.length; i++) {
    if (unique !== arr[i]) {
      return arr[i];
    }
  }
}
